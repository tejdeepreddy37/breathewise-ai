import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
  ReferenceLine,
} from 'recharts';
import { Clock, Sun, TrendingDown, Layers, AlertCircle } from 'lucide-react';

export const DiurnalChart: React.FC = () => {
  const { telemetry, cleanAirWindow } = useApp();
  const data = telemetry.hourly;

  const currentHour = new Date().getHours();
  const [selectedSegment, setSelectedSegment] = useState<'morning' | 'window' | 'evening' | 'night'>('window');

  // Compute active highlight boundaries
  let activeX1 = cleanAirWindow.startHour;
  let activeX2 = cleanAirWindow.endHour;
  let segmentNote = cleanAirWindow.convectiveReasoning || 'Solar convection expands the boundary layer, diluting ground smoke.';

  if (selectedSegment === 'morning') {
    activeX1 = 7;
    activeX2 = 10;
    segmentNote = 'Morning Inversion Peak (07:00–10:00): Nocturnal radiative cooling caps vertical mixing; surface traffic exhaust accumulates rapidly.';
  } else if (selectedSegment === 'evening') {
    activeX1 = 18;
    activeX2 = 21;
    segmentNote = 'Evening Traffic Surge (18:00–21:00): Evening commute emissions surge as solar radiation wanes, re-trapping pollutants near the surface.';
  } else if (selectedSegment === 'night') {
    activeX1 = 22;
    activeX2 = 23;
    segmentNote = 'Nocturnal Cooling (22:00–06:00): The planetary boundary layer drops to 100–150m under clear skies, concentrating ambient particulate matter.';
  }

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const pt = payload[0].payload;
      const hourFormatted = `${pt.hour % 12 === 0 ? 12 : pt.hour % 12}:00 ${pt.hour >= 12 ? 'PM' : 'AM'}`;
      const isWindow = pt.hour >= cleanAirWindow.startHour && pt.hour <= cleanAirWindow.endHour;

      return (
        <div className="bg-slatecharcoal-900 text-white p-3.5 rounded-2xl shadow-float text-xs space-y-2 border border-slate-700/80 max-w-[230px] backdrop-blur-md">
          <div className="font-semibold text-slate-200 flex items-center justify-between">
            <span className="font-mono text-xs">{hourFormatted}</span>
            {isWindow && (
              <span className="text-[10px] bg-emerald-500 text-white px-2 py-0.5 rounded-full font-bold shadow-xs">
                CONVECTIVE DIP
              </span>
            )}
          </div>
          <div className="flex justify-between items-baseline pt-1 border-t border-slate-800">
            <span className="text-slate-400">PM2.5 Conc:</span>
            <span className="font-black text-sm text-emerald-400">{pt.pm25} µg/m³</span>
          </div>
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-slate-400">CPCB NAQI:</span>
            <span className="font-bold text-slate-100">{pt.cpcbAqi}</span>
          </div>
          {pt.o3 != null && (
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-slate-400">Ozone (O3):</span>
              <span className="font-medium text-amber-300">{pt.o3} µg/m³</span>
            </div>
          )}
          <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-800/80 leading-relaxed italic">
            {isWindow
              ? 'Convective solar mixing expands the atmospheric boundary layer, diluting ground smoke.'
              : pt.hour < 11
              ? 'Morning surface temperature inversion cap traps traffic soot.'
              : 'Evening traffic accumulation combined with nocturnal radiative cooling.'}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="rounded-3xl bg-white border border-stone-200/80 p-6 sm:p-7 shadow-soft space-y-5 transition-all">
      
      {/* Header and Callout */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-100">
        <div>
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded-xl bg-forest-50 text-forest-600">
              <Clock className="w-4 h-4" />
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slatecharcoal-900 tracking-tight">
              WindowSafe™ 24-Hour Diurnal Forecast
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Hourly particulate concentration modeling convective solar dispersion vs. nocturnal inversion traps
          </p>
        </div>

        {/* Illuminated Window Pill */}
        <div className="flex items-center space-x-2 self-start sm:self-auto">
          <span className="inline-flex items-center text-xs font-semibold bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full border border-emerald-200 shadow-xs">
            <Sun className="w-3.5 h-3.5 mr-1.5 text-emerald-600 animate-spin-slow" />
            <span>Optimal Window: {cleanAirWindow.displayWindow}</span>
          </span>
        </div>
      </div>

      {/* Main Recharts Container */}
      <div className="h-64 sm:h-72 w-full pt-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 12, right: 10, left: -22, bottom: 0 }}>
            <defs>
              <linearGradient id="breathewiseGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2D6A4F" stopOpacity={0.45} />
                <stop offset="95%" stopColor="#2D6A4F" stopOpacity={0.01} />
              </linearGradient>
            </defs>

            {/* Highlighted Clean Window or Selected Diurnal Segment Zone */}
            <ReferenceArea
              x1={activeX1}
              x2={activeX2}
              strokeOpacity={0.3}
              stroke="#2D6A4F"
              fill="#2D6A4F"
              fillOpacity={0.12}
            />

            {/* Current Hour Indicator */}
            <ReferenceLine
              x={currentHour}
              stroke="#D97706"
              strokeDasharray="3 3"
              strokeWidth={1.5}
              label={{
                value: 'NOW',
                position: 'top',
                fill: '#D97706',
                fontSize: 10,
                fontWeight: 'bold',
              }}
            />

            {/* WHO Daily PM2.5 Guideline (15 µg/m³) Reference */}
            <ReferenceLine
              y={15}
              stroke="#059669"
              strokeDasharray="4 4"
              strokeWidth={1}
              label={{
                value: 'WHO 15µg',
                position: 'right',
                fill: '#059669',
                fontSize: 9,
              }}
            />

            <XAxis
              dataKey="hour"
              tickFormatter={(h) => `${h % 12 === 0 ? 12 : h % 12}${h >= 12 ? 'p' : 'a'}`}
              tick={{ fontSize: 11, fill: '#64748B' }}
              axisLine={{ stroke: '#E2E8F0' }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: '#64748B' }}
              axisLine={{ stroke: '#E2E8F0' }}
              tickLine={false}
              unit="µg"
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="pm25"
              stroke="#2D6A4F"
              strokeWidth={2.5}
              fillOpacity={1}
              fill="url(#breathewiseGradient)"
              activeDot={{ r: 5, fill: '#2D6A4F', stroke: '#FFFFFF', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* 4 Interactive Diurnal Segment Selector Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-stone-100 text-xs">
        <button
          onClick={() => setSelectedSegment('morning')}
          className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer ${
            selectedSegment === 'morning'
              ? 'bg-amber-50/80 border-amber-300 ring-1 ring-amber-400 shadow-2xs'
              : 'bg-stone-50 border-stone-200/60 hover:bg-stone-100'
          }`}
        >
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
            07:00 – 10:00
          </div>
          <div className="font-semibold text-slatecharcoal-900 mt-0.5">
            Morning Inversion
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            Surface exhaust trapped
          </div>
        </button>

        <button
          onClick={() => setSelectedSegment('window')}
          className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer ${
            selectedSegment === 'window'
              ? 'bg-emerald-50/90 border-emerald-300 ring-1 ring-emerald-500 shadow-2xs'
              : 'bg-emerald-50/40 border-emerald-200 hover:bg-emerald-50'
          }`}
        >
          <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
            {cleanAirWindow.displayWindow}
          </div>
          <div className="font-bold text-emerald-900 mt-0.5">
            Solar Mixing Valley
          </div>
          <div className="text-[11px] text-emerald-700 mt-0.5">
            ~{cleanAirWindow.reductionVsPeakPercent}% lower vs peak
          </div>
        </button>

        <button
          onClick={() => setSelectedSegment('evening')}
          className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer ${
            selectedSegment === 'evening'
              ? 'bg-orange-50/80 border-orange-300 ring-1 ring-orange-400 shadow-2xs'
              : 'bg-stone-50 border-stone-200/60 hover:bg-stone-100'
          }`}
        >
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
            18:00 – 21:00
          </div>
          <div className="font-semibold text-slatecharcoal-900 mt-0.5">
            Evening Traffic Surge
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            Commute exhaust re-accumulates
          </div>
        </button>

        <button
          onClick={() => setSelectedSegment('night')}
          className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer ${
            selectedSegment === 'night'
              ? 'bg-indigo-50/80 border-indigo-300 ring-1 ring-indigo-400 shadow-2xs'
              : 'bg-stone-50 border-stone-200/60 hover:bg-stone-100'
          }`}
        >
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
            22:00 – 06:00
          </div>
          <div className="font-semibold text-slatecharcoal-900 mt-0.5">
            Nocturnal Cooling
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            Boundary layer drops to 150m
          </div>
        </button>
      </div>

      {/* Atmospheric Interpretation for Selected Segment */}
      <div className="bg-stone-50/70 p-3 rounded-2xl border border-stone-200/60 text-xs text-slate-600 flex items-start space-x-2">
        <Sun className="w-4 h-4 text-forest-600 shrink-0 mt-0.5" />
        <p className="text-[11px] leading-relaxed">
          <strong>Atmospheric Dynamic:</strong> {segmentNote}
        </p>
      </div>

    </div>
  );
};
