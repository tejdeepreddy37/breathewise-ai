import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Database, FileText, ExternalLink, X, Atom } from 'lucide-react';

export const TransparencyDrawer: React.FC = () => {
  const { telemetry, isTransparencyOpen, setIsTransparencyOpen } = useApp();

  if (!isTransparencyOpen) return null;

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
                Scientific Methodology & Telemetry Transparency
              </h3>
              <p className="text-[11px] text-slate-500">
                Zero black-box metrics. Deterministic physical formulas and authoritative data sources.
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
          
          {/* Active Data Source Telemetry */}
          <div className="p-3.5 rounded-xl bg-cream-50 border border-cream-200 space-y-2">
            <div className="font-bold text-slatecharcoal-900 flex items-center space-x-1.5 text-xs">
              <Database className="w-3.5 h-3.5 text-forest-600" />
              <span>Active Telemetry Provider & Station Grid</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div>
                <span className="text-slate-500">Provider:</span>{' '}
                <strong className="text-slatecharcoal-900">{telemetry.metadata.provider}</strong>
              </div>
              <div>
                <span className="text-slate-500">Station / Grid:</span>{' '}
                <span className="text-slatecharcoal-900 font-medium">{telemetry.metadata.stationName}</span>
              </div>
              <div>
                <span className="text-slate-500">Coordinates:</span>{' '}
                <span className="text-slatecharcoal-900 font-mono">
                  {telemetry.metadata.latitude.toFixed(4)}°N, {telemetry.metadata.longitude.toFixed(4)}°E
                </span>
              </div>
              <div>
                <span className="text-slate-500">Last Observation:</span>{' '}
                <span className="text-slatecharcoal-900">{telemetry.metadata.lastUpdated}</span>
              </div>
            </div>
            <div className="text-[10px] text-slate-500 pt-1 border-t border-cream-200">
              Attribution: {telemetry.metadata.attribution}
            </div>
          </div>

          {/* Mathematical Formulations */}
          <div className="space-y-2">
            <h4 className="font-bold text-slatecharcoal-900 text-xs flex items-center space-x-1.5">
              <FileText className="w-3.5 h-3.5 text-forest-600" />
              <span>Core Mathematical Engines</span>
            </h4>

            <div className="space-y-2">
              <div className="p-3 rounded-lg border border-cream-200 bg-white">
                <div className="font-semibold text-slatecharcoal-900 text-[11px]">
                  1. Inhaled Particulate Dose Engine ($D_inh$)
                </div>
                <div className="font-mono text-forest-700 text-[11px] my-1 bg-forest-50/60 p-1.5 rounded">
                  D_inh = C_ambient × VE × t × (1 - η_mask)
                </div>
                <p className="text-[11px] text-slate-600">
                  Where C_ambient is PM2.5 (µg/m³), VE is minute ventilation rate (0.48 m³/h resting to 3.3 m³/h running), t is duration in hours, and η_mask is certified filtration (95% for N95, 60% surgical).
                </p>
              </div>

              <div className="p-3 rounded-lg border border-cream-200 bg-white">
                <div className="font-semibold text-slatecharcoal-900 text-[11px]">
                  2. Diurnal Clean-Air Window (WindowSafe™)
                </div>
                <p className="text-[11px] text-slate-600 mt-1">
                  Evaluates 24-hour planetary boundary layer (PBL) height. In northern and central India, morning and late-night thermal inversions trap surface diesel and biomass smoke below 300m. Solar convective heating expands the mixing layer to &gt;1,200m between 13:00 and 16:00, creating a natural 40–60% particulate dispersion valley.
                </p>
              </div>

              <div className="p-3 rounded-lg border border-cream-200 bg-white">
                <div className="font-semibold text-slatecharcoal-900 text-[11px]">
                  3. Indoor Building Envelope Infiltration
                </div>
                <p className="text-[11px] text-slate-600 mt-1">
                  Models indoor concentrations using single-zone mass-balance: Indoor Baseline = Outdoor × α (where α ≈ 0.45 for typical closed concrete apartment construction). Purifier runtime estimates use Clean Air Delivery Rate (CADR in m³/h) against room air changes per hour (ACH).
                </p>
              </div>
            </div>
          </div>

          {/* Scientific Citations */}
          <div className="p-3 rounded-lg bg-cream-100 text-[11px] text-slate-600 space-y-1">
            <div className="font-bold text-slatecharcoal-900">Authoritative Sources & Standards:</div>
            <ul className="list-disc pl-4 space-y-0.5">
              <li>Central Pollution Control Board (CPCB) National Air Quality Index (NAQI) Breakpoint Standards</li>
              <li>World Health Organization (WHO) Global Air Quality Guidelines (2021 Update)</li>
              <li>US EPA Exposure Factors Handbook (Ventilation rates for children, adults, and athletes)</li>
              <li>Berkeley Earth Air Pollution & Cigarette Equivalence Mathematical Model</li>
            </ul>
          </div>

          {/* Health Disclaimer */}
          <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-[11px] text-amber-900 space-y-1">
            <strong className="font-bold">Responsible Health Guidance Disclaimer:</strong>
            <p>
              BreatheWise AI is an environmental lifestyle assistant and exposure reduction planner. It does not provide clinical medical diagnosis, disease prognosis, or pharmaceutical prescriptions. Individuals with severe asthma, COPD, or cardiovascular conditions should consult their licensed pulmonologist or physician.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-cream-200 bg-cream-50 flex justify-end">
          <button
            onClick={() => setIsTransparencyOpen(false)}
            className="px-4 py-2 bg-slatecharcoal-900 text-white rounded-xl text-xs font-semibold hover:bg-slatecharcoal-800 transition-colors shadow-xs"
          >
            Close Transparency Inspector
          </button>
        </div>

      </div>
    </div>
  );
};
