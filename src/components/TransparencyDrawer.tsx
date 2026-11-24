import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Database, FileText, X, Atom } from 'lucide-react';

export const TransparencyDrawer: React.FC = () => {
  const { telemetry, isTransparencyOpen, setIsTransparencyOpen } = useApp();

  if (!isTransparencyOpen) return null;

  const meta = telemetry.metadata;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slatecharcoal-900/60 backdrop-blur-xs transition-opacity animate-in fade-in">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-cream-300 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-cream-200 flex items-center justify-between bg-cream-50">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-forest-100 text-forest-700 flex items-center justify-center">
              <Atom className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slatecharcoal-900">
                Scientific Methodology & Telemetry Provenance
              </h3>
              <p className="text-[11px] text-slate-500">
                Verified mathematical engines, transparent data sources, and strict health safety boundaries
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsTransparencyOpen(false)}
            className="text-slate-400 hover:text-slatecharcoal-900 p-1.5 rounded-lg hover:bg-cream-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 overflow-y-auto space-y-4 text-xs text-slate-700 leading-relaxed">
          
          {/* Active Data Provenance Telemetry */}
          <div className="p-3.5 rounded-xl bg-cream-50 border border-cream-200 space-y-2">
            <div className="font-bold text-slatecharcoal-900 flex items-center space-x-1.5 text-xs">
              <Database className="w-3.5 h-3.5 text-forest-600" />
              <span>Active Environmental Telemetry Provenance</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div>
                <span className="text-slate-500">Data Source:</span>{' '}
                <strong className="text-slatecharcoal-900">{meta.provider}</strong>
              </div>
              <div>
                <span className="text-slate-500">Grid / Profile:</span>{' '}
                <span className="text-slatecharcoal-900 font-medium">{meta.stationName}</span>
              </div>
              <div>
                <span className="text-slate-500">Coordinates:</span>{' '}
                <span className="text-slatecharcoal-900 font-mono">
                  {meta.latitude.toFixed(4)}°N, {meta.longitude.toFixed(4)}°E
                </span>
              </div>
              <div>
                <span className="text-slate-500">Fetch Status:</span>{' '}
                <span className="text-slatecharcoal-900 font-medium">{meta.fetchTimestamp}</span>
              </div>
              {meta.modelTimestamp && (
                <div className="col-span-2">
                  <span className="text-slate-500">Model Timestamp:</span>{' '}
                  <span className="text-slatecharcoal-900 font-mono">{meta.modelTimestamp}</span>
                </div>
              )}
            </div>
            <div className="text-[10px] text-slate-500 pt-1 border-t border-cream-200">
              {meta.isSimulated
                ? 'NOTICE: Currently displaying an offline illustrative diurnal profile for demonstration purposes. Values do not represent live physical sensor observations.'
                : 'Regional atmospheric model data derived from Open-Meteo & European Copernicus Atmosphere Monitoring Service (CAMS). Atmospheric reanalysis covers a 0.25° grid.'}
            </div>
          </div>

          {/* Core Mathematical Formulations */}
          <div className="space-y-2">
            <h4 className="font-bold text-slatecharcoal-900 text-xs flex items-center space-x-1.5">
              <FileText className="w-3.5 h-3.5 text-forest-600" />
              <span>Documented Mathematical Formulations</span>
            </h4>

            <div className="space-y-2">
              <div className="p-3 rounded-lg border border-cream-200 bg-white space-y-1">
                <div className="font-semibold text-slatecharcoal-900 text-[11px]">
                  1. Estimated Inhaled Particulate Mass Engine ($M_inh$)
                </div>
                <div className="font-mono text-forest-700 text-[11px] my-1 bg-forest-50/60 p-1.5 rounded">
                  M_inh = C_ambient (µg/m³) × VE (m³/h) × t (hours) × (1 - η_mask)
                </div>
                <p className="text-[11px] text-slate-600">
                  Estimates gross inhaled mass passing the upper airway. Minute ventilation rates ($V_E$) are adapted from the US EPA Exposure Factors Handbook (Chapter 6): Resting (0.36 m³/h), Desk Work (0.48 m³/h), Light Walking (0.96 m³/h), Cycling (2.10 m³/h), Outdoor Running (3.30 m³/h), and Heavy Cardio (3.90 m³/h). Nominal mask material filtration efficiencies ($\eta$): Cloth (25%), Surgical (60%), N95 (95%), N99 (99%).
                </p>
              </div>

              <div className="p-3 rounded-lg border border-cream-200 bg-white space-y-1">
                <div className="font-semibold text-slatecharcoal-900 text-[11px]">
                  2. Official Indian CPCB NAQI Piecewise Linear Interpolation
                </div>
                <div className="font-mono text-forest-700 text-[11px] my-1 bg-forest-50/60 p-1.5 rounded">
                  I_p = [ (I_high - I_low) / (C_high - C_low) ] × (C_p - C_low) + I_low
                </div>
                <p className="text-[11px] text-slate-600">
                  Calculates official sub-indices according to the Central Pollution Control Board (CPCB) NAQI breakpoint schedules for PM2.5, PM10, NO2, O3, and normalized CO (mg/m³). The governing AQI represents the maximum sub-index across available pollutants.
                </p>
              </div>

              <div className="p-3 rounded-lg border border-cream-200 bg-white space-y-1">
                <div className="font-semibold text-slatecharcoal-900 text-[11px]">
                  3. Conservative Indoor Ventilation Safety Ceilings
                </div>
                <p className="text-[11px] text-slate-600">
                  Natural window ventilation is evaluated with conservative public health safeguards: Continuous cross-ventilation is permitted only when outdoor PM2.5 is &le; 30 µg/m³. A brief 15 to 20-min flush is permitted between 31 and 60 µg/m³ during diurnal dispersion valleys. <strong>Natural ventilation is strictly blocked whenever outdoor PM2.5 &gt; 60 µg/m³ or Ozone &gt; 100 µg/m³</strong>, regardless of time-of-day.
                </p>
              </div>
            </div>
          </div>

          {/* Authoritative Scientific Sources */}
          <div className="p-3 rounded-lg bg-cream-100 text-[11px] text-slate-600 space-y-1">
            <div className="font-bold text-slatecharcoal-900">Authoritative References & Standards:</div>
            <ul className="list-disc pl-4 space-y-0.5">
              <li>Central Pollution Control Board (CPCB), Ministry of Environment, Forest and Climate Change: National Air Quality Index (NAQI) Technical Report</li>
              <li>World Health Organization (WHO): Global Air Quality Guidelines (2021 Update: PM2.5 24h limit of 15 µg/m³, O3 8h limit of 100 µg/m³)</li>
              <li>US Environmental Protection Agency (EPA): Exposure Factors Handbook (Chapter 6: Inhalation Rates)</li>
              <li>India GHG Protocol & Central Electricity Authority (CEA): Baseline Carbon Emission Factors for Indian Transport & Grid Electricity</li>
            </ul>
          </div>

          {/* Health Disclaimer */}
          <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-[11px] text-amber-900 space-y-1">
            <strong className="font-bold">Responsible Environmental Guidance Disclaimer:</strong>
            <p>
              BreatheWise AI is an environmental lifestyle intelligence tool and exposure reduction planner. It does not provide clinical medical diagnosis, disease prognosis, or pharmaceutical prescriptions. Individuals with chronic respiratory or cardiovascular conditions should consult their licensed physician.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-cream-200 bg-cream-50 flex justify-end">
          <button
            onClick={() => setIsTransparencyOpen(false)}
            className="px-4 py-2 bg-slatecharcoal-900 text-white rounded-xl text-xs font-semibold hover:bg-slatecharcoal-800 transition-colors shadow-xs cursor-pointer"
          >
            Close Methodology Drawer
          </button>
        </div>

      </div>
    </div>
  );
};
