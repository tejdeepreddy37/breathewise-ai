import React from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, Check, Leaf, Sun, Coffee, Sunset, Moon, Activity, AlertCircle, ShieldCheck } from 'lucide-react';

export const AiLivingPlanCard: React.FC = () => {
  const { livingPlan, isLoadingPlan, userPreferences } = useApp();

  if (isLoadingPlan && !livingPlan) {
    return (
      <div className="bg-white p-6 sm:p-7 rounded-3xl border border-cream-200/80 shadow-soft animate-pulse space-y-4">
        <div className="flex justify-between items-center">
          <div className="h-5 bg-cream-200 rounded-lg w-2/5"></div>
          <div className="h-4 bg-cream-200 rounded-full w-20"></div>
        </div>
        <div className="h-3.5 bg-cream-200 rounded-lg w-3/5"></div>
        <div className="space-y-4 pt-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex space-x-3 items-start">
              <div className="w-8 h-8 rounded-full bg-cream-200 shrink-0"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-cream-200 rounded w-1/4"></div>
                <div className="h-3 bg-cream-100 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!livingPlan) return null;

  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case 'SAFE':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sage-50 text-sage-700 border border-sage-200 shadow-2xs">
            <ShieldCheck className="w-3 h-3 text-sage-600" />
            <span>SAFE WINDOW</span>
          </span>
        );
      case 'MODERATE':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200 shadow-2xs">
            <span>MODERATE RISK</span>
          </span>
        );
      case 'HIGH':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-orange-50 text-orange-800 border border-orange-200 shadow-2xs">
            <AlertCircle className="w-3 h-3 text-orange-600" />
            <span>ELEVATED</span>
          </span>
        );
      case 'CRITICAL':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 text-rose-800 border border-rose-200 shadow-2xs">
            <AlertCircle className="w-3 h-3 text-rose-600" />
            <span>HAZARDOUS</span>
          </span>
        );
      default:
        return null;
    }
  };

  const getSlotIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Sun className="w-3.5 h-3.5" />;
      case 1:
        return <Coffee className="w-3.5 h-3.5" />;
      case 2:
        return <Sunset className="w-3.5 h-3.5" />;
      case 3:
      default:
        return <Moon className="w-3.5 h-3.5" />;
    }
  };

  const formattedProfile = userPreferences.vulnerabilityProfile
    .split('_')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return (
    <div className="bg-white p-6 sm:p-7 rounded-3xl border border-cream-200/80 shadow-soft space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-cream-200/60">
        <div>
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-forest-50 text-forest-600 flex items-center justify-center border border-forest-100/80">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slatecharcoal-900 tracking-tight">
              Adaptive Living Routine
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Personalized for <strong className="text-forest-700 font-semibold">{formattedProfile}</strong> physiology using Gemini & convective boundary models
          </p>
        </div>

        <div className="flex items-center space-x-2 self-start sm:self-auto">
          <span className="text-[11px] font-semibold text-slate-600 bg-cream-50 px-2.5 py-1 rounded-full border border-cream-200/80">
            {livingPlan.scientificConfidence}
          </span>
        </div>
      </div>

      {/* Connected Timeline Track */}
      <div className="relative pl-7 sm:pl-8 space-y-6 before:absolute before:left-3 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-cream-200">
        {livingPlan.dailyRoutine.map((slot, idx) => {
          const isSafe = slot.exposureRisk === 'SAFE';
          const isCritical = slot.exposureRisk === 'CRITICAL';
          const isHigh = slot.exposureRisk === 'HIGH';

          return (
            <div key={idx} className="relative group">
              {/* Timeline Node Icon */}
              <div
                className={`absolute -left-7 sm:-left-8 top-0.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all ${
                  isSafe
                    ? 'bg-sage-100 text-sage-700 border-2 border-white ring-2 ring-sage-300'
                    : isCritical
                    ? 'bg-rose-100 text-rose-700 border-2 border-white ring-2 ring-rose-300'
                    : isHigh
                    ? 'bg-orange-100 text-orange-700 border-2 border-white ring-2 ring-orange-300'
                    : 'bg-cream-100 text-slate-600 border-2 border-white ring-2 ring-cream-300'
                }`}
              >
                {getSlotIcon(idx)}
              </div>

              {/* Slot Content Container */}
              <div
                className={`p-4 sm:p-4.5 rounded-2xl border transition-all ${
                  isSafe
                    ? 'bg-sage-50/40 border-sage-200/70 hover:border-sage-300'
                    : isCritical
                    ? 'bg-rose-50/30 border-rose-200/70 hover:border-rose-300'
                    : 'bg-cream-50/50 border-cream-200/70 hover:border-cream-300'
                }`}
              >
                {/* Slot Header */}
                <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1.5">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-slatecharcoal-900 font-mono tracking-tight bg-white px-2 py-0.5 rounded-md border border-cream-200/60 shadow-2xs">
                      {slot.timeSlot}
                    </span>
                    <span className="text-xs font-bold text-slate-800">
                      {slot.activityName}
                    </span>
                  </div>
                  <div>{getRiskBadge(slot.exposureRisk)}</div>
                </div>

                {/* Primary Directive */}
                <p className="text-xs font-medium text-slatecharcoal-800 leading-relaxed mt-1">
                  {slot.directive}
                </p>

                {/* Alternative Suggestion Chip */}
                {slot.alternativeSuggestion && (
                  <div className="mt-2.5 pt-2 border-t border-cream-200/50 text-[11px] flex items-start space-x-1.5 text-slate-600">
                    <span className="font-semibold text-forest-700 shrink-0">Alternative:</span>
                    <span className="leading-relaxed">{slot.alternativeSuggestion}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Two Complementary Living Strategies */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        {/* Indoor Envelope Strategy */}
        <div className="bg-cream-50/80 p-4 rounded-2xl border border-cream-200/80 text-xs space-y-1.5">
          <div className="font-semibold text-slatecharcoal-900 flex items-center space-x-2">
            <div className="w-5 h-5 rounded-md bg-forest-100 text-forest-700 flex items-center justify-center">
              <Check className="w-3 h-3" />
            </div>
            <span>Indoor Envelope Protocol</span>
          </div>
          <p className="text-slate-600 leading-relaxed text-[11px] pl-7">
            {livingPlan.indoorProtocol}
          </p>
        </div>

        {/* Civic Eco-Swap */}
        <div className="bg-forest-50/40 p-4 rounded-2xl border border-forest-100/70 text-xs space-y-1.5">
          <div className="font-semibold text-forest-800 flex items-center space-x-2">
            <div className="w-5 h-5 rounded-md bg-forest-100 text-forest-700 flex items-center justify-center">
              <Leaf className="w-3 h-3" />
            </div>
            <span>Civic Eco-Swap</span>
          </div>
          <p className="text-slate-700 leading-relaxed text-[11px] pl-7">
            {livingPlan.ecoActionOfTheDay}
          </p>
        </div>
      </div>

    </div>
  );
};
