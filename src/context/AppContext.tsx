import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { EnvironmentalTelemetry } from '../types/telemetry';
import { CleanAirWindow, VulnerabilityProfile } from '../types/engines';
import { UserPreferences, DEFAULT_USER_PREFERENCES } from '../types/user';
import { GroundedAiLivingPlan } from '../types/ai';
import { getCityTelemetry } from '../services/telemetryService';
import { calculateCleanAirWindow } from '../engines/windowSafe';
import { fetchGeminiLivingPlan, generateDeterministicLivingPlan } from '../services/gemini';
import { FALLBACK_TELEMETRY } from '../data/staticFallback';

export type NavigationTab = 'landing' | 'overview' | 'diurnal' | 'commute' | 'indoor' | 'simulator' | 'assistant';

interface AppContextType {
  selectedCityId: string;
  telemetry: EnvironmentalTelemetry;
  isLoadingTelemetry: boolean;
  telemetryError: string | null;
  cleanAirWindow: CleanAirWindow;
  userPreferences: UserPreferences;
  livingPlan: GroundedAiLivingPlan | null;
  isLoadingPlan: boolean;
  activeTab: NavigationTab;
  isTransparencyOpen: boolean;
  sessionApiKey: string;
  setSessionApiKey: (key: string) => void;
  isDemoMode: boolean;
  toggleDemoMode: () => void;
  selectCity: (cityId: string) => void;
  updateProfile: (profile: VulnerabilityProfile) => void;
  updatePreferences: (prefs: Partial<UserPreferences>) => void;
  setActiveTab: (tab: NavigationTab) => void;
  setIsTransparencyOpen: (open: boolean) => void;
  refreshData: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedCityId, setSelectedCityId] = useState<string>(() => {
    try {
      const qCity = new URLSearchParams(window.location.search).get('city');
      if (qCity) return qCity;
    } catch {}
    return localStorage.getItem('breathewise_city') || 'delhi-anand-vihar';
  });

  const [userPreferences, setUserPreferences] = useState<UserPreferences>(() => {
    try {
      const qProfile = new URLSearchParams(window.location.search).get('profile');
      const saved = localStorage.getItem('breathewise_prefs');
      const base = saved ? JSON.parse(saved) : DEFAULT_USER_PREFERENCES;
      if (qProfile && ['pediatric', 'senior_respiratory', 'outdoor_athlete', 'normal_adult'].includes(qProfile)) {
        return { ...base, vulnerabilityProfile: qProfile as VulnerabilityProfile };
      }
      return base;
    } catch {
      return DEFAULT_USER_PREFERENCES;
    }
  });

  // Secure session-only storage for API key (wiped when browser tab closes, never in localStorage)
  const [sessionApiKey, setSessionApiKeyState] = useState<string>(() => {
    try {
      return sessionStorage.getItem('breathewise_session_gemini_key') || '';
    } catch {
      return '';
    }
  });

  const setSessionApiKey = (key: string) => {
    setSessionApiKeyState(key);
    try {
      if (key) {
        sessionStorage.setItem('breathewise_session_gemini_key', key);
      } else {
        sessionStorage.removeItem('breathewise_session_gemini_key');
      }
    } catch {}

    // Regenerate plan with new key
    setIsLoadingPlan(true);
    fetchGeminiLivingPlan(telemetry, cleanAirWindow, userPreferences.vulnerabilityProfile, key)
      .then((plan) => {
        setLivingPlan(plan);
        setIsLoadingPlan(false);
      })
      .catch(() => {
        setLivingPlan(generateDeterministicLivingPlan(telemetry, cleanAirWindow, userPreferences.vulnerabilityProfile));
        setIsLoadingPlan(false);
      });
  };

  const [telemetry, setTelemetry] = useState<EnvironmentalTelemetry>(() => {
    return FALLBACK_TELEMETRY[selectedCityId] || FALLBACK_TELEMETRY['delhi-anand-vihar'];
  });

  const [isLoadingTelemetry, setIsLoadingTelemetry] = useState<boolean>(true);
  const [telemetryError, setTelemetryError] = useState<string | null>(null);

  const [cleanAirWindow, setCleanAirWindow] = useState<CleanAirWindow>(() => {
    return calculateCleanAirWindow(telemetry.hourly);
  });

  const [livingPlan, setLivingPlan] = useState<GroundedAiLivingPlan | null>(() => {
    return generateDeterministicLivingPlan(telemetry, cleanAirWindow, userPreferences.vulnerabilityProfile);
  });

  const [isLoadingPlan, setIsLoadingPlan] = useState<boolean>(false);
  const [activeTab, setActiveTabState] = useState<NavigationTab>(() => {
    try {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'diurnal') return 'overview';
      if (['landing', 'overview', 'commute', 'indoor', 'simulator', 'assistant'].includes(hash)) {
        return hash as NavigationTab;
      }
    } catch {}
    return 'landing';
  });

  useEffect(() => {
    const handleHash = () => {
      try {
        const hash = window.location.hash.replace('#', '');
        if (hash === 'diurnal') {
          setActiveTabState('overview');
        } else if (['landing', 'overview', 'commute', 'indoor', 'simulator', 'assistant'].includes(hash)) {
          setActiveTabState(hash as NavigationTab);
        }
      } catch {}
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const setActiveTab = (tab: NavigationTab) => {
    setActiveTabState(tab);
    try {
      window.location.hash = tab === 'landing' ? '' : tab;
    } catch {}
  };

  const [isTransparencyOpen, setIsTransparencyOpen] = useState<boolean>(() => {
    try {
      return window.location.search.includes('transparency=true');
    } catch {}
    return false;
  });

  const [isDemoMode, setIsDemoMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem('breathewise_demo_mode') === 'true';
    } catch {
      return false;
    }
  });

  const toggleDemoMode = () => {
    setIsDemoMode((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('breathewise_demo_mode', String(next));
      } catch {}
      return next;
    });
  };

  // Load telemetry when city changes or demo mode toggles
  const loadTelemetry = useCallback(async (cityId: string) => {
    setIsLoadingTelemetry(true);
    setTelemetryError(null);
    try {
      let data: EnvironmentalTelemetry;
      if (isDemoMode) {
        data = FALLBACK_TELEMETRY[cityId] || FALLBACK_TELEMETRY['delhi-anand-vihar'];
      } else {
        data = await getCityTelemetry(cityId);
      }
      setTelemetry(data);
      const window = calculateCleanAirWindow(data.hourly);
      setCleanAirWindow(window);

      // Load AI living plan
      setIsLoadingPlan(true);
      const plan = await fetchGeminiLivingPlan(
        data,
        window,
        userPreferences.vulnerabilityProfile,
        sessionApiKey
      );
      setLivingPlan(plan);
      setIsLoadingPlan(false);
    } catch (err: any) {
      console.warn('Failed to load telemetry:', err);
      // Fallback safely to demo profile
      const fallback = FALLBACK_TELEMETRY[cityId] || FALLBACK_TELEMETRY['delhi-anand-vihar'];
      setTelemetry(fallback);
      setCleanAirWindow(calculateCleanAirWindow(fallback.hourly));
      setTelemetryError(err?.message || 'Could not load live telemetry');
    } finally {
      setIsLoadingTelemetry(false);
    }
  }, [userPreferences.vulnerabilityProfile, sessionApiKey, isDemoMode]);

  useEffect(() => {
    loadTelemetry(selectedCityId);
  }, [selectedCityId, loadTelemetry]);

  const selectCity = (cityId: string) => {
    setSelectedCityId(cityId);
    try {
      localStorage.setItem('breathewise_city', cityId);
    } catch {}
  };

  const updateProfile = (profile: VulnerabilityProfile) => {
    const updated = { ...userPreferences, vulnerabilityProfile: profile };
    setUserPreferences(updated);
    try {
      localStorage.setItem('breathewise_prefs', JSON.stringify(updated));
    } catch {}

    // Update plan with new profile
    setIsLoadingPlan(true);
    fetchGeminiLivingPlan(telemetry, cleanAirWindow, profile, sessionApiKey)
      .then((plan) => {
        setLivingPlan(plan);
        setIsLoadingPlan(false);
      })
      .catch(() => {
        setLivingPlan(generateDeterministicLivingPlan(telemetry, cleanAirWindow, profile));
        setIsLoadingPlan(false);
      });
  };

  const updatePreferences = (prefs: Partial<UserPreferences>) => {
    const updated = { ...userPreferences, ...prefs };
    setUserPreferences(updated);
    try {
      localStorage.setItem('breathewise_prefs', JSON.stringify(updated));
    } catch {}
  };

  const refreshData = async () => {
    await loadTelemetry(selectedCityId);
  };

  return (
    <AppContext.Provider
      value={{
        selectedCityId,
        telemetry,
        isLoadingTelemetry,
        telemetryError,
        cleanAirWindow,
        userPreferences,
        livingPlan,
        isLoadingPlan,
        activeTab,
        isTransparencyOpen,
        sessionApiKey,
        setSessionApiKey,
        isDemoMode,
        toggleDemoMode,
        selectCity,
        updateProfile,
        updatePreferences,
        setActiveTab,
        setIsTransparencyOpen,
        refreshData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
