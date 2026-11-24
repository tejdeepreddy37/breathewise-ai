import React from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, Calendar, CheckCircle2, AlertOctagon, ShieldAlert, Leaf, Check } from 'lucide-react';

export const AiLivingPlanCard: React.FC = () => {
  const { livingPlan, isLoadingPlan, userPreferences } = useApp();

  if (isLoadingPlan && !livingPlan) {
    return (
      <div className="bg-white p-6 rounded-2xl border border-cream-300 shadow-sm animate-pulse space-y-4">
        <div className="h-5 bg-cream-200 rounded w-1/3"></div>
        <div className="h-4 bg-cream-200 rounded w-2/3"></div>
        <div className="space-y-3 pt-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-16 bg-cream-100 rounded-xl"></div>
          ))}
        </div>
      </div>
    );
  }

  if (!livingPlan) return null;

  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case 'SAFE':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-forest-50 text-forest-700 border border-forest-200">OPTIMAL</span>;
      case 'MODERATE':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">CAUTION</span>;
      case 'HIGH':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-50 text-orange-800 border border-orange-200">HIGH EXPOSURE</span>;
      case 'CRITICAL':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-50 text-rose-800 border border-rose-200">HAZARDOUS</span>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-5 sm:p-6 rounded-2xl border border-cream-300 shadow-sm space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-cream-200">
        <div>
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-forest-600" />
            <h2 className="text-base sm:text-lg font-bold text-slatecharcoal-900 tracking-tight">
              Personalized Exposure-Aware Routine
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Tailored to {userPreferences.vulnerabilityProfile.replace('_', ' ')} physiology using Gemini 1.5 & boundary dispersion models
          </p>
        </div>
        <span className="text-[11px] font-medium text-slate-500 bg-cream-100 px-2.5 py-1 rounded-full border border-cream-300 self-start sm:self-auto">
          {livingPlan.scientificConfidence}
        </span>
      </div>

      {/* Routine Slots */}
      <div className="space-y-3">
        {livingPlan.dailyRoutine.map((slot, idx) => (
          <div
            key={idx}
            className={`p-3.5 sm:p-4 rounded-xl border transition-all ${
              slot.exposureRisk === 'SAFE'
                ? 'bg-forest-50/50 border-forest-200'
                : slot.exposureRisk === 'CRITICAL'
                ? 'bg-rose-50/30 border-rose-200'
                : 'bg-cream-50 border-cream-200'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-slatecharcoal-900 font-mono">
                  {slot.timeSlot}
                </span>
                <span className="text-xs font-semibold text-slate-700">
                  • {slot.activityName}
                </span>
              </div>
              <div>{getRiskBadge(slot.exposureRisk)}</div>
            </div>

            <p className="text-xs font-medium text-slatecharcoal-900 leading-relaxed">
              {slot.directive}
            </p>

            <div className="mt-1.5 text-[11px] text-slate-600 flex items-start space-x-1">
              <span className="font-semibold text-forest-600 shrink-0">Alternative:</span>
              <span>{slot.alternativeSuggestion}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Two-Column Footer: Indoor Protocol & Eco Swap */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
        <div className="bg-cream-100 p-3.5 rounded-xl border border-cream-200 text-xs space-y-1">
          <div className="font-semibold text-slatecharcoal-900 flex items-center space-x-1.5">
            <Check className="w-3.5 h-3.5 text-forest-600" />
            <span>Indoor Envelope Protocol</span>
          </div>
          <p className="text-slate-600 leading-relaxed text-[11px]">
            {livingPlan.indoorProtocol}
          </p>
        </div>

        <div className="bg-forest-50/60 p-3.5 rounded-xl border border-forest-100 text-xs space-y-1">
          <div className="font-semibold text-forest-700 flex items-center space-x-1.5">
            <Leaf className="w-3.5 h-3.5 text-forest-600" />
            <span>Civic Eco-Swap of the Day</span>
          </div>
          <p className="text-slate-700 leading-relaxed text-[11px]">
            {livingPlan.ecoActionOfTheDay}
          </p>
        </div>
      </div>
    </div>
  );
};
