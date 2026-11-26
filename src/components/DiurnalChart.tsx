import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { getIndianStandardTimeHour } from '../engines/indoorCoach';
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
import { Leaf, Sun, Clock } from 'lucide-react';

export const DiurnalChart: React.FC = () => {
  const { telemetry, cleanAirWindow } = useApp();
  const data = telemetry.hourly;

  const currentHour = getIndianStandardTimeHour();
  const [selectedSegment, setSelectedSegment] = useState<'morning' | 'window' | 'evening' | 'night'>('window');

  // Active highlight boundaries
  let activeX1 = cleanAirWindow.startHour;
  let activeX2 = cleanAirWindow.endHour;

  if (selectedSegment === 'morning') {
    activeX1 = 7;
    activeX2 = 10;
  } else if (selectedSegment === 'evening') {
    activeX1 = 18;
    activeX2 = 21;
  } else if (selectedSegment === 'night') {
    activeX1 = 22;
    activeX2 = 23;
  }

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const pt = payload[0].payload;
      const hourFormatted = `${pt.hour % 12 === 0 ? 12 : pt.hour % 12}:00 ${pt.hour >= 12 ? 'PM' : 'AM'}`;
      const isWindow = pt.hour >= cleanAirWindow.startHour && pt.hour <= cleanAirWindow.endHour;

      return (
        <div className="bg-slatecharcoal-900 text-white p-3 rounded-2xl shadow-float text-xs space-y-1.5 border border-slate-700/80 max-w-[210px] backdrop-blur-md">
          <div className="font-semibold text-slate-200 flex items-center justify-between">
            <span className="font-mono text-xs">{hourFormatted}</span>
            {isWindow && (
              <span className="text-[10px] bg-emerald-500 text-white px-2 py-0.5 rounded-full font-bold shadow-xs">
                OPTIMAL
              </span>
            )}
          </div>
          <div className="flex justify-between items-baseline pt-1 border-t border-slate-800">
            <span className="text-slate-400">PM2.5:</span>
            <span className="font-black text-sm text-emerald-400">{pt.pm25} µg/m³</span>
          </div>
          <div className="flex justify-between items-center text-[10px] text-slate-400">
            <span>CPCB NAQI:</span>
            <span className="font-bold text-slate-100">{pt.cpcbAqi}</span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="rounded-3xl bg-white border border-stone-200/80 p-4 sm:p-5 shadow-2xs flex flex-col justify-between h-full">
      
      {/* Header (Exact Match to Image 2 Desktop and Mobile) */}
      <div className="flex items-center justify-between pb-2 border-b border-stone-100">
        <div className="flex items-center space-x-2.5">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shrink-0">
            <Leaf className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
          <div>
            <h3 className="text-xs sm:text-base font-bold text-slatecharcoal-900 tracking-tight">
              <span className="sm:hidden">WindowSafe™</span>
              <span className="hidden sm:inline">WindowSafe™ 24-Hour Diurnal Forecast</span>
            </h3>
            <p className="hidden sm:block text-[11px] text-slate-500 mt-0.5">
              Find the safest time to ventilate based on daily pollution shifts
            </p>
          </div>
        </div>
        <span className="sm:hidden text-slate-400 text-xs font-bold">›</span>
      </div>

      {/* Main Curved Diurnal Chart with Highlighted Optimal Window (Exact match to Image 2) */}
      <div className="relative h-40 sm:h-44 w-full pt-2">
        
        {/* Floating Dynamic Window Badge */}
        {(() => {
          const isHazardous = cleanAirWindow.windowStatus === 'HAZARDOUS_LIMIT_EXERTION';
          const isElevated = cleanAirWindow.windowStatus === 'UNHEALTHY_ELEVATED';
          const badgeBg = isHazardous
            ? 'bg-rose-50 border-rose-300 text-rose-800'
            : isElevated
            ? 'bg-amber-50 border-amber-300 text-amber-800'
            : 'bg-emerald-50 border-emerald-200 text-emerald-800';
          const iconColor = isHazardous ? 'text-rose-600' : isElevated ? 'text-amber-600' : 'text-emerald-600';
          
          const isPast = currentHour > cleanAirWindow.endHour;
          const isCurrent = currentHour >= cleanAirWindow.startHour && currentHour <= cleanAirWindow.endHour;
          
          let labelPrefix = 'Optimal Window';
          if (isHazardous) {
            labelPrefix = isPast ? 'Diurnal Minimum (Passed)' : 'Diurnal Minimum (Severe Smog)';
          } else if (isElevated) {
            labelPrefix = isPast ? 'Lower Exposure Dip (Passed)' : 'Lower Exposure Window';
          } else {
            labelPrefix = isCurrent ? 'Optimal Window (Active Now)' : isPast ? 'Diurnal Valley (Passed)' : 'Upcoming Optimal Window';
          }

          return (
            <div className={`absolute top-1 left-1/2 -translate-x-1/2 z-10 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border text-[10px] sm:text-[11px] font-bold shadow-xs flex items-center space-x-1 whitespace-nowrap ${badgeBg}`}>
              <Sun className={`w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 ${iconColor}`} />
              <span>{labelPrefix}: {cleanAirWindow.displayWindow || '1:00 PM – 2:00 PM'}</span>
              <span className={`hidden sm:inline ml-1 ${iconColor}`}>
                ↓ ~{typeof cleanAirWindow.reductionVsPeakPercent === 'number' && Number.isFinite(cleanAirWindow.reductionVsPeakPercent) ? cleanAirWindow.reductionVsPeakPercent : 0}% vs peak
              </span>
            </div>
          );
        })()}

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 28, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="diurnalGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EF4444" stopOpacity={0.4} />
                <stop offset="50%" stopColor="#F59E0B" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            {/* Highlighted Clean Window Zone */}
            <ReferenceArea
              x1={activeX1}
              x2={activeX2}
              strokeOpacity={0.25}
              stroke={cleanAirWindow.windowStatus === 'HAZARDOUS_LIMIT_EXERTION' ? '#EF4444' : cleanAirWindow.windowStatus === 'UNHEALTHY_ELEVATED' ? '#F59E0B' : '#10B981'}
              fill={cleanAirWindow.windowStatus === 'HAZARDOUS_LIMIT_EXERTION' ? '#EF4444' : cleanAirWindow.windowStatus === 'UNHEALTHY_ELEVATED' ? '#F59E0B' : '#10B981'}
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
                position: 'insideTop',
                fill: '#D97706',
                fontSize: 9,
                fontWeight: 'bold',
                offset: 6,
              }}
            />

            <XAxis
              dataKey="hour"
              tickFormatter={(h) => `${h % 12 === 0 ? 12 : h % 12} ${h >= 12 ? 'PM' : 'AM'}`}
              tick={{ fontSize: 10, fill: '#64748B' }}
              axisLine={{ stroke: '#E2E8F0' }}
              tickLine={false}
              ticks={[6, 8, 10, 12, 14, 16, 18, 20, 22]}
            />
            <YAxis
              tick={{ fontSize: 10, fill: '#64748B' }}
              axisLine={{ stroke: '#E2E8F0' }}
              tickLine={false}
              domain={[0, (dataMax: number) => Math.max(250, Math.ceil(dataMax * 1.15))]}
              unit=""
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="pm25"
              stroke="#EF4444"
              strokeWidth={2.5}
              fillOpacity={1}
              fill="url(#diurnalGradient)"
              activeDot={{ r: 5, fill: '#10B981', stroke: '#FFFFFF', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};
