import React from 'react';
import { useApp } from '../context/AppContext';
import { getCpcbCategory, getCpcbSemanticColors } from '../engines/cpcbAqi';
import { MapPin, ArrowLeft, Wind, Thermometer, ShieldAlert } from 'lucide-react';

interface SubpageContextBarProps {
  title: string;
  subtitle: string;
}

export const SubpageContextBar: React.FC<SubpageContextBarProps> = ({ title, subtitle }) => {
  const { telemetry, setActiveTab, userPreferences } = useApp();
  const aqi = typeof telemetry.current.aqi === 'number' && Number.isFinite(telemetry.current.aqi) ? telemetry.current.aqi : 0;
  const aqiCat = telemetry.current.aqiCategory || getCpcbCategory(aqi);
  const colors = getCpcbSemanticColors(aqi, aqiCat);
  const pm25 = typeof telemetry.current.pm25 === 'number' ? telemetry.current.pm25 : '--';
  const dominant = telemetry.current.primaryPollutant || 'PM2.5';
  const temp = telemetry.weather?.temperature != null ? `${telemetry.weather.temperature}°C` : '--';
  const cityName = telemetry.city.includes('—') ? telemetry.city.split('—')[0].trim() : telemetry.city;

  const profileLabel = userPreferences.vulnerabilityProfile
    .split('_')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return (
    <div className="bg-white rounded-2xl border border-stone-200/80 p-3.5 sm:p-4 shadow-2xs space-y-2">
      {/* Top Row: Page Title + Science Provenance */}
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slatecharcoal-900 tracking-tight">
            {title}
          </h2>
          <p className="text-[11px] sm:text-xs text-slate-500">
            {subtitle}
          </p>
        </div>

        {/* CPCB Dominant Indicator */}
        <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1 rounded-full bg-stone-50 border border-stone-200 text-xs font-medium text-slate-600 shrink-0">
          <Wind className="w-3.5 h-3.5 text-emerald-700" />
          <span>Dominant: <strong className="text-slate-900 font-bold">{dominant}</strong></span>
        </div>
      </div>

      {/* Bottom Contextual Ribbon: Real-Time Environmental Anchors */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-stone-100 text-xs">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {/* City Badge */}
          <span className="inline-flex items-center space-x-1 font-bold text-slatecharcoal-900 bg-stone-100/70 px-2 py-0.5 rounded-md text-[11px]">
            <MapPin className="w-3 h-3 text-slate-500" />
            <span>{cityName}</span>
          </span>

          {/* AQI Badge */}
          <span className={`inline-flex items-center space-x-1 font-bold px-2 py-0.5 rounded-md text-[11px] shadow-2xs ${colors.badgeClass}`}>
            <span>AQI {aqi}</span>
            <span>•</span>
            <span>{aqiCat}</span>
          </span>

          {/* PM2.5 & Dominant */}
          <span className="text-[11px] text-slate-500 font-medium">
            PM2.5: <strong className="text-slate-800 font-mono">{pm25} µg/m³</strong> (Driver: {dominant})
          </span>

          {/* Weather Pill */}
          <span className="hidden md:inline-flex items-center space-x-1 text-[11px] text-slate-500">
            <Thermometer className="w-3 h-3 text-slate-400" />
            <span>{temp}</span>
          </span>
        </div>

        {/* Profile Context Indicator */}
        <div className="text-[11px] text-slate-500 hidden sm:block">
          Active Profile: <span className="font-semibold text-emerald-800">{profileLabel}</span>
        </div>
      </div>
    </div>
  );
};
