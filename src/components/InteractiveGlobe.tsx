import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import { useApp } from '../context/AppContext';

export interface GlobeCity {
  id: string;
  name: string;
  country: string;
  lat: number;
  lon: number;
  aqi: number;
  category: string;
  color: string;
  temp: number;
  humidity: number;
  windSpeed: number;
  description: string;
}

export const GLOBE_CITIES: GlobeCity[] = [
  {
    id: 'delhi-anand-vihar',
    name: 'Delhi NCR',
    country: 'India',
    lat: 28.6469,
    lon: 77.3160,
    aqi: 405,
    category: 'Severe',
    color: '#EF4444', // Red
    temp: 19,
    humidity: 68,
    windSpeed: 6.0,
    description: 'Severe winter smog with thermal inversion',
  },
  {
    id: 'bengaluru-indiranagar',
    name: 'Bengaluru',
    country: 'India',
    lat: 12.9784,
    lon: 77.6408,
    aqi: 78,
    category: 'Satisfactory',
    color: '#10B981', // Green
    temp: 24,
    humidity: 52,
    windSpeed: 13.2,
    description: 'Moderate plateau ventilation with steady airflow',
  },
  {
    id: 'mumbai-bkc',
    name: 'Mumbai BKC',
    country: 'India',
    lat: 19.0657,
    lon: 72.8687,
    aqi: 312,
    category: 'Very Poor',
    color: '#EF4444', // Red
    temp: 28,
    humidity: 74,
    windSpeed: 11.0,
    description: 'Coastal humidity with evening sea breeze',
  },
  {
    id: 'kolkata-victoria',
    name: 'Kolkata',
    country: 'India',
    lat: 22.5448,
    lon: 88.3426,
    aqi: 337,
    category: 'Very Poor',
    color: '#EF4444', // Red
    temp: 23,
    humidity: 78,
    windSpeed: 7.0,
    description: 'Gangetic basin winter stagnation',
  },
  {
    id: 'chennai-adyar',
    name: 'Chennai',
    country: 'India',
    lat: 13.0012,
    lon: 80.2565,
    aqi: 70,
    category: 'Satisfactory',
    color: '#10B981', // Green
    temp: 29,
    humidity: 82,
    windSpeed: 18.0,
    description: 'Maritime sea-breeze ventilation',
  },
  {
    id: 'hyderabad-sanathnagar',
    name: 'Hyderabad',
    country: 'India',
    lat: 17.4578,
    lon: 78.4428,
    aqi: 132,
    category: 'Moderate',
    color: '#F59E0B', // Amber
    temp: 26,
    humidity: 55,
    windSpeed: 9.5,
    description: 'Deccan plateau moderate air quality',
  },
  {
    id: 'pune-shivajinagar',
    name: 'Pune',
    country: 'India',
    lat: 18.5308,
    lon: 73.8475,
    aqi: 112,
    category: 'Moderate',
    color: '#F59E0B', // Amber
    temp: 25,
    humidity: 58,
    windSpeed: 8.0,
    description: 'Western Ghats rain-shadow valley',
  },
  {
    id: 'mediterranean',
    name: 'Athens',
    country: 'Greece',
    lat: 37.9838,
    lon: 23.7275,
    aqi: 90,
    category: 'Satisfactory',
    color: '#10B981', // Green
    temp: 22,
    humidity: 48,
    windSpeed: 14.0,
    description: 'Mediterranean coastal breeze',
  },
  {
    id: 'central-africa',
    name: 'Kinshasa',
    country: 'DR Congo',
    lat: -4.4419,
    lon: 15.2663,
    aqi: 78,
    category: 'Satisfactory',
    color: '#10B981', // Green
    temp: 28,
    humidity: 76,
    windSpeed: 8.5,
    description: 'Congo basin tropical circulation',
  },
  {
    id: 'south-africa',
    name: 'Cape Town',
    country: 'South Africa',
    lat: -33.9249,
    lon: 18.4241,
    aqi: 90,
    category: 'Satisfactory',
    color: '#10B981', // Green
    temp: 20,
    humidity: 62,
    windSpeed: 16.0,
    description: 'Atlantic coastal marine layer',
  },
  {
    id: 'jakarta-indonesia',
    name: 'Jakarta',
    country: 'Indonesia',
    lat: -6.2088,
    lon: 106.8456,
    aqi: 78,
    category: 'Satisfactory',
    color: '#10B981',
    temp: 34,
    humidity: 50,
    windSpeed: 13.2,
    description: 'Tropical urban coastal flow',
  },
];

// Helper: Convert lat/lon to 3D Cartesian coordinates on sphere of radius R
function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

// Generate realistic procedural Earth texture with continents, elevation relief, and night city lights
function createEarthCanvasTexture(): THREE.CanvasTexture {
  const width = 2048;
  const height = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return new THREE.CanvasTexture(canvas);

  // Deep ocean blue-teal base
  const oceanGrad = ctx.createLinearGradient(0, 0, 0, height);
  oceanGrad.addColorStop(0, '#041026');
  oceanGrad.addColorStop(0.3, '#06203D');
  oceanGrad.addColorStop(0.5, '#082B4E');
  oceanGrad.addColorStop(0.7, '#06203D');
  oceanGrad.addColorStop(1, '#041026');
  ctx.fillStyle = oceanGrad;
  ctx.fillRect(0, 0, width, height);

  // Continental landmasses coordinates helper (lat, lon) -> (x, y)
  const mapPoint = (lat: number, lon: number): [number, number] => {
    const x = ((lon + 180) / 360) * width;
    const y = ((90 - lat) / 180) * height;
    return [x, y];
  };

  const drawLandmass = (coords: Array<[number, number]>, fill = '#1A4D43', stroke = '#246B5C') => {
    ctx.beginPath();
    coords.forEach(([lat, lon], idx) => {
      const [x, y] = mapPoint(lat, lon);
      if (idx === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.strokeStyle = stroke;
    ctx.lineWidth = 2;
    ctx.stroke();
  };

  // Indian Subcontinent
  drawLandmass([
    [36, 74], [35, 78], [32, 79], [28, 88], [27, 89], [22, 90], [21, 87],
    [16, 82], [13, 80], [10, 80], [8, 77], [10, 76], [15, 74], [19, 73],
    [23, 69], [25, 68], [30, 71], [33, 72], [36, 74]
  ], '#205E50', '#2E806D');

  // Sri Lanka
  drawLandmass([[9.5, 80.5], [8.5, 81.5], [6.5, 81.5], [6.5, 80], [8, 79.5]], '#205E50', '#2E806D');

  // Southeast Asia & Indonesia
  drawLandmass([
    [22, 98], [20, 107], [15, 108], [11, 103], [8, 103], [1, 104], [6, 100], [15, 96], [22, 98]
  ], '#1B5446');
  drawLandmass([[-5, 105], [-6, 106], [-7.5, 110], [-8, 114], [-7, 114], [-6, 108]], '#1B5446');
  drawLandmass([[5, 115], [4, 118], [0, 118], [-3, 115], [-2, 110], [1, 109]], '#1B5446');

  // East Asia & China
  drawLandmass([
    [40, 120], [42, 130], [38, 128], [32, 122], [22, 114], [22, 108], [28, 98], [38, 90], [48, 85], [45, 110], [40, 120]
  ], '#225B4C');

  // Middle East & Arabian Peninsula
  drawLandmass([
    [32, 35], [30, 48], [25, 56], [23, 59], [15, 54], [12, 44], [16, 42], [28, 34], [32, 35]
  ], '#3B4E38', '#4C6648');

  // Africa
  drawLandmass([
    [36, 10], [32, 32], [22, 37], [12, 51], [5, 48], [-10, 40], [-25, 33], [-34, 19], [-30, 17],
    [-15, 12], [0, 9], [5, 2], [5, -5], [10, -14], [15, -17], [28, -13], [36, -5], [36, 10]
  ], '#26594B', '#347564');

  // Europe
  drawLandmass([
    [36, -6], [43, -9], [48, -5], [52, 2], [55, 8], [58, 15], [60, 28], [55, 38], [45, 36], [40, 26], [38, 22], [36, 15], [36, -6]
  ], '#2A6658', '#388270');

  // Australia
  drawLandmass([
    [-12, 131], [-15, 136], [-12, 142], [-24, 153], [-37, 150], [-38, 140], [-35, 116], [-22, 114], [-15, 124], [-12, 131]
  ], '#38573E', '#4B7354');

  // Americas (Simplified contours)
  drawLandmass([
    [50, -125], [55, -95], [45, -65], [30, -80], [25, -97], [30, -115], [40, -124], [50, -125]
  ], '#22594D');
  drawLandmass([
    [10, -75], [5, -52], [-10, -36], [-23, -43], [-40, -62], [-55, -68], [-35, -72], [-5, -80], [10, -75]
  ], '#1E5246');

  // Add luminous city light dots in populated regions
  ctx.fillStyle = '#FDE047';
  const addCityGlow = (lat: number, lon: number, r: number) => {
    const [x, y] = mapPoint(lat, lon);
    const grad = ctx.createRadialGradient(x, y, 0, x, y, r * 4);
    grad.addColorStop(0, 'rgba(254, 240, 138, 0.9)');
    grad.addColorStop(0.3, 'rgba(245, 158, 11, 0.5)');
    grad.addColorStop(1, 'rgba(245, 158, 11, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, r * 4, 0, Math.PI * 2);
    ctx.fill();
  };

  // Major Indian and Asian city lights clusters
  addCityGlow(28.6, 77.2, 5); // Delhi
  addCityGlow(19.0, 72.8, 5); // Mumbai
  addCityGlow(13.0, 77.6, 4); // Bengaluru
  addCityGlow(22.5, 88.3, 4); // Kolkata
  addCityGlow(13.0, 80.2, 4); // Chennai
  addCityGlow(17.4, 78.4, 3.5); // Hyderabad
  addCityGlow(18.5, 73.8, 3.5); // Pune
  addCityGlow(25.0, 85.0, 3); // Gangetic belt
  addCityGlow(31.5, 74.3, 3); // Lahore/Punjab
  addCityGlow(-6.2, 106.8, 4); // Jakarta
  addCityGlow(1.3, 103.8, 3.5); // Singapore
  addCityGlow(13.7, 100.5, 3.5); // Bangkok
  addCityGlow(31.2, 121.4, 4); // Shanghai
  addCityGlow(35.6, 139.6, 4.5); // Tokyo
  addCityGlow(25.2, 55.3, 3.5); // Dubai
  addCityGlow(51.5, -0.1, 4); // London

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

export const InteractiveGlobe: React.FC<{
  onExploreCity?: (cityId: string) => void;
  activeView?: 'globe' | 'map';
  onToggleView?: (view: 'globe' | 'map') => void;
}> = ({ onExploreCity, activeView = 'globe', onToggleView }) => {
  const { selectedCityId, selectCity } = useApp();
  const [activePinId, setActivePinId] = useState<string>('jakarta-indonesia');
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasMountRef = useRef<HTMLDivElement>(null);

  // Screen-projected positions for HTML markers
  const [markerPositions, setMarkerPositions] = useState<
    Array<{ city: GlobeCity; x: number; y: number; isVisible: boolean }>
  >([]);

  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const isDraggingRef = useRef<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Three.js internal objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const globeGroupRef = useRef<THREE.Group | null>(null);
  const cloudMeshRef = useRef<THREE.Mesh | null>(null);

  const GLOBE_RADIUS = 2.4;

  // Initialize Three.js scene
  useEffect(() => {
    const container = canvasMountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.6);
    cameraRef.current = camera;

    // 2. WebGL Renderer with High-DPI & Antialiasing
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 3. Globe Group containing Earth, Atmosphere, and Orbitals
    const globeGroup = new THREE.Group();
    // Default rotation focused on India and Indian Ocean (lat ~18°N, lon ~78°E)
    globeGroup.rotation.y = THREE.MathUtils.degToRad(-78);
    globeGroup.rotation.x = THREE.MathUtils.degToRad(18);
    scene.add(globeGroup);
    globeGroupRef.current = globeGroup;

    // 4. Photorealistic Earth Sphere with High-Resolution NASA Blue Marble Texture
    const textureLoader = new THREE.TextureLoader();
    const earthGeometry = new THREE.SphereGeometry(GLOBE_RADIUS, 64, 64);
    const baseUrl = import.meta.env.BASE_URL || '/';
    const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    
    // Load high-res NASA Blue Marble texture
    const earthTexture = textureLoader.load(`${cleanBase}textures/earth-blue-marble.jpg`);
    earthTexture.colorSpace = THREE.SRGBColorSpace;
    const specularMap = textureLoader.load(`${cleanBase}textures/earth-specular.jpg`);

    const earthMaterial = new THREE.MeshPhongMaterial({
      map: earthTexture,
      specularMap: specularMap,
      specular: new THREE.Color(0x224455),
      shininess: 18,
    });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    globeGroup.add(earthMesh);

    // 5. Realistic Night City Lights Mesh (Blended on night side)
    const lightsTexture = textureLoader.load(`${cleanBase}textures/earth-lights.png`);
    const lightsMaterial = new THREE.MeshBasicMaterial({
      map: lightsTexture,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.85,
    });
    const lightsMesh = new THREE.Mesh(new THREE.SphereGeometry(GLOBE_RADIUS * 1.002, 64, 64), lightsMaterial);
    globeGroup.add(lightsMesh);

    // 6. Photorealistic Atmospheric Cloud Layer
    const cloudTexture = textureLoader.load(`${cleanBase}textures/earth-clouds.png`);
    cloudTexture.colorSpace = THREE.SRGBColorSpace;
    const cloudGeometry = new THREE.SphereGeometry(GLOBE_RADIUS * 1.015, 64, 64);
    const cloudMaterial = new THREE.MeshStandardMaterial({
      map: cloudTexture,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      roughness: 0.9,
    });
    const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
    globeGroup.add(cloudMesh);
    cloudMeshRef.current = cloudMesh;

    // 7. Atmospheric Glow Outer Shell
    const glowGeometry = new THREE.SphereGeometry(GLOBE_RADIUS * 1.09, 64, 64);
    const glowMaterial = new THREE.ShaderMaterial({
      uniforms: {
        glowColor: { value: new THREE.Color(0x38bdf8) },
      },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        uniform vec3 glowColor;
        void main() {
          float intensity = pow(0.68 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.6);
          gl_FragColor = vec4(glowColor, intensity * 0.85);
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
    });
    const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
    globeGroup.add(glowMesh);

    // 7. Glowing Orbital Rings around the Earth (Image 1 aesthetic)
    const createOrbitalRing = (radiusX: number, radiusY: number, tiltX: number, tiltY: number, colorHex: number) => {
      const curve = new THREE.EllipseCurve(0, 0, radiusX, radiusY, 0, 2 * Math.PI, false, 0);
      const points = curve.getPoints(100);
      const ringGeom = new THREE.BufferGeometry().setFromPoints(
        points.map((p) => new THREE.Vector3(p.x, p.y, 0))
      );
      const ringMat = new THREE.LineBasicMaterial({
        color: colorHex,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending,
      });
      const ringLine = new THREE.Line(ringGeom, ringMat);
      ringLine.rotation.x = tiltX;
      ringLine.rotation.y = tiltY;
      return ringLine;
    };

    globeGroup.add(createOrbitalRing(GLOBE_RADIUS * 1.45, GLOBE_RADIUS * 1.45, Math.PI / 3, Math.PI / 6, 0x10b981));
    globeGroup.add(createOrbitalRing(GLOBE_RADIUS * 1.35, GLOBE_RADIUS * 1.35, -Math.PI / 4, Math.PI / 4, 0x38bdf8));

    // 8. Lighting System (Sunrise flare effect from top-left)
    const ambientLight = new THREE.AmbientLight(0x0f172a, 1.2);
    scene.add(ambientLight);

    // Primary Sun directional light (matches sunrise flare on top-left of Image 1)
    const sunLight = new THREE.DirectionalLight(0xfffbeb, 3.2);
    sunLight.position.set(-6, 4, 5);
    scene.add(sunLight);

    // Subtle blue rim light from bottom-right
    const rimLight = new THREE.DirectionalLight(0x0284c7, 1.8);
    rimLight.position.set(6, -3, -2);
    scene.add(rimLight);

    // 9. Resize Observer
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // 10. Animation & Render Loop
    let animId: number;
    let frameCount = 0;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Subtle slow auto-rotation when user is not dragging
      if (!isDraggingRef.current && globeGroup) {
        globeGroup.rotation.y -= 0.0012;
      }
      if (cloudMesh) {
        cloudMesh.rotation.y -= 0.0016;
      }

      // Project 3D City Coordinates onto 2D Canvas Screen Pixels (throttled to every 2nd frame)
      frameCount++;
      if (frameCount % 2 === 0 && container && camera && globeGroup) {
        const rect = container.getBoundingClientRect();
        const positions: Array<{ city: GlobeCity; x: number; y: number; isVisible: boolean }> = [];

        GLOBE_CITIES.forEach((city) => {
          const localVec = latLonToVector3(city.lat, city.lon, GLOBE_RADIUS);
          // Apply globeGroup world transform
          const worldVec = localVec.clone().applyMatrix4(globeGroup.matrixWorld);

          // Ray from camera to globe center
          const cameraToCenter = new THREE.Vector3().subVectors(new THREE.Vector3(0, 0, 0), camera.position);
          const cameraToMarker = new THREE.Vector3().subVectors(worldVec, camera.position);

          // Dot product determines if marker is on front hemisphere visible to camera
          const normal = worldVec.clone().normalize();
          const viewDir = camera.position.clone().sub(worldVec).normalize();
          const dot = normal.dot(viewDir);
          const isVisible = dot > 0.05;

          // Project to 2D NDC coordinates (-1 to 1)
          worldVec.project(camera);
          const screenX = ((worldVec.x + 1) * rect.width) / 2;
          const screenY = ((-worldVec.y + 1) * rect.height) / 2;

          positions.push({ city, x: screenX, y: screenY, isVisible });
        });

        setMarkerPositions(positions);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container) container.innerHTML = '';
    };
  }, []);

  // Center Globe on a specific city
  const rotateToCity = useCallback((city: GlobeCity) => {
    if (!globeGroupRef.current) return;
    const targetY = THREE.MathUtils.degToRad(-city.lon);
    const targetX = THREE.MathUtils.degToRad(city.lat * 0.7);

    // Smooth transition
    const startY = globeGroupRef.current.rotation.y;
    const startX = globeGroupRef.current.rotation.x;
    const startTime = performance.now();
    const duration = 600;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);
      const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      if (globeGroupRef.current) {
        globeGroupRef.current.rotation.y = startY + (targetY - startY) * ease;
        globeGroupRef.current.rotation.x = startX + (targetX - startX) * ease;
      }
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, []);

  // Pointer Drag Interaction Handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || !globeGroupRef.current) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;

    globeGroupRef.current.rotation.y += dx * 0.005;
    globeGroupRef.current.rotation.x = Math.max(
      -0.85,
      Math.min(0.85, globeGroupRef.current.rotation.x + dy * 0.005)
    );

    dragStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  // Zoom controls
  const handleZoom = (delta: number) => {
    if (!cameraRef.current) return;
    const newZ = Math.max(5.0, Math.min(10.5, cameraRef.current.position.z + delta));
    cameraRef.current.position.z = newZ;
    setZoomLevel(+(7.6 / newZ).toFixed(2));
  };

  const activeCity = GLOBE_CITIES.find((c) => c.id === selectedCityId) || GLOBE_CITIES[1]; // Bengaluru or selected

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[580px] sm:h-[660px] lg:h-[720px] overflow-hidden select-none"
    >
      {/* 1. Atmospheric Sunrise Flare Backdrop (matches Image 1 upper-left glow) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-amber-400/30 via-orange-500/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/40 rounded-full blur-2xl pointer-events-none" />

      {/* 2. WebGL Canvas Mounting Point */}
      <div
        ref={canvasMountRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="absolute inset-0 cursor-grab active:cursor-grabbing touch-none z-10"
      />

      {/* 3. Screen-Projected Interactive City Markers & Floating Card */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        {markerPositions.map(({ city, x, y, isVisible }) => {
          if (!isVisible) return null;
          const isSelected = city.id === selectedCityId;
          const showPopover = activePinId === city.id;
          const isNearLeftEdge = x < 280;

          return (
            <div
              key={city.id}
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: 'translate(-50%, -50%)',
              }}
              className="absolute pointer-events-auto cursor-pointer group"
              onClick={(e) => {
                e.stopPropagation();
                setActivePinId(city.id);
                if (city.country === 'India') {
                  selectCity(city.id);
                }
                rotateToCity(city);
              }}
            >
              {/* Outer Pulsating Warning Ring */}
              <div
                className="absolute -inset-2 rounded-full animate-ping opacity-60"
                style={{ backgroundColor: city.color }}
              />

              {/* Glowing Badge with AQI Number (Exact match to Image 1) */}
              <div
                className={`relative flex items-center justify-center font-extrabold text-[11px] font-mono px-2 py-0.5 rounded-full border shadow-lg transition-transform ${
                  isSelected || showPopover
                    ? 'ring-4 ring-emerald-400 scale-125 z-30'
                    : 'group-hover:scale-115'
                }`}
                style={{
                  backgroundColor: `${city.color}`,
                  color: '#FFFFFF',
                  borderColor: 'rgba(255, 255, 255, 0.6)',
                  boxShadow: `0 0 16px ${city.color}80`,
                }}
              >
                {city.aqi}
              </div>

              {/* Pulsating Base Target Dot */}
              <div
                className="w-2 h-2 rounded-full mx-auto mt-0.5 shadow-md"
                style={{ backgroundColor: city.color }}
              />

              {/* Floating City Info Popover (matches exact popup in Image 1) */}
              {showPopover && (
                <div
                  className={`absolute bottom-9 ${isNearLeftEdge ? 'left-4 sm:left-6' : 'right-4 sm:right-6'} w-64 p-3 rounded-2xl bg-slate-900/95 border border-slate-700/80 backdrop-blur-xl shadow-2xl text-left pointer-events-auto animate-in fade-in zoom-in-95 duration-200 z-40`}
                  style={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.7)' }}
                >
                  {/* Diagonal SVG leader pointer line from card to pin matching Image 1 */}
                  {isNearLeftEdge ? (
                    <svg className="absolute -bottom-6 -left-1 w-7 h-7 pointer-events-none" viewBox="0 0 28 28">
                      <path d="M24 2 L6 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                      <circle cx="6" cy="20" r="2.5" fill="white" />
                    </svg>
                  ) : (
                    <svg className="absolute -bottom-6 -right-1 w-7 h-7 pointer-events-none" viewBox="0 0 28 28">
                      <path d="M4 2 L22 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                      <circle cx="22" cy="20" r="2.5" fill="white" />
                    </svg>
                  )}

                  <div className="flex items-center justify-between text-xs font-semibold text-slate-300 pb-1.5 border-b border-slate-800">
                    <span className="flex items-center space-x-1">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: city.color }} />
                      <span className="font-bold text-white truncate max-w-[190px]">{city.name}, {city.country} • Air Quality</span>
                    </span>
                    {city.country === 'India' ? (
                      <button
                        onClick={() => onExploreCity && onExploreCity(city.id)}
                        className="text-[11px] text-slate-400 hover:text-white font-bold ml-1 cursor-pointer"
                        title="Switch active city dashboard"
                      >
                        ›
                      </button>
                    ) : (
                      <span className="text-[9px] text-slate-400 font-mono ml-1 px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700">Reference</span>
                    )}
                  </div>

                  <div className="flex items-center space-x-2 my-2">
                    <span className="text-xs font-black px-2 py-0.5 rounded-md text-white font-mono" style={{ backgroundColor: city.color }}>
                      {city.aqi} AQI
                    </span>
                    <span className="text-xs font-bold text-slate-200 truncate">
                      {city.category}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-300 pt-1.5 border-t border-slate-800 font-mono">
                    <span>☀️ {city.temp} °C</span>
                    <span>💧 {city.humidity}%</span>
                    <span>💨 {city.windSpeed} km/h</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 4. Bottom Controls Pill Bar (Exact match to Image 1) */}
      <div className="absolute bottom-6 inset-x-0 flex items-center justify-center space-x-3 z-30 pointer-events-auto">
        <div className="flex items-center space-x-1.5 p-1 rounded-full bg-slate-900/85 border border-slate-700/80 backdrop-blur-xl shadow-2xl">
          <button
            onClick={() => onToggleView && onToggleView('globe')}
            className={`flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeView === 'globe'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 ring-1 ring-emerald-400'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <span className="text-sm">🧊</span>
            <span>3D GLOBE</span>
          </button>

          <button
            onClick={() => onExploreCity && onExploreCity(selectedCityId)}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all cursor-pointer"
          >
            <span className="text-sm">🗺️</span>
            <span>IQ AIR MAP</span>
          </button>
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-slate-900/85 border border-slate-700/80 backdrop-blur-xl text-xs font-semibold text-slate-300 shadow-xl">
          <span className="text-[10px] uppercase font-bold text-slate-400 mr-1">Zoom</span>
          <button
            onClick={() => handleZoom(-0.8)}
            className="w-6 h-6 rounded-full hover:bg-slate-800 flex items-center justify-center text-white font-bold cursor-pointer transition-colors"
            title="Zoom In"
          >
            +
          </button>
          <button
            onClick={() => handleZoom(0.8)}
            className="w-6 h-6 rounded-full hover:bg-slate-800 flex items-center justify-center text-white font-bold cursor-pointer transition-colors"
            title="Zoom Out"
          >
            −
          </button>
        </div>

        {/* Share Button (Exact match to Image 1 bottom right button) */}
        <button
          onClick={() => {
            if (navigator.share) {
              navigator.share({ title: 'BreatheWise AI', url: window.location.href }).catch(() => {});
            }
          }}
          className="w-9 h-9 rounded-full bg-slate-900/85 border border-slate-700/80 backdrop-blur-xl flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 shadow-xl cursor-pointer transition-all"
          title="Share"
        >
          <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
        </button>
      </div>
    </div>
  );
};
