import React from 'react';
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
import { Clock } from 'lucide-react';

export const DiurnalChart: React.FC = () => {
  const { telemetry, cleanAirWindow } = useApp();
  const data = telemetry.hourly;

  const currentHour = new Date().getHours();

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const pt = payload[0].payload;
      const hourFormatted = `${pt.hour % 12 === 0 ? 12 : pt.hour % 12}:00 ${pt.hour >= 12 ? 'PM' : 'AM'}`;
      const isWindow = pt.hour >= cleanAirWindow.startHour && pt.hour <= cleanAirWindow.endHour;

      return (
        <div className="bg-slatecharcoal-900 text-white p-3 rounded-xl shadow-lg text-xs space-y-1.5 border border-slate-700 max-w-[210px]">
          <div className="font-semibold text-slate-300 flex items-center justify-between">
            <span>{hourFormatted}</span>
            {isWindow && (
              <span className="text-[10px] bg-forest-500 text-white px-1.5 py-0.5 rounded font-bold">
                LOWER EXPOSURE
              </span>
            )}
          </div>
          <div className="flex justify-between items-center text-sm pt-1 border-t border-slate-800">
            <span className="text-slate-400">PM2.5:</span>
            <span className="font-bold text-emerald-400">{pt.pm25} µg/m³</span>
          </div>
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-slate-400">CPCB NAQI:</span>
            <span className="font-medium text-slate-200">{pt.cpcbAqi}</span>
          </div>
          {pt.o3 != null && (
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-slate-400">Ozone (O3):</span>
              <span className="font-medium text-amber-300">{pt.o3} µg/m³</span>
            </div>
          )}
          {pt.boundaryLayerHeight != null ? (
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-slate-400">Mixing Height:</span>
              <span className="font-medium text-amber-300">{pt.boundaryLayerHeight} m</span>
            </div>
          ) : (
            <div className="text-[10px] text-slate-500 pt-0.5">
              PBL: Unobserved in CAMS grid
            </div>
          )}
          <div className="text-[10px] text-slate-400 pt-1 italic">
            {isWindow
              ? 'Convective solar mixing window.'
              : pt.hour < 11
              ? 'Morning inversion layer trapping surface exhaust.'
              : 'Evening traffic accumulation and nocturnal cooling.'}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-5 sm:p-6 rounded-2xl border border-cream-300 shadow-sm space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-forest-600" />
            <h2 className="text-base sm:text-lg font-bold text-slatecharcoal-900 tracking-tight">
              24-Hour Diurnal Dispersion Curve
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Hourly particulate concentration curve showing convective afternoon mixing vs. morning and night smog traps
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center space-x-3 text-xs">
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 rounded-sm bg-forest-100 border border-forest-500" />
            <span className="text-slate-600">Lower Exposure Window</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-0.5 bg-amber-600" />
            <span className="text-slate-600">Current Hour</span>
          </div>
        </div>
      </div>

      {/* Recharts Area Container */}
      <div className="h-64 sm:h-72 w-full pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="pm25Gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2D6A4F" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#2D6A4F" stopOpacity={0.02} />
              </linearGradient>
            </defs>

            {/* Highlighted Clean-Air Window Zone */}
            <ReferenceArea
              x1={cleanAirWindow.startHour}
              x2={cleanAirWindow.endHour}
              strokeOpacity={0.2}
              fill="#2D6A4F"
              fillOpacity={0.08}
            />

            {/* Current Hour Indicator */}
            <ReferenceLine
              x={currentHour}
              stroke="#D97706"
              strokeDasharray="3 3"
              label={{
                value: 'NOW',
                position: 'top',
                fill: '#D97706',
                fontSize: 10,
                fontWeight: 'bold',
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
              fill="url(#pm25Gradient)"
              activeDot={{ r: 5, fill: '#2D6A4F', stroke: '#FFFFFF', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Explanatory Footnote */}
      <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-cream-200">
        <span>Morning Rush Inversion: 07:00 – 10:00 (Vehicle exhaust + nocturnal surface boundary)</span>
        <span className="text-forest-700 font-medium">Optimal Window: {cleanAirWindow.displayWindow}</span>
        <span>Evening Traffic Inversion: 20:00 – Midnight</span>
      </div>
    </div>
  );
};
