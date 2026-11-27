import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { EnvironmentalTelemetry } from '../types/telemetry';
import { CleanAirWindow, VulnerabilityProfile, ActivityType, CommuteMode, IndoorSourceType } from '../types/engines';
import { MASK_EFFICIENCIES } from '../engines/inhaledDose';
import { UserPreferences, DEFAULT_USER_PREFERENCES } from '../types/user';
import { getCityTelemetry, resolveLocationById } from '../services/telemetryService';
import { calculateCleanAirWindow } from '../engines/windowSafe';
import { FALLBACK_TELEMETRY } from '../data/staticFallback';
import { INDIA_LOCATIONS, IndiaLocation } from '../data/indiaLocations';

export type NavigationTab = 'landing' | 'overview' | 'diurnal' | 'commute' | 'indoor' | 'simulator' | 'assistant' | 'exposure' | 'advisor';

export interface ActiveScenarioState {
  commute: {
    origin: string;
    destination: string;
    distanceKm: number;
    mode: CommuteMode;
  };
  indoor: {
    roomType: string;
    roomAreaM2: number;
    ceilingHeightM: number;
    ventilationAch: number;
    usingPurifier: boolean;
    purifierCadr: number;
    indoorSource: IndoorSourceType;
  };
  exposure: {
    activity: ActivityType;
    durationMinutes: number;
    maskType: keyof typeof MASK_EFFICIENCIES;
    pm25Source: 'city' | 'benchmark' | 'severe';
  };
}

const DEFAULT_SCENARIO_STATE: ActiveScenarioState = {
  commute: {
    origin: 'Home Locality',
    destination: 'Work Corridor',
    distanceKm: 16.8,
    mode: 'ac_cab',
  },
  indoor: {
    roomType: 'Bedroom',
    roomAreaM2: 12,
    ceilingHeightM: 2.8,
    ventilationAch: 0.5,
    usingPurifier: true,
    purifierCadr: 300,
    indoorSource: 'none',
  },
  exposure: {
    activity: 'light_walking',
    durationMinutes: 60,
    maskType: 'n95',
    pm25Source: 'city',
  },
};

interface AppContextType {
  selectedCityId: string;
  selectedLocation: IndiaLocation;
  telemetry: EnvironmentalTelemetry;
  isLoadingTelemetry: boolean;
  telemetryError: string | null;
  cleanAirWindow: CleanAirWindow;
  userPreferences: UserPreferences;
  activeTab: NavigationTab;
  isTransparencyOpen: boolean;
  sessionApiKey: string;
  setSessionApiKey: (key: string) => void;
  isDemoMode: boolean;
  toggleDemoMode: () => void;
  selectCity: (cityId: string) => void;
  selectLocation: (location: IndiaLocation) => void;
  detectCurrentLocation: () => Promise<{ ok: boolean; error?: string }>;
  updateProfile: (profile: VulnerabilityProfile) => void;
  updatePreferences: (prefs: Partial<UserPreferences>) => void;
  setActiveTab: (tab: NavigationTab) => void;
  setIsTransparencyOpen: (open: boolean) => void;
  refreshData: () => Promise<void>;
  scenarioState: ActiveScenarioState;
  updateScenario: <K extends keyof ActiveScenarioState>(section: K, patch: Partial<ActiveScenarioState[K]>) => void;
  pendingAiPrompt: string | null;
  askAiWithPrompt: (prompt: string) => void;
  clearPendingAiPrompt: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [customLocation, setCustomLocation] = useState<IndiaLocation | null>(() => {
    try {
      const saved = localStorage.getItem('breathewise_custom_location');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [selectedCityId, setSelectedCityId] = useState<string>(() => {
    try {
      const qCity = new URLSearchParams(window.location.search).get('city');
      if (qCity) return qCity;
    } catch {}
    return localStorage.getItem('breathewise_city') || 'bengaluru-indiranagar';
  });

  const selectedLocation = resolveLocationById(selectedCityId, customLocation);

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

  const [scenarioState, setScenarioState] = useState<ActiveScenarioState>(DEFAULT_SCENARIO_STATE);
  const [pendingAiPrompt, setPendingAiPrompt] = useState<string | null>(null);

  const clearPendingAiPrompt = useCallback(() => {
    setPendingAiPrompt(null);
  }, []);

  const updateScenario = useCallback(<K extends keyof ActiveScenarioState>(section: K, patch: Partial<ActiveScenarioState[K]>) => {
    setScenarioState((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...patch,
      },
    }));
  }, []);

  const [sessionApiKey, setSessionApiKeyState] = useState<string>(() => {
    try {
      return sessionStorage.getItem('breathewise_session_gemini_key') || '';
    } catch {
      return '';
    }
  });

  const [telemetry, setTelemetry] = useState<EnvironmentalTelemetry>(() => {
    return FALLBACK_TELEMETRY[selectedCityId] || FALLBACK_TELEMETRY['bengaluru-indiranagar'];
  });

  const [isLoadingTelemetry, setIsLoadingTelemetry] = useState<boolean>(true);
  const [telemetryError, setTelemetryError] = useState<string | null>(null);

  const [cleanAirWindow, setCleanAirWindow] = useState<CleanAirWindow>(() => {
    return calculateCleanAirWindow(telemetry.hourly);
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
  };

  const VALID_TABS: NavigationTab[] = ['landing', 'overview', 'commute', 'indoor', 'simulator', 'assistant', 'exposure', 'advisor'];

  const [activeTab, setActiveTabState] = useState<NavigationTab>(() => {
    try {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'diurnal') return 'overview';
      if (VALID_TABS.includes(hash as NavigationTab)) {
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
        } else if (VALID_TABS.includes(hash as NavigationTab)) {
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

  const latestRequestIdRef = useRef<number>(0);
  const profileRef = useRef<VulnerabilityProfile>(userPreferences.vulnerabilityProfile);
  const sessionApiKeyRef = useRef<string>(sessionApiKey);
  profileRef.current = userPreferences.vulnerabilityProfile;
  sessionApiKeyRef.current = sessionApiKey;

  const loadTelemetry = useCallback(async (loc: IndiaLocation) => {
    const requestId = ++latestRequestIdRef.current;
    setIsLoadingTelemetry(true);
    setTelemetryError(null);
    try {
      let data: EnvironmentalTelemetry;
      if (isDemoMode && FALLBACK_TELEMETRY[loc.id]) {
        data = FALLBACK_TELEMETRY[loc.id];
      } else {
        data = await getCityTelemetry(loc);
      }
      if (requestId !== latestRequestIdRef.current) return;

      setTelemetry(data);
      const window = calculateCleanAirWindow(data.hourly);
      setCleanAirWindow(window);
    } catch (err: unknown) {
      if (requestId !== latestRequestIdRef.current) return;
      console.warn('Failed to load telemetry:', err);
      const message = err instanceof Error ? err.message : 'Could not load live telemetry';
      setTelemetryError(message);

      if (FALLBACK_TELEMETRY[loc.id]) {
        const fallback = FALLBACK_TELEMETRY[loc.id];
        setTelemetry(fallback);
        setCleanAirWindow(calculateCleanAirWindow(fallback.hourly));
      } else {
        // Explicitly clear stale values from previous city and mark telemetry Unavailable
        setTelemetry({
          city: loc.name,
          state: loc.state,
          country: 'India',
          current: {
            pm25: NaN,
            pm10: null,
            no2: null,
            so2: null,
            co: null,
            o3: null,
            aqi: NaN,
            aqiCategory: 'Moderate',
            primaryPollutant: 'Unavailable',
            aqiStandard: 'Indian CPCB NAQI',
          },
          weather: {
            temperature: NaN,
            humidity: NaN,
            windSpeed: NaN,
            windDirection: 0,
            surfacePressure: NaN,
            weatherDescription: 'Telemetry unavailable offline',
            isThermalInversionLikely: false,
          },
          hourly: [],
          metadata: {
            provider: 'Open-Meteo (Copernicus Atmosphere Grid)',
            stationName: `${loc.name}, ${loc.state}`,
            latitude: loc.lat,
            longitude: loc.lon,
            fetchTimestamp: 'Telemetry Unavailable',
            isLive: false,
            isSimulated: false,
            isUnavailable: true,
            attribution: 'Live telemetry unavailable; no fabricated values shown.',
          },
        });
      }
    } finally {
      if (requestId === latestRequestIdRef.current) {
        setIsLoadingTelemetry(false);
      }
    }
  }, [isDemoMode]);

  useEffect(() => {
    loadTelemetry(selectedLocation);
  }, [selectedLocation.id, loadTelemetry]);

  const selectCity = (cityId: string) => {
    setSelectedCityId(cityId);
    try {
      localStorage.setItem('breathewise_city', cityId);
    } catch {}
  };

  const selectLocation = (location: IndiaLocation) => {
    setCustomLocation(location);
    setSelectedCityId(location.id);
    try {
      localStorage.setItem('breathewise_custom_location', JSON.stringify(location));
      localStorage.setItem('breathewise_city', location.id);
    } catch {}
  };

  const detectCurrentLocation = async (): Promise<{ ok: boolean; error?: string }> => {
    if (!navigator.geolocation) {
      return { ok: false, error: 'Geolocation is not supported by your browser.' };
    }
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = Number(pos.coords.latitude.toFixed(4));
          const lon = Number(pos.coords.longitude.toFixed(4));
          let nearest: IndiaLocation | null = null;
          let minDist = Infinity;
          for (const loc of INDIA_LOCATIONS) {
            const d = Math.hypot(loc.lat - lat, loc.lon - lon);
            if (d < minDist) {
              minDist = d;
              nearest = loc;
            }
          }
          if (nearest && minDist < 0.3) {
            selectLocation(nearest);
          } else {
            selectLocation({
              id: `gps-${lat}-${lon}`,
              name: `Current Location (${lat.toFixed(2)}°N, ${lon.toFixed(2)}°E)`,
              district: nearest ? `Near ${nearest.name}` : 'GPS Coordinates',
              state: nearest ? nearest.state : 'India',
              lat,
              lon,
              isCalibratedPreset: false,
            });
          }
          resolve({ ok: true });
        },
        (err) => {
          resolve({ ok: false, error: err.message || 'Location permission denied.' });
        },
        { enableHighAccuracy: false, timeout: 8000 }
      );
    });
  };

  const updateProfile = (profile: VulnerabilityProfile) => {
    const updated = { ...userPreferences, vulnerabilityProfile: profile };
    setUserPreferences(updated);
    try {
      localStorage.setItem('breathewise_prefs', JSON.stringify(updated));
    } catch {}
  };

  const updatePreferences = (prefs: Partial<UserPreferences>) => {
    const updated = { ...userPreferences, ...prefs };
    setUserPreferences(updated);
    try {
      localStorage.setItem('breathewise_prefs', JSON.stringify(updated));
    } catch {}
  };

  const refreshData = async () => {
    await loadTelemetry(selectedLocation);
  };

  return (
    <AppContext.Provider
      value={{
        selectedCityId,
        selectedLocation,
        telemetry,
        isLoadingTelemetry,
        telemetryError,
        cleanAirWindow,
        userPreferences,
        activeTab,
        isTransparencyOpen,
        sessionApiKey,
        setSessionApiKey,
        isDemoMode,
        toggleDemoMode,
        selectCity,
        selectLocation,
        detectCurrentLocation,
        updateProfile,
        updatePreferences,
        setActiveTab,
        setIsTransparencyOpen,
        refreshData,
        scenarioState,
        updateScenario,
        pendingAiPrompt,
        askAiWithPrompt: (prompt: string) => {
          setPendingAiPrompt(prompt);
          setActiveTab('advisor');
        },
        clearPendingAiPrompt,
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
