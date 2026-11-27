import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import {
  INDIA_STATES_AND_UTS,
  IndiaLocation,
  getDistrictsForState,
  searchLocalIndiaLocations,
  searchRemoteIndiaLocations,
} from '../data/indiaLocations';
import { MapPin, Search, Navigation, ChevronDown, X, Loader2, Check } from 'lucide-react';

export const IndiaLocationPicker: React.FC = () => {
  const { selectedLocation, selectLocation, detectCurrentLocation } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedState, setSelectedState] = useState<string>('ALL');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('ALL');
  const [remoteResults, setRemoteResults] = useState<IndiaLocation[]>([]);
  const [isSearchingRemote, setIsSearchingRemote] = useState(false);
  const [isDetectingGps, setIsDetectingGps] = useState(false);
  const [gpsError, setGpsError] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    setSelectedDistrict('ALL');
  }, [selectedState]);

  useEffect(() => {
    const q = query.trim();
    if (q.length < 3) {
      setRemoteResults([]);
      return;
    }
    const timer = setTimeout(async () => {
      setIsSearchingRemote(true);
      const results = await searchRemoteIndiaLocations(q);
      setRemoteResults(results);
      setIsSearchingRemote(false);
    }, 350);
    return () => clearTimeout(timer);
  }, [query]);

  const availableDistricts = getDistrictsForState(selectedState);
  const localResults = searchLocalIndiaLocations(query, selectedState, selectedDistrict);
  const seenNames = new Set(localResults.map((l) => `${l.name.toLowerCase()}-${l.state.toLowerCase()}`));
  const mergedResults = [
    ...localResults,
    ...remoteResults.filter((r) => !seenNames.has(`${r.name.toLowerCase()}-${r.state.toLowerCase()}`)),
  ];

  const handleSelect = (loc: IndiaLocation) => {
    selectLocation(loc);
    setIsOpen(false);
    setGpsError(null);
  };

  const handleUseGps = async () => {
    setIsDetectingGps(true);
    setGpsError(null);
    const res = await detectCurrentLocation();
    setIsDetectingGps(false);
    if (res.ok) {
      setIsOpen(false);
    } else {
      setGpsError(res.error || 'Unable to detect location');
    }
  };

  const displayLabel = selectedLocation.name.includes('—')
    ? `${selectedLocation.name.split('—')[0].trim()}, ${selectedLocation.state}`
    : `${selectedLocation.name}, ${selectedLocation.state}`;

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Select Indian Location"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        className="inline-flex items-center space-x-1.5 sm:space-x-2 bg-white hover:bg-white text-[#0C2340] text-xs font-bold py-1.5 sm:py-2 px-3 sm:px-4 rounded-full border border-white shadow-[0_4px_14px_rgba(14,165,233,0.12)] transition-all cursor-pointer max-w-[165px] sm:max-w-[290px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5E9]"
      >
        <MapPin className="w-3.5 h-3.5 text-[#0EA5E9] shrink-0" />
        <span className="truncate">{displayLabel}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-[#5A7896] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-[310px] sm:w-[400px] rounded-2xl bg-white/98 backdrop-blur-xl border border-[#CBE0F2] shadow-elevated z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
          <div className="p-3.5 bg-gradient-to-b from-[#F0F7FD] to-white border-b border-[#E2EFFA] space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1E4976]">
                India-Wide Location Search
              </span>
              <div className="flex items-center space-x-1.5">
                <button
                  type="button"
                  onClick={handleUseGps}
                  disabled={isDetectingGps}
                  className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-[#E6F4FA] hover:bg-[#D4ECFA] text-[#0369A1] border border-[#BAE0F5] text-[10px] font-bold transition-colors cursor-pointer"
                >
                  {isDetectingGps ? <Loader2 className="w-3 h-3 animate-spin" /> : <Navigation className="w-3 h-3" />}
                  <span>My Location</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full hover:bg-[#E2EFFA] text-[#5A7896] cursor-pointer"
                  aria-label="Close location picker"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Direct Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-[#5A7896] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search any city, town, district, or state..."
                className="w-full pl-8 pr-8 py-1.5 text-xs bg-white border border-[#CBE0F2] rounded-xl text-[#0F2C4C] placeholder-[#7B97B2] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30"
              />
              {isSearchingRemote && (
                <Loader2 className="w-3.5 h-3.5 text-[#0EA5E9] animate-spin absolute right-2.5 top-1/2 -translate-y-1/2" />
              )}
            </div>

            {/* Hierarchical State/UT -> District Selectors */}
            <div className="grid grid-cols-2 gap-2">
              <div className="relative">
                <select
                  aria-label="Filter by State or Union Territory"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full bg-white border border-[#CBE0F2] rounded-xl py-1.5 pl-2.5 pr-6 text-[11px] font-semibold text-[#0F2C4C] focus:outline-none cursor-pointer truncate"
                >
                  <option value="ALL">All 36 States & UTs</option>
                  {INDIA_STATES_AND_UTS.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3 h-3 text-[#5A7896] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  aria-label="Filter by District"
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  className="w-full bg-white border border-[#CBE0F2] rounded-xl py-1.5 pl-2.5 pr-6 text-[11px] font-semibold text-[#0F2C4C] focus:outline-none cursor-pointer truncate"
                >
                  <option value="ALL">All Districts ({availableDistricts.length})</option>
                  {availableDistricts.map((dist) => (
                    <option key={dist} value={dist}>
                      {dist}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3 h-3 text-[#5A7896] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {gpsError && (
              <div className="text-[10px] text-rose-600 bg-rose-50 px-2 py-1 rounded-lg border border-rose-200">
                {gpsError}
              </div>
            )}
          </div>

          {/* City / Town Results List */}
          <div className="max-h-64 overflow-y-auto divide-y divide-[#F0F7FD]">
            {mergedResults.length === 0 ? (
              <div className="p-4 text-center text-xs text-[#5A7896]">
                No matching Indian locations found. Try typing a city, town, or district name.
              </div>
            ) : (
              mergedResults.slice(0, 50).map((loc) => {
                const isSelected = selectedLocation.id === loc.id;
                return (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => handleSelect(loc)}
                    className={`w-full text-left px-3.5 py-2 flex items-center justify-between hover:bg-[#F0F8FE] transition-colors cursor-pointer ${
                      isSelected ? 'bg-[#E6F4FA]' : ''
                    }`}
                  >
                    <div className="min-w-0 pr-2">
                      <div className="text-xs font-bold text-[#0F2C4C] truncate flex items-center space-x-1.5">
                        <span>{loc.name}</span>
                        {loc.isCalibratedPreset && (
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                            Station
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-[#5A7896] truncate">
                        {loc.district} • {loc.state} ({loc.lat.toFixed(2)}°N, {loc.lon.toFixed(2)}°E)
                      </div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-[#0EA5E9] shrink-0" />}
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};
