import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { EnvironmentalTelemetry } from '../types/telemetry';
import { CleanAirWindow, VulnerabilityProfile } from '../types/engines';
import { UserPreferences, DEFAULT_USER_PREFERENCES } from '../types/user';
import { GroundedAiLivingPlan } from '../types/ai';
import { getCityTelemetry } from '../services/telemetryService';
import { calculateCleanAirWindow } from '../engines/windowSafe';
import { fetchGeminiLivingPlan, generateDeterministicLivingPlan } from '../services/gemini';
import { FALLBACK_TELEMETRY } from '../data/staticFallback';

export type NavigationTab = 'overview' | 'diurnal' | 'commute' | 'indoor' | 'simulator' | 'assistant';

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
    return localStorage.getItem('breathewise_city') || 'delhi-anand-vihar';
  });

  const [userPreferences, setUserPreferences] = useState<UserPreferences>(() => {
    try {
      const saved = localStorage.getItem('breathewise_prefs');
      return saved ? JSON.parse(saved) : DEFAULT_USER_PREFERENCES;
    } catch {
      return DEFAULT_USER_PREFERENCES;
    }
  });

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
  const [activeTab, setActiveTab] = useState<NavigationTab>('overview');
  const [isTransparencyOpen, setIsTransparencyOpen] = useState<boolean>(false);

  // Load telemetry when city changes
  const loadTelemetry = useCallback(async (cityId: string) => {
    setIsLoadingTelemetry(true);
    setTelemetryError(null);
    try {
      const data = await getCityTelemetry(cityId);
      setTelemetry(data);
      const window = calculateCleanAirWindow(data.hourly);
      setCleanAirWindow(window);

      // Load AI living plan
      setIsLoadingPlan(true);
      const plan = await fetchGeminiLivingPlan(
        data,
        window,
        userPreferences.vulnerabilityProfile,
        userPreferences.customGeminiApiKey
      );
      setLivingPlan(plan);
      setIsLoadingPlan(false);
    } catch (err: any) {
      console.error('Failed to load telemetry:', err);
      setTelemetryError(err?.message || 'Could not load live telemetry');
    } finally {
      setIsLoadingTelemetry(false);
    }
  }, [userPreferences.vulnerabilityProfile, userPreferences.customGeminiApiKey]);

  useEffect(() => {
    loadTelemetry(selectedCityId);
  }, [selectedCityId, loadTelemetry]);

  const selectCity = (cityId: string) => {
    setSelectedCityId(cityId);
    localStorage.setItem('breathewise_city', cityId);
  };

  const updateProfile = (profile: VulnerabilityProfile) => {
    const updated = { ...userPreferences, vulnerabilityProfile: profile };
    setUserPreferences(updated);
    localStorage.setItem('breathewise_prefs', JSON.stringify(updated));

    // Update plan with new profile
    setIsLoadingPlan(true);
    fetchGeminiLivingPlan(telemetry, cleanAirWindow, profile, updated.customGeminiApiKey)
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
    localStorage.setItem('breathewise_prefs', JSON.stringify(updated));
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
