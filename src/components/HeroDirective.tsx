import React from 'react';
import { useApp } from '../context/AppContext';
import { Sun, ShieldCheck, ArrowDownRight, Layers, AlertTriangle } from 'lucide-react';

export const HeroDirective: React.FC = () => {
  const { telemetry, cleanAirWindow, userPreferences, livingPlan } = useApp();

  const pm = telemetry.current.pm25;
  const aqi = telemetry.current.aqi;
  const aqiCat = telemetry.current.aqiCategory;
  const isSevere = pm > 120 || aqi > 300;
  const isModerate = pm <= 60 && aqi <= 100;

  // Background tint matching subtle health states
  const borderTone = isSevere ? 'border-amber-300' : isModerate ? 'border-forest-200' : 'border-amber-200';
  const badgeBg = isSevere
    ? 'bg-amber-50 text-amber-900 border-amber-300'
    : isModerate
    ? 'bg-forest-50 text-forest-700 border-forest-200'
    : 'bg-cream-100 text-slatecharcoal-900 border-cream-300';

  return (
    <div className={`rounded-2xl bg-white border ${borderTone} p-5 sm:p-7 shadow-sm transition-all`}>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        
        {/* Left Column: The Actionable Exposure Directive */}
        <div className="space-y-3 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${badgeBg}`}>
              <Sun className="w-3.5 h-3.5 mr-1.5" />
              {cleanAirWindow.statusLabel}: {cleanAirWindow.displayWindow}
            </span>
            {cleanAirWindow.reductionVsPeakPercent > 0 && (
              <span className="inline-flex items-center text-xs font-medium text-slate-600 bg-cream-100 px-2 py-0.5 rounded border border-cream-300">
                <ArrowDownRight className="w-3.5 h-3.5 mr-1 text-forest-600" />
                ~{cleanAirWindow.reductionVsPeakPercent}% lower PM2.5 vs morning peak
              </span>
            )}
            <span className="hidden sm:inline-flex items-center text-[11px] text-slate-500">
              <Layers className="w-3 h-3 mr-1 text-slate-400" />
              Boundary layer: Convective daytime dispersion
            </span>
          </div>

          {/* Ozone Hazard Notice if applicable */}
          {cleanAirWindow.ozoneRiskWarning && (
            <div className="flex items-center space-x-2 text-xs bg-amber-50 text-amber-900 p-2 rounded-lg border border-amber-200">
              <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
              <span className="text-[11px] font-medium">{cleanAirWindow.ozoneRiskWarning}</span>
            </div>
          )}

          <h1 className="text-xl sm:text-2xl font-bold text-slatecharcoal-900 tracking-tight leading-snug">
            {livingPlan?.summaryTitle || `Shift outdoor exposure to ${cleanAirWindow.displayWindow}`}
          </h1>

          <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
            {livingPlan?.summaryBody || cleanAirWindow.convectiveReasoning}
          </p>

          {/* Vulnerability Profile Micro-Advisory */}
          <div className="pt-1 flex items-start space-x-2 text-xs bg-cream-50 p-3 rounded-xl border border-cream-200">
            <ShieldCheck className="w-4 h-4 text-forest-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slatecharcoal-900 capitalize">
                {userPreferences.vulnerabilityProfile.replace('_', ' ')} Guidance:
              </span>{' '}
              <span className="text-slate-700">
                {livingPlan?.vulnerabilityGuidance?.actionableStep ||
                  'Keep intense aerobic activities scheduled for the lower exposure window.'}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Key Diagnostic Numbers */}
        <div className="flex sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end justify-between sm:justify-end gap-3 border-t lg:border-t-0 lg:border-l border-cream-200 pt-4 lg:pt-0 lg:pl-6 shrink-0">
          <div className="text-left lg:text-right">
            <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
              Ambient PM2.5
            </div>
            <div className="flex items-baseline lg:justify-end space-x-1.5 mt-0.5">
              <span className="text-3xl sm:text-4xl font-extrabold text-slatecharcoal-900 tracking-tight">
                {pm}
              </span>
              <span className="text-xs text-slate-500 font-medium">µg/m³</span>
            </div>
            <div className="text-[11px] font-semibold mt-0.5 text-slate-600">
              CPCB NAQI {aqi} • <span className={isSevere ? 'text-amber-800 font-bold' : isModerate ? 'text-forest-700 font-bold' : 'text-amber-700'}>{aqiCat}</span>
            </div>
          </div>

          <div className="text-left lg:text-right bg-cream-100 p-2.5 rounded-xl border border-cream-200 min-w-[130px]">
            <div className="text-[10px] uppercase font-semibold text-slate-500">
              Window Est. PM2.5
            </div>
            <div className="text-base font-bold text-forest-700">
              ~{cleanAirWindow.averagePm25} µg/m³
            </div>
            <div className="text-[10px] text-slate-500">
              NAQI ~{cleanAirWindow.averageAqi}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
