import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useApp } from '../context/AppContext';
import { INDIAN_CITIES_PRESETS } from '../data/cities';

interface CityMarker {
  id: string;
  name: string;
  shortName: string;
  lat: number;
  lon: number;
  aqi: number;
  category: string;
  color: string;
}

const GLOBE_CITIES: CityMarker[] = [
  { id: 'delhi-anand-vihar', name: 'Delhi NCR', shortName: 'Delhi', lat: 28.6469, lon: 77.3160, aqi: 405, category: 'Severe', color: '#EF4444' },
  { id: 'bengaluru-indiranagar', name: 'Bengaluru', shortName: 'Bengaluru', lat: 12.9784, lon: 77.6408, aqi: 97, category: 'Satisfactory', color: '#10B981' },
  { id: 'mumbai-bkc', name: 'Mumbai BKC', shortName: 'Mumbai', lat: 19.0657, lon: 72.8687, aqi: 312, category: 'Very Poor', color: '#F97316' },
  { id: 'kolkata-victoria', name: 'Kolkata', shortName: 'Kolkata', lat: 22.5448, lon: 88.3426, aqi: 337, category: 'Very Poor', color: '#F59E0B' },
  { id: 'chennai-adyar', name: 'Chennai', shortName: 'Chennai', lat: 13.0012, lon: 80.2565, aqi: 70, category: 'Satisfactory', color: '#06B6D4' },
  { id: 'hyderabad-sanathnagar', name: 'Hyderabad', shortName: 'Hyderabad', lat: 17.4578, lon: 78.4428, aqi: 142, category: 'Moderate', color: '#EAB308' },
  { id: 'pune-shivajinagar', name: 'Pune', shortName: 'Pune', lat: 18.5308, lon: 73.8475, aqi: 135, category: 'Moderate', color: '#EAB308' },
];

// Pre-generated continental landmass dot-matrix coordinates (lat, lon in degrees)
function generateLandmassPoints(): Array<[number, number]> {
  const points: Array<[number, number]> = [];
  
  // Helper to add a cluster with density
  const addCluster = (latMin: number, latMax: number, lonMin: number, lonMax: number, step = 4, filter?: (lat: number, lon: number) => boolean) => {
    for (let lat = latMin; lat <= latMax; lat += step) {
      for (let lon = lonMin; lon <= lonMax; lon += step) {
        if (!filter || filter(lat, lon)) {
          points.push([lat, lon]);
        }
      }
    }
  };

  // Indian Subcontinent (High resolution)
  addCluster(8, 35, 68, 92, 2.5, (lat, lon) => {
    // Rough triangle of peninsular India
    if (lat < 22) {
      const centerLon = 78;
      const width = (lat - 8) * 1.5 + 4;
      return Math.abs(lon - centerLon) < width;
    }
    return true;
  });

  // East & Southeast Asia
  addCluster(10, 50, 95, 135, 3.5);
  // Japan & Korea
  addCluster(30, 45, 126, 145, 3);
  // Middle East
  addCluster(12, 38, 40, 65, 3.5);
  // Europe
  addCluster(36, 65, -10, 40, 3.5);
  // Africa
  addCluster(-35, 36, -16, 50, 4, (lat, lon) => {
    if (lat < 0) return lon > 10 && lon < 40;
    return true;
  });
  // Australia
  addCluster(-38, -12, 115, 152, 4);
  // North America
  addCluster(25, 65, -125, -70, 4.5);
  // South America
  addCluster(-50, 10, -80, -35, 4.5, (lat, lon) => {
    if (lat < -20) return lon < -55;
    return true;
  });

  return points;
}

const LANDMASS_POINTS = generateLandmassPoints();

export const InteractiveGlobe: React.FC<{ onExploreCity?: (cityId: string) => void }> = ({ onExploreCity }) => {
  const { selectedCityId, selectCity } = useApp();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Rotation angles (radians)
  // Initial center on India: lat ~ 20°N, lon ~ 78°E
  const [rotY, setRotY] = useState<number>(-78 * (Math.PI / 180));
  const [rotX, setRotX] = useState<number>(20 * (Math.PI / 180));
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [hoveredCity, setHoveredCity] = useState<CityMarker | null>(null);

  const rotYRef = useRef(rotY);
  const rotXRef = useRef(rotX);
  const isDraggingRef = useRef(isDragging);
  const hoveredCityRef = useRef(hoveredCity);

  rotYRef.current = rotY;
  rotXRef.current = rotX;
  isDraggingRef.current = isDragging;
  hoveredCityRef.current = hoveredCity;

  // Auto-center on selected city if prop changes
  const centerOnCity = useCallback((city: CityMarker) => {
    const targetRotY = -city.lon * (Math.PI / 180);
    const targetRotX = city.lat * (Math.PI / 180);
    setRotY(targetRotY);
    setRotX(targetRotX);
  }, []);

  // Main Canvas Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let pulsePhase = 0;

    const render = () => {
      // Auto-rotation when not dragging
      if (!isDraggingRef.current) {
        setRotY((prev) => prev - 0.002);
      }
      pulsePhase = (pulsePhase + 0.04) % (Math.PI * 2);

      const dpr = window.devicePixelRatio || 1;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const R = Math.min(width, height) * 0.42;

      const currentRotY = rotYRef.current;
      const currentRotX = rotXRef.current;

      // 1. Outer Deep Atmospheric Glow
      const glowGrad = ctx.createRadialGradient(cx, cy, R * 0.8, cx, cy, R * 1.35);
      glowGrad.addColorStop(0, 'rgba(30, 58, 138, 0.4)');
      glowGrad.addColorStop(0.5, 'rgba(16, 185, 129, 0.15)');
      glowGrad.addColorStop(1, 'rgba(10, 15, 29, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.35, 0, Math.PI * 2);
      ctx.fill();

      // 2. Dark Planetary Body
      const sphereGrad = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.35, R * 0.1, cx, cy, R);
      sphereGrad.addColorStop(0, '#1E293B');
      sphereGrad.addColorStop(0.5, '#0F172A');
      sphereGrad.addColorStop(0.9, '#0A0F1D');
      sphereGrad.addColorStop(1, '#050811');
      ctx.fillStyle = sphereGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fill();

      // 3. Atmospheric Rim Highlight
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.45)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // 3D Projection Math Helper
      const project = (latDeg: number, lonDeg: number) => {
        const latRad = latDeg * (Math.PI / 180);
        const lonRad = lonDeg * (Math.PI / 180);

        // Spherical to 3D Cartesian
        const x0 = R * Math.cos(latRad) * Math.sin(lonRad + currentRotY);
        const y0 = -R * Math.sin(latRad);
        const z0 = R * Math.cos(latRad) * Math.cos(lonRad + currentRotY);

        // Pitch tilt by rotX
        const x = x0;
        const y = y0 * Math.cos(currentRotX) - z0 * Math.sin(currentRotX);
        const z = y0 * Math.sin(currentRotX) + z0 * Math.cos(currentRotX);

        return { x: cx + x, y: cy + y, z };
      };

      // 4. Parallels & Meridians Graticule Lines
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.12)';
      ctx.lineWidth = 0.75;

      // Latitude circles (-60, -30, 0, 30, 60)
      [-60, -30, 0, 30, 60].forEach((lat) => {
        ctx.beginPath();
        let first = true;
        for (let lon = -180; lon <= 180; lon += 5) {
          const pt = project(lat, lon);
          if (pt.z > 0) {
            if (first) {
              ctx.moveTo(pt.x, pt.y);
              first = false;
            } else {
              ctx.lineTo(pt.x, pt.y);
            }
          } else {
            first = true;
          }
        }
        ctx.stroke();
      });

      // Longitude meridians (every 45 deg)
      for (let lon = -180; lon < 180; lon += 45) {
        ctx.beginPath();
        let first = true;
        for (let lat = -80; lat <= 80; lat += 5) {
          const pt = project(lat, lon);
          if (pt.z > 0) {
            if (first) {
              ctx.moveTo(pt.x, pt.y);
              first = false;
            } else {
              ctx.lineTo(pt.x, pt.y);
            }
          } else {
            first = true;
          }
        }
        ctx.stroke();
      }

      // 5. Continental Dot-Matrix Landmass Points
      LANDMASS_POINTS.forEach(([lat, lon]) => {
        const pt = project(lat, lon);
        if (pt.z > 0) {
          // Perspective opacity based on z depth
          const depthNorm = Math.max(0.1, pt.z / R);
          ctx.fillStyle = `rgba(148, 163, 184, ${depthNorm * 0.45})`;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 1.2 * depthNorm, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // 6. City Markers (Glow rings, pulse, and labels)
      GLOBE_CITIES.forEach((city) => {
        const pt = project(city.lat, city.lon);
        if (pt.z > 0) {
          const isSelected = city.id === selectedCityId;
          const isHovered = hoveredCityRef.current?.id === city.id;
          const depthAlpha = Math.max(0.4, pt.z / R);

          // Pulsating outer warning ring
          const pulseR = 4 + Math.sin(pulsePhase) * 3 + (isSelected ? 4 : 0);
          ctx.strokeStyle = city.color;
          ctx.lineWidth = isSelected ? 2 : 1.2;
          ctx.globalAlpha = depthAlpha * (0.4 + Math.sin(pulsePhase) * 0.3);
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, pulseR, 0, Math.PI * 2);
          ctx.stroke();

          // Solid Center Node
          ctx.globalAlpha = depthAlpha;
          ctx.fillStyle = city.color;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, isSelected ? 4.5 : 3, 0, Math.PI * 2);
          ctx.fill();

          // City Label & AQI Badge
          ctx.font = isSelected ? 'bold 11px Inter, sans-serif' : '10px Inter, sans-serif';
          ctx.fillStyle = isSelected ? '#FFFFFF' : 'rgba(241, 245, 249, 0.85)';
          const textX = pt.x + 8;
          const textY = pt.y + 3;
          ctx.fillText(city.shortName, textX, textY);

          // Small AQI pill badge
          ctx.font = 'bold 9px Inter, monospace';
          ctx.fillStyle = city.color;
          ctx.fillText(`${city.aqi}`, textX + ctx.measureText(city.shortName).width + 5, textY);
          ctx.globalAlpha = 1.0;
        }
      });

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [selectedCityId]);

  // Mouse & Touch Interaction Handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (isDragging) {
      const dx = e.clientX - dragStart.x;
      const dy = e.clientY - dragStart.y;
      setRotY((prev) => prev + dx * 0.005);
      setRotX((prev) => Math.max(-0.9, Math.min(0.9, prev - dy * 0.005)));
      setDragStart({ x: e.clientX, y: e.clientY });
    } else {
      // Check hit test on city markers
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const R = Math.min(rect.width, rect.height) * 0.42;

      let found: CityMarker | null = null;
      for (const city of GLOBE_CITIES) {
        const latRad = city.lat * (Math.PI / 180);
        const lonRad = city.lon * (Math.PI / 180);
        const x0 = R * Math.cos(latRad) * Math.sin(lonRad + rotYRef.current);
        const y0 = -R * Math.sin(latRad);
        const z0 = R * Math.cos(latRad) * Math.cos(lonRad + rotYRef.current);
        const y = y0 * Math.cos(rotXRef.current) - z0 * Math.sin(rotXRef.current);
        const z = y0 * Math.sin(rotXRef.current) + z0 * Math.cos(rotXRef.current);

        if (z > 0) {
          const screenX = cx + x0;
          const screenY = cy + y;
          const dist = Math.hypot(mouseX - screenX, mouseY - screenY);
          if (dist < 22) {
            found = city;
            break;
          }
        }
      }
      setHoveredCity(found);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}

    // If it was a quick click without much drag, select hovered city
    if (hoveredCity) {
      selectCity(hoveredCity.id);
      centerOnCity(hoveredCity);
    }
  };

  const currentCityData = GLOBE_CITIES.find((c) => c.id === selectedCityId) || GLOBE_CITIES[0];

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
      {/* 3D Canvas */}
      <div className="relative w-full aspect-square max-w-[500px] sm:max-w-[560px] lg:max-w-[620px] mx-auto cursor-grab active:cursor-grabbing select-none">
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className="w-full h-full touch-none"
        />

        {/* Ambient Top Glow Tag */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/80 text-[11px] text-slate-300 font-medium backdrop-blur-md shadow-lg pointer-events-none flex items-center space-x-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Interactive Earth Telemetry • Drag to Rotate</span>
        </div>
      </div>

      {/* Quick City Navigation Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-2 z-10 px-4">
        {GLOBE_CITIES.slice(0, 5).map((city) => {
          const isSelected = city.id === selectedCityId;
          return (
            <button
              key={city.id}
              onClick={() => {
                selectCity(city.id);
                centerOnCity(city);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center space-x-2 ${
                isSelected
                  ? 'bg-slate-800 text-white border border-slate-600 shadow-md ring-1 ring-forest-400/50'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200 hover:bg-slate-800/80'
              }`}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: city.color }} />
              <span>{city.shortName}</span>
              <span className="text-[10px] font-mono opacity-80">{city.aqi}</span>
            </button>
          );
        })}
      </div>

      {/* Selected City Float HUD Card */}
      <div className="w-full max-w-md mt-6 p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-700/70 backdrop-blur-md shadow-2xl flex items-center justify-between gap-4 z-10">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: currentCityData.color }} />
            <h4 className="font-bold text-sm sm:text-base text-white tracking-tight">
              {currentCityData.name}
            </h4>
            <span
              className="text-[10px] font-extrabold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: `${currentCityData.color}20`, color: currentCityData.color }}
            >
              {currentCityData.category}
            </span>
          </div>
          <p className="text-xs text-slate-400">
            CPCB NAQI Index: <strong className="text-white font-mono">{currentCityData.aqi}</strong> • Model Telemetry Active
          </p>
        </div>

        <button
          onClick={() => onExploreCity && onExploreCity(currentCityData.id)}
          className="px-4 py-2.5 rounded-xl bg-forest-600 hover:bg-forest-500 text-white text-xs font-bold transition-all shadow-lg hover:shadow-forest-500/25 cursor-pointer whitespace-nowrap shrink-0 flex items-center space-x-1.5"
        >
          <span>Explore Air</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
};
