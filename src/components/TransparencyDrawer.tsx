import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Database, FileText, X, Atom, CheckCircle2 } from 'lucide-react';

export const TransparencyDrawer: React.FC = () => {
  const { telemetry, isTransparencyOpen, setIsTransparencyOpen } = useApp();

  if (!isTransparencyOpen) return null;

  const meta = telemetry.metadata;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slatecharcoal-900/60 backdrop-blur-xs transition-opacity animate-in fade-in">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-elevated border border-cream-200/90 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-cream-200/60 flex items-center justify-between bg-cream-50/50">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-forest-100 text-forest-700 flex items-center justify-center shadow-2xs">
              <Atom className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slatecharcoal-900 tracking-tight">
                Scientific Methodology & Telemetry Provenance
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Verified mathematical engines, transparent data sources, and strict health safety boundaries
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsTransparencyOpen(false)}
            className="text-slate-400 hover:text-slatecharcoal-900 p-2 rounded-xl hover:bg-cream-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs text-slate-700 leading-relaxed">
          
          {/* Active Data Provenance Telemetry */}
          <div className="p-4 rounded-2xl bg-cream-50/70 border border-cream-200/80 space-y-2.5">
            <div className="font-bold text-slatecharcoal-900 flex items-center space-x-2 text-xs">
              <Database className="w-4 h-4 text-forest-600" />
              <span>Active Environmental Telemetry Provenance</span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-[11px]">
              <div>
                <span className="text-slate-500">Data Source:</span>{' '}
                <strong className="text-slatecharcoal-900">{meta.provider}</strong>
              </div>
              <div>
                <span className="text-slate-500">Grid / Station:</span>{' '}
                <span className="text-slatecharcoal-900 font-medium">{meta.stationName}</span>
              </div>
              <div>
                <span className="text-slate-500">Geographic Coordinates:</span>{' '}
                <span className="text-slatecharcoal-900 font-mono">
                  {meta.latitude.toFixed(4)}°N, {meta.longitude.toFixed(4)}°E
                </span>
              </div>
              <div>
                <span className="text-slate-500">Telemetry Status:</span>{' '}
                <span className="text-slatecharcoal-900 font-medium">{meta.fetchTimestamp}</span>
              </div>
              {meta.modelTimestamp && (
                <div className="col-span-2">
                  <span className="text-slate-500">CAMS Ensemble Run:</span>{' '}
                  <span className="text-slatecharcoal-900 font-mono">{meta.modelTimestamp}</span>
                </div>
              )}
            </div>
            <div className="text-[10px] text-slate-500 pt-2 border-t border-cream-200/70 leading-relaxed">
              {meta.isSimulated
                ? 'NOTICE: Currently displaying an offline illustrative diurnal profile for demonstration purposes. Values do not represent live physical sensor observations.'
                : 'Regional atmospheric model data derived from Open-Meteo & European Copernicus Atmosphere Monitoring Service (CAMS). Atmospheric reanalysis covers a 0.25° grid with hourly resolution.'}
            </div>
          </div>

          {/* Core Mathematical Formulations */}
          <div className="space-y-3">
            <h4 className="font-bold text-slatecharcoal-900 text-xs flex items-center space-x-2">
              <FileText className="w-4 h-4 text-forest-600" />
              <span>Documented Mathematical Formulations</span>
            </h4>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl border border-cream-200/80 bg-white space-y-1.5 shadow-2xs">
                <div className="font-bold text-slatecharcoal-900 text-[11px]">
                  1. Inhaled Particulate Lung Burden Formulation (M_inh)
                </div>
                <div className="font-mono text-forest-700 text-[11px] my-1 bg-forest-50/70 p-2 rounded-xl border border-forest-100">
                  M_inh = C_ambient (µg/m³) × VE (m³/h) × t (hours) × (1 - η_mask)
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Estimates gross mass passing upper airway. Minute ventilation rates (V_E) are adapted from the US EPA Exposure Factors Handbook (Chapter 6): Resting (0.36 m³/h), Desk Work (0.48 m³/h), Light Walking (0.96 m³/h), Cycling (2.10 m³/h), Outdoor Running (3.30 m³/h), and Heavy Cardio (3.90 m³/h). Nominal mask efficiencies (η): Cloth (25%), Surgical (60%), N95 (95%), N99 (99%).
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-cream-200/80 bg-white space-y-1.5 shadow-2xs">
                <div className="font-bold text-slatecharcoal-900 text-[11px]">
                  2. Official Indian CPCB NAQI Piecewise Linear Interpolation
                </div>
                <div className="font-mono text-forest-700 text-[11px] my-1 bg-forest-50/70 p-2 rounded-xl border border-forest-100">
                  I_p = [ (I_high - I_low) / (C_high - C_low) ] × (C_p - C_low) + I_low
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Calculates official sub-indices according to the Central Pollution Control Board (CPCB) NAQI breakpoint schedules for PM2.5, PM10, NO2, O3, and normalized CO (mg/m³). The governing AQI represents the maximum sub-index across available pollutants.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-cream-200/80 bg-white space-y-1.5 shadow-2xs">
                <div className="font-bold text-slatecharcoal-900 text-[11px]">
                  3. Conservative Indoor Ventilation Safety Ceilings
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Natural window ventilation is governed by conservative public health safeguards: Continuous cross-ventilation is permitted only when outdoor PM2.5 is &le; 30 µg/m³. A brief 15 to 20-min flush is permitted between 31 and 60 µg/m³ during diurnal dispersion valleys. <strong>Natural ventilation is strictly blocked whenever outdoor PM2.5 &gt; 60 µg/m³ or Ozone &gt; 100 µg/m³</strong>, regardless of time-of-day.
                </p>
              </div>
            </div>
          </div>

          {/* Authoritative Scientific Sources */}
          <div className="p-4 rounded-2xl bg-cream-50/70 text-[11px] text-slate-600 space-y-1.5 border border-cream-200/80">
            <div className="font-bold text-slatecharcoal-900">Authoritative References & Benchmarks:</div>
            <ul className="list-disc pl-4 space-y-1">
              <li>Central Pollution Control Board (CPCB), Ministry of Environment, Forest and Climate Change: National Air Quality Index (NAQI) Technical Report</li>
              <li>World Health Organization (WHO): Global Air Quality Guidelines (2021: PM2.5 24h benchmark 15 µg/m³, O3 8h benchmark 100 µg/m³)</li>
              <li>US Environmental Protection Agency (EPA): Exposure Factors Handbook (Chapter 6: Inhalation Rates)</li>
              <li>India GHG Protocol & Central Electricity Authority (CEA): Baseline Carbon Emission Factors for Indian Urban Transport</li>
            </ul>
          </div>

          {/* Health Disclaimer */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-[11px] text-amber-950 space-y-1">
            <strong className="font-bold">Responsible Environmental Guidance Disclaimer:</strong>
            <p className="leading-relaxed">
              BreatheWise AI is an environmental lifestyle intelligence tool and exposure reduction planner. It does not provide clinical medical diagnosis, disease prognosis, or pharmaceutical prescriptions. Individuals with chronic respiratory or cardiovascular conditions should consult their licensed physician.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-cream-200/60 bg-cream-50/50 flex justify-end">
          <button
            onClick={() => setIsTransparencyOpen(false)}
            className="px-5 py-2.5 bg-forest-600 hover:bg-forest-700 text-white rounded-xl text-xs font-bold transition-all shadow-2xs cursor-pointer"
          >
            Close Methodology Drawer
          </button>
        </div>

      </div>
    </div>
  );
};
