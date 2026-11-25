import{r as Ie,E as jc,B as Xc,U as Ur,M as qc,a as $c,W as Fs,C as Or,H as Bs,S as ks,b as Ys,d as Yc,e as Kc,A as Ta,f as Zc,D as Jc,h as Qc,T as Ra,i as ed,F as td,G as nd,j as Ca,k as id,L as Ks,l as sd,m as rd,n as ad,o as od,p as oo,q as Ul,s as ld,t as cd,u as dd,v as lo,w as ud,x as Ol,K as hd,y as fd,z as pd,I as md,J as gd,X as xd,N as _d,O as vd,P as Sd,Q as Md,R as bd}from"./lucide-vendor-B8Wm7pc_.js";import{r as yd,R as Ed,A as wd,a as Ad,b as Td,X as Rd,Y as Cd,T as Nd,c as Pd}from"./recharts-vendor-a7_pyZnc.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();var Fl={exports:{}},Zs={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ld=Ie,Id=Symbol.for("react.element"),Dd=Symbol.for("react.fragment"),Ud=Object.prototype.hasOwnProperty,Od=Ld.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fd={key:!0,ref:!0,__self:!0,__source:!0};function Bl(i,e,t){var n,s={},r=null,a=null;t!==void 0&&(r=""+t),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(a=e.ref);for(n in e)Ud.call(e,n)&&!Fd.hasOwnProperty(n)&&(s[n]=e[n]);if(i&&i.defaultProps)for(n in e=i.defaultProps,e)s[n]===void 0&&(s[n]=e[n]);return{$$typeof:Id,type:i,key:r,ref:a,props:s,_owner:Od.current}}Zs.Fragment=Dd;Zs.jsx=Bl;Zs.jsxs=Bl;Fl.exports=Zs;var c=Fl.exports,Fr={},co=yd;Fr.createRoot=co.createRoot,Fr.hydrateRoot=co.hydrateRoot;const uo={vulnerabilityProfile:"pediatric",homeCityId:"delhi-anand-vihar",roomSizeM2:20,hasAirPurifier:!0,hasHepaAc:!1,typicalCommuteDistanceKm:14,usualOutdoorActivityTime:"afternoon",useEcoAlternatives:!0},Br=[{id:"delhi-anand-vihar",name:"Delhi — Anand Vihar",state:"Delhi NCR",lat:28.6469,lon:77.316,waqiStationId:"delhi/anand-vihar",typicalSmogSeverity:"Extreme"},{id:"delhi-connaught-place",name:"Delhi — Central (Mandir Marg)",state:"Delhi NCR",lat:28.6341,lon:77.2005,waqiStationId:"delhi/mandir-marg",typicalSmogSeverity:"Extreme"},{id:"bengaluru-indiranagar",name:"Bengaluru — Indiranagar / BTM",state:"Karnataka",lat:12.9784,lon:77.6408,waqiStationId:"bangalore/btm-layout",typicalSmogSeverity:"Moderate"},{id:"bengaluru-whitefield",name:"Bengaluru — Whitefield IT Corridor",state:"Karnataka",lat:12.9698,lon:77.75,waqiStationId:"bangalore/bwssb-kadabeesanahalli",typicalSmogSeverity:"Moderate"},{id:"mumbai-bkc",name:"Mumbai — BKC / Bandra",state:"Maharashtra",lat:19.0657,lon:72.8687,waqiStationId:"mumbai/bkc",typicalSmogSeverity:"High"},{id:"kolkata-victoria",name:"Kolkata — Victoria Memorial",state:"West Bengal",lat:22.5448,lon:88.3426,waqiStationId:"kolkata/victoria-memorial",typicalSmogSeverity:"High"},{id:"chennai-adyar",name:"Chennai — Adyar Coastal",state:"Tamil Nadu",lat:13.0012,lon:80.2565,waqiStationId:"chennai/adyar",typicalSmogSeverity:"Moderate"},{id:"hyderabad-sanathnagar",name:"Hyderabad — Sanathnagar",state:"Telangana",lat:17.4578,lon:78.4428,waqiStationId:"hyderabad/sanathnagar",typicalSmogSeverity:"Moderate"},{id:"pune-shivajinagar",name:"Pune — Shivajinagar",state:"Maharashtra",lat:18.5308,lon:73.8475,waqiStationId:"pune/shivajinagar",typicalSmogSeverity:"Moderate"}],Bd=[{cLow:0,cHigh:30,iLow:0,iHigh:50},{cLow:30,cHigh:60,iLow:50,iHigh:100},{cLow:60,cHigh:90,iLow:100,iHigh:200},{cLow:90,cHigh:120,iLow:200,iHigh:300},{cLow:120,cHigh:250,iLow:300,iHigh:400},{cLow:250,cHigh:500,iLow:400,iHigh:500}],kd=[{cLow:0,cHigh:50,iLow:0,iHigh:50},{cLow:50,cHigh:100,iLow:50,iHigh:100},{cLow:100,cHigh:250,iLow:100,iHigh:200},{cLow:250,cHigh:350,iLow:200,iHigh:300},{cLow:350,cHigh:430,iLow:300,iHigh:400},{cLow:430,cHigh:500,iLow:400,iHigh:500}],Hd=[{cLow:0,cHigh:40,iLow:0,iHigh:50},{cLow:40,cHigh:80,iLow:50,iHigh:100},{cLow:80,cHigh:180,iLow:100,iHigh:200},{cLow:180,cHigh:280,iLow:200,iHigh:300},{cLow:280,cHigh:400,iLow:300,iHigh:400},{cLow:400,cHigh:600,iLow:400,iHigh:500}],Gd=[{cLow:0,cHigh:50,iLow:0,iHigh:50},{cLow:50,cHigh:100,iLow:50,iHigh:100},{cLow:100,cHigh:168,iLow:100,iHigh:200},{cLow:168,cHigh:208,iLow:200,iHigh:300},{cLow:208,cHigh:748,iLow:300,iHigh:400},{cLow:748,cHigh:1e3,iLow:400,iHigh:500}],zd=[{cLow:0,cHigh:1,iLow:0,iHigh:50},{cLow:1,cHigh:2,iLow:50,iHigh:100},{cLow:2,cHigh:10,iLow:100,iHigh:200},{cLow:10,cHigh:17,iLow:200,iHigh:300},{cLow:17,cHigh:34,iLow:300,iHigh:400},{cLow:34,cHigh:50,iLow:400,iHigh:500}];function Ei(i,e){if(i==null||typeof i!="number"||isNaN(i)||i<0)return null;if(i===0)return 0;for(let t=0;t<e.length;t++){const n=e[t];if(t===0?i>=n.cLow&&i<=n.cHigh:i>n.cLow&&i<=n.cHigh){const r=(n.iHigh-n.iLow)/(n.cHigh-n.cLow)*(i-n.cLow)+n.iLow;return Math.min(500,Math.round(r))}}return i>e[e.length-1].cHigh?500:0}function zi(i){const e=i.pm25!=null?Ei(i.pm25,Bd):null,t=i.pm10!=null?Ei(i.pm10,kd):null,n=i.no2!=null?Ei(i.no2,Hd):null,s=i.o3!=null?Ei(i.o3,Gd):null,r=i.co!=null?Ei(i.co,zd):null,a=[];if(e!=null&&a.push({name:"PM2.5",idx:e}),t!=null&&a.push({name:"PM10",idx:t}),n!=null&&a.push({name:"NO2",idx:n}),s!=null&&a.push({name:"Ozone",idx:s}),r!=null&&a.push({name:"CO",idx:r}),a.length===0)return{aqi:0,category:"Good",primaryPollutant:"N/A",isCompleteCalculation:!1,standard:"Indicative PM2.5-Derived",subIndices:{}};let o=0,d="PM2.5";for(const h of a)h.idx>o&&(o=h.idx,d=h.name);const l=e!=null||t!=null,u=a.length>=3&&l;let p="Good";return o<=50?p="Good":o<=100?p="Satisfactory":o<=200?p="Moderate":o<=300?p="Poor":o<=400?p="Very Poor":p="Severe",{aqi:o,category:p,primaryPollutant:d,isCompleteCalculation:u,standard:u?"Indian CPCB NAQI":"Indicative PM2.5-Derived",subIndices:{pm25:e,pm10:t,no2:n,o3:s,co:r}}}function ci(i,e=8,t=21,n=14){const s=[],r=new Date,a=r.getFullYear(),o=String(r.getMonth()+1).padStart(2,"0"),d=String(r.getDate()).padStart(2,"0");for(let l=0;l<24;l++){const u=String(l).padStart(2,"0");let p=1;l>=6&&l<=10?p=1.35-Math.abs(l-e)*.1:l>=12&&l<=16?p=.58+Math.abs(l-n)*.08:l>=19&&l<=23?p=1.4-Math.abs(l-t)*.08:p=.95;const h=Math.round(i*p),f=Math.round(h*1.55),x=Math.round(35*p),M=Math.round(l>=12&&l<=16?65:24),g=zi({pm25:h,pm10:f,no2:x,o3:M,co:1.2});s.push({time:`${a}-${o}-${d}T${u}:00`,hour:l,pm25:h,pm10:f,no2:x,so2:Math.round(12*p),co:+(1.2*p).toFixed(2),o3:M,cpcbAqi:g.aqi,usAqi:Math.min(500,Math.round(h*1.2)),temperature:Math.round(17+(l>=10&&l<=16?(l-10)*1.6:-1)),windSpeed:Math.round(l>=12&&l<=16?11:6),boundaryLayerHeight:null})}return s}const Tn={"delhi-anand-vihar":{city:"Delhi",state:"Delhi NCR (Simulated Representative Profile)",country:"India",current:{pm25:265,pm10:410,no2:68,so2:18,co:2.1,o3:38,aqi:405,aqiCategory:"Severe",primaryPollutant:"PM2.5",aqiStandard:"Indian CPCB NAQI"},weather:{temperature:19,humidity:68,windSpeed:6,windDirection:315,surfacePressure:1016,weatherDescription:"Representative winter smog profile with strong surface inversion",isThermalInversionLikely:!0},hourly:ci(265,8,21,14),metadata:{provider:"BreatheWise Simulated Regional Profile",stationName:"Delhi Metropolitan Representative Smog Profile (Simulated)",latitude:28.6469,longitude:77.316,fetchTimestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),modelTimestamp:"Offline Reference Model",isLive:!1,isSimulated:!0,attribution:"Simulated profile for offline demonstration based on typical seasonal diurnal curves."}},"bengaluru-indiranagar":{city:"Bengaluru",state:"Karnataka (Simulated Representative Profile)",country:"India",current:{pm25:58,pm10:92,no2:34,so2:8,co:.9,o3:45,aqi:97,aqiCategory:"Satisfactory",primaryPollutant:"PM2.5",aqiStandard:"Indian CPCB NAQI"},weather:{temperature:24,humidity:52,windSpeed:14,windDirection:90,surfacePressure:1012,weatherDescription:"Moderate plateau ventilation with steady convective dispersion",isThermalInversionLikely:!1},hourly:ci(58,9,19,14),metadata:{provider:"BreatheWise Simulated Regional Profile",stationName:"Bengaluru Plateau Representative Profile (Simulated)",latitude:12.9784,longitude:77.6408,fetchTimestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),modelTimestamp:"Offline Reference Model",isLive:!1,isSimulated:!0,attribution:"Simulated profile for offline demonstration based on typical seasonal diurnal curves."}},"mumbai-bkc":{city:"Mumbai",state:"Maharashtra (Simulated Representative Profile)",country:"India",current:{pm25:135,pm10:210,no2:52,so2:14,co:1.4,o3:48,aqi:312,aqiCategory:"Very Poor",primaryPollutant:"PM2.5",aqiStandard:"Indian CPCB NAQI"},weather:{temperature:28,humidity:74,windSpeed:11,windDirection:240,surfacePressure:1011,weatherDescription:"Coastal humidity with evening onshore sea-breeze dispersion",isThermalInversionLikely:!1},hourly:ci(135,8,20,15),metadata:{provider:"BreatheWise Simulated Regional Profile",stationName:"Mumbai Coastal Representative Profile (Simulated)",latitude:19.0657,longitude:72.8687,fetchTimestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),modelTimestamp:"Offline Reference Model",isLive:!1,isSimulated:!0,attribution:"Simulated profile for offline demonstration based on typical seasonal diurnal curves."}},"kolkata-victoria":{city:"Kolkata",state:"West Bengal (Simulated Representative Profile)",country:"India",current:{pm25:168,pm10:252,no2:58,so2:16,co:1.6,o3:42,aqi:337,aqiCategory:"Very Poor",primaryPollutant:"PM2.5",aqiStandard:"Indian CPCB NAQI"},weather:{temperature:23,humidity:78,windSpeed:7,windDirection:180,surfacePressure:1014,weatherDescription:"Stagnant winter atmospheric conditions with shallow boundary mixing",isThermalInversionLikely:!0},hourly:ci(168,8,21,14),metadata:{provider:"BreatheWise Simulated Regional Profile",stationName:"Kolkata Gangetic Basin Representative Profile (Simulated)",latitude:22.5448,longitude:88.3426,fetchTimestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),modelTimestamp:"Offline Reference Model",isLive:!1,isSimulated:!0,attribution:"Simulated profile for offline demonstration based on typical seasonal diurnal curves."}},"chennai-adyar":{city:"Chennai",state:"Tamil Nadu (Simulated Representative Profile)",country:"India",current:{pm25:42,pm10:68,no2:24,so2:6,co:.7,o3:32,aqi:70,aqiCategory:"Satisfactory",primaryPollutant:"PM2.5",aqiStandard:"Indian CPCB NAQI"},weather:{temperature:29,humidity:82,windSpeed:18,windDirection:110,surfacePressure:1010,weatherDescription:"Maritime sea-breeze ventilation with steady coastal particulate dispersion",isThermalInversionLikely:!1},hourly:ci(42,9,18,13),metadata:{provider:"BreatheWise Simulated Regional Profile",stationName:"Chennai Coastal Representative Profile (Simulated)",latitude:13.0012,longitude:80.2565,fetchTimestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),modelTimestamp:"Offline Reference Model",isLive:!1,isSimulated:!0,attribution:"Simulated profile for offline demonstration based on typical seasonal diurnal curves."}}};async function Vd(i,e,t,n){var d,l,u,p,h,f,x;const s=`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${i}&longitude=${e}&current=pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone,us_aqi&hourly=pm10,pm2_5,nitrogen_dioxide,ozone,us_aqi,boundary_layer_height&timezone=auto&forecast_days=1`,r=`https://api.open-meteo.com/v1/forecast?latitude=${i}&longitude=${e}&current=temperature_2m,relative_humidity_2m,surface_pressure,wind_speed_10m,wind_direction_10m,weather_code&timezone=auto`,a=new AbortController,o=setTimeout(()=>a.abort(),6e3);try{const[M,g]=await Promise.all([fetch(s,{signal:a.signal}),fetch(r,{signal:a.signal}).catch(()=>null)]);if(clearTimeout(o),!M.ok)throw new Error(`Open-Meteo Air Quality API error: ${M.status} ${M.statusText}`);const m=await M.json(),b=g&&g.ok?await g.json():null,A=m.current||{},y=A.pm2_5!=null?Math.round(A.pm2_5):0,C=A.pm10!=null?Math.round(A.pm10):null,T=A.nitrogen_dioxide!=null?Math.round(A.nitrogen_dioxide):null,_=A.sulphur_dioxide!=null?Math.round(A.sulphur_dioxide):null,E=A.carbon_monoxide,O=E!=null?+(E/1e3).toFixed(2):null,R=A.ozone!=null?Math.round(A.ozone):null,D=Math.round(A.us_aqi??0),k=zi({pm25:y,pm10:C,no2:T,o3:R,co:O}),W=(b==null?void 0:b.current)||{},P=Math.round(W.temperature_2m??22),V=Math.round(W.relative_humidity_2m??60),j=Math.round(W.wind_speed_10m??8),U=Math.round(W.wind_direction_10m??270),Z=Math.round(W.surface_pressure??1013),z=j<=6&&P<=20&&V>=65,K={temperature:P,humidity:V,windSpeed:j,windDirection:U,surfacePressure:Z,weatherDescription:z?"Thermal atmospheric inversion trapping ground-level emissions":j>12?"Active atmospheric convective mixing with steady dispersion":"Stable atmospheric conditions with moderate ventilation",isThermalInversionLikely:z},te=((d=m.hourly)==null?void 0:d.time)||[],ve=((l=m.hourly)==null?void 0:l.pm2_5)||[],Ce=((u=m.hourly)==null?void 0:u.pm10)||[],$=((p=m.hourly)==null?void 0:p.nitrogen_dioxide)||[],fe=((h=m.hourly)==null?void 0:h.ozone)||[],_e=((f=m.hourly)==null?void 0:f.us_aqi)||[],Ae=((x=m.hourly)==null?void 0:x.boundary_layer_height)||[],pe=[],Le=Math.min(24,te.length);for(let He=0;He<Le;He++){const Ee=te[He];let qe=He;if(Ee&&Ee.includes("T")){const Nt=Ee.split("T")[1].split(":");qe=parseInt(Nt[0],10)}const Ke=ve[He]!=null?Math.round(ve[He]):y,Oe=Ce[He]!=null?Math.round(Ce[He]):null,ot=$[He]!=null?Math.round($[He]):null,at=fe[He]!=null?Math.round(fe[He]):null,mt=zi({pm25:Ke,pm10:Oe,no2:ot,o3:at}),tt=Ae[He]!=null?Math.round(Ae[He]):null;pe.push({time:Ee,hour:qe,pm25:Ke,pm10:Oe,no2:ot,o3:at,cpcbAqi:mt.aqi,usAqi:_e[He]!=null?Math.round(_e[He]):D,temperature:P,windSpeed:j,boundaryLayerHeight:tt})}return{city:t,state:n,country:"India",current:{pm25:y,pm10:C,no2:T,so2:_,co:O,o3:R,aqi:k.aqi,aqiCategory:k.category,primaryPollutant:k.primaryPollutant,aqiStandard:k.standard},weather:K,hourly:pe,metadata:{provider:"Open-Meteo (Copernicus Atmosphere Grid)",stationName:`Copernicus CAMS 0.25° Regional Grid (${t})`,latitude:i,longitude:e,fetchTimestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),modelTimestamp:A.time?A.time.replace("T"," "):void 0,isLive:!0,isSimulated:!1,attribution:"Open-Meteo / Copernicus Atmosphere Monitoring Service (ECMWF CAMS)"}}}catch(M){throw clearTimeout(o),M}}const ho="breathewise_telemetry_",Wd=15*60*1e3;async function jd(i){const e=Br.find(t=>t.id===i)||Br[0];try{const t=localStorage.getItem(`${ho}${i}`);if(t){const n=JSON.parse(t),s=Date.now()-n.timestamp;if(s<Wd){const r=n.data,a=Math.max(1,Math.round(s/6e4));return{...r,metadata:{...r.metadata,fetchTimestamp:`Cached (${a}m ago)`}}}}}catch{}try{const t=await Vd(e.lat,e.lon,e.name,e.state);try{localStorage.setItem(`${ho}${i}`,JSON.stringify({timestamp:Date.now(),data:t}))}catch{}return t}catch(t){if(console.warn(`[BreatheWise] Live telemetry fetch unavailable for ${e.name}. Using calibrated demonstration profile.`,t),Tn[i])return Tn[i];const n=e.typicalSmogSeverity==="Extreme"?240:e.typicalSmogSeverity==="High"?130:60,s=zi({pm25:n,pm10:Math.round(n*1.55),no2:42,o3:35,co:1.1});return{city:e.name,state:e.state,country:"India",current:{pm25:n,pm10:Math.round(n*1.55),no2:42,so2:12,co:1.1,o3:35,aqi:s.aqi,aqiCategory:s.category,primaryPollutant:s.primaryPollutant,aqiStandard:s.standard},weather:{temperature:23,humidity:62,windSpeed:8,windDirection:280,surfacePressure:1014,weatherDescription:"Representative regional atmospheric model baseline",isThermalInversionLikely:n>150},hourly:ci(n),metadata:{provider:"BreatheWise Simulated Regional Profile",stationName:`${e.name} Regional Simulation Baseline`,latitude:e.lat,longitude:e.lon,fetchTimestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),modelTimestamp:"Offline Reference Model",isLive:!1,isSimulated:!0,attribution:"Simulated profile for offline demonstration based on typical seasonal diurnal curves."}}}}function sr(i){const e=(i||[]).filter(b=>b!=null&&typeof b.hour=="number"&&!isNaN(b.hour)).map(b=>({...b,pm25:typeof b.pm25=="number"&&!isNaN(b.pm25)?Math.max(0,b.pm25):0,o3:typeof b.o3=="number"&&!isNaN(b.o3)?Math.max(0,b.o3):0}));if(e.length<2)return{startHour:13,endHour:15,displayWindow:"1:00 PM – 3:00 PM",durationHours:2,averagePm25:75,averageAqi:150,reductionVsPeakPercent:35,windowStatus:"UNHEALTHY_ELEVATED",statusLabel:"Relatively Lower Exposure Window",convectiveReasoning:"Solar boundary layer convective mixing typically offers a relative afternoon dispersion dip, though ambient air quality remains elevated.",isAvailableToday:!0,ozoneRiskWarning:null};let t=0;for(const b of e)b.pm25>t&&(t=b.pm25);let n=13,s=15,r=9999,a=0;for(let b=0;b<=e.length-2;b++)for(let A=b+1;A<=Math.min(e.length-1,b+2);A++){const y=e.slice(b,A+1);if(y.length>=2){const T=y.reduce((_,E)=>_+E.pm25,0)/y.length;if(T<r||T===r&&A-b>s-n){r=T,n=y[0].hour,s=y[y.length-1].hour;const _=y.reduce((E,O)=>E+(O.o3||0),0);a=Math.round(_/y.length)}}}const o=Math.round(r===9999?75:r),l=zi({pm25:o,o3:a}).aqi,u=t>0?Math.max(0,Math.round((t-o)/t*100)):0,p=b=>{const A=(b%24+24)%24,y=A>=12?"PM":"AM";return`${A%12===0?12:A%12}:00 ${y}`},h=`${p(n)} – ${p(s)}`,f=s>=n?Math.max(1,s-n):24-n+s;let x="UNHEALTHY_ELEVATED",M="Relatively Lower Exposure Window",g="";o<=30?(x="FAVORABLE",M="Clean Air Opportunity Window",g=`Ambient particulate concentrations are within the WHO guideline range (${o} µg/m³). Favorable for outdoor activities and natural home ventilation.`):o<=60?(x="MODERATE_OPPORTUNITY",M="Moderate Air Exposure Window",g=`Atmospheric dispersion provides a ${u}% reduction compared to peak hours. Suitable for moderate outdoor tasks; sensitive individuals should monitor respiratory symptoms.`):o<=120?(x="UNHEALTHY_ELEVATED",M="Relatively Lower Exposure Window (Air Remains Poor)",g=`Particulate density dips by ${u}% between ${h} due to daytime solar boundary mixing, but ambient levels (${o} µg/m³) remain Unhealthy. Not clean air; limit strenuous physical exertion.`):(x="HAZARDOUS_LIMIT_EXERTION",M="Diurnal Minimum (Severe Smog Persists)",g=`Even at its diurnal minimum between ${h}, PM2.5 remains severe (${o} µg/m³). Avoid outdoor workouts and keep indoor spaces sealed.`);let m=null;return a>100&&(m=`Photochemical Ozone (O3) is elevated (~${a} µg/m³) during this afternoon window. Aerobic cardio outdoors may cause throat and airway irritation despite lower PM2.5.`),{startHour:n,endHour:s,displayWindow:h,durationHours:f,averagePm25:o,averageAqi:l,reductionVsPeakPercent:u,windowStatus:x,statusLabel:M,convectiveReasoning:g,isAvailableToday:!0,ozoneRiskWarning:m}}var fo;(function(i){i.STRING="string",i.NUMBER="number",i.INTEGER="integer",i.BOOLEAN="boolean",i.ARRAY="array",i.OBJECT="object"})(fo||(fo={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var po;(function(i){i.LANGUAGE_UNSPECIFIED="language_unspecified",i.PYTHON="python"})(po||(po={}));var mo;(function(i){i.OUTCOME_UNSPECIFIED="outcome_unspecified",i.OUTCOME_OK="outcome_ok",i.OUTCOME_FAILED="outcome_failed",i.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(mo||(mo={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=["user","model","function","system"];var xo;(function(i){i.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",i.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",i.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",i.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",i.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(xo||(xo={}));var _o;(function(i){i.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",i.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",i.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",i.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",i.BLOCK_NONE="BLOCK_NONE"})(_o||(_o={}));var vo;(function(i){i.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",i.NEGLIGIBLE="NEGLIGIBLE",i.LOW="LOW",i.MEDIUM="MEDIUM",i.HIGH="HIGH"})(vo||(vo={}));var So;(function(i){i.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",i.SAFETY="SAFETY",i.OTHER="OTHER"})(So||(So={}));var Oi;(function(i){i.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",i.STOP="STOP",i.MAX_TOKENS="MAX_TOKENS",i.SAFETY="SAFETY",i.RECITATION="RECITATION",i.LANGUAGE="LANGUAGE",i.OTHER="OTHER"})(Oi||(Oi={}));var Mo;(function(i){i.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",i.RETRIEVAL_QUERY="RETRIEVAL_QUERY",i.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",i.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",i.CLASSIFICATION="CLASSIFICATION",i.CLUSTERING="CLUSTERING"})(Mo||(Mo={}));var bo;(function(i){i.MODE_UNSPECIFIED="MODE_UNSPECIFIED",i.AUTO="AUTO",i.ANY="ANY",i.NONE="NONE"})(bo||(bo={}));var yo;(function(i){i.MODE_UNSPECIFIED="MODE_UNSPECIFIED",i.MODE_DYNAMIC="MODE_DYNAMIC"})(yo||(yo={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class Yn extends Ft{constructor(e,t){super(e),this.response=t}}class kl extends Ft{constructor(e,t,n,s){super(e),this.status=t,this.statusText=n,this.errorDetails=s}}class In extends Ft{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="https://generativelanguage.googleapis.com",qd="v1beta",$d="0.21.0",Yd="genai-js";var Wn;(function(i){i.GENERATE_CONTENT="generateContent",i.STREAM_GENERATE_CONTENT="streamGenerateContent",i.COUNT_TOKENS="countTokens",i.EMBED_CONTENT="embedContent",i.BATCH_EMBED_CONTENTS="batchEmbedContents"})(Wn||(Wn={}));class Kd{constructor(e,t,n,s,r){this.model=e,this.task=t,this.apiKey=n,this.stream=s,this.requestOptions=r}toString(){var e,t;const n=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||qd;let r=`${((t=this.requestOptions)===null||t===void 0?void 0:t.baseUrl)||Xd}/${n}/${this.model}:${this.task}`;return this.stream&&(r+="?alt=sse"),r}}function Zd(i){const e=[];return i!=null&&i.apiClient&&e.push(i.apiClient),e.push(`${Yd}/${$d}`),e.join(" ")}async function Jd(i){var e;const t=new Headers;t.append("Content-Type","application/json"),t.append("x-goog-api-client",Zd(i.requestOptions)),t.append("x-goog-api-key",i.apiKey);let n=(e=i.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(n){if(!(n instanceof Headers))try{n=new Headers(n)}catch(s){throw new In(`unable to convert customHeaders value ${JSON.stringify(n)} to Headers: ${s.message}`)}for(const[s,r]of n.entries()){if(s==="x-goog-api-key")throw new In(`Cannot set reserved header name ${s}`);if(s==="x-goog-api-client")throw new In(`Header name ${s} can only be set using the apiClient field`);t.append(s,r)}}return t}async function Qd(i,e,t,n,s,r){const a=new Kd(i,e,t,n,r);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},iu(r)),{method:"POST",headers:await Jd(a),body:s})}}async function Ji(i,e,t,n,s,r={},a=fetch){const{url:o,fetchOptions:d}=await Qd(i,e,t,n,s,r);return eu(o,d,a)}async function eu(i,e,t=fetch){let n;try{n=await t(i,e)}catch(s){tu(s,i)}return n.ok||await nu(n,i),n}function tu(i,e){let t=i;throw i instanceof kl||i instanceof In||(t=new Ft(`Error fetching from ${e.toString()}: ${i.message}`),t.stack=i.stack),t}async function nu(i,e){let t="",n;try{const s=await i.json();t=s.error.message,s.error.details&&(t+=` ${JSON.stringify(s.error.details)}`,n=s.error.details)}catch{}throw new kl(`Error fetching from ${e.toString()}: [${i.status} ${i.statusText}] ${t}`,i.status,i.statusText,n)}function iu(i){const e={};if((i==null?void 0:i.signal)!==void 0||(i==null?void 0:i.timeout)>=0){const t=new AbortController;(i==null?void 0:i.timeout)>=0&&setTimeout(()=>t.abort(),i.timeout),i!=null&&i.signal&&i.signal.addEventListener("abort",()=>{t.abort()}),e.signal=t.signal}return e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(i){return i.text=()=>{if(i.candidates&&i.candidates.length>0){if(i.candidates.length>1&&console.warn(`This response had ${i.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),Cs(i.candidates[0]))throw new Yn(`${Rn(i)}`,i);return su(i)}else if(i.promptFeedback)throw new Yn(`Text not available. ${Rn(i)}`,i);return""},i.functionCall=()=>{if(i.candidates&&i.candidates.length>0){if(i.candidates.length>1&&console.warn(`This response had ${i.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),Cs(i.candidates[0]))throw new Yn(`${Rn(i)}`,i);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),Eo(i)[0]}else if(i.promptFeedback)throw new Yn(`Function call not available. ${Rn(i)}`,i)},i.functionCalls=()=>{if(i.candidates&&i.candidates.length>0){if(i.candidates.length>1&&console.warn(`This response had ${i.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),Cs(i.candidates[0]))throw new Yn(`${Rn(i)}`,i);return Eo(i)}else if(i.promptFeedback)throw new Yn(`Function call not available. ${Rn(i)}`,i)},i}function su(i){var e,t,n,s;const r=[];if(!((t=(e=i.candidates)===null||e===void 0?void 0:e[0].content)===null||t===void 0)&&t.parts)for(const a of(s=(n=i.candidates)===null||n===void 0?void 0:n[0].content)===null||s===void 0?void 0:s.parts)a.text&&r.push(a.text),a.executableCode&&r.push("\n```"+a.executableCode.language+`
`+a.executableCode.code+"\n```\n"),a.codeExecutionResult&&r.push("\n```\n"+a.codeExecutionResult.output+"\n```\n");return r.length>0?r.join(""):""}function Eo(i){var e,t,n,s;const r=[];if(!((t=(e=i.candidates)===null||e===void 0?void 0:e[0].content)===null||t===void 0)&&t.parts)for(const a of(s=(n=i.candidates)===null||n===void 0?void 0:n[0].content)===null||s===void 0?void 0:s.parts)a.functionCall&&r.push(a.functionCall);if(r.length>0)return r}const ru=[Oi.RECITATION,Oi.SAFETY,Oi.LANGUAGE];function Cs(i){return!!i.finishReason&&ru.includes(i.finishReason)}function Rn(i){var e,t,n;let s="";if((!i.candidates||i.candidates.length===0)&&i.promptFeedback)s+="Response was blocked",!((e=i.promptFeedback)===null||e===void 0)&&e.blockReason&&(s+=` due to ${i.promptFeedback.blockReason}`),!((t=i.promptFeedback)===null||t===void 0)&&t.blockReasonMessage&&(s+=`: ${i.promptFeedback.blockReasonMessage}`);else if(!((n=i.candidates)===null||n===void 0)&&n[0]){const r=i.candidates[0];Cs(r)&&(s+=`Candidate was blocked due to ${r.finishReason}`,r.finishMessage&&(s+=`: ${r.finishMessage}`))}return s}function Vi(i){return this instanceof Vi?(this.v=i,this):new Vi(i)}function au(i,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t.apply(i,e||[]),s,r=[];return s={},a("next"),a("throw"),a("return"),s[Symbol.asyncIterator]=function(){return this},s;function a(h){n[h]&&(s[h]=function(f){return new Promise(function(x,M){r.push([h,f,x,M])>1||o(h,f)})})}function o(h,f){try{d(n[h](f))}catch(x){p(r[0][3],x)}}function d(h){h.value instanceof Vi?Promise.resolve(h.value.v).then(l,u):p(r[0][2],h)}function l(h){o("next",h)}function u(h){o("throw",h)}function p(h,f){h(f),r.shift(),r.length&&o(r[0][0],r[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function ou(i){const e=i.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),t=du(e),[n,s]=t.tee();return{stream:cu(n),response:lu(s)}}async function lu(i){const e=[],t=i.getReader();for(;;){const{done:n,value:s}=await t.read();if(n)return Na(uu(e));e.push(s)}}function cu(i){return au(this,arguments,function*(){const t=i.getReader();for(;;){const{value:n,done:s}=yield Vi(t.read());if(s)break;yield yield Vi(Na(n))}})}function du(i){const e=i.getReader();return new ReadableStream({start(n){let s="";return r();function r(){return e.read().then(({value:a,done:o})=>{if(o){if(s.trim()){n.error(new Ft("Failed to parse stream"));return}n.close();return}s+=a;let d=s.match(wo),l;for(;d;){try{l=JSON.parse(d[1])}catch{n.error(new Ft(`Error parsing JSON response: "${d[1]}"`));return}n.enqueue(l),s=s.substring(d[0].length),d=s.match(wo)}return r()})}}})}function uu(i){const e=i[i.length-1],t={promptFeedback:e==null?void 0:e.promptFeedback};for(const n of i){if(n.candidates)for(const s of n.candidates){const r=s.index;if(t.candidates||(t.candidates=[]),t.candidates[r]||(t.candidates[r]={index:s.index}),t.candidates[r].citationMetadata=s.citationMetadata,t.candidates[r].groundingMetadata=s.groundingMetadata,t.candidates[r].finishReason=s.finishReason,t.candidates[r].finishMessage=s.finishMessage,t.candidates[r].safetyRatings=s.safetyRatings,s.content&&s.content.parts){t.candidates[r].content||(t.candidates[r].content={role:s.content.role||"user",parts:[]});const a={};for(const o of s.content.parts)o.text&&(a.text=o.text),o.functionCall&&(a.functionCall=o.functionCall),o.executableCode&&(a.executableCode=o.executableCode),o.codeExecutionResult&&(a.codeExecutionResult=o.codeExecutionResult),Object.keys(a).length===0&&(a.text=""),t.candidates[r].content.parts.push(a)}}n.usageMetadata&&(t.usageMetadata=n.usageMetadata)}return t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hl(i,e,t,n){const s=await Ji(e,Wn.STREAM_GENERATE_CONTENT,i,!0,JSON.stringify(t),n);return ou(s)}async function Gl(i,e,t,n){const r=await(await Ji(e,Wn.GENERATE_CONTENT,i,!1,JSON.stringify(t),n)).json();return{response:Na(r)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(i){if(i!=null){if(typeof i=="string")return{role:"system",parts:[{text:i}]};if(i.text)return{role:"system",parts:[i]};if(i.parts)return i.role?i:{role:"system",parts:i.parts}}}function Wi(i){let e=[];if(typeof i=="string")e=[{text:i}];else for(const t of i)typeof t=="string"?e.push({text:t}):e.push(t);return hu(e)}function hu(i){const e={role:"user",parts:[]},t={role:"function",parts:[]};let n=!1,s=!1;for(const r of i)"functionResponse"in r?(t.parts.push(r),s=!0):(e.parts.push(r),n=!0);if(n&&s)throw new Ft("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!n&&!s)throw new Ft("No content is provided for sending chat message.");return n?e:t}function fu(i,e){var t;let n={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(t=e==null?void 0:e.cachedContent)===null||t===void 0?void 0:t.name,contents:[]};const s=i.generateContentRequest!=null;if(i.contents){if(s)throw new In("CountTokensRequest must have one of contents or generateContentRequest, not both.");n.contents=i.contents}else if(s)n=Object.assign(Object.assign({},n),i.generateContentRequest);else{const r=Wi(i);n.contents=[r]}return{generateContentRequest:n}}function Ao(i){let e;return i.contents?e=i:e={contents:[Wi(i)]},i.systemInstruction&&(e.systemInstruction=zl(i.systemInstruction)),e}function pu(i){return typeof i=="string"||Array.isArray(i)?{content:Wi(i)}:i}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],mu={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function gu(i){let e=!1;for(const t of i){const{role:n,parts:s}=t;if(!e&&n!=="user")throw new Ft(`First content should be with role 'user', got ${n}`);if(!go.includes(n))throw new Ft(`Each item should include role field. Got ${n} but valid roles are: ${JSON.stringify(go)}`);if(!Array.isArray(s))throw new Ft("Content should have 'parts' property with an array of Parts");if(s.length===0)throw new Ft("Each Content should have at least one part");const r={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const o of s)for(const d of To)d in o&&(r[d]+=1);const a=mu[n];for(const o of To)if(!a.includes(o)&&r[o]>0)throw new Ft(`Content with role '${n}' can't contain '${o}' part`);e=!0}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro="SILENT_ERROR";class xu{constructor(e,t,n,s={}){this.model=t,this.params=n,this._requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,n!=null&&n.history&&(gu(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,t={}){var n,s,r,a,o,d;await this._sendPromise;const l=Wi(e),u={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(r=this.params)===null||r===void 0?void 0:r.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(o=this.params)===null||o===void 0?void 0:o.systemInstruction,cachedContent:(d=this.params)===null||d===void 0?void 0:d.cachedContent,contents:[...this._history,l]},p=Object.assign(Object.assign({},this._requestOptions),t);let h;return this._sendPromise=this._sendPromise.then(()=>Gl(this._apiKey,this.model,u,p)).then(f=>{var x;if(f.response.candidates&&f.response.candidates.length>0){this._history.push(l);const M=Object.assign({parts:[],role:"model"},(x=f.response.candidates)===null||x===void 0?void 0:x[0].content);this._history.push(M)}else{const M=Rn(f.response);M&&console.warn(`sendMessage() was unsuccessful. ${M}. Inspect response object for details.`)}h=f}),await this._sendPromise,h}async sendMessageStream(e,t={}){var n,s,r,a,o,d;await this._sendPromise;const l=Wi(e),u={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(r=this.params)===null||r===void 0?void 0:r.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(o=this.params)===null||o===void 0?void 0:o.systemInstruction,cachedContent:(d=this.params)===null||d===void 0?void 0:d.cachedContent,contents:[...this._history,l]},p=Object.assign(Object.assign({},this._requestOptions),t),h=Hl(this._apiKey,this.model,u,p);return this._sendPromise=this._sendPromise.then(()=>h).catch(f=>{throw new Error(Ro)}).then(f=>f.response).then(f=>{if(f.candidates&&f.candidates.length>0){this._history.push(l);const x=Object.assign({},f.candidates[0].content);x.role||(x.role="model"),this._history.push(x)}else{const x=Rn(f);x&&console.warn(`sendMessageStream() was unsuccessful. ${x}. Inspect response object for details.`)}}).catch(f=>{f.message!==Ro&&console.error(f)}),h}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _u(i,e,t,n){return(await Ji(e,Wn.COUNT_TOKENS,i,!1,JSON.stringify(t),n)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vu(i,e,t,n){return(await Ji(e,Wn.EMBED_CONTENT,i,!1,JSON.stringify(t),n)).json()}async function Su(i,e,t,n){const s=t.requests.map(a=>Object.assign(Object.assign({},a),{model:e}));return(await Ji(e,Wn.BATCH_EMBED_CONTENTS,i,!1,JSON.stringify({requests:s}),n)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,t,n={}){this.apiKey=e,this._requestOptions=n,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=zl(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(e,t={}){var n;const s=Ao(e),r=Object.assign(Object.assign({},this._requestOptions),t);return Gl(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},s),r)}async generateContentStream(e,t={}){var n;const s=Ao(e),r=Object.assign(Object.assign({},this._requestOptions),t);return Hl(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},s),r)}startChat(e){var t;return new xu(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(t=this.cachedContent)===null||t===void 0?void 0:t.name},e),this._requestOptions)}async countTokens(e,t={}){const n=fu(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),s=Object.assign(Object.assign({},this._requestOptions),t);return _u(this.apiKey,this.model,n,s)}async embedContent(e,t={}){const n=pu(e),s=Object.assign(Object.assign({},this._requestOptions),t);return vu(this.apiKey,this.model,n,s)}async batchEmbedContents(e,t={}){const n=Object.assign(Object.assign({},this._requestOptions),t);return Su(this.apiKey,this.model,e,n)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new Ft("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new Co(this.apiKey,e,t)}getGenerativeModelFromCachedContent(e,t,n){if(!e.name)throw new In("Cached content must contain a `name` field.");if(!e.model)throw new In("Cached content must contain a `model` field.");const s=["model","systemInstruction"];for(const a of s)if(t!=null&&t[a]&&e[a]&&(t==null?void 0:t[a])!==e[a]){if(a==="model"){const o=t.model.startsWith("models/")?t.model.replace("models/",""):t.model,d=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(o===d)continue}throw new In(`Different value for "${a}" specified in modelParams (${t[a]}) and cachedContent (${e[a]})`)}const r=Object.assign(Object.assign({},t),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new Co(this.apiKey,r,n)}}const fi={};function Fi(i,e,t){const n=i.current.pm25,s=i.current.aqi,r=i.current.aqiCategory,a=n>120||s>300,o=n>60&&n<=120,d={pediatric:"Children inhale up to 50% more air per unit body weight than adults, increasing vulnerable bronchial particulate exposure.",senior_respiratory:"Elevated fine particulates provoke systemic cardiovascular stress and acute bronchial inflammation in sensitive airways.",outdoor_athlete:"High-intensity exercise elevates minute ventilation from 8 L/min to over 55 L/min, multiplying deep airway particulate burden.",normal_adult:"Prolonged cumulative exposure to fine particulates triggers oxidative stress, ocular irritation, and airway fatigue."},l={pediatric:a?"Restrict outdoor recreation. Ensure physical education is conducted indoors with air filtration active.":`Schedule outdoor play strictly during the lower exposure period (${e.displayWindow}). Avoid morning traffic zones.`,senior_respiratory:a?"Reschedule morning outdoor walks indoors. Keep rescue inhalers accessible and maintain filtered indoor air.":"Conduct morning walks only after 11:30 AM once solar surface heating breaks the nocturnal ground-level inversion.",outdoor_athlete:a?"Cancel outdoor running. Shift cardio training to an indoor treadmill in a HEPA-filtered room.":`If running outdoors, time workouts strictly within ${e.displayWindow} and consider an N95 respirator to filter fine particulates.`,normal_adult:a?"Avoid open two-wheeler commuting. Use air-filtered rapid transit (Metro) and keep home envelope sealed.":`Utilize the lower exposure window (${e.displayWindow}) for outdoor errands and commute planning.`};let u="",p="";return a?(u=`Severe Particulate Episode in ${i.city} — Limit Outdoor Exertion`,p=`Current PM2.5 is ${n} µg/m³ (CPCB NAQI ${s} — ${r}). Even during the diurnal minimum (${e.displayWindow}), ambient air remains hazardous. Keep indoor spaces sealed and run HEPA filtration.`):o?(u=`Elevated Particulate Drift in ${i.city} — Utilize ${e.displayWindow}`,p=`Current PM2.5 is ${n} µg/m³ (${r}). Daytime solar boundary mixing provides a ${e.reductionVsPeakPercent}% relative drop between ${e.displayWindow}. Prioritize barrier protection during morning and evening rush hours.`):(u=`Acceptable Atmospheric Quality in ${i.city} — Good Conditions During Midday`,p=`Current PM2.5 is ${n} µg/m³ (CPCB NAQI ${s} — ${r}). Air quality is favorable for outdoor activities and home ventilation during the daytime window (${e.displayWindow}).`),{summaryTitle:u,summaryBody:p,cleanAirWindowAdvisory:e.windowStatus==="HAZARDOUS_LIMIT_EXERTION"?`The diurnal minimum between ${e.displayWindow} offers a relative dip, but overall PM2.5 remains hazardous (${e.averagePm25} µg/m³). Avoid outdoor workouts.`:`The optimal daytime window is ${e.displayWindow} (Avg PM2.5 ~${e.averagePm25} µg/m³). Daytime atmospheric mixing dilutes ground-level vehicle exhaust.`,vulnerabilityGuidance:{profile:t,cautionNotice:d[t],actionableStep:l[t]},dailyRoutine:[{timeSlot:"07:00 – 10:00",activityName:"Morning Rush & Surface Inversion",exposureRisk:a?"CRITICAL":o?"HIGH":"MODERATE",directive:"Avoid outdoor aerobic workouts and open two-wheeler transit.",alternativeSuggestion:"Work from home or commute via AC Metro with an N95 mask. Keep bedroom windows sealed."},{timeSlot:e.displayWindow,activityName:`Diurnal Minimum Window (${e.reductionVsPeakPercent}% lower vs peak)`,exposureRisk:a?"HIGH":o?"MODERATE":"SAFE",directive:a?"Lower relative exposure, but ambient air remains hazardous. Essential errands only with N95 mask.":"Best daytime window for outdoor errands, light walking, and scheduled transit.",alternativeSuggestion:a?"Keep windows closed. Air quality is not clean enough for natural room flushing.":"Open windows for a brief 15-20 min flush if outdoor air is moderate."},{timeSlot:"17:30 – 20:30",activityName:"Evening Traffic Congestion",exposureRisk:a?"CRITICAL":o?"HIGH":"MODERATE",directive:"Close all balcony doors before evening traffic peaks. Wear an N95 mask if in open transit.",alternativeSuggestion:"Delay departure by 40 minutes or select underground rapid transit corridors."},{timeSlot:"21:00 – 06:00",activityName:"Nocturnal Cooling & Sleep",exposureRisk:a?"HIGH":"SAFE",directive:"Run indoor air purifier on Medium/Turbo mode. Ensure bedroom doors remain closed.",alternativeSuggestion:"Avoid burning incense, mosquito coils, or unvented heaters in sleeping quarters."}],indoorProtocol:a?"Keep windows strictly sealed. Run indoor HEPA purifier on Turbo/Medium speed. Natural air flushing is unsafe.":n<=60?`Brief natural ventilation safe during ${e.displayWindow}. Keep windows sealed during morning and evening rush hours.`:"Maintain closed window envelope and utilize indoor filtration to prevent particulate accumulation.",ecoActionOfTheDay:"Choosing AC Metro over an open auto-rickshaw for a 14 km commute prevents ~1.8 kg of vehicular CO2 emissions and avoids up to 72% of inhaled particulate exposure.",scientificConfidence:i.metadata.isSimulated?"High (Simulated Regional Model Baseline)":"High (Copernicus CAMS 0.25° Model Grid & CPCB NAQI Standards)"}}async function rr(i,e,t,n){const s=n||(fi==null?void 0:fi.VITE_GEMINI_API_KEY);if(!s||s==="YOUR_GEMINI_API_KEY")return Fi(i,e,t);try{const a=new Vl(s).getGenerativeModel({model:"gemini-1.5-flash",generationConfig:{responseMimeType:"application/json",temperature:.15}}),o=`You are BreatheWise AI, an expert Environmental Lifestyle Strategist.
Analyze the following real-time environmental context for ${i.city}, India:
- Current PM2.5: ${i.current.pm25} µg/m³
- Current AQI: ${i.current.aqi} (${i.current.aqiCategory} — ${i.current.aqiStandard})
- Primary Pollutant: ${i.current.primaryPollutant}
- Temperature: ${i.weather.temperature} °C, Humidity: ${i.weather.humidity}%
- Wind Speed: ${i.weather.windSpeed} km/h, Inversion Trapping: ${i.weather.isThermalInversionLikely}
- Diurnal Lowest Exposure Window: ${e.displayWindow} (Average PM2.5 in window: ${e.averagePm25} µg/m³, representing a ${e.reductionVsPeakPercent}% relative drop vs peak; Status: ${e.statusLabel})
- Ozone Warning: ${e.ozoneRiskWarning||"None"}
- Target User Profile: ${t} (pediatric, senior_respiratory, outdoor_athlete, or normal_adult)
- Data Source: ${i.metadata.isSimulated?"Simulated Regional Profile":"Copernicus Atmosphere Service Regional Model Grid"}

STRICT SCIENTIFIC AND SAFETY CONSTRAINTS:
1. NEVER call a window "clean air" if average PM2.5 exceeds 60 µg/m³. Call it "relatively lower exposure".
2. If PM2.5 > 60 µg/m³, NEVER instruct users to open windows for ventilation. Keep them sealed.
3. Do NOT make medical diagnoses or prescribe medications.
4. Use exact numerical values provided. Do not hallucinate different numbers.

Return strictly a valid JSON object matching this schema:
{
  "summaryTitle": string (punchy executive takeaway, max 12 words),
  "summaryBody": string (concise environmental reality, max 35 words),
  "cleanAirWindowAdvisory": string (how to navigate ${e.displayWindow}),
  "vulnerabilityGuidance": {
    "profile": "${t}",
    "cautionNotice": string (physiological risk in 1 sentence),
    "actionableStep": string (exact protective step)
  },
  "dailyRoutine": [
    {
      "timeSlot": "07:00 – 10:00",
      "activityName": string,
      "exposureRisk": "SAFE" | "MODERATE" | "HIGH" | "CRITICAL",
      "directive": string,
      "alternativeSuggestion": string
    },
    {
      "timeSlot": "${e.displayWindow}",
      "activityName": string,
      "exposureRisk": "SAFE" | "MODERATE" | "HIGH" | "CRITICAL",
      "directive": string,
      "alternativeSuggestion": string
    },
    {
      "timeSlot": "17:30 – 20:30",
      "activityName": string,
      "exposureRisk": "SAFE" | "MODERATE" | "HIGH" | "CRITICAL",
      "directive": string,
      "alternativeSuggestion": string
    },
    {
      "timeSlot": "21:00 – 06:00",
      "activityName": string,
      "exposureRisk": "SAFE" | "MODERATE" | "HIGH" | "CRITICAL",
      "directive": string,
      "alternativeSuggestion": string
    }
  ],
  "indoorProtocol": string (indoor filtration and envelope directive),
  "ecoActionOfTheDay": string (sustainable transit trade-off),
  "scientificConfidence": "High (Gemini 1.5 Grounded Synthesis)"
}`;let l=(await a.generateContent(o)).response.text().trim();l.startsWith("```json")&&(l=l.slice(7)),l.startsWith("```")&&(l=l.slice(3)),l.endsWith("```")&&(l=l.slice(0,-3)),l=l.trim();const u=JSON.parse(l);if(!u.summaryTitle||!Array.isArray(u.dailyRoutine)||u.dailyRoutine.length===0)throw new Error("Malformed JSON schema returned by model");return u}catch(r){return console.warn("[BreatheWise] Gemini API call failed or returned malformed output. Falling back to deterministic plan.",r),Fi(i,e,t)}}async function Mu(i,e,t,n,s,r){const a=r||(fi==null?void 0:fi.VITE_GEMINI_API_KEY);if(!a||a==="YOUR_GEMINI_API_KEY"){const o=i.toLowerCase(),d=t.current.pm25;return o.includes("inhaler")||o.includes("puff")||o.includes("dosage")||o.includes("dose")||o.includes("medicine")||o.includes("medication")||o.includes("steroid")||o.includes("albuterol")||o.includes("budecort")||o.includes("foracort")||o.includes("asthma attack")||o.includes("chest pain")||o.includes("diagnos")||o.includes("prescri")||o.includes("shortness of breath")?`Medical & Clinical Triage Notice:
BreatheWise AI is an environmental lifestyle and exposure-reduction assistant, NOT a medical diagnostic or clinical prescribing service.

We cannot recommend medication dosages, advise on prescription inhaler adjustments, or diagnose clinical symptoms.

• If you are experiencing acute shortness of breath, continuous wheezing, chest tightness, or declining peak flow, please consult your licensed physician or seek emergency medical care immediately.
• Environmental Safety Advice: In ${t.city}, current PM2.5 is ${d} µg/m³ (CPCB NAQI ${t.current.aqi} — ${t.current.aqiCategory}). Maintain a sealed indoor envelope with continuous HEPA filtration active, and avoid any outdoor physical exertion.`:o.includes("run")||o.includes("jog")||o.includes("exercise")||o.includes("workout")||o.includes("bike")&&o.includes("exercise")?d>120?`Outdoor Exercise Safety Alert for ${t.city}:
Current PM2.5 is ${d} µg/m³ (CPCB NAQI ${t.current.aqi} — ${t.current.aqiCategory}). Under aerobic exertion, your minute ventilation rises to over 55 L/min, dramatically accelerating micro-particulate intake.

Recommendation: Cancel outdoor cardio workouts today. Shift exercise indoors to a room with HEPA filtration active. Even during the diurnal minimum (${n.displayWindow}), PM2.5 remains hazardous for aerobic respiration.`:`Outdoor Exercise Guidance for ${t.city}:
Current PM2.5 is ${d} µg/m³. If running or exercising outdoors today, time your session strictly within the diurnal minimum window (${n.displayWindow}) when atmospheric dispersion is greatest. Sensitive individuals and runners should wear a certified N95 respirator to minimize airway irritation.`:o.includes("window")||o.includes("ventilat")||o.includes("flush")||o.includes("purifier")||o.includes("air out")?d>60?`Indoor Air Safety Notice for ${t.city}:
Current outdoor PM2.5 is ${d} µg/m³. Natural ventilation is strictly NOT recommended today. Opening windows will flood your home with outdoor particulates, degrading indoor air quality. Keep all exterior windows sealed, set air conditioners to internal recirculation, and run your HEPA air purifier.`:`Indoor Ventilation Protocol for ${t.city}:
Outdoor air quality is relatively moderate (PM2.5: ${d} µg/m³). You may conduct a brief 15 to 20-minute cross-ventilation flush during the diurnal dispersion window (${n.displayWindow}) to evacuate indoor CO2 and cooking odors. Seal all windows before evening traffic congestion begins.`:o.includes("commute")||o.includes("metro")||o.includes("auto")||o.includes("traffic")||o.includes("bus")||o.includes("drive")?`Commute Exposure Analysis for ${t.city}:
In dense traffic corridors, open two-wheelers and auto-rickshaws expose commuters to direct tailpipe exhaust (~30% higher than ambient background). Switching to the AC Metro reduces your commute particulate exposure by up to 72% while eliminating ~1.8 kg of personal vehicular CO2 emissions for a 14 km trip.`:o.includes("child")||o.includes("kid")||o.includes("school")||o.includes("baby")||o.includes("family")?d>100?`Child Air Protection Advisory for ${t.city}:
Children have developing lungs and higher respiratory rates per kilogram of body weight. With current PM2.5 at ${d} µg/m³, ensure schools conduct physical education indoors and keep outdoor playtime to a strict minimum. When outdoors for necessary transit, equip a well-fitted pediatric particulate mask.`:`Family Air Quality Guidance:
Outdoor PM2.5 is ${d} µg/m³. Today's relatively lower exposure window is ${n.displayWindow}. Schedule outdoor family activities during this window and avoid major arterial roadways during morning and evening rush hours.`:o.includes("mask")||o.includes("n95")||o.includes("cloth")||o.includes("surgical")||o.includes("respirator")?`Mask Efficacy & Barrier Science:
• Cloth Masks: Provide only 20–25% nominal filtration for PM2.5 because woven fabric pores (20–100 µm) are much larger than fine combustion aerosols (<2.5 µm).
• Surgical Masks: Filter ~60% under ideal conditions, but lack perimeter facial seal, allowing inward leakage around the cheeks and nose bridge.
• Certified N95 / FFP2: Provides >95% filtration efficiency using electrostatically charged meltblown polypropylene microfibers that capture sub-micron particles via impaction, interception, and diffusion.

Recommendation: When ambient PM2.5 exceeds 90 µg/m³, wear a snug-fitting N95 respirator for all outdoor transit.`:o.includes("plant")||o.includes("plants")||o.includes("nasa")?`Indoor Plants vs. Air Quality Reality:
While the 1989 NASA Clean Air Study demonstrated that potted plants absorb certain VOCs (like benzene and formaldehyde) in sealed airtight test chambers over days, peer-reviewed building science studies show that plants have virtually NEGLIGIBLE (<1%) capacity to remove ambient fine particulate matter (PM2.5) in real-world ventilated rooms.

To clean particulate air indoors, mechanical HEPA filtration (with a Clean Air Delivery Rate of 200–300 m³/h) is required. Plants add psychological calm and aesthetics, but cannot substitute for a particulate filter.`:o.includes("inversion")||o.includes("winter")||o.includes("why is pollution")||o.includes("stubble")||o.includes("night")?`Atmospheric Mechanics & Inversion Trapping in ${t.city}:
During clear winter evenings, the Earth's surface radiates heat rapidly into space, cooling the ground air layer while warmer air remains aloft. This creates a "thermal inversion cap" where the planetary boundary layer collapses from ~1,200 meters in the afternoon down to 100–200 meters overnight.

With low surface wind speeds (<6 km/h), vehicular tailpipe emissions, brick kiln soot, and biomass smoke become physically trapped in a thin ground blanket, causing PM2.5 to double between 8 PM and 9 AM. Midday solar heating breaks this cap, creating today's lower exposure window (${n.displayWindow}).`:o.includes("sleep")||o.includes("bedroom")||o.includes("overnight")||o.includes("nighttime")?`Overnight Bedroom Air Protocol for ${t.city}:
Humans spend approximately 7 to 9 continuous hours in the bedroom, inhaling 2,500 to 3,500 litres of air. Because outdoor nocturnal inversion traps severe pollution at ground level, particles seep through window cracks.

Actionable Directive:
1. Keep bedroom windows and doors closed to minimize the infiltration volume.
2. Run your HEPA air purifier continuously on Quiet / Medium mode placed at least 1 meter away from walls and near breathing height.
3. Avoid burning mosquito coils or dhoop incense, which emit high concentrations of formaldehyde and PM2.5 in closed bedrooms.`:o.includes("cpcb")||o.includes("epa")||o.includes("difference between")||o.includes("standard")||o.includes("scale")?`Understanding CPCB NAQI vs. US EPA AQI:
• Indian CPCB NAQI: Calibrated by the Central Pollution Control Board (2014) for Indian ambient realities. Its PM2.5 scale is: 0–30 (Good), 31–60 (Satisfactory), 61–90 (Moderate), 91–120 (Poor), 121–250 (Very Poor), and 250+ (Severe). Current CPCB NAQI for ${t.city} is ${t.current.aqi} (${t.current.aqiCategory}).
• US EPA AQI: Employs stricter public health brackets: 0–12 µg/m³ (Good), 12.1–35.4 (Moderate), 35.5–55.4 (Unhealthy for Sensitive), 55.5–150.4 (Unhealthy), 150.5–250.4 (Very Unhealthy), and 250.5+ (Hazardous).

BreatheWise displays both in the Transparency Drawer so users and judges can compare verified global standards side-by-side.`:`In ${t.city}, current PM2.5 is ${t.current.pm25} µg/m³ (CPCB NAQI ${t.current.aqi} — ${t.current.aqiCategory}). Today's lowest relative exposure window is ${n.displayWindow} (${n.statusLabel}). For your selected ${s} profile, prioritize barrier protection (N95) during rush hours and keep indoor spaces sealed when outdoor air is elevated.`}try{return(await new Vl(a).getGenerativeModel({model:"gemini-1.5-flash",systemInstruction:`You are BreatheWise AI, an expert Environmental Intelligence and Living Assistant.
Current live context for ${t.city}, India:
- PM2.5: ${t.current.pm25} µg/m³, CPCB NAQI: ${t.current.aqi} (${t.current.aqiCategory})
- Temperature: ${t.weather.temperature}°C, Wind: ${t.weather.windSpeed} km/h
- Lowest Exposure Window: ${n.displayWindow} (${n.statusLabel})
- Active Profile: ${s}
- Ozone Warning: ${n.ozoneRiskWarning||"None"}
STRICT RULES:
1. If PM2.5 > 60 µg/m³, NEVER tell the user to open windows or ventilate.
2. If PM2.5 > 120 µg/m³, advise against outdoor aerobic workouts.
3. Never invent numbers. Never diagnose diseases or prescribe medications.
Keep responses concise, actionable, and grounded in the data above.`}).startChat({history:e.slice(-6).map(p=>({role:p.role==="assistant"?"model":"user",parts:[{text:p.content}]}))}).sendMessage(i)).response.text()}catch(o){return console.warn("[BreatheWise] Gemini chat error, using deterministic response.",o),`In ${t.city}, current PM2.5 is ${t.current.pm25} µg/m³ (CPCB NAQI ${t.current.aqi}). Today's lowest relative exposure window is ${n.displayWindow}. We recommend scheduling essential outdoor tasks during this window and keeping indoor spaces sealed during morning and evening smog peaks.`}}const Wl=Ie.createContext(void 0),bu=({children:i})=>{const[e,t]=Ie.useState(()=>{try{const U=new URLSearchParams(window.location.search).get("city");if(U)return U}catch{}return localStorage.getItem("breathewise_city")||"delhi-anand-vihar"}),[n,s]=Ie.useState(()=>{try{const U=new URLSearchParams(window.location.search).get("profile"),Z=localStorage.getItem("breathewise_prefs"),z=Z?JSON.parse(Z):uo;return U&&["pediatric","senior_respiratory","outdoor_athlete","normal_adult"].includes(U)?{...z,vulnerabilityProfile:U}:z}catch{return uo}}),[r,a]=Ie.useState(()=>{try{return sessionStorage.getItem("breathewise_session_gemini_key")||""}catch{return""}}),o=U=>{a(U);try{U?sessionStorage.setItem("breathewise_session_gemini_key",U):sessionStorage.removeItem("breathewise_session_gemini_key")}catch{}A(!0),rr(d,x,n.vulnerabilityProfile,U).then(Z=>{m(Z),A(!1)}).catch(()=>{m(Fi(d,x,n.vulnerabilityProfile)),A(!1)})},[d,l]=Ie.useState(()=>Tn[e]||Tn["delhi-anand-vihar"]),[u,p]=Ie.useState(!0),[h,f]=Ie.useState(null),[x,M]=Ie.useState(()=>sr(d.hourly)),[g,m]=Ie.useState(()=>Fi(d,x,n.vulnerabilityProfile)),[b,A]=Ie.useState(!1),[y,C]=Ie.useState(()=>{try{const U=window.location.hash.replace("#","");if(U==="diurnal")return"overview";if(["landing","overview","commute","indoor","simulator","assistant"].includes(U))return U}catch{}return"landing"}),T=U=>{C(U);try{window.location.hash=U==="landing"?"":U}catch{}},[_,E]=Ie.useState(()=>{try{return window.location.search.includes("transparency=true")}catch{}return!1}),[O,R]=Ie.useState(()=>{try{return localStorage.getItem("breathewise_demo_mode")==="true"}catch{return!1}}),D=()=>{R(U=>{const Z=!U;try{localStorage.setItem("breathewise_demo_mode",String(Z))}catch{}return Z})},k=Ie.useCallback(async U=>{p(!0),f(null);try{let Z;O?Z=Tn[U]||Tn["delhi-anand-vihar"]:Z=await jd(U),l(Z);const z=sr(Z.hourly);M(z),A(!0);const K=await rr(Z,z,n.vulnerabilityProfile,r);m(K),A(!1)}catch(Z){console.warn("Failed to load telemetry:",Z);const z=Tn[U]||Tn["delhi-anand-vihar"];l(z),M(sr(z.hourly)),f((Z==null?void 0:Z.message)||"Could not load live telemetry")}finally{p(!1)}},[n.vulnerabilityProfile,r,O]);Ie.useEffect(()=>{k(e)},[e,k]);const W=U=>{t(U);try{localStorage.setItem("breathewise_city",U)}catch{}},P=U=>{const Z={...n,vulnerabilityProfile:U};s(Z);try{localStorage.setItem("breathewise_prefs",JSON.stringify(Z))}catch{}A(!0),rr(d,x,U,r).then(z=>{m(z),A(!1)}).catch(()=>{m(Fi(d,x,U)),A(!1)})},V=U=>{const Z={...n,...U};s(Z);try{localStorage.setItem("breathewise_prefs",JSON.stringify(Z))}catch{}},j=async()=>{await k(e)};return c.jsx(Wl.Provider,{value:{selectedCityId:e,telemetry:d,isLoadingTelemetry:u,telemetryError:h,cleanAirWindow:x,userPreferences:n,livingPlan:g,isLoadingPlan:b,activeTab:y,isTransparencyOpen:_,sessionApiKey:r,setSessionApiKey:o,isDemoMode:O,toggleDemoMode:D,selectCity:W,updateProfile:P,updatePreferences:V,setActiveTab:T,setIsTransparencyOpen:E,refreshData:j},children:i})},kt=()=>{const i=Ie.useContext(Wl);if(!i)throw new Error("useApp must be used within an AppProvider");return i},yu=()=>{const{selectedCityId:i,selectCity:e,telemetry:t,isLoadingTelemetry:n,refreshData:s,userPreferences:r,updateProfile:a,setIsTransparencyOpen:o,activeTab:d,setActiveTab:l,isDemoMode:u,toggleDemoMode:p}=kt(),h=[{id:"pediatric",label:"Child / Pediatric",icon:c.jsx(Yc,{className:"w-3.5 h-3.5"})},{id:"senior_respiratory",label:"Senior / Asthmatic",icon:c.jsx(Kc,{className:"w-3.5 h-3.5"})},{id:"outdoor_athlete",label:"Outdoor Athlete",icon:c.jsx(Ta,{className:"w-3.5 h-3.5"})},{id:"normal_adult",label:"General Adult",icon:c.jsx(Zc,{className:"w-3.5 h-3.5"})}],f=t.metadata,x=f.isLive&&!f.fetchTimestamp.startsWith("Cached"),M=[{id:"overview",label:"Air Intelligence",icon:c.jsx(Fs,{className:"w-3.5 h-3.5"})},{id:"commute",label:"Commute",icon:c.jsx(Or,{className:"w-3.5 h-3.5"})},{id:"indoor",label:"Indoor",icon:c.jsx(Bs,{className:"w-3.5 h-3.5"})},{id:"simulator",label:"What-If",icon:c.jsx(ks,{className:"w-3.5 h-3.5"})},{id:"assistant",label:"AI Assistant",icon:c.jsx(Ys,{className:"w-3.5 h-3.5"})}];return c.jsx("header",{className:"sticky top-0 z-40 bg-[#FAFBF8]/95 backdrop-blur-md border-b border-stone-200/70 transition-all",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[c.jsxs("div",{className:"flex items-center justify-between h-14 sm:h-16",children:[c.jsxs("div",{className:"flex items-center space-x-2.5 cursor-pointer",onClick:()=>l("landing"),children:[c.jsx("div",{className:"w-9 h-9 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-md shadow-emerald-600/20",children:c.jsx("svg",{className:"w-5 h-5 fill-current",viewBox:"0 0 24 24",children:c.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"})})}),c.jsxs("div",{children:[c.jsx("div",{className:"flex items-center space-x-1.5",children:c.jsxs("span",{className:"font-extrabold text-lg text-slatecharcoal-900 tracking-tight leading-tight",children:["BreatheWise ",c.jsx("span",{className:"text-emerald-700",children:"AI"})]})}),c.jsx("p",{className:"text-[10px] text-slate-500 font-medium tracking-tight -mt-0.5",children:"Your Urban Air Intelligence Assistant"})]})]}),c.jsx("nav",{className:"hidden lg:flex items-center space-x-1.5 p-1 rounded-full bg-stone-200/50 border border-stone-200/80",children:M.map(g=>{const m=d===g.id;return c.jsxs("button",{onClick:()=>l(g.id),className:`flex items-center space-x-1.5 py-1.5 px-3.5 rounded-full text-xs font-bold transition-all cursor-pointer ${m?"bg-[#164E43] text-white shadow-sm ring-1 ring-[#164E43]":"text-slate-600 hover:text-slatecharcoal-900 hover:bg-white/70"}`,children:[g.icon,c.jsx("span",{children:g.label})]},g.id)})}),c.jsxs("div",{className:"flex items-center space-x-2.5",children:[c.jsxs("button",{onClick:()=>l("landing"),className:"flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-100 text-xs font-semibold shadow-2xs border border-slate-700 transition-all cursor-pointer",title:"Switch to 3D Earth Globe View",children:[c.jsx(jc,{className:"w-3.5 h-3.5 text-emerald-400"}),c.jsx("span",{className:"hidden sm:inline",children:"3D Globe"})]}),c.jsx("button",{onClick:()=>o(!0),className:"w-9 h-9 rounded-full bg-white hover:bg-stone-100 border border-stone-200 flex items-center justify-center text-slate-600 shadow-2xs transition-colors cursor-pointer",title:"Methodology & Alerts",children:c.jsx(Xc,{className:"w-4 h-4"})}),c.jsxs("div",{className:"relative w-9 h-9 rounded-full bg-emerald-900 text-white font-bold text-xs flex items-center justify-center border-2 border-emerald-500 shadow-sm",children:[c.jsx(Ur,{className:"w-4 h-4 text-emerald-100"}),c.jsx("span",{className:"absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white"})]})]})]}),c.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 py-2.5 border-t border-stone-200/50 text-xs",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsxs("div",{className:"relative",children:[c.jsx("select",{"aria-label":"Select Target City",value:i,onChange:g=>e(g.target.value),style:{WebkitAppearance:"none",MozAppearance:"none"},className:"appearance-none bg-white hover:bg-stone-50 text-slatecharcoal-900 text-xs font-bold py-1.5 pl-8 pr-7 rounded-full border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 cursor-pointer transition-all shadow-2xs",children:Br.map(g=>c.jsx("option",{value:g.id,children:g.name},g.id))}),c.jsx(qc,{className:"pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500"}),c.jsx("div",{className:"pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400",children:c.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})})]}),c.jsxs("div",{className:"relative",children:[c.jsx("select",{"aria-label":"Vulnerability Profile",value:r.vulnerabilityProfile,onChange:g=>a(g.target.value),style:{WebkitAppearance:"none",MozAppearance:"none"},className:"appearance-none bg-white hover:bg-stone-50 text-slatecharcoal-900 text-xs font-bold py-1.5 pl-8 pr-7 rounded-full border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 cursor-pointer transition-all shadow-2xs",children:h.map(g=>c.jsx("option",{value:g.id,children:g.label},g.id))}),c.jsx(Ur,{className:"pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500"}),c.jsx("div",{className:"pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400",children:c.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})})]})]}),c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsxs("div",{className:"flex items-center space-x-1.5 bg-stone-100/80 p-0.5 rounded-full border border-stone-200/80 text-[11px]",children:[c.jsxs("button",{onClick:()=>{u&&p()},className:`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${x?"bg-white text-slatecharcoal-900 font-bold shadow-2xs":"text-slate-400 hover:text-slate-600 font-medium"}`,title:x?"Connected to European CAMS atmospheric model":"Click to connect to live Open-Meteo telemetry",children:[c.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${x?"bg-emerald-500 animate-pulse":"bg-slate-300"}`}),c.jsx("span",{children:"Live (CAMS)"})]}),c.jsxs("button",{onClick:()=>{u||p()},className:`inline-flex items-center space-x-1 px-2 py-0.5 rounded-full transition-all cursor-pointer ${x?"text-slate-400 hover:text-slate-600 font-medium":"bg-white text-slatecharcoal-900 font-bold shadow-2xs"}`,title:x?"Click to switch to calibrated offline demonstration":"Calibrated offline demonstration mode active",children:[c.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${x?"border border-slate-300":"bg-amber-500"}`}),c.jsx("span",{children:"Demo Mode"})]})]}),c.jsx("button",{onClick:s,disabled:n,"aria-label":"Refresh telemetry data",className:"p-1.5 rounded-full bg-white hover:bg-stone-100 border border-stone-200 text-slate-600 transition-colors shadow-2xs cursor-pointer",title:"Refresh Telemetry",children:c.jsx($c,{className:`w-3.5 h-3.5 ${n?"animate-spin text-emerald-600":""}`})})]})]})]})})},wi=()=>{const{telemetry:i,cleanAirWindow:e}=kt(),t=i.city.includes("—")?i.city.split("—")[0].trim():i.city,n=i.current.pm25??265,s=i.current.aqi??405,r=i.current.aqiCategory??"Severe",a=i.current.primaryPollutant||"PM2.5",o=r==="Severe"||r==="Very Poor"||s>=301,d=r==="Poor"||s>=201&&s<=300,l=r==="Moderate"||s>=101&&s<=200,u=r==="Satisfactory"||s>=51&&s<=100,p=o?"#DC2626":d?"#EA580C":l?"#D97706":u?"#16A34A":"#10B981",h=o?"bg-rose-500":d?"bg-orange-500":l?"bg-amber-500":u?"bg-emerald-600":"bg-emerald-500",f=Math.max(0,Math.min(500,s)),x=54,M=2*Math.PI*x,g=M-f/500*M;return c.jsxs("div",{className:"relative overflow-hidden rounded-3xl border border-stone-200/80 p-5 sm:p-6 lg:p-7 shadow-xs",children:[c.jsxs("div",{className:"absolute inset-0 pointer-events-none z-0",children:[c.jsx("img",{src:"./images/hero-scenic-backdrop.png",alt:"Atmospheric scenic Delhi landscape",className:"w-full h-full object-cover object-center"}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/20"})]}),c.jsxs("div",{className:"relative z-10 flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-6",children:[c.jsxs("div",{className:"hidden lg:block flex-1 text-left space-y-2 max-w-sm sm:max-w-md",children:[c.jsxs("h1",{className:"text-xl sm:text-2xl lg:text-3xl font-extrabold text-slatecharcoal-900 tracking-tight leading-tight",children:[o?"Severe Particulate Episode in ":d?"Elevated Air Pollution in ":"Acceptable Air Quality in ",c.jsx("span",{style:{color:p},children:t})]}),c.jsx("p",{className:"text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal",children:o?"Air quality is severely degraded due to high PM2.5 and stagnant morning conditions. Limit outdoor exertion and keep indoor spaces sealed.":d?"Moderate to high particulate levels observed. Optimize outdoor activity for the clean-air convective valley.":"Atmospheric conditions are favorable for outdoor recreation and controlled residential ventilation."})]}),c.jsx("div",{className:"shrink-0 flex items-center justify-center my-1 lg:my-0",children:c.jsxs("div",{className:"relative flex items-center justify-center w-44 h-44 sm:w-48 sm:h-48",children:[c.jsx("div",{className:"absolute inset-0 rounded-full blur-xl opacity-35",style:{backgroundColor:p}}),c.jsxs("svg",{className:"w-40 h-40 sm:w-44 sm:h-44 -rotate-90 transform",viewBox:"0 0 140 140",children:[c.jsx("circle",{cx:"70",cy:"70",r:x+3,stroke:p,strokeWidth:"1.2",strokeOpacity:"0.25",fill:"none"}),c.jsx("circle",{cx:"70",cy:"70",r:x,className:"stroke-stone-200",strokeWidth:"8",fill:"none"}),c.jsx("circle",{cx:"70",cy:"70",r:x,stroke:p,strokeWidth:"8",strokeDasharray:M,strokeDashoffset:g,strokeLinecap:"round",fill:"none",className:"transition-all duration-1000 ease-out",style:{filter:`drop-shadow(0 0 5px ${p}80)`}})]}),c.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-center select-none",children:[c.jsx("span",{className:"text-[9px] font-bold uppercase tracking-wider text-slate-400",children:"CPCB NAQI"}),c.jsx("span",{className:"text-3xl sm:text-4xl font-black text-slatecharcoal-900 tracking-tight my-0.5 font-mono",children:s}),c.jsx("span",{className:`px-2.5 py-0.5 rounded-full text-[11px] font-black text-white ${h} shadow-2xs`,children:r}),c.jsxs("span",{className:"text-[10px] text-slate-500 font-medium mt-0.5",children:["Dominant: ",a]})]})]})}),c.jsxs("div",{className:"w-full lg:w-64 grid grid-cols-3 lg:flex lg:flex-col gap-2 lg:space-y-2 lg:gap-0",children:[c.jsxs("div",{className:"flex flex-col lg:flex-row items-center lg:space-x-2.5 p-2 sm:p-2.5 rounded-xl bg-white border border-stone-200/80 shadow-2xs hover:shadow-xs transition-all text-center lg:text-left",children:[c.jsx("div",{className:`w-8 h-8 rounded-lg flex items-center justify-center border shrink-0 mb-1 lg:mb-0 ${o||d?"bg-rose-50 text-rose-600 border-rose-100":"bg-emerald-50 text-emerald-600 border-emerald-100"}`,children:c.jsx(Ta,{className:"w-3.5 h-3.5"})}),c.jsxs("div",{children:[c.jsx("div",{className:"hidden lg:block text-[9px] font-bold text-slate-400 uppercase tracking-wider",children:"Outdoor Exercise"}),c.jsx("div",{className:`text-[11px] sm:text-xs font-extrabold ${o||d?"text-rose-600":"text-emerald-700"}`,children:o?"Shift Indoors":d?"Use Best Window":"Favorable Today"})]})]}),c.jsxs("div",{className:"flex flex-col lg:flex-row items-center lg:space-x-2.5 p-2 sm:p-2.5 rounded-xl bg-white border border-stone-200/80 shadow-2xs hover:shadow-xs transition-all text-center lg:text-left",children:[c.jsx("div",{className:`w-8 h-8 rounded-lg flex items-center justify-center border shrink-0 mb-1 lg:mb-0 ${n>60?"bg-orange-50 text-orange-600 border-orange-100":"bg-emerald-50 text-emerald-600 border-emerald-100"}`,children:n>60?c.jsx(Jc,{className:"w-3.5 h-3.5"}):c.jsx(Qc,{className:"w-3.5 h-3.5"})}),c.jsxs("div",{children:[c.jsx("div",{className:"hidden lg:block text-[9px] font-bold text-slate-400 uppercase tracking-wider",children:"Window Ventilation"}),c.jsx("div",{className:`text-[11px] sm:text-xs font-extrabold ${n>60?"text-rose-600":"text-emerald-700"}`,children:n>60?"Keep Sealed":"Safe to Flush"})]})]}),c.jsxs("div",{className:"flex flex-col lg:flex-row items-center lg:space-x-2.5 p-2 sm:p-2.5 rounded-xl bg-white border border-stone-200/80 shadow-2xs hover:shadow-xs transition-all text-center lg:text-left",children:[c.jsx("div",{className:"w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100 shrink-0 mb-1 lg:mb-0",children:c.jsx(Ra,{className:"w-3.5 h-3.5"})}),c.jsxs("div",{children:[c.jsx("div",{className:"hidden lg:block text-[9px] font-bold text-slate-400 uppercase tracking-wider",children:"Commute Protection"}),c.jsx("div",{className:"text-[11px] sm:text-xs font-extrabold text-teal-700",children:o||d?c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"lg:hidden",children:"AC Metro / N95"}),c.jsx("span",{className:"hidden lg:inline",children:"Prefer AC Metro / N95"})]}):"Standard Transit"})]})]})]})]})]})},Eu=()=>{const{telemetry:i}=kt(),{current:e,weather:t}=i,n=e.pm25!=null?e.pm25:"--",s=e.pm10!=null?e.pm10:"--",r=e.no2!=null?e.no2:"--",a=e.co!=null?e.co:"--",o=e.o3!=null?e.o3:"--",d=(t==null?void 0:t.humidity)!=null?t.humidity:"--",l=(t==null?void 0:t.windSpeed)!=null?`${t.windSpeed}`:"--",u=[{id:"pm25",label:"PM2.5",value:n,unit:"µg/m³",icon:c.jsx(Ta,{className:"w-3.5 h-3.5 text-rose-500"}),color:"text-rose-600"},{id:"pm10",label:"PM10",value:s??"--",unit:s!=null?"µg/m³":"",icon:c.jsx(ed,{className:"w-3.5 h-3.5 text-rose-500"}),color:"text-rose-600"},{id:"no2",label:"NO2",value:r??"--",unit:r!=null?"µg/m³":"",icon:c.jsx(td,{className:"w-3.5 h-3.5 text-teal-600"}),color:"text-teal-700"},{id:"co",label:"CO",value:a??"--",unit:a!=null?"mg/m³":"",icon:c.jsx(nd,{className:"w-3.5 h-3.5 text-amber-500"}),color:"text-amber-600"},{id:"o3",label:"O3",value:o??"--",unit:o!=null?"µg/m³":"",icon:c.jsx(Ca,{className:"w-3.5 h-3.5 text-emerald-500"}),color:"text-emerald-600"},{id:"humidity",label:"Humidity",value:`${d}%`,unit:"",icon:c.jsx(id,{className:"w-3.5 h-3.5 text-blue-500"}),color:"text-slatecharcoal-900"},{id:"wind",label:"Wind",value:`${l}`,unit:"km/h",icon:c.jsx(Fs,{className:"w-3.5 h-3.5 text-teal-500"}),color:"text-slatecharcoal-900"}];return c.jsx("div",{className:"hidden sm:block rounded-2xl bg-white border border-stone-200/80 py-2.5 px-4 sm:px-5 shadow-2xs",children:c.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4",children:[c.jsxs("div",{className:"shrink-0 border-b md:border-b-0 md:border-r border-stone-200/80 pb-2 md:pb-0 md:pr-6",children:[c.jsx("h2",{className:"text-sm font-extrabold text-slatecharcoal-900 tracking-tight",children:"At a Glance"}),c.jsx("p",{className:"text-[11px] text-slate-500 font-medium",children:"Atmospheric Diagnostics"})]}),c.jsx("div",{className:"flex-1 flex flex-wrap items-center justify-between gap-3 sm:gap-4 overflow-x-auto",children:u.map(p=>c.jsxs("div",{className:"flex items-center space-x-2 shrink-0",children:[c.jsx("div",{className:"p-1.5 rounded-lg bg-stone-50 border border-stone-200/60",children:p.icon}),c.jsxs("div",{className:"text-left",children:[c.jsx("div",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-wider",children:p.label}),c.jsxs("div",{className:"flex items-baseline space-x-0.5",children:[c.jsx("span",{className:`text-xs sm:text-sm font-black font-mono ${p.color}`,children:p.value}),p.unit&&c.jsx("span",{className:"text-[10px] text-slate-400 font-medium ml-0.5",children:p.unit})]})]})]},p.id))})]})})},wu=()=>{const{telemetry:i,cleanAirWindow:e}=kt(),t=i.hourly,n=new Date().getHours(),[s,r]=Ie.useState("window");let a=e.startHour,o=e.endHour;s==="morning"?(a=7,o=10):s==="evening"?(a=18,o=21):s==="night"&&(a=22,o=23);const d=({active:l,payload:u})=>{if(l&&u&&u.length){const p=u[0].payload,h=`${p.hour%12===0?12:p.hour%12}:00 ${p.hour>=12?"PM":"AM"}`,f=p.hour>=e.startHour&&p.hour<=e.endHour;return c.jsxs("div",{className:"bg-slatecharcoal-900 text-white p-3 rounded-2xl shadow-float text-xs space-y-1.5 border border-slate-700/80 max-w-[210px] backdrop-blur-md",children:[c.jsxs("div",{className:"font-semibold text-slate-200 flex items-center justify-between",children:[c.jsx("span",{className:"font-mono text-xs",children:h}),f&&c.jsx("span",{className:"text-[10px] bg-emerald-500 text-white px-2 py-0.5 rounded-full font-bold shadow-xs",children:"OPTIMAL"})]}),c.jsxs("div",{className:"flex justify-between items-baseline pt-1 border-t border-slate-800",children:[c.jsx("span",{className:"text-slate-400",children:"PM2.5:"}),c.jsxs("span",{className:"font-black text-sm text-emerald-400",children:[p.pm25," µg/m³"]})]}),c.jsxs("div",{className:"flex justify-between items-center text-[10px] text-slate-400",children:[c.jsx("span",{children:"CPCB NAQI:"}),c.jsx("span",{className:"font-bold text-slate-100",children:p.cpcbAqi})]})]})}return null};return c.jsxs("div",{className:"rounded-3xl bg-white border border-stone-200/80 p-4 sm:p-5 shadow-2xs flex flex-col justify-between h-full",children:[c.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-stone-100",children:[c.jsxs("div",{className:"flex items-center space-x-2.5",children:[c.jsx("div",{className:"w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shrink-0",children:c.jsx(Ks,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),c.jsxs("div",{children:[c.jsxs("h3",{className:"text-xs sm:text-base font-bold text-slatecharcoal-900 tracking-tight",children:[c.jsx("span",{className:"sm:hidden",children:"WindowSafe™"}),c.jsx("span",{className:"hidden sm:inline",children:"WindowSafe™ 24-Hour Diurnal Forecast"})]}),c.jsx("p",{className:"hidden sm:block text-[11px] text-slate-500 mt-0.5",children:"Find the safest time to ventilate based on daily pollution shifts"})]})]}),c.jsx("span",{className:"sm:hidden text-slate-400 text-xs font-bold",children:"›"})]}),c.jsxs("div",{className:"relative h-40 sm:h-44 w-full pt-2",children:[c.jsxs("div",{className:"absolute top-1 left-1/2 -translate-x-1/2 z-10 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] sm:text-[11px] font-bold shadow-xs flex items-center space-x-1 whitespace-nowrap",children:[c.jsx(Ca,{className:"w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0"}),c.jsxs("span",{children:["Optimal Window: ",e.displayWindow||"1:00 PM – 2:00 PM"]}),c.jsxs("span",{className:"hidden sm:inline text-emerald-600 ml-1",children:["↓ ~",e.reductionVsPeakPercent||56,"% vs peak"]})]}),c.jsx(Ed,{width:"100%",height:"100%",children:c.jsxs(wd,{data:t,margin:{top:28,right:10,left:-20,bottom:0},children:[c.jsx("defs",{children:c.jsxs("linearGradient",{id:"diurnalGradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[c.jsx("stop",{offset:"5%",stopColor:"#EF4444",stopOpacity:.4}),c.jsx("stop",{offset:"50%",stopColor:"#F59E0B",stopOpacity:.25}),c.jsx("stop",{offset:"95%",stopColor:"#10B981",stopOpacity:.05})]})}),c.jsx(Ad,{x1:a,x2:o,strokeOpacity:.25,stroke:"#10B981",fill:"#10B981",fillOpacity:.12}),c.jsx(Td,{x:n,stroke:"#D97706",strokeDasharray:"3 3",strokeWidth:1.5,label:{value:"NOW",position:"top",fill:"#D97706",fontSize:9,fontWeight:"bold"}}),c.jsx(Rd,{dataKey:"hour",tickFormatter:l=>`${l%12===0?12:l%12} ${l>=12?"PM":"AM"}`,tick:{fontSize:10,fill:"#64748B"},axisLine:{stroke:"#E2E8F0"},tickLine:!1,ticks:[6,8,10,12,14,16,18,20,22]}),c.jsx(Cd,{tick:{fontSize:10,fill:"#64748B"},axisLine:{stroke:"#E2E8F0"},tickLine:!1,domain:[0,300],unit:""}),c.jsx(Nd,{content:c.jsx(d,{})}),c.jsx(Pd,{type:"monotone",dataKey:"pm25",stroke:"#EF4444",strokeWidth:2.5,fillOpacity:1,fill:"url(#diurnalGradient)",activeDot:{r:5,fill:"#10B981",stroke:"#FFFFFF",strokeWidth:2}})]})})]})]})},Au=()=>{const{livingPlan:i,isLoadingPlan:e,userPreferences:t}=kt();if(e&&!i)return c.jsxs("div",{className:"bg-white p-6 sm:p-7 rounded-3xl border border-cream-200/80 shadow-soft animate-pulse space-y-4",children:[c.jsxs("div",{className:"flex justify-between items-center",children:[c.jsx("div",{className:"h-5 bg-cream-200 rounded-lg w-2/5"}),c.jsx("div",{className:"h-4 bg-cream-200 rounded-full w-20"})]}),c.jsx("div",{className:"h-3.5 bg-cream-200 rounded-lg w-3/5"}),c.jsx("div",{className:"space-y-4 pt-4",children:[1,2,3,4].map(a=>c.jsxs("div",{className:"flex space-x-3 items-start",children:[c.jsx("div",{className:"w-8 h-8 rounded-full bg-cream-200 shrink-0"}),c.jsxs("div",{className:"flex-1 space-y-2",children:[c.jsx("div",{className:"h-4 bg-cream-200 rounded w-1/4"}),c.jsx("div",{className:"h-3 bg-cream-100 rounded w-3/4"})]})]},a))})]});if(!i)return null;const n=a=>{switch(a){case"SAFE":return c.jsxs("span",{className:"inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sage-50 text-sage-700 border border-sage-200 shadow-2xs",children:[c.jsx(Ul,{className:"w-3 h-3 text-sage-600"}),c.jsx("span",{children:"SAFE WINDOW"})]});case"MODERATE":return c.jsx("span",{className:"inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200 shadow-2xs",children:c.jsx("span",{children:"MODERATE RISK"})});case"HIGH":return c.jsxs("span",{className:"inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-orange-50 text-orange-800 border border-orange-200 shadow-2xs",children:[c.jsx(oo,{className:"w-3 h-3 text-orange-600"}),c.jsx("span",{children:"ELEVATED"})]});case"CRITICAL":return c.jsxs("span",{className:"inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 text-rose-800 border border-rose-200 shadow-2xs",children:[c.jsx(oo,{className:"w-3 h-3 text-rose-600"}),c.jsx("span",{children:"HAZARDOUS"})]});default:return null}},s=a=>{switch(a){case 0:return c.jsx(Ca,{className:"w-3.5 h-3.5"});case 1:return c.jsx(od,{className:"w-3.5 h-3.5"});case 2:return c.jsx(ad,{className:"w-3.5 h-3.5"});case 3:default:return c.jsx(rd,{className:"w-3.5 h-3.5"})}},r=t.vulnerabilityProfile.split("_").map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(" ");return c.jsxs("div",{className:"bg-white p-6 sm:p-7 rounded-3xl border border-cream-200/80 shadow-soft space-y-6",children:[c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-cream-200/60",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("div",{className:"w-7 h-7 rounded-lg bg-forest-50 text-forest-600 flex items-center justify-center border border-forest-100/80",children:c.jsx(Ys,{className:"w-3.5 h-3.5"})}),c.jsx("h2",{className:"text-base sm:text-lg font-bold text-slatecharcoal-900 tracking-tight",children:"Adaptive Living Routine"})]}),c.jsxs("p",{className:"text-xs text-slate-500 mt-1",children:["Personalized for ",c.jsx("strong",{className:"text-forest-700 font-semibold",children:r})," physiology using Gemini & convective boundary models"]})]}),c.jsx("div",{className:"flex items-center space-x-2 self-start sm:self-auto",children:c.jsx("span",{className:"text-[11px] font-semibold text-slate-600 bg-cream-50 px-2.5 py-1 rounded-full border border-cream-200/80",children:i.scientificConfidence})})]}),c.jsx("div",{className:"relative pl-7 sm:pl-8 space-y-6 before:absolute before:left-3 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-cream-200",children:i.dailyRoutine.map((a,o)=>{const d=a.exposureRisk==="SAFE",l=a.exposureRisk==="CRITICAL",u=a.exposureRisk==="HIGH";return c.jsxs("div",{className:"relative group",children:[c.jsx("div",{className:`absolute -left-7 sm:-left-8 top-0.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all ${d?"bg-sage-100 text-sage-700 border-2 border-white ring-2 ring-sage-300":l?"bg-rose-100 text-rose-700 border-2 border-white ring-2 ring-rose-300":u?"bg-orange-100 text-orange-700 border-2 border-white ring-2 ring-orange-300":"bg-cream-100 text-slate-600 border-2 border-white ring-2 ring-cream-300"}`,children:s(o)}),c.jsxs("div",{className:`p-4 sm:p-4.5 rounded-2xl border transition-all ${d?"bg-sage-50/40 border-sage-200/70 hover:border-sage-300":l?"bg-rose-50/30 border-rose-200/70 hover:border-rose-300":"bg-cream-50/50 border-cream-200/70 hover:border-cream-300"}`,children:[c.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-1.5 mb-1.5",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("span",{className:"text-xs font-bold text-slatecharcoal-900 font-mono tracking-tight bg-white px-2 py-0.5 rounded-md border border-cream-200/60 shadow-2xs",children:a.timeSlot}),c.jsx("span",{className:"text-xs font-bold text-slate-800",children:a.activityName})]}),c.jsx("div",{children:n(a.exposureRisk)})]}),c.jsx("p",{className:"text-xs font-medium text-slatecharcoal-800 leading-relaxed mt-1",children:a.directive}),a.alternativeSuggestion&&c.jsxs("div",{className:"mt-2.5 pt-2 border-t border-cream-200/50 text-[11px] flex items-start space-x-1.5 text-slate-600",children:[c.jsx("span",{className:"font-semibold text-forest-700 shrink-0",children:"Alternative:"}),c.jsx("span",{className:"leading-relaxed",children:a.alternativeSuggestion})]})]})]},o)})}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2",children:[c.jsxs("div",{className:"bg-cream-50/80 p-4 rounded-2xl border border-cream-200/80 text-xs space-y-1.5",children:[c.jsxs("div",{className:"font-semibold text-slatecharcoal-900 flex items-center space-x-2",children:[c.jsx("div",{className:"w-5 h-5 rounded-md bg-forest-100 text-forest-700 flex items-center justify-center",children:c.jsx(sd,{className:"w-3 h-3"})}),c.jsx("span",{children:"Indoor Envelope Protocol"})]}),c.jsx("p",{className:"text-slate-600 leading-relaxed text-[11px] pl-7",children:i.indoorProtocol})]}),c.jsxs("div",{className:"bg-forest-50/40 p-4 rounded-2xl border border-forest-100/70 text-xs space-y-1.5",children:[c.jsxs("div",{className:"font-semibold text-forest-800 flex items-center space-x-2",children:[c.jsx("div",{className:"w-5 h-5 rounded-md bg-forest-100 text-forest-700 flex items-center justify-center",children:c.jsx(Ks,{className:"w-3 h-3"})}),c.jsx("span",{children:"Civic Eco-Swap"})]}),c.jsx("p",{className:"text-slate-700 leading-relaxed text-[11px] pl-7",children:i.ecoActionOfTheDay})]})]})]})},No=[{mode:"two_wheeler_open",label:"Open Two-Wheeler / Motorcycle",speedKmh:24,cabinExposureFactor:1.3,ventilationLpm:28,carbonKgPerKm:.045,assumptions:"Rider is directly exposed to ground-level tailpipe plumes in traffic gridlock."},{mode:"auto_rickshaw",label:"Auto-Rickshaw (Open Cabin)",speedKmh:20,cabinExposureFactor:1.15,ventilationLpm:20,carbonKgPerKm:.075,assumptions:"Open-sided cabin allows street-level particulate entry with minimal buffering."},{mode:"non_ac_bus",label:"Public Bus (Non-AC)",speedKmh:16,cabinExposureFactor:1.05,ventilationLpm:18,carbonKgPerKm:.022,assumptions:"Open windows maintain parity with ambient air, though passenger density buffers peak plumes."},{mode:"ac_cab",label:"AC Private Cab (Recirculation)",speedKmh:22,cabinExposureFactor:.5,ventilationLpm:14,carbonKgPerKm:.16,assumptions:"Closed windows and vehicle HVAC air filter remove approx 50% of coarse/fine particulates."},{mode:"ac_metro",label:"Rapid AC Metro Transit (Multimodal)",speedKmh:32,cabinExposureFactor:.32,ventilationLpm:16,carbonKgPerKm:.012,assumptions:"Includes realistic 10-min outdoor first/last-mile walking at road level, plus high-efficiency HVAC filtered train cabin."},{mode:"work_from_home",label:"Work From Home (Trip Avoidance)",speedKmh:0,cabinExposureFactor:.2,ventilationLpm:8,carbonKgPerKm:0,assumptions:"Evaluates indoor exposure during the commute period avoided (closed envelope indoors)."}];function Tu(i,e){const t=typeof i=="number"&&!isNaN(i)?Math.max(1,Math.min(60,i)):14,n=typeof e=="number"&&!isNaN(e)?Math.max(0,e):0,s=No[0],r=t/s.speedKmh,a=n*s.cabinExposureFactor,o=s.ventilationLpm*60*r/1e3,d=a*o;return No.map(l=>{let u=0,p=0;l.mode==="work_from_home"?(u=0,p=r):(p=t/l.speedKmh,u=Math.round(p*60));const h=Math.round(n*l.cabinExposureFactor),f=l.ventilationLpm*60*p/1e3,x=+(h*f).toFixed(1),M=+(t*l.carbonKgPerKm).toFixed(2),g=d>0?Math.max(0,Math.min(99,Math.round((d-x)/d*100))):0;let m;return l.mode==="ac_metro"?m="RECOMMENDED":l.mode==="work_from_home"?m="BEST_ECO_SWAP":(l.mode==="two_wheeler_open"||l.mode==="auto_rickshaw")&&(m="HIGH_EXPOSURE_RISK"),{mode:l.mode,modeLabel:l.label,travelTimeMinutes:u,cabinPm25Concentration:h,inhaledDoseUg:x,carbonEmissionKg:M,exposureReductionVsOpenTransitPercent:g,recommendationTag:m,assumptions:l.assumptions}})}const Po=()=>{const{telemetry:i,userPreferences:e}=kt(),[t,n]=Ie.useState(e.typicalCommuteDistanceKm||14),s=i.city.includes("Delhi"),r=t===14&&s?265:i.current.pm25||265,a=Tu(t,r),o=["two_wheeler_open","auto_rickshaw","non_ac_bus","ac_metro"],d=a.filter(u=>o.includes(u.mode)),l=u=>{switch(u){case"two_wheeler_open":return{title:"Two-Wheeler (Open)",icon:c.jsx(dd,{className:"w-5 h-5 text-rose-500"}),cardBg:"bg-rose-50/40 border-rose-200/80",badgeColor:"text-rose-600"};case"auto_rickshaw":return{title:"Auto-Rickshaw",icon:c.jsx(Or,{className:"w-5 h-5 text-amber-500"}),cardBg:"bg-amber-50/40 border-amber-200/80",badgeColor:"text-amber-700"};case"non_ac_bus":case"ac_cab":return{title:"Car (Non-AC)",icon:c.jsx(Or,{className:"w-5 h-5 text-slate-600"}),cardBg:"bg-stone-50/60 border-stone-200/80",badgeColor:"text-slate-600"};case"ac_metro":default:return{title:"AC Metro (Recommended)",icon:c.jsx(Ra,{className:"w-5 h-5 text-emerald-600"}),cardBg:"bg-emerald-50/50 border-emerald-300 ring-2 ring-emerald-500/20",badgeColor:"text-emerald-700 font-extrabold",isRecommended:!0}}};return c.jsxs("div",{className:"rounded-3xl bg-white border border-stone-200/80 p-4 sm:p-5 shadow-2xs flex flex-col justify-between h-full",children:[c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-stone-100",children:[c.jsxs("div",{className:"flex items-center space-x-2.5",children:[c.jsx("div",{className:"w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100 shrink-0",children:c.jsx(ld,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xs sm:text-base font-bold text-slatecharcoal-900 tracking-tight",children:"Commute Exposure & Eco-Swap"}),c.jsx("p",{className:"text-[10px] sm:text-[11px] text-slate-500 mt-0.5",children:"Compare travel modes by inhaled particulate mass and carbon emissions"})]})]}),c.jsx("div",{className:"flex items-center space-x-1 self-start sm:self-auto bg-stone-100/70 p-0.5 rounded-lg text-xs",children:[5,14,25].map(u=>c.jsxs("button",{onClick:()=>n(u),className:`px-2 py-0.5 rounded font-bold text-[10px] transition-all cursor-pointer ${t===u?"bg-white text-slatecharcoal-900 shadow-2xs":"text-slate-500 hover:text-slate-800"}`,children:[u," km"]},u))})]}),c.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 py-2",children:d.map(u=>{const p=l(u.mode);return c.jsxs("div",{className:`p-3.5 rounded-2xl border flex flex-col justify-between transition-all ${p.cardBg} relative overflow-hidden`,children:[p.isRecommended&&c.jsx("div",{className:"absolute top-2 right-2 text-emerald-600",children:c.jsx(cd,{className:"w-3.5 h-3.5 fill-emerald-100"})}),c.jsxs("div",{className:"space-y-1",children:[c.jsx("div",{className:"w-8 h-8 rounded-xl bg-white border border-stone-200/80 flex items-center justify-center shadow-2xs",children:p.icon}),c.jsx("div",{className:"text-[11px] font-bold text-slatecharcoal-900 leading-tight",children:u.mode==="two_wheeler_open"?c.jsxs("div",{children:[c.jsx("div",{children:"Two-Wheeler"}),c.jsx("span",{className:"text-[9px] text-slate-500 font-normal",children:"(Open)"})]}):u.mode==="ac_metro"?c.jsxs("div",{children:[c.jsx("div",{children:"AC Metro"}),c.jsx("span",{className:"text-[9px] text-emerald-700 font-semibold",children:"(Recommended)"})]}):u.mode==="auto_rickshaw"?c.jsxs("div",{children:[c.jsx("div",{children:"Auto-Rickshaw"}),c.jsx("span",{className:"text-[9px] text-slate-400 font-normal invisible",children:"(Open)"})]}):c.jsxs("div",{children:[c.jsx("div",{children:"Car"}),c.jsx("span",{className:"text-[9px] text-slate-500 font-normal",children:"(Non-AC)"})]})})]}),c.jsxs("div",{className:"mt-3 pt-2 border-t border-stone-200/60 flex items-baseline justify-between text-[11px] font-mono",children:[c.jsxs("div",{children:[c.jsxs("span",{className:"font-black text-slatecharcoal-900",children:[u.inhaledDoseUg," µg"]}),c.jsx("span",{className:"block text-[9px] text-slate-400 font-sans",children:"PM2.5"})]}),c.jsxs("div",{className:"text-right",children:[c.jsxs("span",{className:"font-semibold text-slate-600",children:[u.carbonEmissionKg," kg"]}),c.jsx("span",{className:"block text-[9px] text-slate-400 font-sans",children:"CO2"})]})]})]},u.mode)})})]})},Ai={CLEAN_OUTDOOR_PM25_MAX:30,FLUSH_OUTDOOR_PM25_MAX:60,OZONE_OUTDOOR_MAX:100,ASSUMED_CEILING_HEIGHT_M:2.8,CLOSED_ENVELOPE_INFILTRATION_ALPHA:.45};function Ru(i,e,t=new Date().getHours(),n=20,s,r="none"){const a=typeof i=="number"&&!isNaN(i)?Math.max(0,i):0,o=typeof s=="number"&&!isNaN(s)?Math.max(0,s):null,d=typeof n=="number"&&!isNaN(n)?Math.max(5,Math.min(200,n)):20,l=typeof t=="number"&&!isNaN(t)?(t%24+24)%24:new Date().getHours(),u=e.endHour>=e.startHour?l>=e.startHour&&l<=e.endHour:l>=e.startHour||l<=e.endHour;let p=Math.round(a*Ai.CLOSED_ENVELOPE_INFILTRATION_ALPHA),h;r==="cooking_frying"?(p+=85,h="Active Kitchen Cooking: Frying & searing generate intense aerosolized ultrafine oils (150–350 µg/m³). Keep interior kitchen doors closed to isolate bedrooms. Run dedicated range hood exhaust on MAXIMUM. Do NOT ventilate through the main living room."):r==="incense_smoke"?(p+=110,h="Combustion Emissions: Burning incense, mosquito coils, or unvented heaters produces hazardous VOCs and ultrafine carbon soot. Extinguish active combustion immediately; run HEPA purifier with activated carbon stage."):r==="high_co2_stuffy"&&(h="Stuffy Room / High CO2 Context: When closed rooms exceed 1,000–1,200 ppm CO2, cognitive fatigue and headaches occur. If outdoor PM2.5 is elevated, conduct a brief 5-minute restricted pulse flush, then immediately seal windows and run HEPA purifier on Turbo to scrub incoming dust.");let f="SEAL_COMPLETELY",x="",M="",g="";o!=null&&o>Ai.OZONE_OUTDOOR_MAX?(f="SEAL_COMPLETELY",M="Ventilation restricted: Ground-level Ozone is elevated",x="Keep all exterior windows and doors sealed. Strong solar radiation has elevated ground-level Ozone (O3) above the 100 µg/m³ safety threshold, which irritates respiratory airways.",g=`Ground-level Ozone (${o} µg/m³) exceeds the WHO 100 µg/m³ threshold. Do not ventilate.`):a<=Ai.CLEAN_OUTDOOR_PM25_MAX?(f="OPEN_CROSS_VENTILATE",M="Natural ventilation safe right now",x="Outdoor air quality is currently clean. Open opposite windows to generate cross-ventilation, flushing accumulated indoor CO2, humidity, and domestic VOCs.",g=`Outdoor PM2.5 (${a} µg/m³) is below the 30 µg/m³ clean threshold.`):a<=Ai.FLUSH_OUTDOOR_PM25_MAX&&u?(f="CRACK_FLUSH_NOW",M=`Diurnal Minimum Window Active (${e.displayWindow})`,x="Outdoor particulates are in the moderate range. Conduct a brief 15 to 20-minute cross-room air flush to exchange indoor air, then seal windows before evening rush-hour emissions build up.",g=`Outdoor PM2.5 (${a} µg/m³) is within the acceptable 60 µg/m³ flush boundary during the diurnal dispersion minimum.`):(f="SEAL_COMPLETELY",a>120?(M="Ventilation unsafe: Severe outdoor particulate pollution",x=`Outdoor PM2.5 is severe (${a} µg/m³). Keep all windows and balcony doors sealed. Opening windows now will flood your living space with outdoor particulate smog. Rely on indoor recirculation and mechanical HEPA filtration.`,g=`Outdoor PM2.5 (${a} µg/m³) exceeds the safe ventilation limit (60 µg/m³). Natural ventilation is strictly contraindicated.`):(M="Keep windows closed: Outdoor air exceeds safe ventilation limit",x=`Outdoor PM2.5 is ${a} µg/m³. Natural ventilation is not recommended because outdoor air will degrade your indoor environment. Keep windows closed and utilize indoor filtration.`,g=`Outdoor PM2.5 (${a} µg/m³) is above the 60 µg/m³ ceiling for natural air exchange.`));const y=+(250/(d*Ai.ASSUMED_CEILING_HEIGHT_M)).toFixed(1),C=Math.min(120,Math.max(15,Math.round(1.386/y*60))),T=Math.max(5,Math.round(p*.2));let _="MEDIUM";return a>200||r==="cooking_frying"||r==="incense_smoke"?_="TURBO":a>90||r==="high_co2_stuffy"?_="MEDIUM":a>35?_="LOW":_="OFF",{safeWindowActive:u,safeWindowText:M,outdoorPm25:a,outdoorO3:o??void 0,indoorSource:r,indoorSourceDirective:h,estimatedIndoorBaselinePm25:p,actionDirective:x,windowAction:f,safetyReason:g,purifierRecommendation:{recommendedSpeed:_,targetRuntimeMinutes:C,estimatedPostCleanPm25:T}}}const Lo=()=>{const{telemetry:i,cleanAirWindow:e,userPreferences:t}=kt(),[n,s]=Ie.useState(t.roomSizeM2||20),[r,a]=Ie.useState("none"),o=i.current.pm25,d=i.current.o3,l=new Date().getHours(),u=Ru(o,e,l,n,d,r),p=u.windowAction==="SEAL_COMPLETELY";return c.jsxs("div",{className:"rounded-3xl bg-white border border-stone-200/80 p-4 sm:p-6 shadow-xs flex flex-col justify-between h-full",children:[c.jsxs("div",{className:"sm:hidden flex items-center justify-between pb-2 border-b border-stone-100",children:[c.jsxs("div",{className:"flex items-center space-x-2.5",children:[c.jsx("div",{className:"w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100 shrink-0",children:c.jsx(Bs,{className:"w-3.5 h-3.5"})}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xs font-bold text-slatecharcoal-900 tracking-tight",children:"Indoor Air Coach"}),c.jsxs("p",{className:"text-[10px] text-slate-500 font-medium",children:["Indoor: ~",u.estimatedIndoorBaselinePm25," µg/m³"]})]})]}),c.jsx("span",{className:"text-slate-400 text-xs font-bold",children:"›"})]}),c.jsx("div",{className:"hidden sm:flex items-start justify-between pb-3 border-b border-stone-100",children:c.jsxs("div",{className:"flex items-center space-x-2.5",children:[c.jsx("div",{className:"w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100 shrink-0",children:c.jsx(Bs,{className:"w-4 h-4"})}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-sm sm:text-base font-bold text-slatecharcoal-900 tracking-tight",children:"Indoor Envelope & Air Coach"}),c.jsx("p",{className:"text-[11px] text-slate-500 mt-0.5",children:"Your home air quality and ventilation plan"})]})]})}),c.jsx("div",{className:"sm:hidden py-2",children:c.jsxs("div",{className:`w-full flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl border font-bold text-xs shadow-2xs ${p?"bg-rose-50 text-rose-700 border-rose-200/80":"bg-emerald-50 text-emerald-800 border-emerald-200/80"}`,children:[p?c.jsx(lo,{className:"w-3.5 h-3.5 text-rose-600"}):c.jsx(Fs,{className:"w-3.5 h-3.5 text-emerald-600"}),c.jsx("span",{children:p?"Seal Windows & Run Purifier":"Ventilate & Run Purifier"})]})}),c.jsxs("div",{className:"hidden sm:flex relative my-2 rounded-2xl overflow-hidden border border-stone-200/80 min-h-[145px] items-center justify-center p-3",children:[c.jsxs("div",{className:"absolute inset-0 pointer-events-none z-0",children:[c.jsx("img",{src:"./images/indoor-backdrop.png",alt:"Living Room Atmosphere with Purifier",className:"w-full h-full object-cover opacity-90"}),c.jsx("div",{className:"absolute inset-0 bg-stone-900/10 backdrop-blur-[0.5px]"})]}),c.jsxs("div",{className:"relative z-10 w-full max-w-[270px] p-3.5 rounded-2xl bg-white/95 border border-stone-200/90 shadow-lg backdrop-blur-md text-center space-y-2",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-wider block",children:"Indoor Estimated Air"}),c.jsxs("div",{className:"text-xl sm:text-2xl font-black text-slatecharcoal-900 font-mono tracking-tight",children:["Indoor PM2.5: ~",u.estimatedIndoorBaselinePm25," µg/m³"]})]}),c.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-1.5 pt-0.5",children:[c.jsxs("span",{className:`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-2xs ${p?"bg-rose-50 text-rose-700 border border-rose-200/80":"bg-emerald-50 text-emerald-800 border border-emerald-200/80"}`,children:[p?c.jsx(lo,{className:"w-3 h-3 text-rose-600"}):c.jsx(Fs,{className:"w-3 h-3 text-emerald-600"}),c.jsx("span",{children:p?"Seal Windows & Doors":"Open Windows & Ventilate"})]}),c.jsxs("span",{className:"inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-2xs",children:[c.jsx(ud,{className:"w-3 h-3 text-emerald-600"}),c.jsxs("span",{children:["Run Purifier: ",u.purifierRecommendation.recommendedSpeed]})]})]})]})]})]})},Cu={resting_sleep:6,desk_office:8,light_walking:16,cycling_commute:35,outdoor_running:55,heavy_cardio:65},kr={none:0,cloth:.25,surgical:.6,n95:.95,n99:.99};function Io(i,e,t="outdoor_running",n="none"){const s=typeof i=="number"&&!isNaN(i)?Math.max(0,i):0,r=typeof e=="number"&&!isNaN(e)?Math.max(0,Math.min(720,e)):0,a=Cu[t]||25,o=r/60,d=a*60*o/1e3,l=typeof kr[n]=="number"?kr[n]:0,u=+(s*d*(1-l)).toFixed(1),p=+(s*d*(1-.95)).toFixed(1),h=+(u-p).toFixed(1),f=Math.round((1-l)*100),x=+(s/15).toFixed(1);let M="LOW";return u>150?M="CRITICAL":u>75?M="ELEVATED":u>30&&(M="MODERATE"),{activity:t,durationMinutes:r,ambientPm25:s,minuteVentilationRateLpm:a,inhaledAirVolumeM3:+d.toFixed(2),maskType:n,maskFiltrationEfficiency:l,estimatedInhaledMassUg:u,doseSavedUgWithN95:Math.max(0,h),relativeExposurePercent:f,riskLevel:M,whoExceedanceRatio:x,disclaimer:"Approximation of gross inhaled particulate mass entering the upper airway based on standard minute ventilation rates. Does not constitute a clinical measurement of deep alveolar tissue deposition or medical diagnosis."}}const Do=()=>{const{telemetry:i}=kt(),[e,t]=Ie.useState("outdoor_running"),[n,s]=Ie.useState(45),[r,a]=Ie.useState("n95"),[o,d]=Ie.useState(!1),l=i.current.pm25||100,u=o?l:100,p=Io(u,n,e,r),h=Io(u,n,e,"none"),f=Math.round(kr[r]*100);return c.jsxs("div",{className:"rounded-3xl bg-white border border-stone-200/80 p-4 sm:p-6 shadow-xs flex flex-col justify-between h-full",children:[c.jsxs("div",{className:"sm:hidden flex items-center justify-between pb-2 border-b border-stone-100",children:[c.jsxs("div",{className:"flex items-center space-x-2.5",children:[c.jsx("div",{className:"w-7 h-7 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100 shrink-0",children:c.jsx(ks,{className:"w-3.5 h-3.5"})}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xs font-bold text-slatecharcoal-900 tracking-tight",children:"What-If Exposure"}),c.jsx("p",{className:"text-[10px] text-slate-500 font-medium",children:"Running • 45 min • N95"})]})]}),c.jsx("div",{className:"w-8 h-8 rounded-lg overflow-hidden border border-amber-200/80 shrink-0",children:c.jsx("img",{src:"./images/whatif-runner.png",alt:"Runner",className:"w-full h-full object-cover"})})]}),c.jsxs("div",{className:"sm:hidden py-2 flex items-center justify-around gap-2 text-center",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"text-sm font-black text-rose-600 font-mono",children:[h.estimatedInhaledMassUg," µg"]}),c.jsx("div",{className:"text-[9px] font-bold text-slate-400",children:"Without Mask"})]}),c.jsx("div",{className:"text-slate-400 text-xs",children:"→"}),c.jsxs("div",{children:[c.jsxs("div",{className:"text-sm font-black text-emerald-600 font-mono",children:[p.estimatedInhaledMassUg," µg"]}),c.jsx("div",{className:"text-[9px] font-bold text-emerald-700",children:"With N95"})]})]}),c.jsxs("div",{className:"hidden sm:flex items-start justify-between pb-3 border-b border-stone-100",children:[c.jsxs("div",{className:"flex items-center space-x-2.5",children:[c.jsx("div",{className:"w-8 h-8 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100 shrink-0",children:c.jsx(ks,{className:"w-4 h-4"})}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-sm sm:text-base font-bold text-slatecharcoal-900 tracking-tight",children:"What-If Exposure Sandbox"}),c.jsx("p",{className:"text-[11px] text-slate-500 mt-0.5",children:"Estimate the particulate dose you inhale"})]})]}),c.jsxs("div",{className:"flex items-center space-x-1 bg-stone-100/70 p-0.5 rounded-lg text-xs",children:[c.jsx("button",{onClick:()=>d(!1),className:`px-2 py-0.5 rounded font-bold text-[10px] transition-all cursor-pointer ${o?"text-slate-500 hover:text-slate-800":"bg-white text-slatecharcoal-900 shadow-2xs"}`,title:"Standard Exercise Scenario (100 µg/m³)",children:"Benchmark (100 µg/m³)"}),c.jsxs("button",{onClick:()=>d(!0),className:`px-2 py-0.5 rounded font-bold text-[10px] transition-all cursor-pointer ${o?"bg-white text-slatecharcoal-900 shadow-2xs":"text-slate-500 hover:text-slate-800"}`,title:`Current City Ambient Level (${l} µg/m³)`,children:["City (",l," µg/m³)"]})]})]}),c.jsxs("div",{className:"hidden sm:flex flex-col sm:flex-row items-center justify-between gap-3.5 py-2",children:[c.jsx("div",{className:"w-24 sm:w-28 h-28 shrink-0 relative flex items-center justify-center rounded-2xl overflow-hidden shadow-2xs border border-amber-200/80 bg-gradient-to-tr from-amber-100/60 to-orange-50",children:c.jsx("img",{src:"./images/whatif-runner.png",alt:"Outdoor Athletic Runner",className:"w-full h-full object-cover"})}),c.jsxs("div",{className:"flex-1 w-full space-y-3",children:[c.jsxs("div",{className:"grid grid-cols-3 gap-2 text-left",children:[c.jsxs("div",{className:"bg-stone-50 p-2 rounded-xl border border-stone-200/70",children:[c.jsx("span",{className:"block text-[9px] font-semibold text-slate-400 uppercase",children:"Activity"}),c.jsxs("select",{"aria-label":"Activity Intensity",value:e,onChange:x=>t(x.target.value),className:"w-full bg-transparent text-[11px] font-bold text-slatecharcoal-900 focus:outline-none cursor-pointer",children:[c.jsx("option",{value:"outdoor_running",children:"Running (55 L/min)"}),c.jsx("option",{value:"light_walking",children:"Walking (16 L/min)"}),c.jsx("option",{value:"cycling_commute",children:"Cycling (35 L/min)"}),c.jsx("option",{value:"heavy_cardio",children:"HIIT (65 L/min)"})]})]}),c.jsxs("div",{className:"bg-stone-50 p-2 rounded-xl border border-stone-200/70",children:[c.jsx("span",{className:"block text-[9px] font-semibold text-slate-400 uppercase",children:"Duration"}),c.jsxs("select",{"aria-label":"Exposure Duration",value:n,onChange:x=>s(Number(x.target.value)),className:"w-full bg-transparent text-[11px] font-bold text-slatecharcoal-900 focus:outline-none cursor-pointer",children:[c.jsx("option",{value:"15",children:"15 min"}),c.jsx("option",{value:"30",children:"30 min"}),c.jsx("option",{value:"45",children:"45 min"}),c.jsx("option",{value:"60",children:"60 min"}),c.jsx("option",{value:"90",children:"90 min"})]})]}),c.jsxs("div",{className:"bg-stone-50 p-2 rounded-xl border border-stone-200/70",children:[c.jsx("span",{className:"block text-[9px] font-semibold text-slate-400 uppercase",children:"Mask"}),c.jsxs("select",{"aria-label":"Mask Type",value:r,onChange:x=>a(x.target.value),className:"w-full bg-transparent text-[11px] font-bold text-emerald-700 focus:outline-none cursor-pointer",children:[c.jsx("option",{value:"none",children:"No Mask (0%)"}),c.jsx("option",{value:"cloth",children:"Cloth (25%)"}),c.jsx("option",{value:"surgical",children:"Surgical (60%)"}),c.jsx("option",{value:"n95",children:"N95 (95%)"}),c.jsx("option",{value:"n99",children:"N99 (99%)"})]})]})]}),c.jsxs("div",{className:"p-3 rounded-2xl bg-stone-50/80 border border-stone-200/80 flex items-center justify-around gap-2",children:[c.jsxs("div",{className:"text-center",children:[c.jsxs("div",{className:"text-lg sm:text-xl font-black text-rose-600 font-mono",children:[h.estimatedInhaledMassUg," µg"]}),c.jsx("div",{className:"text-[10px] font-bold text-slate-400",children:"Without Mask"})]}),c.jsx("div",{className:"w-6 h-6 rounded-full bg-white border border-stone-200 flex items-center justify-center text-slate-400 shrink-0 shadow-2xs",children:c.jsx(Ol,{className:"w-3.5 h-3.5"})}),c.jsxs("div",{className:"text-center",children:[c.jsxs("div",{className:"text-lg sm:text-xl font-black text-emerald-600 font-mono",children:[p.estimatedInhaledMassUg," µg"]}),c.jsxs("div",{className:"text-[10px] font-bold text-emerald-700",children:["With ",r.toUpperCase()," ",f>0?`(↓ ${f}%)`:""]})]})]}),c.jsxs("div",{className:"text-[9px] text-slate-400 text-center pt-0.5 leading-tight font-sans",children:["Baseline: ",u," µg/m³ • Inhaled mass model (VE × t × C); assumes ideal seal. Real-world fit leakage reduces nominal mask filtration."]})]})]})]})},Nu=()=>{const{telemetry:i,cleanAirWindow:e,userPreferences:t,sessionApiKey:n,setSessionApiKey:s}=kt(),[r,a]=Ie.useState([{id:"welcome",role:"assistant",content:`Hello! I am your BreatheWise Environmental Living Assistant. In ${i.city}, current PM2.5 is ${i.current.pm25} µg/m³ (CPCB NAQI ${i.current.aqi} — ${i.current.aqiCategory}). Today's lowest relative exposure window is ${e.displayWindow}. How can I assist you in planning your day safely?`,timestamp:"Just now",suggestedFollowUps:["Is it safe to go running today?","Can I open my apartment windows right now?","Compare metro vs. two-wheeler for my commute","How should I protect my child from today's air?"]}]),[o,d]=Ie.useState(""),[l,u]=Ie.useState(!1),[p,h]=Ie.useState(!1),[f,x]=Ie.useState(n||""),M=Ie.useRef(null);Ie.useEffect(()=>{var m;(m=M.current)==null||m.scrollIntoView({behavior:"smooth"})},[r]);const g=async m=>{const b=m||o;if(!b.trim()||l)return;const A={id:`u-${Date.now()}`,role:"user",content:b.trim(),timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};a(y=>[...y,A]),d(""),u(!0);try{const y=await Mu(b,r,i,e,t.vulnerabilityProfile,n),C={id:`b-${Date.now()}`,role:"assistant",content:y,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};a(T=>[...T,C])}catch{const C={id:`err-${Date.now()}`,role:"assistant",content:"I apologize, but I encountered an error synthesizing guidance. Today's lowest relative exposure window is "+e.displayWindow+".",timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};a(T=>[...T,C])}finally{u(!1)}};return c.jsxs("div",{className:"bg-white rounded-3xl border border-cream-200/80 shadow-soft flex flex-col h-[600px] overflow-hidden",children:[c.jsxs("div",{className:"p-4 sm:p-5 border-b border-cream-200/60 flex items-center justify-between bg-cream-50/40",children:[c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("div",{className:"w-8 h-8 rounded-xl bg-forest-600 text-white flex items-center justify-center shadow-2xs",children:c.jsx(Ys,{className:"w-4 h-4"})}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xs sm:text-sm font-bold text-slatecharcoal-900",children:"BreatheWise Living Assistant"}),c.jsxs("p",{className:"text-[11px] text-slate-500",children:[n?"Gemini 1.5 Flash Active":"Deterministic Engine + AI Synthesis"," • ",i.city]})]})]}),c.jsxs("button",{onClick:()=>h(!p),className:`text-xs flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border transition-all cursor-pointer font-medium ${n?"bg-sage-50 border-sage-300 text-sage-800":"border-cream-300 hover:bg-cream-100 text-slate-600 bg-white shadow-2xs"}`,title:"Configure optional temporary Google Gemini API Key",children:[c.jsx(hd,{className:"w-3.5 h-3.5 text-forest-600"}),c.jsx("span",{className:"hidden sm:inline",children:n?"Active Gemini Key":"Gemini Key"})]})]}),p&&c.jsxs("div",{className:"p-4 bg-forest-50/70 border-b border-forest-200 text-xs space-y-2.5 animate-in fade-in",children:[c.jsxs("div",{className:"flex justify-between items-center",children:[c.jsxs("span",{className:"font-bold text-forest-900 flex items-center space-x-1.5",children:[c.jsx(Ul,{className:"w-4 h-4 text-forest-700"}),c.jsx("span",{children:"Session-Only Google Gemini Key (Volatile Memory)"})]}),c.jsx("button",{onClick:()=>h(!1),className:"text-forest-700 hover:text-forest-900 font-bold p-1 cursor-pointer",children:"✕"})]}),c.jsxs("p",{className:"text-forest-800 text-[11px] leading-relaxed",children:["BreatheWise operates with full deterministic rules out-of-the-box. Enter your Google AI Studio key to enable live generative dialogues. ",c.jsx("strong",{children:"Security Notice:"})," Keys are kept strictly in volatile React state and are purged upon tab refresh or exit."]}),c.jsxs("div",{className:"flex space-x-2",children:[c.jsx("input",{type:"password",placeholder:"AIzaSy...",value:f,onChange:m=>x(m.target.value),className:"flex-1 px-3 py-2 text-xs bg-white border border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 font-mono shadow-2xs"}),c.jsx("button",{onClick:()=>{s(f.trim()),h(!1)},className:"px-4 py-2 bg-forest-600 hover:bg-forest-700 text-white rounded-xl font-bold text-xs shadow-2xs transition-colors cursor-pointer",children:"Save Key"}),n&&c.jsx("button",{onClick:()=>{s(""),x(""),h(!1)},className:"px-3 py-2 bg-white border border-rose-200 text-rose-700 rounded-xl font-medium text-xs hover:bg-rose-50 cursor-pointer",title:"Remove API Key",children:c.jsx(fd,{className:"w-3.5 h-3.5"})})]})]}),c.jsxs("div",{className:"flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 text-xs",children:[r.map(m=>c.jsxs("div",{className:`flex items-start space-x-2.5 ${m.role==="user"?"justify-end":"justify-start"}`,children:[m.role==="assistant"&&c.jsx("div",{className:"w-7 h-7 rounded-full bg-forest-100 text-forest-700 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs",children:c.jsx(pd,{className:"w-4 h-4"})}),c.jsxs("div",{className:`p-4 rounded-2xl max-w-[85%] sm:max-w-[78%] leading-relaxed ${m.role==="user"?"bg-forest-700 text-white rounded-tr-none shadow-soft":"bg-cream-50/80 text-slatecharcoal-900 rounded-tl-none border border-cream-200/80"}`,children:[c.jsx("div",{className:"whitespace-pre-wrap",children:m.content}),m.suggestedFollowUps&&m.suggestedFollowUps.length>0&&c.jsxs("div",{className:"mt-3.5 pt-3 border-t border-cream-200/70 space-y-2",children:[c.jsx("div",{className:"text-[10px] font-bold uppercase tracking-wider text-slate-500",children:"Suggested Explorations:"}),c.jsx("div",{className:"flex flex-wrap gap-1.5",children:m.suggestedFollowUps.map((b,A)=>c.jsx("button",{onClick:()=>g(b),className:"text-left text-[11px] bg-white hover:bg-forest-50 text-slatecharcoal-800 hover:text-forest-700 px-3 py-1.5 rounded-xl border border-cream-200 shadow-2xs transition-all cursor-pointer font-medium",children:b},A))})]}),c.jsx("div",{className:`text-[9px] mt-1.5 text-right ${m.role==="user"?"text-forest-200":"text-slate-400"}`,children:m.timestamp})]}),m.role==="user"&&c.jsx("div",{className:"w-7 h-7 rounded-full bg-slatecharcoal-800 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs",children:c.jsx(Ur,{className:"w-4 h-4"})})]},m.id)),l&&c.jsxs("div",{className:"flex items-center space-x-2 text-slate-500 text-xs italic p-2",children:[c.jsx("span",{className:"w-2 h-2 rounded-full bg-forest-500 animate-ping mr-1"}),"Evaluating environmental context & guidelines..."]}),c.jsx("div",{ref:M})]}),c.jsx("div",{className:"p-3.5 sm:p-4 border-t border-cream-200/60 bg-white",children:c.jsxs("form",{onSubmit:m=>{m.preventDefault(),g()},className:"flex items-center space-x-2",children:[c.jsx("input",{type:"text",value:o,onChange:m=>d(m.target.value),placeholder:"Ask about outdoor workout safety, commute swaps, window timing...",className:"flex-1 bg-cream-50/60 border border-cream-200/90 rounded-2xl px-4 py-3 text-xs text-slatecharcoal-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-forest-500/20 focus:border-forest-500 transition-all"}),c.jsx("button",{type:"submit",disabled:!o.trim()||l,className:"bg-forest-600 hover:bg-forest-700 disabled:opacity-40 text-white p-3 rounded-2xl shadow-soft transition-all shrink-0 cursor-pointer",children:c.jsx(md,{className:"w-4 h-4"})})]})})]})},Uo=()=>{const{telemetry:i,isTransparencyOpen:e,setIsTransparencyOpen:t}=kt();if(!e)return null;const n=i.metadata;return c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slatecharcoal-900/60 backdrop-blur-xs transition-opacity animate-in fade-in",children:c.jsxs("div",{className:"bg-white w-full max-w-2xl rounded-3xl shadow-elevated border border-cream-200/90 overflow-hidden flex flex-col max-h-[90vh]",children:[c.jsxs("div",{className:"p-5 sm:p-6 border-b border-cream-200/60 flex items-center justify-between bg-cream-50/50",children:[c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("div",{className:"w-9 h-9 rounded-xl bg-forest-100 text-forest-700 flex items-center justify-center shadow-2xs",children:c.jsx(gd,{className:"w-5 h-5"})}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-base font-bold text-slatecharcoal-900 tracking-tight",children:"Scientific Methodology & Telemetry Provenance"}),c.jsx("p",{className:"text-[11px] text-slate-500 mt-0.5",children:"Verified mathematical engines, transparent data sources, and strict health safety boundaries"})]})]}),c.jsx("button",{onClick:()=>t(!1),className:"text-slate-400 hover:text-slatecharcoal-900 p-2 rounded-xl hover:bg-cream-100 transition-colors cursor-pointer",children:c.jsx(xd,{className:"w-5 h-5"})})]}),c.jsxs("div",{className:"p-6 overflow-y-auto space-y-5 text-xs text-slate-700 leading-relaxed",children:[c.jsxs("div",{className:"p-4 rounded-2xl bg-cream-50/70 border border-cream-200/80 space-y-2.5",children:[c.jsxs("div",{className:"font-bold text-slatecharcoal-900 flex items-center space-x-2 text-xs",children:[c.jsx(_d,{className:"w-4 h-4 text-forest-600"}),c.jsx("span",{children:"Active Environmental Telemetry Provenance"})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-3 text-[11px]",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-slate-500",children:"Data Source:"})," ",c.jsx("strong",{className:"text-slatecharcoal-900",children:n.provider})]}),c.jsxs("div",{children:[c.jsx("span",{className:"text-slate-500",children:"Grid / Station:"})," ",c.jsx("span",{className:"text-slatecharcoal-900 font-medium",children:n.stationName})]}),c.jsxs("div",{children:[c.jsx("span",{className:"text-slate-500",children:"Geographic Coordinates:"})," ",c.jsxs("span",{className:"text-slatecharcoal-900 font-mono",children:[n.latitude.toFixed(4),"°N, ",n.longitude.toFixed(4),"°E"]})]}),c.jsxs("div",{children:[c.jsx("span",{className:"text-slate-500",children:"Telemetry Status:"})," ",c.jsx("span",{className:"text-slatecharcoal-900 font-medium",children:n.fetchTimestamp})]}),n.modelTimestamp&&c.jsxs("div",{className:"col-span-2",children:[c.jsx("span",{className:"text-slate-500",children:"CAMS Ensemble Run:"})," ",c.jsx("span",{className:"text-slatecharcoal-900 font-mono",children:n.modelTimestamp})]})]}),c.jsx("div",{className:"text-[10px] text-slate-500 pt-2 border-t border-cream-200/70 leading-relaxed",children:n.isSimulated?"NOTICE: Currently displaying an offline illustrative diurnal profile for demonstration purposes. Values do not represent live physical sensor observations.":"Regional atmospheric model data derived from Open-Meteo & European Copernicus Atmosphere Monitoring Service (CAMS). Atmospheric reanalysis covers a 0.25° grid with hourly resolution."})]}),c.jsxs("div",{className:"space-y-3",children:[c.jsxs("h4",{className:"font-bold text-slatecharcoal-900 text-xs flex items-center space-x-2",children:[c.jsx(vd,{className:"w-4 h-4 text-forest-600"}),c.jsx("span",{children:"Documented Mathematical Formulations"})]}),c.jsxs("div",{className:"space-y-3",children:[c.jsxs("div",{className:"p-4 rounded-2xl border border-cream-200/80 bg-white space-y-1.5 shadow-2xs",children:[c.jsx("div",{className:"font-bold text-slatecharcoal-900 text-[11px]",children:"1. Inhaled Particulate Lung Burden Formulation (M_inh)"}),c.jsx("div",{className:"font-mono text-forest-700 text-[11px] my-1 bg-forest-50/70 p-2 rounded-xl border border-forest-100",children:"M_inh = C_ambient (µg/m³) × VE (m³/h) × t (hours) × (1 - η_mask)"}),c.jsx("p",{className:"text-[11px] text-slate-600 leading-relaxed",children:"Estimates gross inspired aerosol mass entering the upper airway based on minute ventilation rates (V_E) adapted from the US EPA Exposure Factors Handbook (Chapter 6): Resting (0.36 m³/h), Desk Work (0.48 m³/h), Light Walking (0.96 m³/h), Cycling (2.10 m³/h), Outdoor Running (3.30 m³/h), and Heavy Cardio (3.90 m³/h). Nominal mask efficiencies (η): Cloth (25%), Surgical (60%), N95 (95%), N99 (99%). Real-world protection depends on perimeter seal integrity. Does not constitute clinical measurement of deep alveolar tissue deposition."})]}),c.jsxs("div",{className:"p-4 rounded-2xl border border-cream-200/80 bg-white space-y-1.5 shadow-2xs",children:[c.jsx("div",{className:"font-bold text-slatecharcoal-900 text-[11px]",children:"2. Official Indian CPCB NAQI Continuous Piecewise Linear Interpolation"}),c.jsx("div",{className:"font-mono text-forest-700 text-[11px] my-1 bg-forest-50/70 p-2 rounded-xl border border-forest-100",children:"I_p = [ (I_high - I_low) / (C_high - C_low) ] × (C_p - C_low) + I_low"}),c.jsx("p",{className:"text-[11px] text-slate-600 leading-relaxed",children:"Calculates official sub-indices according to the Central Pollution Control Board (CPCB) NAQI schedules for PM2.5, PM10, NO2, O3, and normalized CO (mg/m³). Continuous interval boundaries eliminate dead-zones for continuous sensor readings. The governing AQI represents the maximum sub-index across available pollutants, with formal CPCB completeness requiring at least 3 pollutants with at least one PM."})]}),c.jsxs("div",{className:"p-4 rounded-2xl border border-cream-200/80 bg-white space-y-1.5 shadow-2xs",children:[c.jsx("div",{className:"font-bold text-slatecharcoal-900 text-[11px]",children:"3. Conservative Indoor Ventilation Safety Ceilings"}),c.jsxs("p",{className:"text-[11px] text-slate-600 leading-relaxed",children:["Natural window ventilation is governed by conservative public health safeguards: Continuous cross-ventilation is permitted only when outdoor PM2.5 is ≤ 30 µg/m³. A brief 15 to 20-min flush is permitted between 31 and 60 µg/m³ during diurnal dispersion valleys. ",c.jsx("strong",{children:"Natural ventilation is strictly blocked whenever outdoor PM2.5 > 60 µg/m³ or Ozone > 100 µg/m³"}),", regardless of time-of-day."]})]})]})]}),c.jsxs("div",{className:"p-4 rounded-2xl bg-cream-50/70 text-[11px] text-slate-600 space-y-1.5 border border-cream-200/80",children:[c.jsx("div",{className:"font-bold text-slatecharcoal-900",children:"Authoritative References & Benchmarks:"}),c.jsxs("ul",{className:"list-disc pl-4 space-y-1",children:[c.jsx("li",{children:"Central Pollution Control Board (CPCB), Ministry of Environment, Forest and Climate Change: National Air Quality Index (NAQI) Technical Report"}),c.jsx("li",{children:"World Health Organization (WHO): Global Air Quality Guidelines (2021: PM2.5 24h benchmark 15 µg/m³, O3 8h benchmark 100 µg/m³)"}),c.jsx("li",{children:"US Environmental Protection Agency (EPA): Exposure Factors Handbook (Chapter 6: Inhalation Rates)"}),c.jsx("li",{children:"India GHG Protocol & Central Electricity Authority (CEA): Baseline Carbon Emission Factors for Indian Urban Transport"})]})]}),c.jsxs("div",{className:"p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-[11px] text-amber-950 space-y-1",children:[c.jsx("strong",{className:"font-bold",children:"Responsible Environmental Guidance Disclaimer:"}),c.jsx("p",{className:"leading-relaxed",children:"BreatheWise AI is an environmental lifestyle intelligence tool and exposure reduction planner. It does not provide clinical medical diagnosis, disease prognosis, or pharmaceutical prescriptions. Individuals with chronic respiratory or cardiovascular conditions should consult their licensed physician."})]})]}),c.jsx("div",{className:"p-4 sm:p-5 border-t border-cream-200/60 bg-cream-50/50 flex justify-end",children:c.jsx("button",{onClick:()=>t(!1),className:"px-5 py-2.5 bg-forest-600 hover:bg-forest-700 text-white rounded-xl text-xs font-bold transition-all shadow-2xs cursor-pointer",children:"Close Methodology Drawer"})})]})})},Pu=()=>{const{activeTab:i,setActiveTab:e}=kt(),t=[{id:"overview",label:"Home",icon:c.jsx(Ks,{className:"w-4 h-4"})},{id:"commute",label:"Commute",icon:c.jsx(Ra,{className:"w-4 h-4"})},{id:"indoor",label:"Indoor",icon:c.jsx(Bs,{className:"w-4 h-4"})},{id:"simulator",label:"What-If",icon:c.jsx(ks,{className:"w-4 h-4"})},{id:"assistant",label:"AI",icon:c.jsx(Ys,{className:"w-4 h-4"})}];return c.jsx("nav",{className:"fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200/90 md:hidden pb-safe shadow-elevated",children:c.jsx("div",{className:"flex items-center justify-around h-16 px-2",children:t.map(n=>{const s=i===n.id;return c.jsxs("button",{onClick:()=>e(n.id),className:`flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-2xl transition-all cursor-pointer ${s?"text-emerald-700 font-bold":"text-slate-500 hover:text-slatecharcoal-800 font-medium"}`,children:[c.jsx("div",{className:`p-1.5 rounded-xl transition-all ${s?"bg-emerald-50 text-emerald-700 shadow-2xs":""}`,children:n.icon}),c.jsx("span",{className:"text-[10px] mt-0.5 tracking-tight",children:n.label})]},n.id)})})})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pa="187",Lu=0,Oo=1,Iu=2,Ns=1,Du=2,Ii=3,jn=0,Ut=1,mn=2,pi=0,Bi=1,ui=2,Fo=3,Bo=4,Uu=5,di=100,Ou=101,Fu=102,Bu=103,ku=104,Hu=200,Gu=201,zu=202,Vu=203,jl=204,Xl=205,Wu=206,ju=207,Xu=208,qu=209,$u=210,Yu=211,Ku=212,Zu=213,Ju=214,Hr=0,Gr=1,zr=2,ji=3,Vr=4,Wr=5,jr=6,Xr=7,La=0,Qu=1,eh=2,xn=0,ql=1,$l=2,Yl=3,Ia=4,Kl=5,Zl=6,Jl=7,Ql=300,gi=301,Xi=302,ar=303,or=304,qr=1e3,gn=1001,$r=1002,yt=1003,th=1004,ss=1005,Bt=1006,lr=1007,Pn=1008,zt=1009,ec=1010,tc=1011,qi=1012,Da=1013,an=1014,nn=1015,on=1016,Ua=1017,Oa=1018,xi=1020,nc=35902,ic=35899,sc=1021,rc=1022,sn=1023,Dn=1026,Ln=1027,ac=1028,Fa=1029,Xn=1030,Ba=1031,ka=1033,Ps=33776,Ls=33777,Is=33778,Ds=33779,Yr=35840,Kr=35841,Zr=35842,Jr=35843,Qr=36196,ea=37492,ta=37496,na=37488,ia=37489,Hs=37490,sa=37491,ra=37808,aa=37809,oa=37810,la=37811,ca=37812,da=37813,ua=37814,ha=37815,fa=37816,pa=37817,ma=37818,ga=37819,xa=37820,_a=37821,va=36492,Sa=36494,Ma=36495,ba=36283,ya=36284,Gs=36285,Ea=36286,nh=3200,zs=0,ih=1,Nn="",Ot="srgb",Vs="srgb-linear",Ws="linear",et="srgb",cr=7680,sh=519,rh=512,ah=513,oh=514,oc=515,lh=516,ch=517,lc=518,cc=519,dh=35044,ko="300 es",Zt=2e3,$i=2001;function uh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Yi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hh(){const i=Yi("canvas");return i.style.display="block",i}const Ho={};function Go(...i){const e="THREE."+i.shift();console.log(e,...i)}function dc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Pe(...i){i=dc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Je(...i){i=dc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Us(...i){const e=i.join(" ");e in Ho||(Ho[e]=!0,Pe(...i))}function fh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const ph={[Hr]:Hr,[zr]:jr,[Vr]:Vr,[ji]:Wr,[Gr]:Gr,[jr]:zr,[Xr]:Xr,[Wr]:ji};class qn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zo=1234567;const ki=Math.PI/180,Ki=180/Math.PI;function Si(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function ze(i,e,t){return Math.max(e,Math.min(t,i))}function Ha(i,e){return(i%e+e)%e}function mh(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function gh(i,e,t){return i!==e?(t-i)/(e-i):0}function Hi(i,e,t){return(1-t)*i+t*e}function xh(i,e,t,n){return Hi(i,e,1-Math.exp(-t*n))}function _h(i,e=1){return e-Math.abs(Ha(i,e*2)-e)}function vh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Sh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Mh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function bh(i,e){return i+Math.random()*(e-i)}function yh(i){return i*(.5-Math.random())}function Eh(i){i!==void 0&&(zo=i);let e=zo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wh(i){return i*ki}function Ah(i){return i*Ki}function Th(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Rh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function uc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ch(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),d=a(t/2),l=r((e+n)/2),u=a((e+n)/2),p=r((e-n)/2),h=a((e-n)/2),f=r((n-e)/2),x=a((n-e)/2);switch(s){case"XYX":i.set(o*u,d*p,d*h,o*l);break;case"YZY":i.set(d*h,o*u,d*p,o*l);break;case"ZXZ":i.set(d*p,d*h,o*u,o*l);break;case"XZX":i.set(o*u,d*x,d*f,o*l);break;case"YXY":i.set(d*f,o*u,d*x,o*l);break;case"ZYZ":i.set(d*x,d*f,o*u,o*l);break;default:Pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ga(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function hc(i,e){if(e.constructor===Float32Array)return i;const t=Ga(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function fc(i,e){if(e.constructor===Float32Array)return i;const t=Ga(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const rs={DEG2RAD:ki,RAD2DEG:Ki,generateUUID:Si,clamp:ze,euclideanModulo:Ha,mapLinear:mh,inverseLerp:gh,lerp:Hi,damp:xh,pingpong:_h,smoothstep:vh,smootherstep:Sh,randInt:Mh,randFloat:bh,randFloatSpread:yh,seededRandom:Eh,degToRad:wh,radToDeg:Ah,isPowerOfTwo:Th,ceilPowerOfTwo:Rh,floorPowerOfTwo:uc,setQuaternionFromProperEuler:Ch,normalize:fc,denormalize:hc},Xa=class Xa{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xa.prototype.isVector2=!0;let Ve=Xa;class Mi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let d=n[s+0],l=n[s+1],u=n[s+2],p=n[s+3],h=r[a+0],f=r[a+1],x=r[a+2],M=r[a+3];if(p!==M||d!==h||l!==f||u!==x){let g=d*h+l*f+u*x+p*M;g<0&&(h=-h,f=-f,x=-x,M=-M,g=-g);let m=1-o;if(g<.9995){const b=Math.acos(g),A=Math.sin(b);m=Math.sin(m*b)/A,o=Math.sin(o*b)/A,d=d*m+h*o,l=l*m+f*o,u=u*m+x*o,p=p*m+M*o}else{d=d*m+h*o,l=l*m+f*o,u=u*m+x*o,p=p*m+M*o;const b=1/Math.sqrt(d*d+l*l+u*u+p*p);d*=b,l*=b,u*=b,p*=b}}e[t]=d,e[t+1]=l,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],d=n[s+1],l=n[s+2],u=n[s+3],p=r[a],h=r[a+1],f=r[a+2],x=r[a+3];return e[t]=o*x+u*p+d*f-l*h,e[t+1]=d*x+u*h+l*p-o*f,e[t+2]=l*x+u*f+o*h-d*p,e[t+3]=u*x-o*p-d*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,d=Math.sin,l=o(n/2),u=o(s/2),p=o(r/2),h=d(n/2),f=d(s/2),x=d(r/2);switch(a){case"XYZ":this._x=h*u*p+l*f*x,this._y=l*f*p-h*u*x,this._z=l*u*x+h*f*p,this._w=l*u*p-h*f*x;break;case"YXZ":this._x=h*u*p+l*f*x,this._y=l*f*p-h*u*x,this._z=l*u*x-h*f*p,this._w=l*u*p+h*f*x;break;case"ZXY":this._x=h*u*p-l*f*x,this._y=l*f*p+h*u*x,this._z=l*u*x+h*f*p,this._w=l*u*p-h*f*x;break;case"ZYX":this._x=h*u*p-l*f*x,this._y=l*f*p+h*u*x,this._z=l*u*x-h*f*p,this._w=l*u*p+h*f*x;break;case"YZX":this._x=h*u*p+l*f*x,this._y=l*f*p+h*u*x,this._z=l*u*x-h*f*p,this._w=l*u*p-h*f*x;break;case"XZY":this._x=h*u*p-l*f*x,this._y=l*f*p-h*u*x,this._z=l*u*x+h*f*p,this._w=l*u*p+h*f*x;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],d=t[9],l=t[2],u=t[6],p=t[10],h=n+o+p;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-d)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>p){const f=2*Math.sqrt(1+n-o-p);this._w=(u-d)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>p){const f=2*Math.sqrt(1+o-n-p);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(d+u)/f}else{const f=2*Math.sqrt(1+p-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(d+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,d=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*d,this._y=s*u+a*d+r*o-n*l,this._z=r*u+a*l+n*d-s*o,this._w=a*u-n*o-s*d-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let d=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);d=Math.sin(d*l)/u,t=Math.sin(t*l)/u,this._x=this._x*d+n*t,this._y=this._y*d+s*t,this._z=this._z*d+r*t,this._w=this._w*d+a*t,this._onChangeCallback()}else this._x=this._x*d+n*t,this._y=this._y*d+s*t,this._z=this._z*d+r*t,this._w=this._w*d+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const qa=class qa{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,d=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),p=2*(r*n-a*t);return this.x=t+d*l+a*p-o*u,this.y=n+d*u+o*l-r*p,this.z=s+d*p+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,d=t.z;return this.x=s*d-r*o,this.y=r*a-n*d,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dr.copy(this).projectOnVector(e),this.sub(dr)}reflect(e){return this.sub(dr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qa.prototype.isVector3=!0;let G=qa;const dr=new G,Vo=new Mi,$a=class $a{constructor(e,t,n,s,r,a,o,d,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,d,l)}set(e,t,n,s,r,a,o,d,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=d,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],d=n[6],l=n[1],u=n[4],p=n[7],h=n[2],f=n[5],x=n[8],M=s[0],g=s[3],m=s[6],b=s[1],A=s[4],y=s[7],C=s[2],T=s[5],_=s[8];return r[0]=a*M+o*b+d*C,r[3]=a*g+o*A+d*T,r[6]=a*m+o*y+d*_,r[1]=l*M+u*b+p*C,r[4]=l*g+u*A+p*T,r[7]=l*m+u*y+p*_,r[2]=h*M+f*b+x*C,r[5]=h*g+f*A+x*T,r[8]=h*m+f*y+x*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],d=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*d+s*r*l-s*a*d}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],d=e[6],l=e[7],u=e[8],p=u*a-o*l,h=o*d-u*r,f=l*r-a*d,x=t*p+n*h+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return e[0]=p*M,e[1]=(s*l-u*n)*M,e[2]=(o*n-s*a)*M,e[3]=h*M,e[4]=(u*t-s*d)*M,e[5]=(s*r-o*t)*M,e[6]=f*M,e[7]=(n*d-l*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const d=Math.cos(r),l=Math.sin(r);return this.set(n*d,n*l,-n*(d*a+l*o)+a+e,-s*l,s*d,-s*(-l*a+d*o)+o+t,0,0,1),this}scale(e,t){return Us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ur.makeScale(e,t)),this}rotate(e){return Us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ur.makeRotation(-e)),this}translate(e,t){return Us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ur.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};$a.prototype.isMatrix3=!0;let De=$a;const ur=new De,Wo=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jo=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nh(){const i={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===et&&(s.r=_n(s.r),s.g=_n(s.g),s.b=_n(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Nn?Ws:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Vs]:{primaries:e,whitePoint:n,transfer:Ws,toXYZ:Wo,fromXYZ:jo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:et,toXYZ:Wo,fromXYZ:jo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),i}const Xe=Nh();function _n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Kn;class Ph{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kn===void 0&&(Kn=Yi("canvas")),Kn.width=e.width,Kn.height=e.height;const s=Kn.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Kn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=_n(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_n(t[n]/255)*255):t[n]=_n(t[n]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lh=0;class za{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(hr(s[a].image)):r.push(hr(s[a]))}else r=hr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function hr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ph.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let Ih=0;const fr=new G;class Ct extends qn{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=gn,s=gn,r=Bt,a=Pn,o=sn,d=zt,l=Ct.DEFAULT_ANISOTROPY,u=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Si(),this.name="",this.source=new za(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=d,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(fr).x}get height(){return this.source.getSize(fr).y}get depth(){return this.source.getSize(fr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ql)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qr:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case $r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qr:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case $r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=Ql;Ct.DEFAULT_ANISOTROPY=1;const Ya=class Ya{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const d=e.elements,l=d[0],u=d[4],p=d[8],h=d[1],f=d[5],x=d[9],M=d[2],g=d[6],m=d[10];if(Math.abs(u-h)<.01&&Math.abs(p-M)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(p+M)<.1&&Math.abs(x+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,y=(f+1)/2,C=(m+1)/2,T=(u+h)/4,_=(p+M)/4,E=(x+g)/4;return A>y&&A>C?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=T/n,r=_/n):y>C?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=E/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=_/r,s=E/r),this.set(n,s,r,t),this}let b=Math.sqrt((g-x)*(g-x)+(p-M)*(p-M)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(g-x)/b,this.y=(p-M)/b,this.z=(h-u)/b,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ya.prototype.isVector4=!0;let dt=Ya;class Dh extends qn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ct({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new za(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rn extends Dh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class pc extends Ct{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=yt,this.minFilter=yt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uh extends Ct{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=yt,this.minFilter=yt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const $s=class $s{constructor(e,t,n,s,r,a,o,d,l,u,p,h,f,x,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,d,l,u,p,h,f,x,M,g)}set(e,t,n,s,r,a,o,d,l,u,p,h,f,x,M,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=d,m[2]=l,m[6]=u,m[10]=p,m[14]=h,m[3]=f,m[7]=x,m[11]=M,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $s().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Zn.setFromMatrixColumn(e,0).length(),r=1/Zn.setFromMatrixColumn(e,1).length(),a=1/Zn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),d=Math.cos(s),l=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const h=a*u,f=a*p,x=o*u,M=o*p;t[0]=d*u,t[4]=-d*p,t[8]=l,t[1]=f+x*l,t[5]=h-M*l,t[9]=-o*d,t[2]=M-h*l,t[6]=x+f*l,t[10]=a*d}else if(e.order==="YXZ"){const h=d*u,f=d*p,x=l*u,M=l*p;t[0]=h+M*o,t[4]=x*o-f,t[8]=a*l,t[1]=a*p,t[5]=a*u,t[9]=-o,t[2]=f*o-x,t[6]=M+h*o,t[10]=a*d}else if(e.order==="ZXY"){const h=d*u,f=d*p,x=l*u,M=l*p;t[0]=h-M*o,t[4]=-a*p,t[8]=x+f*o,t[1]=f+x*o,t[5]=a*u,t[9]=M-h*o,t[2]=-a*l,t[6]=o,t[10]=a*d}else if(e.order==="ZYX"){const h=a*u,f=a*p,x=o*u,M=o*p;t[0]=d*u,t[4]=x*l-f,t[8]=h*l+M,t[1]=d*p,t[5]=M*l+h,t[9]=f*l-x,t[2]=-l,t[6]=o*d,t[10]=a*d}else if(e.order==="YZX"){const h=a*d,f=a*l,x=o*d,M=o*l;t[0]=d*u,t[4]=M-h*p,t[8]=x*p+f,t[1]=p,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*p+x,t[10]=h-M*p}else if(e.order==="XZY"){const h=a*d,f=a*l,x=o*d,M=o*l;t[0]=d*u,t[4]=-p,t[8]=l*u,t[1]=h*p+M,t[5]=a*u,t[9]=f*p-x,t[2]=x*p-f,t[6]=o*u,t[10]=M*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Oh,e,Fh)}lookAt(e,t,n){const s=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),bn.crossVectors(n,Ht),bn.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),bn.crossVectors(n,Ht)),bn.normalize(),as.crossVectors(Ht,bn),s[0]=bn.x,s[4]=as.x,s[8]=Ht.x,s[1]=bn.y,s[5]=as.y,s[9]=Ht.y,s[2]=bn.z,s[6]=as.z,s[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],d=n[8],l=n[12],u=n[1],p=n[5],h=n[9],f=n[13],x=n[2],M=n[6],g=n[10],m=n[14],b=n[3],A=n[7],y=n[11],C=n[15],T=s[0],_=s[4],E=s[8],O=s[12],R=s[1],D=s[5],k=s[9],W=s[13],P=s[2],V=s[6],j=s[10],U=s[14],Z=s[3],z=s[7],K=s[11],te=s[15];return r[0]=a*T+o*R+d*P+l*Z,r[4]=a*_+o*D+d*V+l*z,r[8]=a*E+o*k+d*j+l*K,r[12]=a*O+o*W+d*U+l*te,r[1]=u*T+p*R+h*P+f*Z,r[5]=u*_+p*D+h*V+f*z,r[9]=u*E+p*k+h*j+f*K,r[13]=u*O+p*W+h*U+f*te,r[2]=x*T+M*R+g*P+m*Z,r[6]=x*_+M*D+g*V+m*z,r[10]=x*E+M*k+g*j+m*K,r[14]=x*O+M*W+g*U+m*te,r[3]=b*T+A*R+y*P+C*Z,r[7]=b*_+A*D+y*V+C*z,r[11]=b*E+A*k+y*j+C*K,r[15]=b*O+A*W+y*U+C*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],d=e[9],l=e[13],u=e[2],p=e[6],h=e[10],f=e[14],x=e[3],M=e[7],g=e[11],m=e[15],b=d*f-l*h,A=o*f-l*p,y=o*h-d*p,C=a*f-l*u,T=a*h-d*u,_=a*p-o*u;return t*(M*b-g*A+m*y)-n*(x*b-g*C+m*T)+s*(x*A-M*C+m*_)-r*(x*y-M*T+g*_)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],d=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(r*u-o*d)+s*(r*l-a*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],d=e[6],l=e[7],u=e[8],p=e[9],h=e[10],f=e[11],x=e[12],M=e[13],g=e[14],m=e[15],b=t*o-n*a,A=t*d-s*a,y=t*l-r*a,C=n*d-s*o,T=n*l-r*o,_=s*l-r*d,E=u*M-p*x,O=u*g-h*x,R=u*m-f*x,D=p*g-h*M,k=p*m-f*M,W=h*m-f*g,P=b*W-A*k+y*D+C*R-T*O+_*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/P;return e[0]=(o*W-d*k+l*D)*V,e[1]=(s*k-n*W-r*D)*V,e[2]=(M*_-g*T+m*C)*V,e[3]=(h*T-p*_-f*C)*V,e[4]=(d*R-a*W-l*O)*V,e[5]=(t*W-s*R+r*O)*V,e[6]=(g*y-x*_-m*A)*V,e[7]=(u*_-h*y+f*A)*V,e[8]=(a*k-o*R+l*E)*V,e[9]=(n*R-t*k-r*E)*V,e[10]=(x*T-M*y+m*b)*V,e[11]=(p*y-u*T-f*b)*V,e[12]=(o*O-a*D-d*E)*V,e[13]=(t*D-n*O+s*E)*V,e[14]=(M*A-x*C-g*b)*V,e[15]=(u*C-p*A+h*b)*V,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,d=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*d,l*d+s*o,0,l*o+s*d,u*o+n,u*d-s*a,0,l*d-s*o,u*d+s*a,r*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,d=t._w,l=r+r,u=a+a,p=o+o,h=r*l,f=r*u,x=r*p,M=a*u,g=a*p,m=o*p,b=d*l,A=d*u,y=d*p,C=n.x,T=n.y,_=n.z;return s[0]=(1-(M+m))*C,s[1]=(f+y)*C,s[2]=(x-A)*C,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(h+m))*T,s[6]=(g+b)*T,s[7]=0,s[8]=(x+A)*_,s[9]=(g-b)*_,s[10]=(1-(h+M))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Zn.set(s[0],s[1],s[2]).length();const o=Zn.set(s[4],s[5],s[6]).length(),d=Zn.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Xt.copy(this);const l=1/a,u=1/o,p=1/d;return Xt.elements[0]*=l,Xt.elements[1]*=l,Xt.elements[2]*=l,Xt.elements[4]*=u,Xt.elements[5]*=u,Xt.elements[6]*=u,Xt.elements[8]*=p,Xt.elements[9]*=p,Xt.elements[10]*=p,t.setFromRotationMatrix(Xt),n.x=a,n.y=o,n.z=d,this}makePerspective(e,t,n,s,r,a,o=Zt,d=!1){const l=this.elements,u=2*r/(t-e),p=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s);let x,M;if(d)x=r/(a-r),M=a*r/(a-r);else if(o===Zt)x=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===$i)x=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=p,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Zt,d=!1){const l=this.elements,u=2/(t-e),p=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s);let x,M;if(d)x=1/(a-r),M=a/(a-r);else if(o===Zt)x=-2/(a-r),M=-(a+r)/(a-r);else if(o===$i)x=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=p,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=x,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};$s.prototype.isMatrix4=!0;let rt=$s;const Zn=new G,Xt=new rt,Oh=new G(0,0,0),Fh=new G(1,1,1),bn=new G,as=new G,Ht=new G,Xo=new rt,qo=new Mi;class vn{constructor(e=0,t=0,n=0,s=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],d=s[1],l=s[5],u=s[9],p=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(d,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(d,r));break;case"ZYX":this._y=Math.asin(-ze(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(d,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qo.setFromEuler(this),this.setFromQuaternion(qo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class mc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bh=0;const $o=new G,Jn=new Mi,dn=new rt,os=new G,Ti=new G,kh=new G,Hh=new Mi,Yo=new G(1,0,0),Ko=new G(0,1,0),Zo=new G(0,0,1),Jo={type:"added"},Gh={type:"removed"},Qn={type:"childadded",child:null},pr={type:"childremoved",child:null};class Et extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new G,t=new vn,n=new Mi,s=new G(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new De}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.premultiply(Jn),this}rotateX(e){return this.rotateOnAxis(Yo,e)}rotateY(e){return this.rotateOnAxis(Ko,e)}rotateZ(e){return this.rotateOnAxis(Zo,e)}translateOnAxis(e,t){return $o.copy(e).applyQuaternion(this.quaternion),this.position.add($o.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yo,e)}translateY(e){return this.translateOnAxis(Ko,e)}translateZ(e){return this.translateOnAxis(Zo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?os.copy(e):os.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ti.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(Ti,os,this.up):dn.lookAt(os,Ti,this.up),this.quaternion.setFromRotationMatrix(dn),s&&(dn.extractRotation(s.matrixWorld),Jn.setFromRotationMatrix(dn),this.quaternion.premultiply(Jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jo),Qn.child=e,this.dispatchEvent(Qn),Qn.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gh),pr.child=e,this.dispatchEvent(pr),pr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jo),Qn.child=e,this.dispatchEvent(Qn),Qn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,e,kh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,Hh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,d){return o[d.uuid]===void 0&&(o[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const d=o.shapes;if(Array.isArray(d))for(let l=0,u=d.length;l<u;l++){const p=d[l];r(e.shapes,p)}else r(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let d=0,l=this.material.length;d<l;d++)o.push(r(e.materials,this.material[d]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const d=this.animations[o];s.animations.push(r(e.animations,d))}}if(t){const o=a(e.geometries),d=a(e.materials),l=a(e.textures),u=a(e.images),p=a(e.shapes),h=a(e.skeletons),f=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),d.length>0&&(n.materials=d),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){const d=[];for(const l in o){const u=o[l];delete u.metadata,d.push(u)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Et.DEFAULT_UP=new G(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Di extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zh={type:"move"};class mr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,d=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const M of e.hand.values()){const g=t.getJointPose(M,n),m=this._getHandJoint(l,M);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],h=u.position.distanceTo(p.position),f=.02,x=.005;l.inputState.pinching&&h>f+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(d.matrix.fromArray(r.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,r.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(r.linearVelocity)):d.hasLinearVelocity=!1,r.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(r.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zh)))}return o!==null&&(o.visible=s!==null),d!==null&&(d.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Di;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},ls={h:0,s:0,l:0};function gr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Xe.workingColorSpace){if(e=Ha(e,1),t=ze(t,0,1),n=ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=gr(a,r,e+1/3),this.g=gr(a,r,e),this.b=gr(a,r,e-1/3)}return Xe.colorSpaceToWorking(this,s),this}setStyle(e,t=Ot){function n(r){r!==void 0&&parseFloat(r)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=gc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_n(e.r),this.g=_n(e.g),this.b=_n(e.b),this}copyLinearToSRGB(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Xe.workingToColorSpace(Rt.copy(this),e),Math.round(ze(Rt.r*255,0,255))*65536+Math.round(ze(Rt.g*255,0,255))*256+Math.round(ze(Rt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(Rt.copy(this),t);const n=Rt.r,s=Rt.g,r=Rt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let d,l;const u=(o+a)/2;if(o===a)d=0,l=0;else{const p=a-o;switch(l=u<=.5?p/(a+o):p/(2-a-o),a){case n:d=(s-r)/p+(s<r?6:0);break;case s:d=(r-n)/p+2;break;case r:d=(n-s)/p+4;break}d/=6}return e.h=d,e.s=l,e.l=u,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Ot){Xe.workingToColorSpace(Rt.copy(this),e);const t=Rt.r,n=Rt.g,s=Rt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(yn),this.setHSL(yn.h+e,yn.s+t,yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yn),e.getHSL(ls);const n=Hi(yn.h,ls.h,t),s=Hi(yn.s,ls.s,t),r=Hi(yn.l,ls.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new Ge;Ge.NAMES=gc;class Vh extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const qt=new G,un=new G,xr=new G,hn=new G,ei=new G,ti=new G,Qo=new G,_r=new G,vr=new G,Sr=new G,Mr=new dt,br=new dt,yr=new dt;class Kt{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),qt.subVectors(e,t),s.cross(qt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){qt.subVectors(s,t),un.subVectors(n,t),xr.subVectors(e,t);const a=qt.dot(qt),o=qt.dot(un),d=qt.dot(xr),l=un.dot(un),u=un.dot(xr),p=a*l-o*o;if(p===0)return r.set(0,0,0),null;const h=1/p,f=(l*d-o*u)*h,x=(a*u-o*d)*h;return r.set(1-f-x,x,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(e,t,n,s,r,a,o,d){return this.getBarycoord(e,t,n,s,hn)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(r,hn.x),d.addScaledVector(a,hn.y),d.addScaledVector(o,hn.z),d)}static getInterpolatedAttribute(e,t,n,s,r,a){return Mr.setScalar(0),br.setScalar(0),yr.setScalar(0),Mr.fromBufferAttribute(e,t),br.fromBufferAttribute(e,n),yr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Mr,r.x),a.addScaledVector(br,r.y),a.addScaledVector(yr,r.z),a}static isFrontFacing(e,t,n,s){return qt.subVectors(n,t),un.subVectors(e,t),qt.cross(un).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),un.subVectors(this.a,this.b),qt.cross(un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Kt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ei.subVectors(s,n),ti.subVectors(r,n),_r.subVectors(e,n);const d=ei.dot(_r),l=ti.dot(_r);if(d<=0&&l<=0)return t.copy(n);vr.subVectors(e,s);const u=ei.dot(vr),p=ti.dot(vr);if(u>=0&&p<=u)return t.copy(s);const h=d*p-u*l;if(h<=0&&d>=0&&u<=0&&d-u>0)return a=d/(d-u),t.copy(n).addScaledVector(ei,a);Sr.subVectors(e,r);const f=ei.dot(Sr),x=ti.dot(Sr);if(x>=0&&f<=x)return t.copy(r);const M=f*l-d*x;if(M<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(ti,o);const g=u*x-f*p;if(g<=0&&p-u>=0&&f-x>=0)return Qo.subVectors(r,s),o=(p-u)/(p-u+(f-x)),t.copy(s).addScaledVector(Qo,o);const m=1/(g+M+h);return a=M*m,o=h*m,t.copy(n).addScaledVector(ei,a).addScaledVector(ti,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Qi{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$t):$t.fromBufferAttribute(r,a),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cs.copy(n.boundingBox)),cs.applyMatrix4(e.matrixWorld),this.union(cs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ri),ds.subVectors(this.max,Ri),ni.subVectors(e.a,Ri),ii.subVectors(e.b,Ri),si.subVectors(e.c,Ri),En.subVectors(ii,ni),wn.subVectors(si,ii),kn.subVectors(ni,si);let t=[0,-En.z,En.y,0,-wn.z,wn.y,0,-kn.z,kn.y,En.z,0,-En.x,wn.z,0,-wn.x,kn.z,0,-kn.x,-En.y,En.x,0,-wn.y,wn.x,0,-kn.y,kn.x,0];return!Er(t,ni,ii,si,ds)||(t=[1,0,0,0,1,0,0,0,1],!Er(t,ni,ii,si,ds))?!1:(us.crossVectors(En,wn),t=[us.x,us.y,us.z],Er(t,ni,ii,si,ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fn=[new G,new G,new G,new G,new G,new G,new G,new G],$t=new G,cs=new Qi,ni=new G,ii=new G,si=new G,En=new G,wn=new G,kn=new G,Ri=new G,ds=new G,us=new G,Hn=new G;function Er(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Hn.fromArray(i,r);const o=s.x*Math.abs(Hn.x)+s.y*Math.abs(Hn.y)+s.z*Math.abs(Hn.z),d=e.dot(Hn),l=t.dot(Hn),u=n.dot(Hn);if(Math.max(-Math.max(d,l,u),Math.min(d,l,u))>o)return!1}return!0}const pt=new G,hs=new Ve;let Wh=0;class Vn extends qn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=dh,this.updateRanges=[],this.gpuType=nn,this.version=0,this._normalizationScale=e!==void 0?Ga(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hs.fromBufferAttribute(this,t),hs.applyMatrix3(e),this.setXY(t,hs.x,hs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):hc(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):fc(e,this.array)}}class xc extends Vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class _c extends Vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Vt extends Vn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const jh=new Qi,Ci=new G,wr=new G;class Js{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):jh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ci.subVectors(e,this.center);const t=Ci.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ci,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ci.copy(e.center).add(wr)),this.expandByPoint(Ci.copy(e.center).sub(wr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Xh=0;const Wt=new rt,Ar=new Et,ri=new G,Gt=new Qi,Ni=new Qi,Mt=new G;class ln extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uh(e)?_c:xc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,n){return Wt.makeTranslation(e,t,n),this.applyMatrix4(Wt),this}scale(e,t,n){return Wt.makeScale(e,t,n),this.applyMatrix4(Wt),this}lookAt(e){return Ar.lookAt(e),Ar.updateMatrix(),this.applyMatrix4(Ar.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ri).negate(),this.translate(ri.x,ri.y,ri.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Vt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Gt.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ni.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Gt.min,Ni.min),Gt.expandByPoint(Mt),Mt.addVectors(Gt.max,Ni.max),Gt.expandByPoint(Mt)):(Gt.expandByPoint(Ni.min),Gt.expandByPoint(Ni.max))}Gt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Mt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Mt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],d=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Mt.fromBufferAttribute(o,l),d&&(ri.fromBufferAttribute(e,l),Mt.add(ri)),s=Math.max(s,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Vn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],d=[],l=new Uint8Array(n.count);for(let O=0;O<n.count;O++)o[O]=new G,d[O]=new G;const u=new G,p=new G,h=new G,f=new Ve,x=new Ve,M=new Ve,g=new G,m=new G;function b(O,R,D){l[O]=l[R]=l[D]=1,u.fromBufferAttribute(n,O),p.fromBufferAttribute(n,R),h.fromBufferAttribute(n,D),f.fromBufferAttribute(r,O),x.fromBufferAttribute(r,R),M.fromBufferAttribute(r,D),p.sub(u),h.sub(u),x.sub(f),M.sub(f);const k=1/(x.x*M.y-M.x*x.y);isFinite(k)&&(g.copy(p).multiplyScalar(M.y).addScaledVector(h,-x.y).multiplyScalar(k),m.copy(h).multiplyScalar(x.x).addScaledVector(p,-M.x).multiplyScalar(k),o[O].add(g),o[R].add(g),o[D].add(g),d[O].add(m),d[R].add(m),d[D].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let O=0,R=A.length;O<R;++O){const D=A[O],k=D.start,W=D.count;for(let P=k,V=k+W;P<V;P+=3)b(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const y=new G,C=new G,T=new G,_=new G;function E(O){T.fromBufferAttribute(s,O),_.copy(T);const R=o[O];y.copy(R),y.sub(T.multiplyScalar(T.dot(R))).normalize(),C.crossVectors(_,R);const k=C.dot(d[O])<0?-1:1;a.setXYZW(O,y.x,y.y,y.z,k)}for(let O=0,R=n.count;O<R;++O)l[O]&&E(O);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new G,r=new G,a=new G,o=new G,d=new G,l=new G,u=new G,p=new G;if(e)for(let h=0,f=e.count;h<f;h+=3){const x=e.getX(h+0),M=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,g),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),o.fromBufferAttribute(n,x),d.fromBufferAttribute(n,M),l.fromBufferAttribute(n,g),o.add(u),d.add(u),l.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(M,d.x,d.y,d.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,d){const l=o.array,u=o.itemSize,p=o.normalized,h=new l.constructor(d.length*u);let f=0,x=0;for(let M=0,g=d.length;M<g;M++){o.isInterleavedBufferAttribute?f=d[M]*o.data.stride+o.offset:f=d[M]*u;for(let m=0;m<u;m++)h[x++]=l[f++]}return new Vn(h,u,p)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,n=this.index.array,s=this.attributes;for(const o in s){const d=s[o],l=e(d,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const d=[],l=r[o];for(let u=0,p=l.length;u<p;u++){const h=l[u],f=e(h,n);d.push(f)}t.morphAttributes[o]=d}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,d=a.length;o<d;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const l in d)d[l]!==void 0&&(e[l]=d[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const l=n[d];e.data.attributes[d]=l.toJSON(e.data)}const s={};let r=!1;for(const d in this.morphAttributes){const l=this.morphAttributes[d],u=[];for(let p=0,h=l.length;p<h;p++){const f=l[p];u.push(f.toJSON(e.data))}u.length>0&&(s[d]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],p=r[l];for(let h=0,f=p.length;h<f;h++)u.push(p[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tr=new G,qh=new G,$h=new De;class Cn{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Tr.subVectors(n,t).cross(qh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Tr),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$h.getNormalMatrix(e),s=this.coplanarPoint(Tr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Yh=0;class $n extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=Bi,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jl,this.blendDst=Xl,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const d=r[o];delete d.metadata,a.push(d)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Cn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ve().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ve().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const pn=new G,Rr=new G,fs=new G,ps=new G;class vc{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Rr.copy(e).add(t).multiplyScalar(.5),fs.copy(t).sub(e).normalize(),ps.copy(this.origin).sub(Rr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(fs),o=ps.dot(this.direction),d=-ps.dot(fs),l=ps.lengthSq(),u=Math.abs(1-a*a);let p,h,f,x;if(u>0)if(p=a*d-o,h=a*o-d,x=r*u,p>=0)if(h>=-x)if(h<=x){const M=1/u;p*=M,h*=M,f=p*(p+a*h+2*o)+h*(a*p+h+2*d)+l}else h=r,p=Math.max(0,-(a*h+o)),f=-p*p+h*(h+2*d)+l;else h=-r,p=Math.max(0,-(a*h+o)),f=-p*p+h*(h+2*d)+l;else h<=-x?(p=Math.max(0,-(-a*r+o)),h=p>0?-r:Math.min(Math.max(-r,-d),r),f=-p*p+h*(h+2*d)+l):h<=x?(p=0,h=Math.min(Math.max(-r,-d),r),f=h*(h+2*d)+l):(p=Math.max(0,-(a*r+o)),h=p>0?r:Math.min(Math.max(-r,-d),r),f=-p*p+h*(h+2*d)+l);else h=a>0?-r:r,p=Math.max(0,-(a*h+o)),f=-p*p+h*(h+2*d)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Rr).addScaledVector(fs,h),f}intersectSphere(e,t){if(e.radius<0)return null;pn.subVectors(e.center,this.origin);const n=pn.dot(this.direction),s=pn.dot(pn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,d=n+a;return d<0?null:o<0?this.at(d,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,d;const l=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-h.z)*p,d=(e.max.z-h.z)*p):(o=(e.max.z-h.z)*p,d=(e.min.z-h.z)*p),n>d||o>s)||((o>n||n!==n)&&(n=o),(d<s||s!==s)&&(s=d),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,d=o.x,l=o.y,u=o.z,p=e.x-a.x,h=e.y-a.y,f=e.z-a.z,x=t.x-a.x,M=t.y-a.y,g=t.z-a.z,m=n.x-a.x,b=n.y-a.y,A=n.z-a.z,y=Math.abs(d),C=Math.abs(l),T=Math.abs(u);let _,E,O,R,D,k,W,P,V,j,U,Z;if(y>=C&&y>=T?(O=d,k=p,V=x,Z=m,d>=0?(_=l,E=u,R=h,D=f,W=M,P=g,j=b,U=A):(_=u,E=l,R=f,D=h,W=g,P=M,j=A,U=b)):C>=T?(O=l,k=h,V=M,Z=b,l>=0?(_=u,E=d,R=f,D=p,W=g,P=x,j=A,U=m):(_=d,E=u,R=p,D=f,W=x,P=g,j=m,U=A)):(O=u,k=f,V=g,Z=A,u>=0?(_=d,E=l,R=p,D=h,W=x,P=M,j=m,U=b):(_=l,E=d,R=h,D=p,W=M,P=x,j=b,U=m)),O===0)return null;const z=_/O,K=E/O,te=1/O,ve=R-z*k,Ce=D-K*k,$=W-z*V,fe=P-K*V,_e=j-z*Z,Ae=U-K*Z,pe=_e*fe-Ae*$,Le=ve*Ae-Ce*_e,He=$*Ce-fe*ve;if(s){if(pe<0||Le<0||He<0)return null}else if((pe<0||Le<0||He<0)&&(pe>0||Le>0||He>0))return null;const Ee=pe+Le+He;if(Ee===0)return null;const qe=te*(pe*k+Le*V+He*Z);return(Ee>0?qe<0:qe>0)?null:this.at(qe/Ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Sc extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=La,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const el=new rt,Gn=new vc,ms=new Js,tl=new G,gs=new G,xs=new G,_s=new G,Cr=new G,vs=new G,nl=new G,Ss=new G;class Jt extends Et{constructor(e=new ln,t=new Sc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){vs.set(0,0,0);for(let d=0,l=r.length;d<l;d++){const u=o[d],p=r[d];u!==0&&(Cr.fromBufferAttribute(p,e),a?vs.addScaledVector(Cr,u):vs.addScaledVector(Cr.sub(t),u))}t.add(vs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere),ms.applyMatrix4(r),Gn.copy(e.ray).recast(e.near),!(ms.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(ms,tl)===null||Gn.origin.distanceToSquared(tl)>(e.far-e.near)**2))&&(el.copy(r).invert(),Gn.copy(e.ray).applyMatrix4(el),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,d=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=h.length;x<M;x++){const g=h[x],m=a[g.materialIndex],b=Math.max(g.start,f.start),A=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=b,C=A;y<C;y+=3){const T=o.getX(y),_=o.getX(y+1),E=o.getX(y+2);s=Ms(this,m,e,n,l,u,p,T,_,E),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const x=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let g=x,m=M;g<m;g+=3){const b=o.getX(g),A=o.getX(g+1),y=o.getX(g+2);s=Ms(this,a,e,n,l,u,p,b,A,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(a))for(let x=0,M=h.length;x<M;x++){const g=h[x],m=a[g.materialIndex],b=Math.max(g.start,f.start),A=Math.min(d.count,Math.min(g.start+g.count,f.start+f.count));for(let y=b,C=A;y<C;y+=3){const T=y,_=y+1,E=y+2;s=Ms(this,m,e,n,l,u,p,T,_,E),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const x=Math.max(0,f.start),M=Math.min(d.count,f.start+f.count);for(let g=x,m=M;g<m;g+=3){const b=g,A=g+1,y=g+2;s=Ms(this,a,e,n,l,u,p,b,A,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Kh(i,e,t,n,s,r,a,o){let d;if(e.side===Ut?d=n.intersectTriangle(a,r,s,!0,o):d=n.intersectTriangle(s,r,a,e.side===jn,o),d===null)return null;Ss.copy(o),Ss.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ss);return l<t.near||l>t.far?null:{distance:l,point:Ss.clone(),object:i}}function Ms(i,e,t,n,s,r,a,o,d,l){i.getVertexPosition(o,gs),i.getVertexPosition(d,xs),i.getVertexPosition(l,_s);const u=Kh(i,e,t,n,gs,xs,_s,nl);if(u){const p=new G;Kt.getBarycoord(nl,gs,xs,_s,p),s&&(u.uv=Kt.getInterpolatedAttribute(s,o,d,l,p,new Ve)),r&&(u.uv1=Kt.getInterpolatedAttribute(r,o,d,l,p,new Ve)),a&&(u.normal=Kt.getInterpolatedAttribute(a,o,d,l,p,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:d,c:l,normal:new G,materialIndex:0};Kt.getNormal(gs,xs,_s,h.normal),u.face=h,u.barycoord=p}return u}class Zh extends Ct{constructor(e=null,t=1,n=1,s,r,a,o,d,l=yt,u=yt,p,h){super(null,a,o,d,l,u,s,r,p,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zn=new Js,Jh=new Ve(.5,.5),bs=new G;class Zi{constructor(e=new Cn,t=new Cn,n=new Cn,s=new Cn,r=new Cn,a=new Cn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zt,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],d=r[2],l=r[3],u=r[4],p=r[5],h=r[6],f=r[7],x=r[8],M=r[9],g=r[10],m=r[11],b=r[12],A=r[13],y=r[14],C=r[15];if(s[0].setComponents(l-a,f-u,m-x,C-b).normalize(),s[1].setComponents(l+a,f+u,m+x,C+b).normalize(),s[2].setComponents(l+o,f+p,m+M,C+A).normalize(),s[3].setComponents(l-o,f-p,m-M,C-A).normalize(),n)s[4].setComponents(d,h,g,y).normalize(),s[5].setComponents(l-d,f-h,m-g,C-y).normalize();else if(s[4].setComponents(l-d,f-h,m-g,C-y).normalize(),t===Zt)s[5].setComponents(l+d,f+h,m+g,C+y).normalize();else if(t===$i)s[5].setComponents(d,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(e){zn.center.set(0,0,0);const t=Jh.distanceTo(e.center);return zn.radius=.7071067811865476+t,zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(bs.x=s.normal.x>0?e.max.x:e.min.x,bs.y=s.normal.y>0?e.max.y:e.min.y,bs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const il=new rt;class Va{constructor(){this.coordinateSystem=Zt,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];il.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Zi),n[s].setFromProjectionMatrix(il,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Zi),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new Va().copy(this)}}class Mc extends $n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const js=new G,Xs=new G,sl=new rt,Pi=new vc,ys=new Js,Nr=new G,rl=new G;class Qh extends Et{constructor(e=new ln,t=new Mc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)js.fromBufferAttribute(t,s-1),Xs.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=js.distanceTo(Xs);e.setAttribute("lineDistance",new Vt(n,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(s),ys.radius+=r,e.ray.intersectsSphere(ys)===!1)return;sl.copy(s).invert(),Pi.copy(e.ray).applyMatrix4(sl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),d=o*o,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let M=f,g=x-1;M<g;M+=l){const m=u.getX(M),b=u.getX(M+1),A=Es(this,e,Pi,d,m,b,M);A&&t.push(A)}if(this.isLineLoop){const M=u.getX(x-1),g=u.getX(f),m=Es(this,e,Pi,d,M,g,x-1);m&&t.push(m)}}else{const f=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let M=f,g=x-1;M<g;M+=l){const m=Es(this,e,Pi,d,M,M+1,M);m&&t.push(m)}if(this.isLineLoop){const M=Es(this,e,Pi,d,x-1,f,x-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Es(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(js.fromBufferAttribute(o,s),Xs.fromBufferAttribute(o,r),t.distanceSqToSegment(js,Xs,Nr,rl)>n)return;Nr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Nr);if(!(l<e.near||l>e.far))return{distance:l,point:rl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class bc extends Ct{constructor(e=[],t=gi,n,s,r,a,o,d,l,u){super(e,t,n,s,r,a,o,d,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _i extends Ct{constructor(e,t,n=an,s,r,a,o=yt,d=yt,l,u=Dn,p=1){if(u!==Dn&&u!==Ln)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:p};super(h,s,r,a,o,d,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new za(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class yc extends _i{constructor(e,t=an,n=gi,s,r,a=yt,o=yt,d,l=Dn){const u={width:e,height:e,depth:1},p=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,d,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ec extends Ct{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class es extends ln{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const d=[],l=[],u=[],p=[];let h=0,f=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(d),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(p,2));function x(M,g,m,b,A,y,C,T,_,E,O){const R=y/_,D=C/E,k=y/2,W=C/2,P=T/2,V=_+1,j=E+1;let U=0,Z=0;const z=new G;for(let K=0;K<j;K++){const te=K*D-W;for(let ve=0;ve<V;ve++){const Ce=ve*R-k;z[M]=Ce*b,z[g]=te*A,z[m]=P,l.push(z.x,z.y,z.z),z[M]=0,z[g]=0,z[m]=T>0?1:-1,u.push(z.x,z.y,z.z),p.push(ve/_),p.push(1-K/E),U+=1}}for(let K=0;K<E;K++)for(let te=0;te<_;te++){const ve=h+te+V*K,Ce=h+te+V*(K+1),$=h+(te+1)+V*(K+1),fe=h+(te+1)+V*K;d.push(ve,Ce,fe),d.push(Ce,$,fe),Z+=6}o.addGroup(f,Z,O),f+=Z,h+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ef{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Pe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,d=r-1,l;for(;o<=d;)if(s=Math.floor(o+(d-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)d=s-1;else{d=s;break}if(s=d,n[s]===a)return s/(r-1);const u=n[s],h=n[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),d=t||(a.isVector2?new Ve:new G);return d.copy(o).sub(a).normalize(),d}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new G,s=[],r=[],a=[],o=new G,d=new rt;for(let f=0;f<=e;f++){const x=f/e;s[f]=this.getTangentAt(x,new G)}r[0]=new G,a[0]=new G;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),p=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),p<=l&&(l=p,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const x=Math.acos(ze(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(d.makeRotationAxis(o,x))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ze(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let x=1;x<=e;x++)r[x].applyMatrix4(d.makeRotationAxis(s[x],f*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class tf extends ef{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,d=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=d}getPoint(e,t=new Ve){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let d=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),h=d-this.aX,f=l-this.aY;d=h*u-f*p+this.aX,l=h*p+f*u+this.aY}return n.set(d,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Qs extends ln{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),d=Math.floor(s),l=o+1,u=d+1,p=e/o,h=t/d,f=[],x=[],M=[],g=[];for(let m=0;m<u;m++){const b=m*h-a;for(let A=0;A<l;A++){const y=A*p-r;x.push(y,-b,0),M.push(0,0,1),g.push(A/o),g.push(1-m/d)}}for(let m=0;m<d;m++)for(let b=0;b<o;b++){const A=b+l*m,y=b+l*(m+1),C=b+1+l*(m+1),T=b+1+l*m;f.push(A,y,T),f.push(y,C,T)}this.setIndex(f),this.setAttribute("position",new Vt(x,3)),this.setAttribute("normal",new Vt(M,3)),this.setAttribute("uv",new Vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.widthSegments,e.heightSegments)}}class hi extends ln{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const d=Math.min(a+o,Math.PI);let l=0;const u=[],p=new G,h=new G,f=[],x=[],M=[],g=[];for(let m=0;m<=n;m++){const b=[],A=m/n,y=a+A*o,C=e*Math.cos(y),T=Math.sqrt(e*e-C*C);let _=0;m===0&&a===0?_=.5/t:m===n&&d===Math.PI&&(_=-.5/t);for(let E=0;E<=t;E++){const O=E/t,R=s+O*r;p.x=-T*Math.cos(R),p.y=C,p.z=T*Math.sin(R),x.push(p.x,p.y,p.z),h.copy(p).normalize(),M.push(h.x,h.y,h.z),g.push(O+_,1-A),b.push(l++)}u.push(b)}for(let m=0;m<n;m++)for(let b=0;b<t;b++){const A=u[m][b+1],y=u[m][b],C=u[m+1][b],T=u[m+1][b+1];(m!==0||a>0)&&f.push(A,y,T),(m!==n-1||d<Math.PI)&&f.push(y,C,T)}this.setIndex(f),this.setAttribute("position",new Vt(x,3)),this.setAttribute("normal",new Vt(M,3)),this.setAttribute("uv",new Vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function vi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(al(s))s.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(al(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Dt(i){const e={};for(let t=0;t<i.length;t++){const n=vi(i[t]);for(const s in n)e[s]=n[s]}return e}function al(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function nf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const sf={clone:vi,merge:Dt};var rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rf,this.fragmentShader=af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vi(e.uniforms),this.uniformsGroups=nf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ge().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ve().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new dt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new De().fromArray(s.value);break;case"m4":this.uniforms[n].value=new rt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class of extends Un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class lf extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zs,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cf extends $n{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ge(16777215),this.specular=new Ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zs,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=La,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class df extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uf extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Pr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(ol(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!ol(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function ol(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class hf{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,d;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),d?d(u):u},this.setURLModifier=function(u){return d=u,this},this.addHandler=function(u,p){return l.push(u,p),this},this.removeHandler=function(u){const p=l.indexOf(u);return p!==-1&&l.splice(p,2),this},this.getHandler=function(u){for(let p=0,h=l.length;p<h;p+=2){const f=l[p],x=l[p+1];if(f.global&&(f.lastIndex=0),f.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ff=new hf;class Wa{constructor(e){this.manager=e!==void 0?e:ff,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}Wa.DEFAULT_MATERIAL_NAME="__DEFAULT";const ai=new WeakMap;class pf extends Wa{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Pr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let p=ai.get(a);p===void 0&&(p=[],ai.set(a,p)),p.push({onLoad:t,onError:s})}return a}const o=Yi("img");function d(){u(),t&&t(this);const p=ai.get(this)||[];for(let h=0;h<p.length;h++){const f=p[h];f.onLoad&&f.onLoad(this)}ai.delete(this),r.manager.itemEnd(e)}function l(p){u(),s&&s(p),Pr.remove(`image:${e}`);const h=ai.get(this)||[];for(let f=0;f<h.length;f++){const x=h[f];x.onError&&x.onError(p)}ai.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",d,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",d,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Pr.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class mf extends Wa{constructor(e){super(e)}load(e,t,n,s){const r=new Ct,a=new pf(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Ac extends Et{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Lr=new rt,ll=new G,cl=new G;class gf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=zt,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zi,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;ll.setFromMatrixPosition(e.matrixWorld),t.position.copy(ll),cl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Lr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Lr,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,d=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===$i||e.reversedDepth?t.set(.5*a,0,0,.5*a+d,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+d,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Lr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ws=new G,As=new Mi,Qt=new G;class Tc extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Zt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ws,As,Qt),Qt.x===1&&Qt.y===1&&Qt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ws,As,Qt.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ws,As,Qt),Qt.x===1&&Qt.y===1&&Qt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ws,As,Qt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const An=new G,dl=new Ve,ul=new Ve;class Yt extends Tc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ki*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ki*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ki*2*Math.atan(Math.tan(ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){An.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(An.x,An.y).multiplyScalar(-e/An.z),An.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(An.x,An.y).multiplyScalar(-e/An.z)}getViewSize(e,t){return this.getViewBounds(e,dl,ul),t.subVectors(ul,dl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ki*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const d=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/d,t-=a.offsetY*n/l,s*=a.width/d,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Rc extends Tc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,d=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class xf extends gf{constructor(){super(new Rc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hl extends Ac{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new xf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class _f extends Ac{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const oi=-90,li=1;class wa extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Yt(oi,li,e,t);s.layers=this.layers,this.add(s);const r=new Yt(oi,li,e,t);r.layers=this.layers,this.add(r);const a=new Yt(oi,li,e,t);a.layers=this.layers,this.add(a);const o=new Yt(oi,li,e,t);o.layers=this.layers,this.add(o);const d=new Yt(oi,li,e,t);d.layers=this.layers,this.add(d);const l=new Yt(oi,li,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,d]=t;for(const l of t)this.remove(l);if(e===Zt)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===$i)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,d,l,u]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=M,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(p,h,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class vf extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function fl(i,e,t,n){const s=Sf(n);switch(t){case sc:return i*e;case ac:return i*e/s.components*s.byteLength;case Fa:return i*e/s.components*s.byteLength;case Xn:return i*e*2/s.components*s.byteLength;case Ba:return i*e*2/s.components*s.byteLength;case rc:return i*e*3/s.components*s.byteLength;case sn:return i*e*4/s.components*s.byteLength;case ka:return i*e*4/s.components*s.byteLength;case Ps:case Ls:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Is:case Ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kr:case Jr:return Math.max(i,16)*Math.max(e,8)/4;case Yr:case Zr:return Math.max(i,8)*Math.max(e,8)/2;case Qr:case ea:case na:case ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ta:case Hs:case sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case aa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case oa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case la:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ca:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case da:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ua:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ha:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case fa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case pa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ma:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ga:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case xa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case _a:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case va:case Sa:case Ma:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ba:case ya:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Gs:case Ea:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sf(i){switch(i){case zt:case ec:return{byteLength:1,components:1};case qi:case tc:case on:return{byteLength:2,components:1};case Ua:case Oa:return{byteLength:2,components:4};case an:case Da:case nn:return{byteLength:4,components:1};case nc:case ic:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pa}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pa);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cc(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Mf(i){const e=new WeakMap;function t(o,d){const l=o.array,u=o.usage,p=l.byteLength,h=i.createBuffer();i.bindBuffer(d,h),i.bufferData(d,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,d,l){const u=d.array,p=d.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,u);else{p.sort((f,x)=>f.start-x.start);let h=0;for(let f=1;f<p.length;f++){const x=p[h],M=p[f];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++h,p[h]=M)}p.length=h+1;for(let f=0,x=p.length;f<x;f++){const M=p[f];i.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const d=e.get(o);d&&(i.deleteBuffer(d.buffer),e.delete(o))}function a(o,d){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,d));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,d),l.version=o.version}}return{get:s,remove:r,update:a}}var bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ef=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Af=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Pf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,If=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Df=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Uf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Of=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,jf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$f=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ep=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,fp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_p=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ep=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ap=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Up=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Op=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$p=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,am=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Am=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Um=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Om=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,km=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$m=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ym=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Km=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:bf,alphahash_pars_fragment:yf,alphamap_fragment:Ef,alphamap_pars_fragment:wf,alphatest_fragment:Af,alphatest_pars_fragment:Tf,aomap_fragment:Rf,aomap_pars_fragment:Cf,batching_pars_vertex:Nf,batching_vertex:Pf,begin_vertex:Lf,beginnormal_vertex:If,bsdfs:Df,iridescence_fragment:Uf,bumpmap_pars_fragment:Of,clipping_planes_fragment:Ff,clipping_planes_pars_fragment:Bf,clipping_planes_pars_vertex:kf,clipping_planes_vertex:Hf,color_fragment:Gf,color_pars_fragment:zf,color_pars_vertex:Vf,color_vertex:Wf,common:jf,defaultnormal_vertex:Xf,displacementmap_pars_vertex:qf,displacementmap_vertex:$f,emissivemap_fragment:Yf,emissivemap_pars_fragment:Kf,colorspace_fragment:Zf,colorspace_pars_fragment:Jf,envmap_fragment:Qf,envmap_common_pars_fragment:ep,envmap_pars_fragment:tp,envmap_pars_vertex:np,envmap_physical_pars_fragment:fp,envmap_vertex:ip,fog_vertex:sp,fog_pars_vertex:rp,fog_fragment:ap,fog_pars_fragment:op,gradientmap_pars_fragment:lp,lightmap_pars_fragment:cp,lights_lambert_fragment:dp,lights_lambert_pars_fragment:up,lights_pars_begin:hp,lights_toon_fragment:pp,lights_toon_pars_fragment:mp,lights_phong_fragment:gp,lights_phong_pars_fragment:xp,lights_physical_fragment:_p,lights_physical_pars_fragment:vp,lights_fragment_begin:Sp,lights_fragment_maps:Mp,lights_fragment_end:bp,lightprobes_pars_fragment:yp,logdepthbuf_fragment:Ep,logdepthbuf_pars_fragment:wp,logdepthbuf_pars_vertex:Ap,logdepthbuf_vertex:Tp,map_fragment:Rp,map_pars_fragment:Cp,map_particle_fragment:Np,map_particle_pars_fragment:Pp,metalnessmap_fragment:Lp,metalnessmap_pars_fragment:Ip,morphinstance_vertex:Dp,morphcolor_vertex:Up,morphnormal_vertex:Op,morphtarget_pars_vertex:Fp,morphtarget_vertex:Bp,normal_fragment_begin:kp,normal_fragment_maps:Hp,normal_pars_fragment:Gp,normal_pars_vertex:zp,normal_vertex:Vp,normalmap_pars_fragment:Wp,clearcoat_normal_fragment_begin:jp,clearcoat_normal_fragment_maps:Xp,clearcoat_pars_fragment:qp,iridescence_pars_fragment:$p,opaque_fragment:Yp,packing:Kp,premultiplied_alpha_fragment:Zp,project_vertex:Jp,dithering_fragment:Qp,dithering_pars_fragment:em,roughnessmap_fragment:tm,roughnessmap_pars_fragment:nm,shadowmap_pars_fragment:im,shadowmap_pars_vertex:sm,shadowmap_vertex:rm,shadowmask_pars_fragment:am,skinbase_vertex:om,skinning_pars_vertex:lm,skinning_vertex:cm,skinnormal_vertex:dm,specularmap_fragment:um,specularmap_pars_fragment:hm,tonemapping_fragment:fm,tonemapping_pars_fragment:pm,transmission_fragment:mm,transmission_pars_fragment:gm,uv_pars_fragment:xm,uv_pars_vertex:_m,uv_vertex:vm,worldpos_vertex:Sm,background_vert:Mm,background_frag:bm,backgroundCube_vert:ym,backgroundCube_frag:Em,cube_vert:wm,cube_frag:Am,depth_vert:Tm,depth_frag:Rm,distance_vert:Cm,distance_frag:Nm,equirect_vert:Pm,equirect_frag:Lm,linedashed_vert:Im,linedashed_frag:Dm,meshbasic_vert:Um,meshbasic_frag:Om,meshlambert_vert:Fm,meshlambert_frag:Bm,meshmatcap_vert:km,meshmatcap_frag:Hm,meshnormal_vert:Gm,meshnormal_frag:zm,meshphong_vert:Vm,meshphong_frag:Wm,meshphysical_vert:jm,meshphysical_frag:Xm,meshtoon_vert:qm,meshtoon_frag:$m,points_vert:Ym,points_frag:Km,shadow_vert:Zm,shadow_frag:Jm,sprite_vert:Qm,sprite_frag:eg},ge={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},tn={basic:{uniforms:Dt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Dt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Dt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Dt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Dt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Dt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Dt([ge.points,ge.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Dt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Dt([ge.common,ge.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Dt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Dt([ge.sprite,ge.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:Dt([ge.common,ge.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:Dt([ge.lights,ge.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};tn.physical={uniforms:Dt([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new De},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Ts={r:0,b:0,g:0},tg=new rt,Nc=new De;Nc.set(-1,0,0,0,1,0,0,0,1);function ng(i,e,t,n,s,r){const a=new Ge(0);let o=s===!0?0:1,d,l,u=null,p=0,h=null;function f(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){const y=b.backgroundBlurriness>0;A=e.get(A,y)}return A}function x(b){let A=!1;const y=f(b);y===null?g(a,o):y&&y.isColor&&(g(y,1),A=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(b,A){const y=f(A);y&&y.isCubeTexture?(l===void 0&&(l=new Jt(new es(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:vi(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(tg.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Nc),l.material.toneMapped=Xe.getTransfer(y.colorSpace)!==et,(u!==y||p!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,p=y.version,h=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(d===void 0&&(d=new Jt(new Qs(2,2),new Un({name:"BackgroundMaterial",uniforms:vi(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(d)),d.material.uniforms.t2D.value=y,d.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,d.material.toneMapped=Xe.getTransfer(y.colorSpace)!==et,y.matrixAutoUpdate===!0&&y.updateMatrix(),d.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||p!==y.version||h!==i.toneMapping)&&(d.material.needsUpdate=!0,u=y,p=y.version,h=i.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null))}function g(b,A){b.getRGB(Ts,wc(i)),t.buffers.color.setClear(Ts.r,Ts.g,Ts.b,A,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,A=1){a.set(b),o=A,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(a,o)},render:x,addToRenderList:M,dispose:m}}function ig(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(D,k,W,P,V){let j=!1;const U=p(D,P,W,k);r!==U&&(r=U,l(r.object)),j=f(D,P,W,V),j&&x(D,P,W,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,y(D,k,W,P),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function d(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function p(D,k,W,P){const V=P.wireframe===!0;let j=n[k.id];j===void 0&&(j={},n[k.id]=j);const U=D.isInstancedMesh===!0?D.id:0;let Z=j[U];Z===void 0&&(Z={},j[U]=Z);let z=Z[W.id];z===void 0&&(z={},Z[W.id]=z);let K=z[V];return K===void 0&&(K=h(d()),z[V]=K),K}function h(D){const k=[],W=[],P=[];for(let V=0;V<t;V++)k[V]=0,W[V]=0,P[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:W,attributeDivisors:P,object:D,attributes:{},index:null}}function f(D,k,W,P){const V=r.attributes,j=k.attributes;let U=0;const Z=W.getAttributes();for(const z in Z)if(Z[z].location>=0){const te=V[z];let ve=j[z];if(ve===void 0&&(z==="instanceMatrix"&&D.instanceMatrix&&(ve=D.instanceMatrix),z==="instanceColor"&&D.instanceColor&&(ve=D.instanceColor)),te===void 0||te.attribute!==ve||ve&&te.data!==ve.data)return!0;U++}return r.attributesNum!==U||r.index!==P}function x(D,k,W,P){const V={},j=k.attributes;let U=0;const Z=W.getAttributes();for(const z in Z)if(Z[z].location>=0){let te=j[z];te===void 0&&(z==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),z==="instanceColor"&&D.instanceColor&&(te=D.instanceColor));const ve={};ve.attribute=te,te&&te.data&&(ve.data=te.data),V[z]=ve,U++}r.attributes=V,r.attributesNum=U,r.index=P}function M(){const D=r.newAttributes;for(let k=0,W=D.length;k<W;k++)D[k]=0}function g(D){m(D,0)}function m(D,k){const W=r.newAttributes,P=r.enabledAttributes,V=r.attributeDivisors;W[D]=1,P[D]===0&&(i.enableVertexAttribArray(D),P[D]=1),V[D]!==k&&(i.vertexAttribDivisor(D,k),V[D]=k)}function b(){const D=r.newAttributes,k=r.enabledAttributes;for(let W=0,P=k.length;W<P;W++)k[W]!==D[W]&&(i.disableVertexAttribArray(W),k[W]=0)}function A(D,k,W,P,V,j,U){U===!0?i.vertexAttribIPointer(D,k,W,V,j):i.vertexAttribPointer(D,k,W,P,V,j)}function y(D,k,W,P){M();const V=P.attributes,j=W.getAttributes(),U=k.defaultAttributeValues;for(const Z in j){const z=j[Z];if(z.location>=0){let K=V[Z];if(K===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(K=D.instanceColor)),K!==void 0){const te=K.normalized,ve=K.itemSize,Ce=e.get(K);if(Ce===void 0)continue;const $=Ce.buffer,fe=Ce.type,_e=Ce.bytesPerElement,Ae=fe===i.INT||fe===i.UNSIGNED_INT||K.gpuType===Da;if(K.isInterleavedBufferAttribute){const pe=K.data,Le=pe.isInterleavedBuffer===!0?pe.stride:pe.itemSize,He=K.offset;if(pe.isInstancedInterleavedBuffer||pe.isInstancedBufferAttribute){for(let Ee=0;Ee<z.locationSize;Ee++)m(z.location+Ee,pe.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ee=0;Ee<z.locationSize;Ee++)g(z.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,$);for(let Ee=0;Ee<z.locationSize;Ee++)A(z.location+Ee,ve/z.locationSize,fe,te,Le*_e,(He+ve/z.locationSize*Ee)*_e,Ae)}else{if(K.isInstancedBufferAttribute){for(let pe=0;pe<z.locationSize;pe++)m(z.location+pe,K.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let pe=0;pe<z.locationSize;pe++)g(z.location+pe);i.bindBuffer(i.ARRAY_BUFFER,$);for(let pe=0;pe<z.locationSize;pe++)A(z.location+pe,ve/z.locationSize,fe,te,ve*_e,ve/z.locationSize*pe*_e,Ae)}}else if(U!==void 0){const te=U[Z];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(z.location,te);break;case 3:i.vertexAttrib3fv(z.location,te);break;case 4:i.vertexAttrib4fv(z.location,te);break;default:i.vertexAttrib1fv(z.location,te)}}}}b()}function C(){O();for(const D in n){const k=n[D];for(const W in k){const P=k[W];for(const V in P){const j=P[V];for(const U in j)u(j[U].object),delete j[U];delete P[V]}}delete n[D]}}function T(D){if(n[D.id]===void 0)return;const k=n[D.id];for(const W in k){const P=k[W];for(const V in P){const j=P[V];for(const U in j)u(j[U].object),delete j[U];delete P[V]}}delete n[D.id]}function _(D){for(const k in n){const W=n[k];for(const P in W){const V=W[P];if(V[D.id]===void 0)continue;const j=V[D.id];for(const U in j)u(j[U].object),delete j[U];delete V[D.id]}}}function E(D){for(const k in n){const W=n[k],P=D.isInstancedMesh===!0?D.id:0,V=W[P];if(V!==void 0){for(const j in V){const U=V[j];for(const Z in U)u(U[Z].object),delete U[Z];delete V[j]}delete W[P],Object.keys(W).length===0&&delete n[k]}}}function O(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:O,resetDefaultState:R,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfObject:E,releaseStatesOfProgram:_,initAttributes:M,enableAttribute:g,disableUnusedAttributes:b}}function sg(i,e,t){let n;function s(d){n=d}function r(d,l){i.drawArrays(n,d,l),t.update(l,n,1)}function a(d,l,u){u!==0&&(i.drawArraysInstanced(n,d,l,u),t.update(l,n,u))}function o(d,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function rg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==sn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const E=_===on&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==zt&&_!==nn&&!E&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function d(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=d(l);u!==l&&(Pe("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&Pe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:d,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:y,maxSamples:C,samples:T}}function ag(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Cn,o=new De,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const f=p.length!==0||h||n!==0||s;return s=h,n=p.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){t=u(p,h,0)},this.setState=function(p,h,f){const x=p.clippingPlanes,M=p.clipIntersection,g=p.clipShadows,m=i.get(p);if(!s||x===null||x.length===0||r&&!g)r?u(null):l();else{const b=r?0:n,A=b*4;let y=m.clippingState||null;d.value=y,y=u(x,h,A,f);for(let C=0;C!==A;++C)y[C]=t[C];m.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function l(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(p,h,f,x){const M=p!==null?p.length:0;let g=null;if(M!==0){if(g=d.value,x!==!0||g===null){const m=f+M*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let A=0,y=f;A!==M;++A,y+=4)a.copy(p[A]).applyMatrix4(b,o),a.normal.toArray(g,y),g[y+3]=a.constant}d.value=g,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}class ja extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new bc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new es(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:pi});r.uniforms.tEquirect.value=t;const a=new Jt(s,r),o=t.minFilter;return t.minFilter===Pn&&(t.minFilter=Bt),new wa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const pl=256,og=3,lg=20,Pc=256,Lc=16,cg=3,dg=new G,ug=new Ge;class qs{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new wa(1,10,null),this._boxMesh=new Jt(new es(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=dg}=r,d=this._renderer;this._setSize(a);const l=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const p=d.autoClear,h=d.autoClearColor,f=d.autoClearDepth,x=d.autoClearStencil,M=e.background;d.autoClear=!0,d.autoClearColor=!0,d.autoClearDepth=!0,d.autoClearStencil=!0,M===null&&(e.background=d.getClearColor(ug));const g=new wa(n,s,u);return g.position.copy(o),g.update(d,e),d.autoClear=p,d.autoClearColor=h,d.autoClearDepth=f,d.autoClearStencil=x,e.background=M,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(pl,uc(e))}_fromTexture(e,t){e.mapping===gi||e.mapping===Xi?this._setSize(e.image.length===0?pl:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=ml(e,!1,!1),n=Math.log2(e)-og;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=ml(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===gi||e.mapping===Xi?(this._cubemapMaterial===null&&(this._cubemapMaterial=xl()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=gl()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=hg(),this._integrationMaterial=fg());const t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Lc);for(let a=0;a<=n;a++){const o=qs.lodToRoughness(a,n);if(a>n-cg)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const d=o>0?Math.log2(t)+.5*Math.log2(6/(Pc*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=d,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=pg());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}}function ml(i,e,t){return new ja(i,{minFilter:Pn,generateMipmaps:e,type:on,colorSpace:Vs,depthBuffer:t})}function ts(i,e,t){return new Un({name:i,uniforms:e,vertexShader:ke.cube_vert,fragmentShader:t,side:Ut,blending:pi,depthTest:!1,depthWrite:!1})}function hg(){return ts("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Pc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function fg(){return ts("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Lc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function pg(){return ts("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${lg}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function gl(){return ts("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function xl(){return ts("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function mg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===ar||f===or)if(e.has(h)){const x=e.get(h).texture;return o(x,h.mapping)}else{const x=h.image;if(x&&x.height>0){const M=new ja(x.height);return M.fromEquirectangularTexture(i,h),e.set(h,M),h.addEventListener("dispose",l),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const f=h.mapping,x=f===ar||f===or,M=f===gi||f===Xi;if(x||M){let g=t.get(h);const m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new qs(i)),g=x?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const b=h.image;return x&&b&&b.height>0||M&&b&&d(b)?(n===null&&(n=new qs(i)),g=x?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,f){return f===ar?h.mapping=gi:f===or&&(h.mapping=Xi),h}function d(h){let f=0;const x=6;for(let M=0;M<x;M++)h[M]!==void 0&&f++;return f===x}function l(h){const f=h.target;f.removeEventListener("dispose",l);const x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function gg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Us("WebGLRenderer: "+n+" extension not supported."),s}}}function xg(i,e,t,n){const s={},r=new WeakMap,a=new FinalizationRegistry(x=>delete s[x]);function o(x){d(x.target)}function d(x){x.index!==null&&e.remove(x.index);for(const g in x.attributes)e.remove(x.attributes[g]);x.removeEventListener("dispose",o),delete s[x.id],a.unregister(x);const M=r.get(x);M&&(e.remove(M),r.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function l(x,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),t.memory.geometries++),M}function u(x){const M=x.attributes;for(const g in M)e.update(M[g],i.ARRAY_BUFFER)}function p(x){const M=x.index,g=x.attributes.position;let m=0;if(g===void 0)return;const b=M!==null?M.array.length:g.array.length/3-1,A=g.count>=65535?_c:xc,y=new A(Math.ceil(b/3)*6,1),C=y.array;if(M!==null){const _=M.array;m=M.version;for(let E=0,O=0;E<b;E+=3){const R=_[E+0],D=_[E+1],k=_[E+2];C[O++]=R,C[O++]=D,C[O++]=D,C[O++]=k,C[O++]=k,C[O++]=R}}else{m=g.version;for(let _=0,E=0;_<b;_+=3){const O=_+0,R=_+1,D=_+2;C[E++]=O,C[E++]=R,C[E++]=R,C[E++]=D,C[E++]=D,C[E++]=O}}y.version=m;const T=r.get(x);T&&e.remove(T),r.set(x,y)}function h(x){const M=r.get(x);if(M){const g=x.index;g!==null&&M.version<g.version&&p(x)}else p(x);return r.get(x)}function f(){for(const x in s){const M=s[x].deref();M!==void 0&&d(M)}}return{get:l,update:u,getWireframeAttribute:h,dispose:f}}function _g(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function d(p,h){i.drawElements(n,h,r,p*a),t.update(h,n,1)}function l(p,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,p*a,f),t.update(h,n,f))}function u(p,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,p,0,f);let M=0;for(let g=0;g<f;g++)M+=h[g];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=d,this.renderInstances=l,this.renderMultiDraw=u}function vg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Je("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Sg(i,e,t){const n=new WeakMap,s=new dt;function r(a,o,d){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==p){let O=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",O)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let A=0;f===!0&&(A=1),x===!0&&(A=2),M===!0&&(A=3);let y=o.attributes.position.count*A,C=1;y>e.maxTextureSize&&(C=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const T=new Float32Array(y*C*4*p),_=new pc(T,y,C,p);_.type=nn,_.needsUpdate=!0;const E=A*4;for(let R=0;R<p;R++){const D=g[R],k=m[R],W=b[R],P=y*C*4*R;for(let V=0;V<D.count;V++){const j=V*E;f===!0&&(s.fromBufferAttribute(D,V),T[P+j+0]=s.x,T[P+j+1]=s.y,T[P+j+2]=s.z,T[P+j+3]=0),x===!0&&(s.fromBufferAttribute(k,V),T[P+j+4]=s.x,T[P+j+5]=s.y,T[P+j+6]=s.z,T[P+j+7]=0),M===!0&&(s.fromBufferAttribute(W,V),T[P+j+8]=s.x,T[P+j+9]=s.y,T[P+j+10]=s.z,T[P+j+11]=W.itemSize===4?s.w:1)}}h={count:p,texture:_,size:new Ve(y,C)},n.set(o,h),o.addEventListener("dispose",O)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let M=0;M<l.length;M++)f+=l[M];const x=o.morphTargetsRelative?1:1-f;d.getUniforms().setValue(i,"morphTargetBaseInfluence",x),d.getUniforms().setValue(i,"morphTargetInfluences",l)}d.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Mg(i,e,t,n,s){let r=new WeakMap;function a(l){const u=s.render.frame,p=l.geometry,h=e.get(l,p);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",d)===!1&&l.addEventListener("dispose",d),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function d(l){const u=l.target;u.removeEventListener("dispose",d),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const bg={[ql]:"LINEAR_TONE_MAPPING",[$l]:"REINHARD_TONE_MAPPING",[Yl]:"CINEON_TONE_MAPPING",[Ia]:"ACES_FILMIC_TONE_MAPPING",[Zl]:"AGX_TONE_MAPPING",[Jl]:"NEUTRAL_TONE_MAPPING",[Kl]:"CUSTOM_TONE_MAPPING"};function yg(i,e,t,n,s,r){const a=new rn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,d=null,l=null;const u=new ln;u.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Vt([0,2,0,0,2,0],2));const p=new of({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Jt(u,p),f=new Rc(-1,1,1,-1,0,1);let x=null,M=null,g=!1,m,b=null,A=[],y=!1;this.setSize=function(C,T){a.setSize(C,T),o!==null&&o.setSize(C,T),d!==null&&d.setSize(C,T);for(let _=0;_<A.length;_++){const E=A[_];E.setSize&&E.setSize(C,T)}},this.setEffects=function(C){A=C,y=A.length>0&&A[0].isRenderPass===!0;const T=a.width,_=a.height;A.length>0&&o===null&&(o=new rn(T,_,{type:on,depthBuffer:!1,stencilBuffer:!1}),d=new rn(T,_,{type:on,depthBuffer:!1,stencilBuffer:!1}));const E=s===!0&&A.some(O=>O.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&l===null&&(l=new _i(T,_),r===!0&&(l.format=Ln,l.type=xi)),a.dispose(),a.depthTexture=E?l:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let O=0;O<A.length;O++){const R=A[O];R.setSize&&R.setSize(T,_),E&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(C,T){if(g||C.toneMapping===xn&&A.length===0)return!1;if(b=T,T!==null){const _=T.width,E=T.height;(a.width!==_||a.height!==E)&&this.setSize(_,E)}return y===!1&&C.setRenderTarget(a),m=C.toneMapping,C.toneMapping=xn,!0},this.hasRenderPass=function(){return y},this.end=function(C,T){C.toneMapping=m,g=!0;let _=a,E=o;for(let O=0;O<A.length;O++){const R=A[O];R.enabled!==!1&&(R.render(C,E,_,T),R.needsSwap!==!1&&(_=E,E=E===o?d:o))}if(x!==C.outputColorSpace||M!==C.toneMapping){x=C.outputColorSpace,M=C.toneMapping,p.defines={},Xe.getTransfer(x)===et&&(p.defines.SRGB_TRANSFER="");const O=bg[M];O&&(p.defines[O]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=_.texture,C.setRenderTarget(b),C.render(h,f),b=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),d!==null&&d.dispose(),u.dispose(),p.dispose()}}const Ic=new Ct,Dc=new _i(1,1),Uc=new yc(1),Oc=new pc,Fc=new Uh,Bc=new bc,_l=[],vl=[],Sl=new Float32Array(16),Ml=new Float32Array(9),bl=new Float32Array(4);function bi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=_l[s];if(r===void 0&&(r=new Float32Array(s),_l[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function er(i,e){let t=vl[e];t===void 0&&(t=new Int32Array(e),vl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Eg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2fv(this.addr,e),xt(t,e)}}function Ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;i.uniform3fv(this.addr,e),xt(t,e)}}function Tg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4fv(this.addr,e),xt(t,e)}}function Rg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(gt(t,n))return;bl.set(n),i.uniformMatrix2fv(this.addr,!1,bl),xt(t,n)}}function Cg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(gt(t,n))return;Ml.set(n),i.uniformMatrix3fv(this.addr,!1,Ml),xt(t,n)}}function Ng(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(gt(t,n))return;Sl.set(n),i.uniformMatrix4fv(this.addr,!1,Sl),xt(t,n)}}function Pg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2iv(this.addr,e),xt(t,e)}}function Ig(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3iv(this.addr,e),xt(t,e)}}function Dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4iv(this.addr,e),xt(t,e)}}function Ug(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2uiv(this.addr,e),xt(t,e)}}function Fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3uiv(this.addr,e),xt(t,e)}}function Bg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4uiv(this.addr,e),xt(t,e)}}function tr(i){return i.version===0&&(i.compareFunction=cc,i.needsUpdate=!0),i}function kg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=tr(Dc):r=Ic,t.setTexture2D(e||r,s)}function Hg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Fc,s)}function Gg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=tr(Uc):r=Bc,t.setTextureCube(e||r,s)}function zg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Oc,s)}function Vg(i){switch(i){case 5126:return Eg;case 35664:return wg;case 35665:return Ag;case 35666:return Tg;case 35674:return Rg;case 35675:return Cg;case 35676:return Ng;case 5124:case 35670:return Pg;case 35667:case 35671:return Lg;case 35668:case 35672:return Ig;case 35669:case 35673:return Dg;case 5125:return Ug;case 36294:return Og;case 36295:return Fg;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return kg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return zg}}function Wg(i,e){i.uniform1fv(this.addr,e)}function jg(i,e){const t=bi(e,this.size,2);i.uniform2fv(this.addr,t)}function Xg(i,e){const t=bi(e,this.size,3);i.uniform3fv(this.addr,t)}function qg(i,e){const t=bi(e,this.size,4);i.uniform4fv(this.addr,t)}function $g(i,e){const t=bi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Yg(i,e){const t=bi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Kg(i,e){const t=bi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Zg(i,e){i.uniform1iv(this.addr,e)}function Jg(i,e){i.uniform2iv(this.addr,e)}function Qg(i,e){i.uniform3iv(this.addr,e)}function e0(i,e){i.uniform4iv(this.addr,e)}function t0(i,e){i.uniform1uiv(this.addr,e)}function n0(i,e){i.uniform2uiv(this.addr,e)}function i0(i,e){i.uniform3uiv(this.addr,e)}function s0(i,e){i.uniform4uiv(this.addr,e)}function r0(i,e,t){const n=this.cache,s=e.length,r=er(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=tr(Dc):a=Ic;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function a0(i,e,t){const n=this.cache,s=e.length,r=er(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Fc,r[a])}function o0(i,e,t){const n=this.cache,s=e.length,r=er(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=tr(Uc):a=Bc;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function l0(i,e,t){const n=this.cache,s=e.length,r=er(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Oc,r[a])}function c0(i){switch(i){case 5126:return Wg;case 35664:return jg;case 35665:return Xg;case 35666:return qg;case 35674:return $g;case 35675:return Yg;case 35676:return Kg;case 5124:case 35670:return Zg;case 35667:case 35671:return Jg;case 35668:case 35672:return Qg;case 35669:case 35673:return e0;case 5125:return t0;case 36294:return n0;case 36295:return i0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return r0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return o0;case 36289:case 36303:case 36311:case 36292:return l0}}class d0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Vg(t.type)}}class u0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=c0(t.type)}}class h0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ir=/(\w+)(\])?(\[|\.)?/g;function yl(i,e){i.seq.push(e),i.map[e.id]=e}function f0(i,e,t){const n=i.name,s=n.length;for(Ir.lastIndex=0;;){const r=Ir.exec(n),a=Ir.lastIndex;let o=r[1];const d=r[2]==="]",l=r[3];if(d&&(o=o|0),l===void 0||l==="["&&a+2===s){yl(t,l===void 0?new d0(o,i,e):new u0(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new h0(o),yl(t,p)),t=p}}}class Os{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),d=e.getUniformLocation(t,o.name);f0(o,d,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],d=n[o.id];d.needsUpdate!==!1&&o.setValue(e,d.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function El(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const p0=37297;let m0=0;function g0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const wl=new De;function x0(i){Xe._getMatrix(wl,Xe.workingColorSpace,i);const e=`mat3( ${wl.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(i)){case Ws:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Al(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+g0(i.getShaderSource(e),o)}else return r}function _0(i,e){const t=x0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const v0={[ql]:"Linear",[$l]:"Reinhard",[Yl]:"Cineon",[Ia]:"ACESFilmic",[Zl]:"AgX",[Jl]:"Neutral",[Kl]:"Custom"};function S0(i,e){const t=v0[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rs=new G;function M0(){Xe.getLuminanceCoefficients(Rs);const i=Rs.x.toFixed(4),e=Rs.y.toFixed(4),t=Rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ui).join(`
`)}function y0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function E0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ui(i){return i!==""}function Tl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Rl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const w0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Aa(i){return i.replace(w0,A0)}function A0(i,e){const t=ke[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Aa(t)}const T0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cl(i){return i.replace(T0,R0)}function R0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const C0={[Ns]:"SHADOWMAP_TYPE_PCF",[Ii]:"SHADOWMAP_TYPE_VSM"};function N0(i){return C0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const P0={[Xi]:"ENVMAP_MODE_REFRACTION"};function L0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":P0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const I0={[La]:"ENVMAP_BLENDING_MULTIPLY",[Qu]:"ENVMAP_BLENDING_MIX",[eh]:"ENVMAP_BLENDING_ADD"};function D0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":I0[i.combine]||"ENVMAP_BLENDING_NONE"}function U0(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const d=N0(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=L0(t),p=D0(t),h=b0(t),f=y0(r),x=s.createProgram();let M,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ui).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ui).join(`
`),g.length>0&&(g+=`
`)):(M=[Nl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ui).join(`
`),g=[Nl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xn?"#define TONE_MAPPING":"",t.toneMapping!==xn?ke.tonemapping_pars_fragment:"",t.toneMapping!==xn?S0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,_0("linearToOutputTexel",t.outputColorSpace),M0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ui).join(`
`)),a=Aa(a),a=Tl(a,t),a=Rl(a,t),o=Aa(o),o=Tl(o,t),o=Rl(o,t),a=Cl(a),o=Cl(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,M=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",t.glslVersion===ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const b=m+M+a,A=m+g+o,y=El(s,s.VERTEX_SHADER,b),C=El(s,s.FRAGMENT_SHADER,A);s.attachShader(x,y),s.attachShader(x,C),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(R){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(x)||"",k=s.getShaderInfoLog(y)||"",W=s.getShaderInfoLog(C)||"",P=D.trim(),V=k.trim(),j=W.trim();let U=!0,Z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,y,C);else{const z=Al(s,y,"vertex"),K=Al(s,C,"fragment");Je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+z+`
`+K)}else P!==""?Pe("WebGLProgram: Program Info Log:",P):(V===""||j==="")&&(Z=!1);Z&&(R.diagnostics={runnable:U,programLog:P,vertexShader:{log:V,prefix:M},fragmentShader:{log:j,prefix:g}})}s.deleteShader(y),s.deleteShader(C),_=new Os(s,x),E=E0(s,x)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(x,p0)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=m0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=C,this}let O0=0;class F0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new B0(e),t.set(e,n)),n}}class B0{constructor(e){this.id=O0++,this.code=e,this.usedTimes=0}}function k0(i){return i===Xn||i===Hs||i===Gs}function H0(i,e,t,n,s,r){const a=new mc,o=new F0,d=new Set,l=[],u=new Map,p=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return d.add(_),_===0?"uv":`uv${_}`}function x(_,E,O,R,D,k){const W=R.fog,P=D.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,j=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,U=e.get(_.envMap||V,j),Z=h[_.type];let z=n.precision;_.precision!==null&&(z=n.getMaxPrecision(_.precision),z!==_.precision&&Pe("WebGLProgram.getParameters:",_.precision,"not supported, using",z,"instead."));const K=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,te=K!==void 0?K.length:0;let ve=0;P.morphAttributes.position!==void 0&&(ve=1),P.morphAttributes.normal!==void 0&&(ve=2),P.morphAttributes.color!==void 0&&(ve=3);let Ce,$,fe,_e;if(Z){const me=tn[Z];Ce=me.vertexShader,$=me.fragmentShader}else{Ce=_.vertexShader,$=_.fragmentShader;const me=o.getVertexShaderStage(_),Qe=o.getFragmentShaderStage(_);o.update(_,me,Qe),fe=me.id,_e=Qe.id}const Ae=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),Le=D.isInstancedMesh===!0,He=D.isBatchedMesh===!0,Ee=!!_.map,qe=!!_.matcap,Ke=!!U,Oe=Ke&&U.isPMREMTexture===!0,ot=!!_.aoMap,at=!!_.lightMap,mt=!!_.bumpMap&&_.wireframe===!1,tt=!!_.normalMap,Nt=!!_.displacementMap,ut=!!_.emissiveMap,Pt=!!_.metalnessMap,Lt=!!_.roughnessMap,ht=_.anisotropy>0,I=_.clearcoat>0,_t=_.diffuseRoughness>0,nt=_.dispersion>0,$e=_.retroreflectivity>0,de=_.iridescence>0,lt=_.sheen>0,Te=_.transmission>0,Ne=ht&&!!_.anisotropyMap,w=I&&!!_.clearcoatMap,v=I&&!!_.clearcoatNormalMap,B=I&&!!_.clearcoatRoughnessMap,ne=_t&&!!_.diffuseRoughnessMap,ee=de&&!!_.iridescenceMap,re=de&&!!_.iridescenceThicknessMap,ue=lt&&!!_.sheenColorMap,Y=lt&&!!_.sheenRoughnessMap,J=!!_.specularMap,oe=!!_.specularColorMap,N=!!_.specularIntensityMap,Q=Te&&!!_.transmissionMap,q=Te&&!!_.thicknessMap,le=!!_.gradientMap,se=!!_.alphaMap,ae=_.alphaTest>0,we=!!_.alphaHash,Be=!!_.extensions;let ie=xn;_.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(ie=i.toneMapping);const Re=Oe?U.isCompressedCubeTexture?U.image[0].mipmaps:U.mipmaps:null,Fe={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:Ce,fragmentShader:$,defines:_.defines,customVertexShaderID:fe,customFragmentShaderID:_e,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:z,batching:He,batchingColor:He&&D._colorsTexture!==null,instancing:Le,instancingColor:Le&&D.instanceColor!==null,instancingMorph:Le&&D.morphTexture!==null,outputColorSpace:Ae===null?i.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ee,matcap:qe,envMap:Ke,envMapMode:Ke&&U.mapping,envMapPMREM:Oe,envMapMaxLod:Oe?Re.length-1:null,envMapSize:Oe?Re[0].width:null,aoMap:ot,lightMap:at,bumpMap:mt,normalMap:tt,displacementMap:Nt,emissiveMap:ut,normalMapObjectSpace:tt&&_.normalMapType===ih,normalMapTangentSpace:tt&&_.normalMapType===zs,packedNormalMap:tt&&_.normalMapType===zs&&k0(_.normalMap.format),metalnessMap:Pt,roughnessMap:Lt,anisotropy:ht,anisotropyMap:Ne,clearcoat:I,clearcoatMap:w,clearcoatNormalMap:v,clearcoatRoughnessMap:B,diffuseRoughness:_t,diffuseRoughnessMap:ne,dispersion:nt,retroreflection:$e,iridescence:de,iridescenceMap:ee,iridescenceThicknessMap:re,sheen:lt,sheenColorMap:ue,sheenRoughnessMap:Y,specularMap:J,specularColorMap:oe,specularIntensityMap:N,transmission:Te,transmissionMap:Q,thicknessMap:q,gradientMap:le,opaque:_.transparent===!1&&_.blending===Bi&&_.alphaToCoverage===!1,alphaMap:se,alphaTest:ae,alphaHash:we,combine:_.combine,mapUv:Ee&&f(_.map.channel),aoMapUv:ot&&f(_.aoMap.channel),lightMapUv:at&&f(_.lightMap.channel),bumpMapUv:mt&&f(_.bumpMap.channel),normalMapUv:tt&&f(_.normalMap.channel),displacementMapUv:Nt&&f(_.displacementMap.channel),emissiveMapUv:ut&&f(_.emissiveMap.channel),metalnessMapUv:Pt&&f(_.metalnessMap.channel),roughnessMapUv:Lt&&f(_.roughnessMap.channel),anisotropyMapUv:Ne&&f(_.anisotropyMap.channel),clearcoatMapUv:w&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ne&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:re&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Y&&f(_.sheenRoughnessMap.channel),specularMapUv:J&&f(_.specularMap.channel),specularColorMapUv:oe&&f(_.specularColorMap.channel),specularIntensityMapUv:N&&f(_.specularIntensityMap.channel),transmissionMapUv:Q&&f(_.transmissionMap.channel),thicknessMapUv:q&&f(_.thicknessMap.channel),alphaMapUv:se&&f(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(tt||ht),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(Ee||se),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&tt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:pe,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ve,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:k.filter(me=>me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:Ee&&_.map.isVideoTexture===!0&&Xe.getTransfer(_.map.colorSpace)===et,decodeVideoTextureEmissive:ut&&_.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(_.emissiveMap.colorSpace)===et,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===mn,flipSided:_.side===Ut,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Be&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&_.extensions.multiDraw===!0||He)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Fe.vertexUv1s=d.has(1),Fe.vertexUv2s=d.has(2),Fe.vertexUv3s=d.has(3),d.clear(),Fe}function M(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const O in _.defines)E.push(O),E.push(_.defines[O]);return _.isRawShaderMaterial===!1&&(g(E,_),m(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function g(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapPMREM),_.push(E.envMapMaxLod),_.push(E.envMapSize),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.diffuseRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.numLightProbeGrids),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function m(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function b(_){const E=h[_.type];let O;if(E){const R=tn[E];O=sf.clone(R.uniforms)}else O=_.uniforms;return O}function A(_,E){let O=u.get(E);return O!==void 0?++O.usedTimes:(O=new U0(i,E,_,s),l.push(O),u.set(E,O)),O}function y(_){if(--_.usedTimes===0){const E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function C(_){o.remove(_)}function T(){o.dispose()}return{getParameters:x,getProgramCacheKey:M,getUniforms:b,acquireProgram:A,releaseProgram:y,releaseShaderCache:C,programs:l,dispose:T}}function G0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,d){i.get(a)[o]=d}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function z0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Pl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ll(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,x,M,g,m){let b=i[e];return b===void 0?(b={id:h.id,object:h,geometry:f,material:x,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:g,group:m},i[e]=b):(b.id=h.id,b.object=h,b.geometry=f,b.material=x,b.materialVariant=a(h),b.groupOrder=M,b.renderOrder=h.renderOrder,b.z=g,b.group=m),e++,b}function d(h,f,x,M,g,m,b){b.reversedDepth===!0&&(g=-g);const A=o(h,f,x,M,g,m);x.transmission>0?n.push(A):x.transparent===!0?s.push(A):t.push(A)}function l(h,f,x,M,g,m){const b=o(h,f,x,M,g,m);x.transmission>0?n.unshift(b):x.transparent===!0?s.unshift(b):t.unshift(b)}function u(h,f){t.length>1&&t.sort(h||z0),n.length>1&&n.sort(f||Pl),s.length>1&&s.sort(f||Pl)}function p(){for(let h=e,f=i.length;h<f;h++){const x=i[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:d,unshift:l,finish:p,sort:u}}function V0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Ll,i.set(n,[a])):s>=r.length?(a=new Ll,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function W0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new Ge};break;case"SpotLight":t={position:new G,direction:new G,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function j0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let X0=0;function q0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $0(i){const e=new W0,t=j0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new G);const s=new G,r=new rt,a=new rt;function o(l){let u=0,p=0,h=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let f=0,x=0,M=0,g=0,m=0,b=0,A=0,y=0,C=0,T=0,_=0,E=0,O=0,R=0;l.sort(q0);for(let k=0,W=l.length;k<W;k++){const P=l[k],V=P.color,j=P.intensity,U=P.distance;let Z=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Xn?Z=P.shadow.map.texture:Z=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=V.r*j,p+=V.g*j,h+=V.b*j;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],j);R++}else if(P.isSunLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,te=t.get(P);te.shadowIntensity=K.intensity,te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[x]=te,n.sunShadowMap[x]=Z;const ve=K.getViewportCount();for(let Ce=0;Ce<ve;Ce++)n.sunShadowMatrix[M+Ce]=K.getMatrix(Ce),n.sunShadowCascade[M+Ce]=K._cascadeData[Ce];M+=ve,x++}n.sun[f]=z,f++}else if(P.isDirectionalLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,te=t.get(P);te.shadowIntensity=K.intensity,te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,n.directionalShadow[g]=te,n.directionalShadowMap[g]=Z,n.directionalShadowMatrix[g]=P.shadow.matrix,C++}n.directional[g]=z,g++}else if(P.isSpotLight){const z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(V).multiplyScalar(j),z.distance=U,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[b]=z;const K=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,K.updateMatrices(P),P.castShadow&&O++),n.spotLightMatrix[b]=K.matrix,P.castShadow){const te=t.get(P);te.shadowIntensity=K.intensity,te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,n.spotShadow[b]=te,n.spotShadowMap[b]=Z,_++}b++}else if(P.isRectAreaLight){const z=e.get(P);z.color.copy(V).multiplyScalar(j),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[A]=z,A++}else if(P.isPointLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const K=P.shadow,te=t.get(P);te.shadowIntensity=K.intensity,te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,te.shadowCameraNear=K.camera.near,te.shadowCameraFar=K.camera.far,n.pointShadow[m]=te,n.pointShadowMap[m]=Z,n.pointShadowMatrix[m]=P.shadow.matrix,T++}n.point[m]=z,m++}else if(P.isHemisphereLight){const z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(j),z.groundColor.copy(P.groundColor).multiplyScalar(j),n.hemi[y]=z,y++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=h;const D=n.hash;(D.sunLength!==f||D.directionalLength!==g||D.pointLength!==m||D.spotLength!==b||D.rectAreaLength!==A||D.hemiLength!==y||D.numSunShadows!==x||D.numDirectionalShadows!==C||D.numPointShadows!==T||D.numSpotShadows!==_||D.numSpotMaps!==E||D.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=g,n.spot.length=b,n.rectArea.length=A,n.point.length=m,n.hemi.length=y,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+E-O,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=R,D.sunLength=f,D.directionalLength=g,D.pointLength=m,D.spotLength=b,D.rectAreaLength=A,D.hemiLength=y,D.numSunShadows=x,D.numDirectionalShadows=C,D.numPointShadows=T,D.numSpotShadows=_,D.numSpotMaps=E,D.numLightProbes=R,n.version=X0++)}function d(l,u){let p=0,h=0,f=0,x=0,M=0,g=0;const m=u.matrixWorldInverse;for(let b=0,A=l.length;b<A;b++){const y=l[b];if(y.isSunLight){const C=n.sun[p];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(m),p++}else if(y.isDirectionalLight){const C=n.directional[h];C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),h++}else if(y.isSpotLight){const C=n.spot[x];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),x++}else if(y.isRectAreaLight){const C=n.rectArea[M];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){const C=n.point[f];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const C=n.hemi[g];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(m),g++}}}return{setup:o,setupView:d,state:n}}function Il(i){const e=new $0(i),t=[],n=[],s=[];function r(p){u.camera=p,t.length=0,n.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):t.push(p)}function o(p){n.push(p)}function d(){e.setup(t),s.sort((p,h)=>p.priority-h.priority||p.id-h.id)}function l(p){e.setupView(t,p)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:d,setupLightsView:l,pushLight:a,pushShadow:o}}function Y0(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Il(i),e.set(s,[o])):r>=a.length?(o=new Il(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const K0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,J0=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],Q0=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Dl=new rt,Li=new G,Dr=new G;function ex(i,e,t){let n=new Zi;const s=new Ve,r=new Ve,a=new dt,o=new df,d=new uf,l={},u=t.maxTextureSize,p={[jn]:Ut,[Ut]:jn,[mn]:mn},h=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:K0,fragmentShader:Z0}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const x=new ln;x.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Jt(x,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ns;let m=this.type;this.render=function(T,_,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Du&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ns);const O=i.getRenderTarget(),R=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),k=i.state;k.setBlending(pi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const W=m!==this.type;W&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(V=>V.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,V=T.length;P<V;P++){const j=T[P],U=j.shadow;if(U===void 0){Pe("WebGLShadowMap:",j,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const Z=U.getFrameExtents();s.multiply(Z),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Z.x),s.x=r.x*Z.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Z.y),s.y=r.y*Z.y,U.mapSize.y=r.y));const z=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=z,U.map===null||W===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Ii){if(j.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new rn(s.x,s.y,{format:Xn,type:on,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),U.map.texture.name=j.name+".shadowMap",U.map.depthTexture=new _i(s.x,s.y,nn),U.map.depthTexture.name=j.name+".shadowMapDepth",U.map.depthTexture.format=Dn,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=yt,U.map.depthTexture.magFilter=yt}else j.isPointLight?(U.map=new ja(s.x),U.map.depthTexture=new yc(s.x,an)):(U.map=new rn(s.x,s.y),U.map.depthTexture=new _i(s.x,s.y,an)),U.map.depthTexture.name=j.name+".shadowMap",U.map.depthTexture.format=Dn,this.type===Ns?(U.map.depthTexture.compareFunction=z?lc:oc,U.map.depthTexture.minFilter=Bt,U.map.depthTexture.magFilter=Bt):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=yt,U.map.depthTexture.magFilter=yt);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==s.x||U.map.height!==s.y)&&U.map.setSize(s.x,s.y);const K=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();j.isPointLight!==!0&&U.updateMatrices(j,E);const te=U.camera.layers.mask&4294967294?U.camera.layers:E.layers;for(let ve=0;ve<K;ve++){const Ce=U.getCamera(ve);if(j.isPointLight){const $=U.camera,fe=U.matrix,_e=j.distance||$.far;_e!==$.far&&($.far=_e,$.updateProjectionMatrix()),Li.setFromMatrixPosition(j.matrixWorld),$.position.copy(Li),Dr.copy($.position),Dr.add(J0[ve]),$.up.copy(Q0[ve]),$.lookAt(Dr),$.updateMatrixWorld(),fe.makeTranslation(-Li.x,-Li.y,-Li.z),Dl.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Dl,$.coordinateSystem,$.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,ve),i.clear();else{ve===0&&(i.setRenderTarget(U.map),i.clear());const $=U.getViewport(ve);a.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),k.viewport(a)}n=U.getFrustum(ve),y(_,E,Ce,j,te,this.type)}U.isPointLightShadow!==!0&&this.type===Ii&&b(U,E),U.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(O,R,D)};function b(T,_){const E=e.update(M);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new rn(s.x,s.y,{format:Xn,type:on}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(_,null,E,h,M,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(_,null,E,f,M,null)}function A(T,_,E,O){let R=null;const D=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)R=D;else if(R=E.isPointLight===!0?d:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const k=R.uuid,W=_.uuid;let P=l[k];P===void 0&&(P={},l[k]=P);let V=P[W];V===void 0&&(V=R.clone(),P[W]=V,_.addEventListener("dispose",C)),R=V}if(R.visible=_.visible,R.wireframe=_.wireframe,O===Ii?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:p[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,E.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const k=i.properties.get(R);k.light=E}return R}function y(T,_,E,O,R,D){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===Ii)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);const P=e.update(T),V=T.material;if(Array.isArray(V)){const j=P.groups;for(let U=0,Z=j.length;U<Z;U++){const z=j[U],K=V[z.materialIndex];if(K&&K.visible){const te=A(T,K,O,D);T.onBeforeShadow(i,T,_,E,P,te,z),i.renderBufferDirect(E,null,P,te,T,z),T.onAfterShadow(i,T,_,E,P,te,z)}}}else if(V.visible){const j=A(T,V,O,D);T.onBeforeShadow(i,T,_,E,P,j,null),i.renderBufferDirect(E,null,P,j,T,null),T.onAfterShadow(i,T,_,E,P,j,null)}}const W=T.children;for(let P=0,V=W.length;P<V;P++)y(W[P],_,E,O,R,D)}function C(T){T.target.removeEventListener("dispose",C);for(const E in l){const O=l[E],R=T.target.uuid;R in O&&(O[R].dispose(),delete O[R])}}}function tx(i,e){function t(){let N=!1;const Q=new dt;let q=null;const le=new dt(0,0,0,0);return{setMask:function(se){q!==se&&!N&&(i.colorMask(se,se,se,se),q=se)},setLocked:function(se){N=se},setClear:function(se,ae,we,Be,ie){ie===!0&&(se*=Be,ae*=Be,we*=Be),Q.set(se,ae,we,Be),le.equals(Q)===!1&&(i.clearColor(se,ae,we,Be),le.copy(Q))},reset:function(){N=!1,q=null,le.set(-1,0,0,0)}}}function n(){let N=!1,Q=!1,q=null,le=null,se=null;return{setReversed:function(ae){if(Q!==ae){const we=e.get("EXT_clip_control");ae?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),Q=ae;const Be=se;se=null,this.setClear(Be)}},getReversed:function(){return Q},setTest:function(ae){ae?pe(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(ae){q!==ae&&!N&&(i.depthMask(ae),q=ae)},setFunc:function(ae){if(Q&&(ae=ph[ae]),le!==ae){switch(ae){case Hr:i.depthFunc(i.NEVER);break;case Gr:i.depthFunc(i.ALWAYS);break;case zr:i.depthFunc(i.LESS);break;case ji:i.depthFunc(i.LEQUAL);break;case Vr:i.depthFunc(i.EQUAL);break;case Wr:i.depthFunc(i.GEQUAL);break;case jr:i.depthFunc(i.GREATER);break;case Xr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=ae}},setLocked:function(ae){N=ae},setClear:function(ae){se!==ae&&(se=ae,Q&&(ae=1-ae),i.clearDepth(ae))},reset:function(){N=!1,q=null,le=null,se=null,Q=!1}}}function s(){let N=!1,Q=null,q=null,le=null,se=null,ae=null,we=null,Be=null,ie=null;return{setTest:function(Re){N||(Re?pe(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(Re){Q!==Re&&!N&&(i.stencilMask(Re),Q=Re)},setFunc:function(Re,Fe,me){(q!==Re||le!==Fe||se!==me)&&(i.stencilFunc(Re,Fe,me),q=Re,le=Fe,se=me)},setOp:function(Re,Fe,me){(ae!==Re||we!==Fe||Be!==me)&&(i.stencilOp(Re,Fe,me),ae=Re,we=Fe,Be=me)},setLocked:function(Re){N=Re},setClear:function(Re){ie!==Re&&(i.clearStencil(Re),ie=Re)},reset:function(){N=!1,Q=null,q=null,le=null,se=null,ae=null,we=null,Be=null,ie=null}}}const r=new t,a=new n,o=new s;let d={};const l=new WeakMap;let u={},p={},h={},f=new WeakMap,x=[],M=null,g=!1,m=null,b=null,A=null,y=null,C=null,T=null,_=null,E=new Ge(0,0,0),O=0,R=!1,D=null,k=null,W=null,P=null,V=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,Z=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(z)[1]),U=Z>=1):z.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),U=Z>=2);let K=null,te={};const ve=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),$=new dt().fromArray(ve),fe=new dt().fromArray(Ce);function _e(N,Q,q,le){const se=new Uint8Array(4),ae=i.createTexture();i.bindTexture(N,ae),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let we=0;we<q;we++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(Q+we,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return ae}const Ae={};Ae[i.TEXTURE_2D]=_e(i.TEXTURE_2D,i.TEXTURE_2D,1),Ae[i.TEXTURE_CUBE_MAP]=_e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[i.TEXTURE_2D_ARRAY]=_e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ae[i.TEXTURE_3D]=_e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pe(i.DEPTH_TEST),a.setFunc(ji),mt(!1),tt(Oo),pe(i.CULL_FACE),ot(pi);function pe(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function Le(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function He(N,Q){return h[N]!==Q?(i.bindFramebuffer(N,Q),h[N]=Q,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Q),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function Ee(N,Q){let q=x,le=!1;if(N){q=f.get(Q),q===void 0&&(q=[],f.set(Q,q));const se=N.textures;if(q.length!==se.length||q[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,we=se.length;ae<we;ae++)q[ae]=i.COLOR_ATTACHMENT0+ae;q.length=se.length,le=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,le=!0);le&&i.drawBuffers(q)}function qe(N){return M!==N?(i.useProgram(N),M=N,!0):!1}const Ke={[di]:i.FUNC_ADD,[Ou]:i.FUNC_SUBTRACT,[Fu]:i.FUNC_REVERSE_SUBTRACT};Ke[Bu]=i.MIN,Ke[ku]=i.MAX;const Oe={[Hu]:i.ZERO,[Gu]:i.ONE,[zu]:i.SRC_COLOR,[jl]:i.SRC_ALPHA,[$u]:i.SRC_ALPHA_SATURATE,[Xu]:i.DST_COLOR,[Wu]:i.DST_ALPHA,[Vu]:i.ONE_MINUS_SRC_COLOR,[Xl]:i.ONE_MINUS_SRC_ALPHA,[qu]:i.ONE_MINUS_DST_COLOR,[ju]:i.ONE_MINUS_DST_ALPHA,[Yu]:i.CONSTANT_COLOR,[Ku]:i.ONE_MINUS_CONSTANT_COLOR,[Zu]:i.CONSTANT_ALPHA,[Ju]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(N,Q,q,le,se,ae,we,Be,ie,Re){if(N===pi){g===!0&&(Le(i.BLEND),g=!1);return}if(g===!1&&(pe(i.BLEND),g=!0),N!==Uu){if(N!==m||Re!==R){if((b!==di||C!==di)&&(i.blendEquation(i.FUNC_ADD),b=di,C=di),Re)switch(N){case Bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ui:i.blendFunc(i.ONE,i.ONE);break;case Fo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Je("WebGLState: Invalid blending: ",N);break}else switch(N){case Bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Fo:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bo:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",N);break}A=null,y=null,T=null,_=null,E.set(0,0,0),O=0,m=N,R=Re}return}se=se||Q,ae=ae||q,we=we||le,(Q!==b||se!==C)&&(i.blendEquationSeparate(Ke[Q],Ke[se]),b=Q,C=se),(q!==A||le!==y||ae!==T||we!==_)&&(i.blendFuncSeparate(Oe[q],Oe[le],Oe[ae],Oe[we]),A=q,y=le,T=ae,_=we),(Be.equals(E)===!1||ie!==O)&&(i.blendColor(Be.r,Be.g,Be.b,ie),E.copy(Be),O=ie),m=N,R=!1}function at(N,Q){N.side===mn?Le(i.CULL_FACE):pe(i.CULL_FACE);let q=N.side===Ut;Q&&(q=!q),mt(q),N.blending===Bi&&N.transparent===!1?ot(pi):ot(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const le=N.stencilWrite;o.setTest(le),le&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ut(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(N){D!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),D=N)}function tt(N){N!==Lu?(pe(i.CULL_FACE),N!==k&&(N===Oo?i.cullFace(i.BACK):N===Iu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),k=N}function Nt(N){N!==W&&(U&&i.lineWidth(N),W=N)}function ut(N,Q,q){N?(pe(i.POLYGON_OFFSET_FILL),(P!==Q||V!==q)&&(P=Q,V=q,a.getReversed()&&(Q=-Q,q=-q),i.polygonOffset(Q,q))):Le(i.POLYGON_OFFSET_FILL)}function Pt(N){N?pe(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function Lt(N){N===void 0&&(N=i.TEXTURE0+j-1),K!==N&&(i.activeTexture(N),K=N)}function ht(N,Q,q){q===void 0&&(K===null?q=i.TEXTURE0+j-1:q=K);let le=te[q];le===void 0&&(le={type:void 0,texture:void 0},te[q]=le),(le.type!==N||le.texture!==Q)&&(K!==q&&(i.activeTexture(q),K=q),i.bindTexture(N,Q||Ae[N]),le.type=N,le.texture=Q)}function I(){const N=te[K];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function _t(){try{i.compressedTexImage2D(...arguments)}catch(N){Je("WebGLState:",N)}}function nt(){try{i.compressedTexImage3D(...arguments)}catch(N){Je("WebGLState:",N)}}function $e(){try{i.texSubImage2D(...arguments)}catch(N){Je("WebGLState:",N)}}function de(){try{i.texSubImage3D(...arguments)}catch(N){Je("WebGLState:",N)}}function lt(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Je("WebGLState:",N)}}function Te(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Je("WebGLState:",N)}}function Ne(){try{i.texStorage2D(...arguments)}catch(N){Je("WebGLState:",N)}}function w(){try{i.texStorage3D(...arguments)}catch(N){Je("WebGLState:",N)}}function v(){try{i.texImage2D(...arguments)}catch(N){Je("WebGLState:",N)}}function B(){try{i.texImage3D(...arguments)}catch(N){Je("WebGLState:",N)}}function ne(N){return p[N]!==void 0?p[N]:i.getParameter(N)}function ee(N,Q){p[N]!==Q&&(i.pixelStorei(N,Q),p[N]=Q)}function re(N){$.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),$.copy(N))}function ue(N){fe.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),fe.copy(N))}function Y(N,Q){let q=l.get(Q);q===void 0&&(q=new WeakMap,l.set(Q,q));let le=q.get(N);le===void 0&&(le=i.getUniformBlockIndex(Q,N.name),i.uniformBlockBinding(Q,le,le),q.set(N,le))}function J(N,Q,q){const se=l.get(Q).get(N);d[se]!==q&&(i.bindBufferBase(i.UNIFORM_BUFFER,se,q),d[se]=q)}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},p={},K=null,te={},h={},d={},f=new WeakMap,x=[],M=null,g=!1,m=null,b=null,A=null,y=null,C=null,T=null,_=null,E=new Ge(0,0,0),O=0,R=!1,D=null,k=null,W=null,P=null,V=null,$.set(0,0,i.canvas.width,i.canvas.height),fe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:pe,disable:Le,bindFramebuffer:He,drawBuffers:Ee,useProgram:qe,setBlending:ot,setMaterial:at,setFlipSided:mt,setCullFace:tt,setLineWidth:Nt,setPolygonOffset:ut,setScissorTest:Pt,activeTexture:Lt,bindTexture:ht,unbindTexture:I,compressedTexImage2D:_t,compressedTexImage3D:nt,texImage2D:v,texImage3D:B,pixelStorei:ee,getParameter:ne,updateUBOMapping:Y,uniformBlockBinding:J,texStorage2D:Ne,texStorage3D:w,texSubImage2D:$e,texSubImage3D:de,compressedTexSubImage2D:lt,compressedTexSubImage3D:Te,scissor:re,viewport:ue,reset:oe}}function nx(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ve,u=new WeakMap,p=new Set;let h;const f=new WeakMap,x=new Set,M=new FinalizationRegistry(w=>x.delete(w));let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,v){return g?new OffscreenCanvas(w,v):Yi("canvas")}function b(w,v,B){let ne=1;const ee=Ne(w);if((ee.width>B||ee.height>B)&&(ne=B/Math.max(ee.width,ee.height)),ne<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const re=Math.floor(ne*ee.width),ue=Math.floor(ne*ee.height);h===void 0&&(h=m(re,ue));const Y=v?m(re,ue):h;return Y.width=re,Y.height=ue,Y.getContext("2d").drawImage(w,0,0,re,ue),Pe("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+re+"x"+ue+")."),Y}else return"data"in w&&Pe("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),w;return w}function A(w){return w.generateMipmaps}function y(w){i.generateMipmap(w)}function C(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(w,v,B,ne,ee,re=!1){if(w!==null){if(i[w]!==void 0)return i[w];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ue;ne&&(ue=e.get("EXT_texture_norm16"),ue||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=v;if(v===i.RED&&(B===i.FLOAT&&(Y=i.R32F),B===i.HALF_FLOAT&&(Y=i.R16F),B===i.UNSIGNED_BYTE&&(Y=i.R8),B===i.UNSIGNED_SHORT&&ue&&(Y=ue.R16_EXT),B===i.SHORT&&ue&&(Y=ue.R16_SNORM_EXT)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.R8UI),B===i.UNSIGNED_SHORT&&(Y=i.R16UI),B===i.UNSIGNED_INT&&(Y=i.R32UI),B===i.BYTE&&(Y=i.R8I),B===i.SHORT&&(Y=i.R16I),B===i.INT&&(Y=i.R32I)),v===i.RG&&(B===i.FLOAT&&(Y=i.RG32F),B===i.HALF_FLOAT&&(Y=i.RG16F),B===i.UNSIGNED_BYTE&&(Y=i.RG8),B===i.UNSIGNED_SHORT&&ue&&(Y=ue.RG16_EXT),B===i.SHORT&&ue&&(Y=ue.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RG8UI),B===i.UNSIGNED_SHORT&&(Y=i.RG16UI),B===i.UNSIGNED_INT&&(Y=i.RG32UI),B===i.BYTE&&(Y=i.RG8I),B===i.SHORT&&(Y=i.RG16I),B===i.INT&&(Y=i.RG32I)),v===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),B===i.UNSIGNED_INT&&(Y=i.RGB32UI),B===i.BYTE&&(Y=i.RGB8I),B===i.SHORT&&(Y=i.RGB16I),B===i.INT&&(Y=i.RGB32I)),v===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),B===i.UNSIGNED_INT&&(Y=i.RGBA32UI),B===i.BYTE&&(Y=i.RGBA8I),B===i.SHORT&&(Y=i.RGBA16I),B===i.INT&&(Y=i.RGBA32I)),v===i.RGB&&(B===i.UNSIGNED_SHORT&&ue&&(Y=ue.RGB16_EXT),B===i.SHORT&&ue&&(Y=ue.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),v===i.RGBA){const J=re?Ws:Xe.getTransfer(ee);B===i.FLOAT&&(Y=i.RGBA32F),B===i.HALF_FLOAT&&(Y=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Y=J===et?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ue&&(Y=ue.RGBA16_EXT),B===i.SHORT&&ue&&(Y=ue.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(w,v){let B;return w?v===null||v===an||v===xi?B=i.DEPTH24_STENCIL8:v===nn?B=i.DEPTH32F_STENCIL8:v===qi&&(B=i.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===an||v===xi?B=i.DEPTH_COMPONENT24:v===nn?B=i.DEPTH_COMPONENT32F:v===qi&&(B=i.DEPTH_COMPONENT16),B}function E(w,v){return A(w)===!0||w.isFramebufferTexture&&w.minFilter!==yt&&w.minFilter!==Bt?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function O(w){const v=new WeakRef(w);n.get(w).__ref=v,x.add(v),M.register(w,v,v)}function R(w){const v=n.get(w).__ref;v!==void 0&&(x.delete(v),M.unregister(v))}function D(w){W(w.target)}function k(w){P(w.target)}function W(w){w.removeEventListener("dispose",D),R(w),j(w),w.isVideoTexture&&u.delete(w),w.isHTMLTexture&&p.delete(w)}function P(w){w.removeEventListener("dispose",k),R(w),Z(w)}function V(){for(const w of x){const v=w.deref();v!==void 0&&(v.isRenderTarget===!0?P(v):W(v))}x.clear(),p.clear()}function j(w){const v=n.get(w);if(v.__webglInit===void 0)return;const B=w.source,ne=f.get(B);if(ne){const ee=ne[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&U(w),Object.keys(ne).length===0&&f.delete(B)}n.remove(w)}function U(w){const v=n.get(w);i.deleteTexture(v.__webglTexture);const B=w.source,ne=f.get(B);delete ne[v.__cacheKey],a.memory.textures--}function Z(w){const v=n.get(w);v.__depthDisposeCallback&&v.__depthDisposeCallback();const B=w.depthTexture;if(B&&B.renderTarget===w&&W(B),w.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(v.__webglFramebuffer[ee]))for(let re=0;re<v.__webglFramebuffer[ee].length;re++)i.deleteFramebuffer(v.__webglFramebuffer[ee][re]);else i.deleteFramebuffer(v.__webglFramebuffer[ee]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[ee])}else{if(Array.isArray(v.__webglFramebuffer))for(let ee=0;ee<v.__webglFramebuffer.length;ee++)i.deleteFramebuffer(v.__webglFramebuffer[ee]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ee=0;ee<v.__webglColorRenderbuffer.length;ee++)v.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[ee]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const ne=w.textures;for(let ee=0,re=ne.length;ee<re;ee++){const ue=n.get(ne[ee]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(ne[ee])}n.remove(w)}let z=0;function K(){z=0}function te(){return z}function ve(w){z=w}function Ce(){const w=z;return w>=s.maxTextures&&Pe("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,w}function $(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.mipmapsAutoUpdate),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function fe(w,v){const B=n.get(w);if(w.isVideoTexture&&lt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){const ne=w.image;if(ne===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{at(B,w,v);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function _e(w,v){const B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){at(B,w,v);return}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function Ae(w,v){const B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){at(B,w,v);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function pe(w,v){const B=n.get(w);if(w.version>0&&B.__version!==w.version){mt(B,w,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}const Le={[qr]:i.REPEAT,[gn]:i.CLAMP_TO_EDGE,[$r]:i.MIRRORED_REPEAT},He={[yt]:i.NEAREST,[th]:i.NEAREST_MIPMAP_NEAREST,[ss]:i.NEAREST_MIPMAP_LINEAR,[Bt]:i.LINEAR,[lr]:i.LINEAR_MIPMAP_NEAREST,[Pn]:i.LINEAR_MIPMAP_LINEAR},Ee={[rh]:i.NEVER,[cc]:i.ALWAYS,[ah]:i.LESS,[oc]:i.LEQUAL,[oh]:i.EQUAL,[lc]:i.GEQUAL,[lh]:i.GREATER,[ch]:i.NOTEQUAL};function qe(w,v){if(v.type===nn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Bt||v.magFilter===lr||v.magFilter===ss||v.magFilter===Pn||v.minFilter===Bt||v.minFilter===lr||v.minFilter===ss||v.minFilter===Pn)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Le[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Le[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Le[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,He[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,He[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ee[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===yt||v.minFilter!==ss&&v.minFilter!==Pn||v.type===nn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ke(w,v){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",D),O(v));const ne=v.source;let ee=f.get(ne);ee===void 0&&(ee={},f.set(ne,ee));const re=$(v);if(re!==w.__cacheKey){ee[re]===void 0&&(ee[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),ee[re].usedTimes++;const ue=ee[w.__cacheKey];ue!==void 0&&(ee[w.__cacheKey].usedTimes--,ue.usedTimes===0&&U(v)),w.__cacheKey=re,w.__webglTexture=ee[re].texture}return B}function Oe(w,v,B){return Math.floor(Math.floor(w/B)/v)}function ot(w,v,B,ne){const re=w.updateRanges;if(re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,B,ne,v.data);else{re.sort((N,Q)=>N.start-Q.start);let ue=0;for(let N=1;N<re.length;N++){const Q=re[ue],q=re[N],le=Q.start+Q.count,se=Oe(q.start,v.width,4),ae=Oe(Q.start,v.width,4);q.start<=le+1&&se===ae&&Oe(q.start+q.count-1,v.width,4)===se?Q.count=Math.max(Q.count,q.start+q.count-Q.start):(++ue,re[ue]=q)}re.length=ue+1;const Y=t.getParameter(i.UNPACK_ROW_LENGTH),J=t.getParameter(i.UNPACK_SKIP_PIXELS),oe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let N=0,Q=re.length;N<Q;N++){const q=re[N],le=Math.floor(q.start/4),se=Math.ceil(q.count/4),ae=le%v.width,we=Math.floor(le/v.width),Be=se,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,we),t.texSubImage2D(i.TEXTURE_2D,0,ae,we,Be,ie,B,ne,v.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,J),t.pixelStorei(i.UNPACK_SKIP_ROWS,oe)}}function at(w,v,B){let ne=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ne=i.TEXTURE_3D);const ee=Ke(w,v),re=v.source;t.bindTexture(ne,w.__webglTexture,i.TEXTURE0+B);const ue=n.get(re);if(re.version!==ue.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const ie=Xe.getPrimaries(Xe.workingColorSpace),Re=v.colorSpace===Nn?null:Xe.getPrimaries(v.colorSpace),Fe=v.colorSpace===Nn||ie===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let J=b(v.image,!1,s.maxTextureSize);J=Te(v,J);const oe=r.convert(v.format,v.colorSpace),N=r.convert(v.type);let Q=T(v.internalFormat,oe,N,v.normalized,v.colorSpace,v.isVideoTexture);qe(ne,v);let q;const le=v.mipmaps,se=v.isVideoTexture!==!0,ae=ue.__version===void 0||ee===!0,we=re.dataReady,Be=E(v,J);if(v.isDepthTexture)Q=_(v.format===Ln,v.type),ae&&(se?t.texStorage2D(i.TEXTURE_2D,1,Q,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,Q,J.width,J.height,0,oe,N,null));else if(v.isDataTexture)if(le.length>0){se&&ae&&t.texStorage2D(i.TEXTURE_2D,Be,Q,le[0].width,le[0].height);for(let ie=0,Re=le.length;ie<Re;ie++)q=le[ie],se?we&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,q.width,q.height,oe,N,q.data):t.texImage2D(i.TEXTURE_2D,ie,Q,q.width,q.height,0,oe,N,q.data);v.generateMipmaps=!1}else se?(ae&&t.texStorage2D(i.TEXTURE_2D,Be,Q,J.width,J.height),we&&ot(v,J,oe,N)):t.texImage2D(i.TEXTURE_2D,0,Q,J.width,J.height,0,oe,N,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){se&&ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,Q,le[0].width,le[0].height,J.depth);for(let ie=0,Re=le.length;ie<Re;ie++)if(q=le[ie],v.format!==sn)if(oe!==null)if(se){if(we)if(v.layerUpdates.size>0){const Fe=fl(q.width,q.height,v.format,v.type);for(const me of v.layerUpdates){const Qe=q.data.subarray(me*Fe/q.data.BYTES_PER_ELEMENT,(me+1)*Fe/q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,me,q.width,q.height,1,oe,Qe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,q.width,q.height,J.depth,oe,q.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,Q,q.width,q.height,J.depth,0,q.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?we&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,q.width,q.height,J.depth,oe,N,q.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,Q,q.width,q.height,J.depth,0,oe,N,q.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{se&&ae&&t.texStorage2D(i.TEXTURE_2D,Be,Q,le[0].width,le[0].height);for(let ie=0,Re=le.length;ie<Re;ie++)q=le[ie],v.format!==sn?oe!==null?se?we&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,q.width,q.height,oe,q.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,Q,q.width,q.height,0,q.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?we&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,q.width,q.height,oe,N,q.data):t.texImage2D(i.TEXTURE_2D,ie,Q,q.width,q.height,0,oe,N,q.data)}else if(v.isDataArrayTexture)if(se){if(ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,Q,J.width,J.height,J.depth),we)if(v.layerUpdates.size>0){const ie=fl(J.width,J.height,v.format,v.type);for(const Re of v.layerUpdates){const Fe=J.data.subarray(Re*ie/J.data.BYTES_PER_ELEMENT,(Re+1)*ie/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Re,J.width,J.height,1,oe,N,Fe)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,oe,N,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,J.width,J.height,J.depth,0,oe,N,J.data);else if(v.isData3DTexture)se?(ae&&t.texStorage3D(i.TEXTURE_3D,Be,Q,J.width,J.height,J.depth),we&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,oe,N,J.data)):t.texImage3D(i.TEXTURE_3D,0,Q,J.width,J.height,J.depth,0,oe,N,J.data);else if(v.isFramebufferTexture){if(ae)if(se)t.texStorage2D(i.TEXTURE_2D,Be,Q,J.width,J.height);else{let ie=J.width,Re=J.height;for(let Fe=0;Fe<Be;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,Q,ie,Re,0,oe,N,null),ie>>=1,Re>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),J.parentNode!==ie){ie.appendChild(J),p.add(v),ie.onpaint=Re=>{const Fe=Re.changedElements;for(const me of p)Fe.includes(me.image)&&(me.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{const Fe=i.RGBA,me=i.RGBA,Qe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Fe,me,Qe,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(le.length>0){if(se&&ae){const ie=Ne(le[0]);t.texStorage2D(i.TEXTURE_2D,Be,Q,ie.width,ie.height)}for(let ie=0,Re=le.length;ie<Re;ie++)q=le[ie],se?we&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,oe,N,q):t.texImage2D(i.TEXTURE_2D,ie,Q,oe,N,q);v.generateMipmaps=!1}else if(se){if(ae){const ie=Ne(J);t.texStorage2D(i.TEXTURE_2D,Be,Q,ie.width,ie.height)}we&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,N,J)}else t.texImage2D(i.TEXTURE_2D,0,Q,oe,N,J);A(v)&&v.mipmapsAutoUpdate===!0&&y(ne),ue.__version=re.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function mt(w,v,B){if(v.image.length!==6)return;const ne=Ke(w,v),ee=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);const re=n.get(ee);if(ee.version!==re.__version||ne===!0){t.activeTexture(i.TEXTURE0+B);const ue=Xe.getPrimaries(Xe.workingColorSpace),Y=v.colorSpace===Nn?null:Xe.getPrimaries(v.colorSpace),J=v.colorSpace===Nn||ue===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const oe=v.isCompressedTexture||v.image[0].isCompressedTexture,N=v.image[0]&&v.image[0].isDataTexture,Q=[];for(let me=0;me<6;me++)!oe&&!N?Q[me]=b(v.image[me],!0,s.maxCubemapSize):Q[me]=N?v.image[me].image:v.image[me],Q[me]=Te(v,Q[me]);const q=Q[0],le=r.convert(v.format,v.colorSpace),se=r.convert(v.type);let ae=T(v.internalFormat,le,se,v.normalized,v.colorSpace);const we=v.isVideoTexture!==!0,Be=re.__version===void 0||ne===!0,ie=ee.dataReady;let Re=E(v,q);qe(i.TEXTURE_CUBE_MAP,v);let Fe;if(v.isDepthTexture){if(ae=_(v.format===Ln,v.type),Be)if(we)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ae,q.width,q.height);else for(let me=0;me<6;me++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ae,q.width,q.height,0,le,se,null)}else if(oe){we&&Be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,ae,q.width,q.height);for(let me=0;me<6;me++){Fe=Q[me].mipmaps;for(let Qe=0;Qe<Fe.length;Qe++){const vt=Fe[Qe];v.format!==sn?le!==null?we?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe,0,0,vt.width,vt.height,le,vt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe,ae,vt.width,vt.height,0,vt.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe,0,0,vt.width,vt.height,le,se,vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe,ae,vt.width,vt.height,0,le,se,vt.data)}}}else{if(Fe=v.mipmaps,we&&Be){Fe.length>0&&Re++;const me=Ne(Q[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,ae,me.width,me.height)}for(let me=0;me<6;me++)if(N){we?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Q[me].width,Q[me].height,le,se,Q[me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ae,Q[me].width,Q[me].height,0,le,se,Q[me].data);for(let Qe=0;Qe<Fe.length;Qe++){const Sn=Fe[Qe].image[me].image;we?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe+1,0,0,Sn.width,Sn.height,le,se,Sn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe+1,ae,Sn.width,Sn.height,0,le,se,Sn.data)}}else{we?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,le,se,Q[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ae,le,se,Q[me]);for(let Qe=0;Qe<Fe.length;Qe++){const vt=Fe[Qe];we?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe+1,0,0,le,se,vt.image[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe+1,ae,le,se,vt.image[me])}}}A(v)&&v.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),re.__version=ee.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function tt(w,v,B,ne,ee,re){const ue=r.convert(B.format,B.colorSpace),Y=r.convert(B.type),J=T(B.internalFormat,ue,Y,B.normalized,B.colorSpace),oe=n.get(v),N=n.get(B);if(N.__renderTarget=v,!oe.__hasExternalTextures){const Q=Math.max(1,v.width>>re),q=Math.max(1,v.height>>re);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,re,J,Q,q,v.depth,0,ue,Y,null):t.texImage2D(ee,re,J,Q,q,0,ue,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),de(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ee,N.__webglTexture,0,$e(v)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,ee,N.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(w,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer){const ne=v.depthTexture,ee=ne&&ne.isDepthTexture?ne.type:null,re=_(v.stencilBuffer,ee),ue=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;de(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e(v),re,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e(v),re,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,re,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,w)}else{const ne=v.textures;for(let ee=0;ee<ne.length;ee++){const re=ne[ee],ue=r.convert(re.format,re.colorSpace),Y=r.convert(re.type),J=T(re.internalFormat,ue,Y,re.normalized,re.colorSpace);de(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e(v),J,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e(v),J,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,J,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(w,v,B){const ne=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ee=n.get(v.depthTexture);ee.__renderTarget=v;const re=ne?v.depthTexture.image[0]:v.depthTexture.image;(!ee.__webglTexture||re.width!==v.width||re.height!==v.height)&&(re.width=v.width,re.height=v.height,v.depthTexture.needsUpdate=!0),ne?pe(v.depthTexture,0):fe(v.depthTexture,0);const ue=ee.__webglTexture,Y=$e(v),J=ne?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,oe=v.depthTexture.format===Ln?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Dn)de(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,J,ue,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,oe,J,ue,0);else if(v.depthTexture.format===Ln)de(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,J,ue,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,oe,J,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Pt(w){const v=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const ne=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ne){const ee=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ne.removeEventListener("dispose",ee)};ne.addEventListener("dispose",ee),v.__depthDisposeCallback=ee}v.__boundDepthTexture=ne}if(w.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let ne=0;ne<6;ne++)ut(v.__webglFramebuffer[ne],w,ne);else w.texture.mipmaps.length>0?ut(v.__webglFramebuffer[0],w,0):ut(v.__webglFramebuffer,w,0);else if(B){v.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ne]),v.__webglDepthbuffer[ne]===void 0)v.__webglDepthbuffer[ne]=i.createRenderbuffer(),Nt(v.__webglDepthbuffer[ne],w,!1);else{const ee=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=v.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,re)}}else if(w.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Nt(v.__webglDepthbuffer,w,!1);else{const ee=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(w,v,B){const ne=n.get(w);v!==void 0&&tt(ne.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Pt(w)}function ht(w){const v=w.texture,B=n.get(w),ne=n.get(v);w.addEventListener("dispose",k),O(w);const ee=w.textures,re=w.isWebGLCubeRenderTarget===!0,ue=ee.length>1;if(ue||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=v.version,a.memory.textures++),re){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(v.mipmaps.length>0){B.__webglFramebuffer[Y]=[];for(let J=0;J<v.mipmaps.length;J++)B.__webglFramebuffer[Y][J]=i.createFramebuffer()}else B.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(v.mipmaps.length>0){B.__webglFramebuffer=[];for(let Y=0;Y<v.mipmaps.length;Y++)B.__webglFramebuffer[Y]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ue)for(let Y=0,J=ee.length;Y<J;Y++){const oe=n.get(ee[Y]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&de(w)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Y=0;Y<ee.length;Y++){const J=ee[Y];B.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Y]);const oe=r.convert(J.format,J.colorSpace),N=r.convert(J.type),Q=T(J.internalFormat,oe,N,J.normalized,J.colorSpace,w.isXRRenderTarget===!0),q=$e(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,q,Q,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,B.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Nt(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),qe(i.TEXTURE_CUBE_MAP,v);for(let Y=0;Y<6;Y++)if(v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)tt(B.__webglFramebuffer[Y][J],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else tt(B.__webglFramebuffer[Y],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);A(v)?y(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(ue){for(let Y=0,J=ee.length;Y<J;Y++){const oe=ee[Y],N=n.get(oe);let Q=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Q=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,N.__webglTexture),qe(Q,oe),tt(B.__webglFramebuffer,w,oe,i.COLOR_ATTACHMENT0+Y,Q,0),A(oe)&&y(Q)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Y=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,ne.__webglTexture),qe(Y,v),v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)tt(B.__webglFramebuffer[J],w,v,i.COLOR_ATTACHMENT0,Y,J);else tt(B.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,Y,0);A(v)?y(Y):v.mipmaps.length>0&&i.texParameteri(Y,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}w.depthBuffer&&Pt(w)}function I(w){const v=w.textures;for(let B=0,ne=v.length;B<ne;B++){const ee=v[B];if(A(ee)&&ee.mipmapsAutoUpdate===!0){const re=C(w),ue=n.get(ee).__webglTexture;t.bindTexture(re,ue),y(re),t.unbindTexture()}}}const _t=[];function nt(w){if(w.samples>0){if(de(w)===!1){const v=w.textures,B=w.width,ne=w.height;let ee=i.COLOR_BUFFER_BIT;const re=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(w),Y=v.length>1;if(Y)for(let oe=0;oe<v.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let oe=0;oe<v.length;oe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[oe]);const N=n.get(v[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,B,ne,0,0,B,ne,ee,i.NEAREST),d===!0&&(_t.length=0,_t.push(i.COLOR_ATTACHMENT0+oe),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&_t.push(re),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let oe=0;oe<v.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,ue.__webglColorRenderbuffer[oe]);const N=n.get(v[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,N,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&d){const v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function $e(w){return Math.min(s.maxSamples,w.samples)}function de(w){const v=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function lt(w){const v=a.render.frame;u.get(w)!==v&&(u.set(w,v),w.update())}function Te(w,v){const B=w.colorSpace,ne=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==Vs&&B!==Nn&&(Xe.getTransfer(B)===et?(ne!==sn||ee!==zt)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",B)),v}function Ne(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=Ce,this.resetTextureUnits=K,this.getTextureUnits=te,this.setTextureUnits=ve,this.setTexture2D=fe,this.setTexture2DArray=_e,this.setTexture3D=Ae,this.setTextureCube=pe,this.rebindTextures=Lt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=de,this.dispose=V}function ix(i,e){function t(n,s=Nn){let r;const a=Xe.getTransfer(s);if(n===zt)return i.UNSIGNED_BYTE;if(n===Ua)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ic)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ec)return i.BYTE;if(n===tc)return i.SHORT;if(n===qi)return i.UNSIGNED_SHORT;if(n===Da)return i.INT;if(n===an)return i.UNSIGNED_INT;if(n===nn)return i.FLOAT;if(n===on)return i.HALF_FLOAT;if(n===sc)return i.ALPHA;if(n===rc)return i.RGB;if(n===sn)return i.RGBA;if(n===Dn)return i.DEPTH_COMPONENT;if(n===Ln)return i.DEPTH_STENCIL;if(n===ac)return i.RED;if(n===Fa)return i.RED_INTEGER;if(n===Xn)return i.RG;if(n===Ba)return i.RG_INTEGER;if(n===ka)return i.RGBA_INTEGER;if(n===Ps||n===Ls||n===Is||n===Ds)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ps)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ps)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Is)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yr||n===Kr||n===Zr||n===Jr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Kr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qr||n===ea||n===ta||n===na||n===ia||n===Hs||n===sa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Qr||n===ea)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ta)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===na)return r.COMPRESSED_R11_EAC;if(n===ia)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Hs)return r.COMPRESSED_RG11_EAC;if(n===sa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ra||n===aa||n===oa||n===la||n===ca||n===da||n===ua||n===ha||n===fa||n===pa||n===ma||n===ga||n===xa||n===_a)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ra)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===aa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===la)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ca)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===da)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ua)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ha)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ma)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ga)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_a)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===va||n===Sa||n===Ma)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===va)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ma)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ba||n===ya||n===Gs||n===Ea)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ba)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ea)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const sx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ax{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ec(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Un({vertexShader:sx,fragmentShader:rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Jt(new Qs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ox extends qn{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",d=1,l=null,u=null,p=null,h=null,f=null,x=null;const M=typeof XRWebGLBinding<"u",g=new ax,m={},b=t.getContextAttributes();let A=null,y=null;const C=[],T=[],_=new Ve;let E=null,O=null;const R=new Yt;R.viewport=new dt;const D=new Yt;D.viewport=new dt;const k=[R,D],W=new vf;let P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let fe=C[$];return fe===void 0&&(fe=new mr,C[$]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function($){let fe=C[$];return fe===void 0&&(fe=new mr,C[$]=fe),fe.getGripSpace()},this.getHand=function($){let fe=C[$];return fe===void 0&&(fe=new mr,C[$]=fe),fe.getHandSpace()};function j($){const fe=T.indexOf($.inputSource);if(fe===-1)return;const _e=C[fe];_e!==void 0&&(_e.update($.inputSource,$.frame,l||a),_e.dispatchEvent({type:$.type,data:$.inputSource}))}function U(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",Z);for(let $=0;$<C.length;$++){const fe=T[$];fe!==null&&(T[$]=null,C[$].disconnect(fe))}P=null,V=null,g.reset();for(const $ in m)delete m[$];if(e.setRenderTarget(A),f=null,h=null,p=null,s=null,y=null,Ce.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(_.width,_.height,!1),O!==null){const $=O.camera;$.fov=O.fov,$.zoom=O.zoom,$.updateProjectionMatrix(),O=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",U),s.addEventListener("inputsourceschange",Z),b.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(_),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ae=null,pe=null;b.depth&&(pe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=b.stencil?Ln:Dn,Ae=b.stencil?xi:an);const Le={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};p=this.getBinding(),h=p.createProjectionLayer(Le),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new rn(h.textureWidth,h.textureHeight,{format:sn,type:zt,depthTexture:new _i(h.textureWidth,h.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const _e={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new rn(f.framebufferWidth,f.framebufferHeight,{format:sn,type:zt,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(d),l=null,a=await s.requestReferenceSpace(o),Ce.setContext(s),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z($){for(let fe=0;fe<$.removed.length;fe++){const _e=$.removed[fe],Ae=T.indexOf(_e);Ae>=0&&(T[Ae]=null,C[Ae].disconnect(_e))}for(let fe=0;fe<$.added.length;fe++){const _e=$.added[fe];let Ae=T.indexOf(_e);if(Ae===-1){for(let Le=0;Le<C.length;Le++)if(Le>=T.length){T.push(_e),Ae=Le;break}else if(T[Le]===null){T[Le]=_e,Ae=Le;break}if(Ae===-1)break}const pe=C[Ae];pe&&pe.connect(_e)}}function z($,fe){fe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(fe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let fe=$.near,_e=$.far;g.texture!==null&&(g.depthNear>0&&(fe=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),W.near=D.near=R.near=fe,W.far=D.far=R.far=_e,(P!==W.near||V!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),P=W.near,V=W.far),W.layers.mask=$.layers.mask|6,R.layers.mask=W.layers.mask&-5,D.layers.mask=W.layers.mask&-3;const Ae=$.parent,pe=W.cameras;z(W,Ae);for(let Le=0;Le<pe.length;Le++)z(pe[Le],Ae);W.projectionMatrix.copy(R.projectionMatrix),W.projectionMatrixInverse.copy(R.projectionMatrixInverse),O===null&&$.isPerspectiveCamera&&(O={camera:$,fov:$.fov,zoom:$.zoom}),K($,W,Ae)};function K($,fe,_e){_e===null?$.matrix.copy(fe.matrixWorld):($.matrix.copy(_e.matrixWorld),$.matrix.invert(),$.matrix.multiply(fe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ki*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(h===null&&f===null))return d},this.setFoveation=function($){d=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(W)},this.getCameraTexture=function($){return m[$]};let te=null;function ve($,fe){if(u=fe.getViewerPose(l||a),x=fe,u!==null){const _e=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ae=!1;_e.length!==W.cameras.length&&(W.cameras.length=0,Ae=!0);for(let Ee=0;Ee<_e.length;Ee++){const qe=_e[Ee];let Ke=null;if(f!==null)Ke=f.getViewport(qe);else{const ot=p.getViewSubImage(h,qe);Ke=ot.viewport,Ee===0&&(e.setRenderTargetTextures(y,ot.colorTexture,ot.depthStencilTexture),e.setRenderTarget(y))}let Oe=k[Ee];Oe===void 0&&(Oe=new Yt,Oe.layers.enable(Ee),Oe.viewport=new dt,k[Ee]=Oe),Oe.matrix.fromArray(qe.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(qe.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Ee===0&&(W.matrix.copy(Oe.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Ae===!0&&W.cameras.push(Oe)}const pe=s.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){p=n.getBinding();const Ee=p.getDepthInformation(_e[0]);Ee&&Ee.isValid&&Ee.texture&&g.init(Ee,s.renderState)}if(pe&&pe.includes("camera-access")&&M){e.state.unbindTexture(),p=n.getBinding();for(let Ee=0;Ee<_e.length;Ee++){const qe=_e[Ee].camera;if(qe){let Ke=m[qe];Ke||(Ke=new Ec,m[qe]=Ke);const Oe=p.getCameraImage(qe);Ke.sourceTexture=Oe}}}}for(let _e=0;_e<C.length;_e++){const Ae=T[_e],pe=C[_e];Ae!==null&&pe!==void 0&&pe.update(Ae,fe,l||a)}te&&te($,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),x=null}const Ce=new Cc;Ce.setAnimationLoop(ve),this.setAnimationLoop=function($){te=$},this.dispose=function(){}}}const lx=new rt,kc=new De;kc.set(-1,0,0,0,1,0,0,0,1);function cx(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,wc(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,b,A,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),p(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),h(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),x(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),M(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?d(g,m,b,A):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ut&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ut&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const b=e.get(m),A=b.envMap,y=b.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(lx.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(kc),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function d(g,m,b,A){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=A*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function p(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,b){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ut&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function M(g,m){const b=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function dx(i,e,t,n){let s={},r={};function a(b,A){const y=A.program;n.uniformBlockBinding(b,y,s[b.id])}function o(b,A){let y=s[b.id];y===void 0&&(x(b),y=d(b),s[b.id]=y,b.addEventListener("dispose",g));const C=A.program;n.updateUBOMapping(b,C);const T=e.render.frame;r[b.id]!==T&&(l(b),r[b.id]=T)}function d(b){const A=i.createBuffer(),y=b.__size,C=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,y,C),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function l(b){const A=s[b.id],y=b.uniforms,C=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let T=0,_=y.length;T<_;T++){const E=y[T];if(Array.isArray(E))for(let O=0,R=E.length;O<R;O++)u(E[O],T,O,C);else u(E,T,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(b,A,y,C){if(h(b,A,y,C)===!0){const T=b.__offset,_=b.value;if(Array.isArray(_)){let E=0;for(let O=0;O<_.length;O++){const R=_[O],D=M(R,!0);p(R,b.__data,E),E+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else p(_,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,b.__data)}}function p(b,A,y){typeof b=="number"||typeof b=="boolean"?A[y]=b:b.isMatrix3?(A[y]=b.elements[0],A[y+1]=b.elements[1],A[y+2]=b.elements[2],A[y+3]=0,A[y+4]=b.elements[3],A[y+5]=b.elements[4],A[y+6]=b.elements[5],A[y+7]=0,A[y+8]=b.elements[6],A[y+9]=b.elements[7],A[y+10]=b.elements[8],A[y+11]=0):ArrayBuffer.isView(b)?A.set(b.subarray(0,A.length-y),y):b.toArray(A,y)}function h(b,A,y,C){const T=b.value,_=A+"_"+y;if(Array.isArray(T)){C[_]===void 0&&(C[_]=[]);const E=C[_];let O=!1;for(let R=0;R<T.length;R++)f(T[R],E,R)===!0&&(O=!0);return O}return f(T,C,_)}function f(b,A,y){if(A[y]===void 0)return typeof b=="number"||typeof b=="boolean"?A[y]=b:ArrayBuffer.isView(b)?A[y]=b.slice():A[y]=b.clone(),!0;{const C=A[y];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return A[y]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(C.equals(b)===!1)return C.copy(b),!0}}return!1}function x(b){const A=b.uniforms;let y=0;const C=16;for(let _=0,E=A.length;_<E;_++){const O=Array.isArray(A[_])?A[_]:[A[_]];for(let R=0,D=O.length;R<D;R++){const k=O[R],W=Array.isArray(k.value)?k.value:[k.value],P=Array.isArray(A[_])||Array.isArray(k.value);let V=y;for(let U=0,Z=W.length;U<Z;U++){const z=W[U],K=M(z,P),te=y%C,ve=te%K.boundary,Ce=te+ve;y+=ve,Ce!==0&&C-Ce<K.storage&&(y+=C-Ce),U===0&&(V=y),y+=K.storage}const j=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new j((y-V)/Float32Array.BYTES_PER_ELEMENT),k.__offset=V}}const T=y%C;return T>0&&(y+=C-T),b.__size=y,b.__cache={},this}function M(b,A){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=16,y.storage=48):b.isMatrix4?(y.boundary=16,y.storage=64):b.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(y.boundary=16,y.storage=b.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",b),A===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function g(b){const A=b.target;A.removeEventListener("dispose",g),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function m(){for(const b in s)i.deleteBuffer(s[b]);s={},r={}}return{bind:a,update:o,dispose:m}}const ux=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let en=null;function hx(){return en===null&&(en=new Zh(ux,16,16,Xn,on),en.name="DFG_LUT",en.minFilter=Bt,en.magFilter=Bt,en.wrapS=gn,en.wrapT=gn,en.generateMipmaps=!1,en.needsUpdate=!0),en}class fx{constructor(e={}){const{canvas:t=hh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:f=zt}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const M=f,g=new Set([ka,Ba,Fa]),m=new Set([zt,an,qi,xi,Ua,Oa]),b=new Uint32Array(4),A=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let C=null,T=null;const _=[],E=[];let O=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1,k=null,W=null,P=null,V=null;this._outputColorSpace=Ot;let j=0,U=0,Z=null,z=-1,K=null;const te=new dt,ve=new dt;let Ce=null;const $=new Ge(0);let fe=0,_e=t.width,Ae=t.height,pe=1,Le=null,He=null;const Ee=new dt(0,0,_e,Ae),qe=new dt(0,0,_e,Ae);let Ke=!1;const Oe=new Zi,ot=new Va;let at=!1,mt=!1;const tt=new rt,Nt=new G,ut=new dt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function ht(){return Z===null?pe:1}let I=n;function _t(S,L){return t.getContext(S,L)}let nt,$e,de,lt,Te,Ne,w,v,B,ne,ee,re,ue,Y,J,oe,N,Q,q,le,se,ae,we;try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:d,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pa}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",me,!1),I===null){const L="webgl2";if(I=_t(L,S),I===null)throw _t(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Be()}catch(S){throw t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Je("WebGLRenderer: "+S.message),S}function Be(){nt=new gg(I),nt.init(),se=new ix(I,nt),$e=new rg(I,nt,e,se),de=new tx(I,nt),$e.reversedDepthBuffer&&h&&de.buffers.depth.setReversed(!0),W=I.createFramebuffer(),P=I.createFramebuffer(),V=I.createFramebuffer(),lt=new vg(I),Te=new G0,Ne=new nx(I,nt,de,Te,$e,se,lt),w=new mg(R),v=new Mf(I),ae=new ig(I,v),B=new xg(I,v,lt,ae),ne=new Mg(I,B,v,ae,lt),Q=new Sg(I,$e,Ne),J=new ag(Te),ee=new H0(R,w,nt,$e,ae,J),re=new cx(R,Te),ue=new V0,Y=new Y0(nt),N=new ng(R,w,de,ne,x,d),oe=new ex(R,ne,$e),we=new dx(I,lt,$e,de),q=new sg(I,nt,lt),le=new _g(I,nt,lt),lt.programs=ee.programs,R.capabilities=$e,R.extensions=nt,R.properties=Te,R.renderLists=ue,R.shadowMap=oe,R.state=de,R.info=lt}M!==zt&&(O=new yg(M,t.width,t.height,o,s,r));const ie=new ox(R,I);this.xr=ie,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=nt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=nt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(S){S!==void 0&&(pe=S,this.setSize(_e,Ae,!1))},this.getSize=function(S){return S.set(_e,Ae)},this.setSize=function(S,L,X=!0){if(ie.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=S,Ae=L,t.width=Math.floor(S*pe),t.height=Math.floor(L*pe),X===!0&&(t.style.width=S+"px",t.style.height=L+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,S,L)},this.getDrawingBufferSize=function(S){return S.set(_e*pe,Ae*pe).floor()},this.setDrawingBufferSize=function(S,L,X){_e=S,Ae=L,pe=X,t.width=Math.floor(S*X),t.height=Math.floor(L*X),this.setViewport(0,0,S,L)},this.setEffects=function(S){if(M===zt){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let L=0;L<S.length;L++)if(S[L].isOutputPass===!0){Pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(te)},this.getViewport=function(S){return S.copy(Ee)},this.setViewport=function(S,L,X,F){S.isVector4?Ee.set(S.x,S.y,S.z,S.w):Ee.set(S,L,X,F),de.viewport(te.copy(Ee).multiplyScalar(ht()).round())},this.getScissor=function(S){return S.copy(qe)},this.setScissor=function(S,L,X,F){S.isVector4?qe.set(S.x,S.y,S.z,S.w):qe.set(S,L,X,F),de.scissor(ve.copy(qe).multiplyScalar(ht()).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(S){de.setScissorTest(Ke=S)},this.setOpaqueSort=function(S){Le=S},this.setTransparentSort=function(S){He=S},this.getClearColor=function(S){return S.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(S=!0,L=!0,X=!0){let F=0;if(S){let H=!1;if(Z!==null){const he=Z.texture.format;H=g.has(he)}if(H){const he=Z.texture.type,Se=m.has(he),ce=N.getClearColor(),xe=N.getClearAlpha(),ye=ce.r,Ue=ce.g,We=ce.b;Se?(b[0]=ye,b[1]=Ue,b[2]=We,b[3]=xe,I.clearBufferuiv(I.COLOR,0,b)):(A[0]=ye,A[1]=Ue,A[2]=We,A[3]=xe,I.clearBufferiv(I.COLOR,0,A))}else F|=I.COLOR_BUFFER_BIT}L&&(F|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(F|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&I.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),k=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",me,!1),N.dispose(),ue.dispose(),Y.dispose(),Ne.dispose(),Te.dispose(),w.dispose(),ne.dispose(),B.dispose(),ae.dispose(),we.dispose(),ee.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Za),ie.removeEventListener("sessionend",Ja),On.stop()};function Re(S){S.preventDefault(),Go("WebGLRenderer: Context Lost."),D=!0}function Fe(){Go("WebGLRenderer: Context Restored."),D=!1;const S=lt.autoReset,L=oe.enabled,X=oe.autoUpdate,F=oe.needsUpdate,H=oe.type;Be(),lt.autoReset=S,oe.enabled=L,oe.autoUpdate=X,oe.needsUpdate=F,oe.type=H}function me(S){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Qe(S){const L=S.target;L.removeEventListener("dispose",Qe),vt(L)}function vt(S){Sn(S),Te.remove(S)}function Sn(S){const L=Te.get(S).programs;L!==void 0&&(L.forEach(function(X){ee.releaseProgram(X)}),S.isShaderMaterial&&ee.releaseShaderCache(S))}this.renderBufferDirect=function(S,L,X,F,H,he){L===null&&(L=Pt);const Se=H.isMesh&&H.matrixWorld.determinantAffine()<0,ce=zc(S,L,X,F,H);de.setMaterial(F,Se);let xe=X.index,ye=1;if(F.wireframe===!0){if(xe=B.getWireframeAttribute(X),xe===void 0)return;ye=2}const Ue=X.drawRange,We=X.attributes.position;let Me=Ue.start*ye,je=(Ue.start+Ue.count)*ye;he!==null&&(Me=Math.max(Me,he.start*ye),je=Math.min(je,(he.start+he.count)*ye)),xe!==null?(Me=Math.max(Me,0),je=Math.min(je,xe.count)):We!=null&&(Me=Math.max(Me,0),je=Math.min(je,We.count));const ft=je-Me;if(ft<0||ft===1/0)return;ae.setup(H,F,ce,X,xe);let st,it=q;if(xe!==null&&(st=v.get(xe),it=le,it.setIndex(st)),H.isMesh)F.wireframe===!0?(de.setLineWidth(F.wireframeLinewidth*ht()),it.setMode(I.LINES)):it.setMode(I.TRIANGLES);else if(H.isLine){let wt=F.linewidth;wt===void 0&&(wt=1),de.setLineWidth(wt*ht()),H.isLineSegments?it.setMode(I.LINES):H.isLineLoop?it.setMode(I.LINE_LOOP):it.setMode(I.LINE_STRIP)}else H.isPoints?it.setMode(I.POINTS):H.isSprite&&it.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))it.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const wt=H._multiDrawStarts,be=H._multiDrawCounts,It=H._multiDrawCount,Ze=xe?v.get(xe).bytesPerElement:1,Fn=Te.get(F).currentProgram.getUniforms();for(let At=0;At<It;At++)Fn.setValue(I,"_gl_DrawID",At),it.render(wt[At]/Ze,be[At])}else if(H.isInstancedMesh)it.renderInstances(Me,ft,H.count);else if(X.isInstancedBufferGeometry){const wt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,be=Math.min(X.instanceCount,wt);it.renderInstances(Me,ft,be)}else it.render(Me,ft)};function Ka(S,L,X,F){k!==null&&S.isNodeMaterial&&k.setObject(F,S),at===!0&&J.setState(S,X,!1),S.transparent===!0&&S.side===mn&&S.forceSinglePass===!1?(S.side=Ut,S.needsUpdate=!0,yi(S,L,F),S.side=jn,S.needsUpdate=!0,yi(S,L,F),S.side=mn):yi(S,L,F)}this.compile=function(S,L,X=null){X===null&&(X=S),k!==null&&k.renderStart(S,L,X),T=Y.get(X),T.init(L),E.push(T),X.traverseVisible(function(H){H.isLight&&H.layers.test(L.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),S!==X&&S.traverseVisible(function(H){H.isLight&&H.layers.test(L.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights(),k!==null&&k.updateLights(T.state.lightsArray),mt=this.localClippingEnabled,at=J.init(this.clippingPlanes,mt),at===!0&&J.setGlobalState(this.clippingPlanes,L),k!==null&&oe.render(T.state.shadowsArray,X,L);const F=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const he=H.material;if(he)if(Array.isArray(he))for(let Se=0;Se<he.length;Se++){const ce=he[Se];Ka(ce,X,L,H),F.add(ce)}else Ka(he,X,L,H),F.add(he)}),T=E.pop(),k!==null&&k.renderEnd(),F},this.compileAsync=function(S,L,X=null){const F=this.compile(S,L,X);return new Promise(H=>{function he(){if(F.forEach(function(Se){const xe=Te.get(Se).currentProgram;(xe===void 0||xe.isReady())&&F.delete(Se)}),F.size===0){H(S);return}setTimeout(he,10)}nt.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let nr=null;function Hc(S){nr&&nr(S)}function Za(){On.stop()}function Ja(){On.start()}const On=new Cc;On.setAnimationLoop(Hc),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(S){nr=S,ie.setAnimationLoop(S),S===null?On.stop():On.start()},ie.addEventListener("sessionstart",Za),ie.addEventListener("sessionend",Ja),this.render=function(S,L){if(L!==void 0&&L.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;k!==null&&k.renderStart(S,L);const X=ie.enabled===!0&&ie.isPresenting===!0,F=O!==null&&(Z===null||X)&&O.begin(R,Z);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(L),L=ie.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,L,Z),T=Y.get(S,E.length),T.init(L),T.state.textureUnits=Ne.getTextureUnits(),E.push(T),tt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?ot.setFromArrayCamera(L):Oe.setFromProjectionMatrix(tt,Zt,L.reversedDepth),mt=this.localClippingEnabled,at=J.init(this.clippingPlanes,mt),C=ue.get(S,_.length),C.init(),_.push(C),this.info.render.frame++,ie.enabled===!0&&ie.isPresenting===!0){const Se=R.xr.getDepthSensingMesh();Se!==null&&ir(Se,L,-1/0,R.sortObjects)}ir(S,L,0,R.sortObjects),C.finish(),k!==null&&k.updateLights(T.state.lightsArray),R.sortObjects===!0&&C.sort(Le,He),Lt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Lt&&N.addToRenderList(C,S),this.info.autoReset===!0&&this.info.reset(),at===!0&&J.beginShadows();const H=T.state.shadowsArray;if(oe.render(H,S,L),at===!0&&J.endShadows(),(F&&O.hasRenderPass())===!1){const Se=C.opaque,ce=C.transmissive;if(T.setupLights(),L.isArrayCamera){const xe=L.cameras;if(ce.length>0)for(let ye=0,Ue=xe.length;ye<Ue;ye++){const We=xe[ye];eo(Se,ce,S,We)}Lt&&N.render(S);for(let ye=0,Ue=xe.length;ye<Ue;ye++){const We=xe[ye];Qa(C,S,We,We.viewport)}}else ce.length>0&&eo(Se,ce,S,L),Lt&&N.render(S),Qa(C,S,L)}Z!==null&&U===0&&(Ne.updateMultisampleRenderTarget(Z),Ne.updateRenderTargetMipmap(Z)),F&&O.end(R),S.isScene===!0&&S.onAfterRender(R,S,L),ae.resetDefaultState(),z=-1,K=null,E.pop(),E.length>0?(T=E[E.length-1],Ne.setTextureUnits(T.state.textureUnits),at===!0&&J.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?C=_[_.length-1]:C=null,k!==null&&k.renderEnd()};function ir(S,L,X,F){if(S.visible===!1)return;if(S.layers.test(L.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(L);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){const Se=L.isArrayCamera?ot:Oe;if(!S.frustumCulled||S.intersectsFrustum(Se)){F&&ut.setFromMatrixPosition(S.matrixWorld).applyMatrix4(tt);const ce=ne.update(S),xe=S.material;xe.visible&&C.push(S,ce,xe,X,ut.z,null,L)}}else if(S.isMesh||S.isLine||S.isPoints){const Se=L.isArrayCamera?ot:Oe;if(!S.frustumCulled||S.intersectsFrustum(Se)){const ce=ne.update(S),xe=S.material;if(F&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ut.copy(S.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),ut.copy(ce.boundingSphere.center)),ut.applyMatrix4(S.matrixWorld).applyMatrix4(tt)),Array.isArray(xe)){const ye=ce.groups;for(let Ue=0,We=ye.length;Ue<We;Ue++){const Me=ye[Ue],je=xe[Me.materialIndex];je&&je.visible&&C.push(S,ce,je,X,ut.z,Me,L)}}else xe.visible&&C.push(S,ce,xe,X,ut.z,null,L)}}}const he=S.children;for(let Se=0,ce=he.length;Se<ce;Se++)ir(he[Se],L,X,F)}function Qa(S,L,X,F){const{opaque:H,transmissive:he,transparent:Se}=S;T.setupLightsView(X),at===!0&&J.setGlobalState(R.clippingPlanes,X),F&&de.viewport(te.copy(F)),H.length>0&&ns(H,L,X),he.length>0&&ns(he,L,X),Se.length>0&&ns(Se,L,X),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function eo(S,L,X,F){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[F.id]===void 0){const Me=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[F.id]=new rn(1,1,{generateMipmaps:!0,type:Me?on:zt,minFilter:Pn,samples:Math.max(4,$e.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const he=T.state.transmissionRenderTarget[F.id],Se=F.viewport||te;he.setSize(Se.z*R.transmissionResolutionScale,Se.w*R.transmissionResolutionScale);const ce=R.getRenderTarget(),xe=R.getActiveCubeFace(),ye=R.getActiveMipmapLevel();R.setRenderTarget(he),R.getClearColor($),fe=R.getClearAlpha(),fe<1&&R.setClearColor(16777215,.5),R.clear(),Lt&&N.render(X);const Ue=R.toneMapping;R.toneMapping=xn;const We=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),T.setupLightsView(F),at===!0&&J.setGlobalState(R.clippingPlanes,F),ns(S,X,F),Ne.updateMultisampleRenderTarget(he),Ne.updateRenderTargetMipmap(he),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let je=0,ft=L.length;je<ft;je++){const st=L[je],{object:it,geometry:wt,material:be,group:It}=st;if(be.side===mn&&it.layers.test(F.layers)){const Ze=be.side;be.side=Ut,be.needsUpdate=!0,to(it,X,F,wt,be,It),be.side=Ze,be.needsUpdate=!0,Me=!0}}Me===!0&&(Ne.updateMultisampleRenderTarget(he),Ne.updateRenderTargetMipmap(he))}R.setRenderTarget(ce,xe,ye),R.setClearColor($,fe),We!==void 0&&(F.viewport=We),R.toneMapping=Ue}function ns(S,L,X){const F=L.isScene===!0?L.overrideMaterial:null;for(let H=0,he=S.length;H<he;H++){const Se=S[H],{object:ce,geometry:xe,group:ye}=Se;let Ue=Se.material;Ue.allowOverride===!0&&F!==null&&(Ue=F),ce.layers.test(X.layers)&&to(ce,L,X,xe,Ue,ye)}}function to(S,L,X,F,H,he){k!==null&&H.isNodeMaterial&&k.setObject(S,H),S.onBeforeRender(R,L,X,F,H,he),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(R,L,X,F,S,he),H.transparent===!0&&H.side===mn&&H.forceSinglePass===!1?(H.side=Ut,H.needsUpdate=!0,R.renderBufferDirect(X,L,F,H,S,he),H.side=jn,H.needsUpdate=!0,R.renderBufferDirect(X,L,F,H,S,he),H.side=mn):R.renderBufferDirect(X,L,F,H,S,he),S.onAfterRender(R,L,X,F,H,he)}function no(S){let L=0;for(const X of S)X.texture!==null&&L++;return L}function yi(S,L,X){L.isScene!==!0&&(L=Pt);const F=Te.get(S),H=T.state.lights,he=T.state.shadowsArray,Se=H.state.version,ce=ee.getParameters(S,H.state,he,L,X,T.state.lightProbeGridArray),xe=ee.getProgramCacheKey(ce);let ye=F.programs;F.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?L.environment:null,F.fog=L.fog;const Ue=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;F.envMap=w.get(S.envMap||F.environment,Ue),F.envMapRotation=F.environment!==null&&S.envMap===null?L.environmentRotation:S.envMapRotation,ye===void 0&&(S.addEventListener("dispose",Qe),ye=new Map,F.programs=ye,F.programVariants=new Map);let We=ye.get(xe);if(We!==void 0){if(F.currentProgram===We&&F.lightsStateVersion===Se)return so(S,ce),We}else ce.uniforms=ee.getUniforms(S),k!==null&&S.isNodeMaterial&&k.build(S,X,ce),S.onBeforeCompile(ce,R),We=ee.acquireProgram(ce,xe),ye.set(xe,We),F.uniforms=ce.uniforms;const Me=F.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Me.clippingPlanes=J.uniform),so(S,ce),F.needsLights=Wc(S),F.lightsStateVersion=Se,F.needsLights&&(Me.ambientLightColor.value=H.state.ambient,Me.lightProbe.value=H.state.probe,Me.sunLights.value=H.state.sun,Me.sunLightShadows.value=H.state.sunShadow,Me.directionalLights.value=H.state.directional,Me.directionalLightShadows.value=H.state.directionalShadow,Me.spotLights.value=H.state.spot,Me.spotLightShadows.value=H.state.spotShadow,Me.rectAreaLights.value=H.state.rectArea,Me.ltc_1.value=H.state.rectAreaLTC1,Me.ltc_2.value=H.state.rectAreaLTC2,Me.pointLights.value=H.state.point,Me.pointLightShadows.value=H.state.pointShadow,Me.hemisphereLights.value=H.state.hemi,Me.sunShadowMatrix.value=H.state.sunShadowMatrix,Me.sunShadowCascade.value=H.state.sunShadowCascade,Me.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Me.spotLightMatrix.value=H.state.spotLightMatrix,Me.spotLightMap.value=H.state.spotLightMap,Me.pointShadowMatrix.value=H.state.pointShadowMatrix),F.numLightProbeGrids=no(T.state.lightProbeGridArray),F.currentProgram=We,F.uniformsList=null,We}function Gc(S,L,X,F,H){const he=Te.get(S),Se=he.currentProgram.id+","+F+","+H;let ce=he.programVariants.get(Se);return ce===void 0?(ce=yi(S,L,X),he.programVariants.set(Se,ce)):(he.currentProgram=ce,he.uniformsList=null,he.outputColorSpace=F,he.toneMapping=H),ce}function io(S){if(S.uniformsList===null){const L=S.currentProgram.getUniforms();S.uniformsList=Os.seqWithValue(L.seq,S.uniforms)}return S.uniformsList}function so(S,L){const X=Te.get(S);X.outputColorSpace=L.outputColorSpace,X.batching=L.batching,X.batchingColor=L.batchingColor,X.instancing=L.instancing,X.instancingColor=L.instancingColor,X.instancingMorph=L.instancingMorph,X.skinning=L.skinning,X.morphTargets=L.morphTargets,X.morphNormals=L.morphNormals,X.morphColors=L.morphColors,X.morphTargetsCount=L.morphTargetsCount,X.numClippingPlanes=L.numClippingPlanes,X.numIntersection=L.numClipIntersection,X.vertexAlphas=L.vertexAlphas,X.vertexTangents=L.vertexTangents,X.toneMapping=L.toneMapping}function zc(S,L,X,F,H){L.isScene!==!0&&(L=Pt),Ne.resetTextureUnits();const he=L.fog,Se=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?L.environment:null,ce=Z===null?R.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Xe.workingColorSpace,xe=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,ye=w.get(F.envMap||Se,xe),Ue=F.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,We=!!X.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Me=!!X.morphAttributes.position,je=!!X.morphAttributes.normal,ft=!!X.morphAttributes.color;let st=xn;F.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(st=R.toneMapping);const it=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,wt=it!==void 0?it.length:0,be=Te.get(F),It=T.state.lights;if(at===!0&&(mt===!0||S!==K)){const ct=S===K&&F.id===z;J.setState(F,S,ct)}let Ze=!1,Fn=!1;F.version===be.__version?be.needsLights&&be.lightsStateVersion!==It.state.version||H.isBatchedMesh&&be.batching===!1||!H.isBatchedMesh&&be.batching===!0||H.isBatchedMesh&&be.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&be.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&be.instancing===!1||!H.isInstancedMesh&&be.instancing===!0||H.isSkinnedMesh&&be.skinning===!1||!H.isSkinnedMesh&&be.skinning===!0||H.isInstancedMesh&&be.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&be.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&be.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&be.instancingMorph===!1&&H.morphTexture!==null||be.envMap!==ye||F.fog===!0&&be.fog!==he||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==J.numPlanes||be.numIntersection!==J.numIntersection)||be.vertexAlphas!==Ue||be.vertexTangents!==We||be.morphTargets!==Me||be.morphNormals!==je||be.morphColors!==ft||be.morphTargetsCount!==wt||be.numLightProbeGrids!==no(T.state.lightProbeGridArray)?Ze=!0:(be.outputColorSpace!==ce||be.toneMapping!==st)&&(Fn=!0):(Ze=!0,be.__version=F.version);let At=be.currentProgram;(Ze===!0||Fn===!0)&&(At=Fn===!0?Gc(F,L,H,ce,st):yi(F,L,H),k&&F.isNodeMaterial&&k.onUpdateProgram(F,At,be));let is=!1,Mn=!1,Bn=!1;const Ye=At.getUniforms(),bt=be.uniforms;if(de.useProgram(At.program)&&(is=!0,Mn=!0,Bn=!0),F.id!==z&&(z=F.id,Mn=!0),is||K!==S){de.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Ye.setValue(I,"projectionMatrix",S.projectionMatrix),Ye.setValue(I,"viewMatrix",S.matrixWorldInverse);const St=Ye.map.cameraPosition;St!==void 0&&St.setValue(I,Nt.setFromMatrixPosition(S.matrixWorld)),$e.logarithmicDepthBuffer&&Ye.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Ye.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),K!==S&&(K=S,Mn=!0,Bn=!0)}if(be.needsLights&&(It.state.sunShadowMap.length>0&&Ye.setValue(I,"sunShadowMap",It.state.sunShadowMap,Ne),It.state.directionalShadowMap.length>0&&Ye.setValue(I,"directionalShadowMap",It.state.directionalShadowMap,Ne),It.state.spotShadowMap.length>0&&Ye.setValue(I,"spotShadowMap",It.state.spotShadowMap,Ne),It.state.pointShadowMap.length>0&&Ye.setValue(I,"pointShadowMap",It.state.pointShadowMap,Ne)),H.isSkinnedMesh){Ye.setOptional(I,H,"bindMatrix"),Ye.setOptional(I,H,"bindMatrixInverse");const ct=H.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),Ye.setValue(I,"boneTexture",ct.boneTexture,Ne))}H.isBatchedMesh&&(Ye.setOptional(I,H,"batchingTexture"),Ye.setValue(I,"batchingTexture",H._matricesTexture,Ne),Ye.setOptional(I,H,"batchingIdTexture"),Ye.setValue(I,"batchingIdTexture",H._indirectTexture,Ne),Ye.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&Ye.setValue(I,"batchingColorTexture",H._colorsTexture,Ne));const jt=X.morphAttributes;if((jt.position!==void 0||jt.normal!==void 0||jt.color!==void 0)&&Q.update(H,X,At),(Mn||be.receiveShadow!==H.receiveShadow)&&(be.receiveShadow=H.receiveShadow,Ye.setValue(I,"receiveShadow",H.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&L.environment!==null&&(bt.envMapIntensity.value=L.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=hx()),Mn){if(Ye.setValue(I,"toneMappingExposure",R.toneMappingExposure),be.needsLights&&Vc(bt,Bn),he&&F.fog===!0&&re.refreshFogUniforms(bt,he),re.refreshMaterialUniforms(bt,F,pe,Ae,T.state.transmissionRenderTarget[S.id]),be.needsLights&&be.numLightProbeGrids>0){const ct=y;let St=0;for(const cn of T.state.lightProbeGridArray)cn.texture!==null&&(ct.textures[St]=cn.texture,ct.min[St]=cn.boundingBox.min,ct.max[St]=cn.boundingBox.max,ct.resolution[St]=cn.resolution,St++);for(const cn in ct)ct[cn].length=St;bt.probesSH.value=ct.textures,bt.probesMin.value=ct.min,bt.probesMax.value=ct.max,bt.probesResolution.value=ct.resolution}Os.upload(I,io(be),bt,Ne)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Os.upload(I,io(be),bt,Ne),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Ye.setValue(I,"center",H.center),Ye.setValue(I,"modelViewMatrix",H.modelViewMatrix),Ye.setValue(I,"normalMatrix",H.normalMatrix),Ye.setValue(I,"modelMatrix",H.matrixWorld),F.uniformsGroups!==void 0){const ct=F.uniformsGroups;for(let St=0,cn=ct.length;St<cn;St++){const ao=ct[St];we.update(ao,At),we.bind(ao,At)}}return At}function Vc(S,L){S.ambientLightColor.needsUpdate=L,S.lightProbe.needsUpdate=L,S.sunLights.needsUpdate=L,S.sunLightShadows.needsUpdate=L,S.directionalLights.needsUpdate=L,S.directionalLightShadows.needsUpdate=L,S.pointLights.needsUpdate=L,S.pointLightShadows.needsUpdate=L,S.spotLights.needsUpdate=L,S.spotLightShadows.needsUpdate=L,S.rectAreaLights.needsUpdate=L,S.hemisphereLights.needsUpdate=L}function Wc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(S,L,X){const F=Te.get(S);F.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),Te.get(S.texture).__webglTexture=L,Te.get(S.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:X,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,L){const X=Te.get(S);X.__webglFramebuffer=L,X.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(S,L=0,X=0){Z=S,j=L,U=X;let F=null,H=!1,he=!1;if(S){const ce=Te.get(S);if(ce.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(I.FRAMEBUFFER,ce.__webglFramebuffer),te.copy(S.viewport),ve.copy(S.scissor),Ce=S.scissorTest,de.viewport(te),de.scissor(ve),de.setScissorTest(Ce),z=-1;return}else if(ce.__webglFramebuffer===void 0)Ne.setupRenderTarget(S);else if(ce.__hasExternalTextures)Ne.rebindTextures(S,Te.get(S.texture).__webglTexture,Te.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ue=S.depthTexture;if(ce.__boundDepthTexture!==Ue){if(Ue!==null&&Te.has(Ue)&&(S.width!==Ue.image.width||S.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(S)}}const xe=S.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(he=!0);const ye=Te.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ye[L])?F=ye[L][X]:F=ye[L],H=!0):S.samples>0&&Ne.useMultisampledRTT(S)===!1?F=Te.get(S).__webglMultisampledFramebuffer:Array.isArray(ye)?F=ye[X]:F=ye,te.copy(S.viewport),ve.copy(S.scissor),Ce=S.scissorTest}else te.copy(Ee).multiplyScalar(pe).floor(),ve.copy(qe).multiplyScalar(pe).floor(),Ce=Ke;if(X!==0&&(F=W),de.bindFramebuffer(I.FRAMEBUFFER,F)&&de.drawBuffers(S,F),de.viewport(te),de.scissor(ve),de.setScissorTest(Ce),H){const ce=Te.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+L,ce.__webglTexture,X)}else if(he){const ce=L;for(let xe=0;xe<S.textures.length;xe++){const ye=Te.get(S.textures[xe]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+xe,ye.__webglTexture,X,ce)}}else if(S!==null&&X!==0){const ce=Te.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ce.__webglTexture,X)}z=-1};function ro(S){const L=Te.get(S);return(L.__readFormat!==S.format||L.__readType!==S.type)&&(L.__readFormat=S.format,L.__readType=S.type,L.__formatReadable=$e.textureFormatReadable(S.format),L.__typeReadable=$e.textureTypeReadable(S.type)),L}this.readRenderTargetPixels=function(S,L,X,F,H,he,Se,ce=0){if(!(S&&S.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Te.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(xe=xe[Se],Array.isArray(xe)&&(xe=xe[0])),xe){de.bindFramebuffer(I.FRAMEBUFFER,xe);try{const ye=S.textures[ce],Ue=ye.format,We=ye.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ce);const Me=ro(ye);if(Me.__formatReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Me.__typeReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=S.width-F&&X>=0&&X<=S.height-H&&I.readPixels(L,X,F,H,se.convert(Ue),se.convert(We),he)}finally{const ye=Z!==null?Te.get(Z).__webglFramebuffer:null;de.bindFramebuffer(I.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(S,L,X,F,H,he,Se,ce=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Te.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(xe=xe[Se],Array.isArray(xe)&&(xe=xe[0])),xe)if(L>=0&&L<=S.width-F&&X>=0&&X<=S.height-H){de.bindFramebuffer(I.FRAMEBUFFER,xe);const ye=S.textures[ce],Ue=ye.format,We=ye.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ce);const Me=ro(ye);if(Me.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Me.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,je),I.bufferData(I.PIXEL_PACK_BUFFER,he.byteLength,I.STREAM_READ),I.readPixels(L,X,F,H,se.convert(Ue),se.convert(We),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const ft=Z!==null?Te.get(Z).__webglFramebuffer:null;de.bindFramebuffer(I.FRAMEBUFFER,ft);const st=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await fh(I,st,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,je),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,he),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(je),I.deleteSync(st),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,L=null,X=0){const F=Math.pow(2,-X),H=Math.floor(S.image.width*F),he=Math.floor(S.image.height*F),Se=L!==null?L.x:0,ce=L!==null?L.y:0;Ne.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,Se,ce,H,he),de.unbindTexture()},this.copyTextureToTexture=function(S,L,X=null,F=null,H=0,he=0){let Se,ce,xe,ye,Ue,We,Me,je,ft;const st=S.isCompressedTexture?S.mipmaps[he]:S.image;if(X!==null)Se=X.max.x-X.min.x,ce=X.max.y-X.min.y,xe=X.isBox3?X.max.z-X.min.z:1,ye=X.min.x,Ue=X.min.y,We=X.isBox3?X.min.z:0;else{const Ye=Math.pow(2,-H);Se=Math.floor(st.width*Ye),ce=Math.floor(st.height*Ye),S.isDataArrayTexture?xe=st.depth:S.isData3DTexture?xe=Math.floor(st.depth*Ye):xe=1,ye=0,Ue=0,We=0}F!==null?(Me=F.x,je=F.y,ft=F.z):(Me=0,je=0,ft=0);const it=se.convert(L.format),wt=se.convert(L.type);let be;L.isData3DTexture?(Ne.setTexture3D(L,0),be=I.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Ne.setTexture2DArray(L,0),be=I.TEXTURE_2D_ARRAY):(Ne.setTexture2D(L,0),be=I.TEXTURE_2D),de.activeTexture(I.TEXTURE0),de.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,L.flipY),de.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),de.pixelStorei(I.UNPACK_ALIGNMENT,L.unpackAlignment);const It=de.getParameter(I.UNPACK_ROW_LENGTH),Ze=de.getParameter(I.UNPACK_IMAGE_HEIGHT),Fn=de.getParameter(I.UNPACK_SKIP_PIXELS),At=de.getParameter(I.UNPACK_SKIP_ROWS),is=de.getParameter(I.UNPACK_SKIP_IMAGES);de.pixelStorei(I.UNPACK_ROW_LENGTH,st.width),de.pixelStorei(I.UNPACK_IMAGE_HEIGHT,st.height),de.pixelStorei(I.UNPACK_SKIP_PIXELS,ye),de.pixelStorei(I.UNPACK_SKIP_ROWS,Ue),de.pixelStorei(I.UNPACK_SKIP_IMAGES,We);const Mn=S.isDataArrayTexture||S.isData3DTexture,Bn=L.isDataArrayTexture||L.isData3DTexture;if(S.isDepthTexture){const Ye=Te.get(S),bt=Te.get(L),jt=Te.get(Ye.__renderTarget),ct=Te.get(bt.__renderTarget);de.bindFramebuffer(I.READ_FRAMEBUFFER,jt.__webglFramebuffer),de.bindFramebuffer(I.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let St=0;St<xe;St++)Mn&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Te.get(S).__webglTexture,H,We+St),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Te.get(L).__webglTexture,he,ft+St)),I.blitFramebuffer(ye,Ue,ye+Se,Ue+ce,Me,je,Me+Se,je+ce,I.DEPTH_BUFFER_BIT,I.NEAREST);de.bindFramebuffer(I.READ_FRAMEBUFFER,null),de.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||Te.has(S)){const Ye=Te.get(S),bt=Te.get(L);de.bindFramebuffer(I.READ_FRAMEBUFFER,P),de.bindFramebuffer(I.DRAW_FRAMEBUFFER,V);for(let jt=0;jt<xe;jt++)Mn?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ye.__webglTexture,H,We+jt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ye.__webglTexture,H),Bn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,bt.__webglTexture,he,ft+jt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,bt.__webglTexture,he),H!==0?I.blitFramebuffer(ye,Ue,ye+Se,Ue+ce,Me,je,Me+Se,je+ce,I.COLOR_BUFFER_BIT,I.NEAREST):Bn?I.copyTexSubImage3D(be,he,Me,je,ft+jt,ye,Ue,Se,ce):I.copyTexSubImage2D(be,he,Me,je,ye,Ue,Se,ce);de.bindFramebuffer(I.READ_FRAMEBUFFER,null),de.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Bn?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(be,he,Me,je,ft,Se,ce,xe,it,wt,st.data):L.isCompressedArrayTexture?I.compressedTexSubImage3D(be,he,Me,je,ft,Se,ce,xe,it,st.data):I.texSubImage3D(be,he,Me,je,ft,Se,ce,xe,it,wt,st):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,he,Me,je,Se,ce,it,wt,st.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,he,Me,je,st.width,st.height,it,st.data):I.texSubImage2D(I.TEXTURE_2D,he,Me,je,Se,ce,it,wt,st);de.pixelStorei(I.UNPACK_ROW_LENGTH,It),de.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ze),de.pixelStorei(I.UNPACK_SKIP_PIXELS,Fn),de.pixelStorei(I.UNPACK_SKIP_ROWS,At),de.pixelStorei(I.UNPACK_SKIP_IMAGES,is),he===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&I.generateMipmap(be),de.unbindTexture()},this.initRenderTarget=function(S){Te.get(S).__webglFramebuffer===void 0&&Ne.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ne.setTextureCube(S,0):S.isData3DTexture?Ne.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ne.setTexture2DArray(S,0):Ne.setTexture2D(S,0),de.unbindTexture()},this.resetState=function(){j=0,U=0,Z=null,de.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}const Gi=[{id:"delhi-anand-vihar",name:"Delhi NCR",country:"India",lat:28.6469,lon:77.316,aqi:405,category:"Severe",color:"#EF4444",temp:19,humidity:68,windSpeed:6,description:"Severe winter smog with thermal inversion"},{id:"bengaluru-indiranagar",name:"Bengaluru",country:"India",lat:12.9784,lon:77.6408,aqi:78,category:"Satisfactory",color:"#10B981",temp:24,humidity:52,windSpeed:13.2,description:"Moderate plateau ventilation with steady airflow"},{id:"mumbai-bkc",name:"Mumbai BKC",country:"India",lat:19.0657,lon:72.8687,aqi:174,category:"Very Poor",color:"#EF4444",temp:28,humidity:74,windSpeed:11,description:"Coastal humidity with evening sea breeze"},{id:"kolkata-victoria",name:"Kolkata",country:"India",lat:22.5448,lon:88.3426,aqi:155,category:"Very Poor",color:"#F97316",temp:23,humidity:78,windSpeed:7,description:"Gangetic basin winter stagnation"},{id:"chennai-adyar",name:"Chennai",country:"India",lat:13.0012,lon:80.2565,aqi:70,category:"Satisfactory",color:"#10B981",temp:29,humidity:82,windSpeed:18,description:"Maritime sea-breeze ventilation"},{id:"hyderabad-sanathnagar",name:"Hyderabad",country:"India",lat:17.4578,lon:78.4428,aqi:132,category:"Moderate",color:"#F59E0B",temp:26,humidity:55,windSpeed:9.5,description:"Deccan plateau moderate air quality"},{id:"pune-shivajinagar",name:"Pune",country:"India",lat:18.5308,lon:73.8475,aqi:112,category:"Moderate",color:"#F59E0B",temp:25,humidity:58,windSpeed:8,description:"Western Ghats rain-shadow valley"},{id:"mediterranean",name:"Athens",country:"Greece",lat:37.9838,lon:23.7275,aqi:90,category:"Satisfactory",color:"#10B981",temp:22,humidity:48,windSpeed:14,description:"Mediterranean coastal breeze"},{id:"central-africa",name:"Kinshasa",country:"DR Congo",lat:-4.4419,lon:15.2663,aqi:78,category:"Satisfactory",color:"#10B981",temp:28,humidity:76,windSpeed:8.5,description:"Congo basin tropical circulation"},{id:"south-africa",name:"Cape Town",country:"South Africa",lat:-33.9249,lon:18.4241,aqi:90,category:"Satisfactory",color:"#10B981",temp:20,humidity:62,windSpeed:16,description:"Atlantic coastal marine layer"},{id:"jakarta-indonesia",name:"Jakarta",country:"Indonesia",lat:-6.2088,lon:106.8456,aqi:78,category:"Satisfactory",color:"#10B981",temp:34,humidity:50,windSpeed:13.2,description:"Tropical urban coastal flow"}];function px(i,e,t){const n=(90-i)*(Math.PI/180),s=(e+180)*(Math.PI/180),r=-(t*Math.sin(n)*Math.cos(s)),a=t*Math.sin(n)*Math.sin(s),o=t*Math.cos(n);return new G(r,o,a)}const mx=({onExploreCity:i,activeView:e="globe",onToggleView:t})=>{const{selectedCityId:n,selectCity:s}=kt(),r=Ie.useRef(null),a=Ie.useRef(null),[o,d]=Ie.useState([]),[l,u]=Ie.useState(1),[p,h]=Ie.useState(!1),f=Ie.useRef(!1),x=Ie.useRef({x:0,y:0}),M=Ie.useRef(null),g=Ie.useRef(null),m=Ie.useRef(null),b=Ie.useRef(null),A=Ie.useRef(null),y=2.4;Ie.useEffect(()=>{const R=a.current;if(!R)return;const D=R.clientWidth,k=R.clientHeight,W=new Vh;M.current=W;const P=new Yt(40,D/k,.1,1e3);P.position.set(0,0,7.6),g.current=P;const V=new fx({antialias:!0,alpha:!0,powerPreference:"high-performance"});V.setSize(D,k),V.setPixelRatio(Math.min(window.devicePixelRatio,2)),V.toneMapping=Ia,V.toneMappingExposure=1.15,R.innerHTML="",R.appendChild(V.domElement),m.current=V;const j=new Di;j.rotation.y=rs.degToRad(-78),j.rotation.x=rs.degToRad(18),W.add(j),b.current=j;const U=new mf,Z=new hi(y,64,64),z="./",K=z.endsWith("/")?z:`${z}/`,te=U.load(`${K}textures/earth-blue-marble.jpg`);te.colorSpace=Ot;const ve=U.load(`${K}textures/earth-specular.jpg`),Ce=new cf({map:te,specularMap:ve,specular:new Ge(2245717),shininess:18}),$=new Jt(Z,Ce);j.add($);const fe=U.load(`${K}textures/earth-lights.png`),_e=new Sc({map:fe,blending:ui,transparent:!0,opacity:.85}),Ae=new Jt(new hi(y*1.002,64,64),_e);j.add(Ae);const pe=U.load(`${K}textures/earth-clouds.png`);pe.colorSpace=Ot;const Le=new hi(y*1.015,64,64),He=new lf({map:pe,transparent:!0,opacity:.55,blending:ui,roughness:.9}),Ee=new Jt(Le,He);j.add(Ee),A.current=Ee;const qe=new hi(y*1.09,64,64),Ke=new Un({uniforms:{glowColor:{value:new Ge(3718648)}},vertexShader:`
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vNormal;
        uniform vec3 glowColor;
        void main() {
          float intensity = pow(0.68 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.6);
          gl_FragColor = vec4(glowColor, intensity * 0.85);
        }
      `,blending:ui,side:Ut,transparent:!0}),Oe=new Jt(qe,Ke);j.add(Oe);const ot=(ht,I,_t,nt,$e)=>{const lt=new tf(0,0,ht,I,0,2*Math.PI,!1,0).getPoints(100),Te=new ln().setFromPoints(lt.map(v=>new G(v.x,v.y,0))),Ne=new Mc({color:$e,transparent:!0,opacity:.45,blending:ui}),w=new Qh(Te,Ne);return w.rotation.x=_t,w.rotation.y=nt,w};j.add(ot(y*1.45,y*1.45,Math.PI/3,Math.PI/6,1096065)),j.add(ot(y*1.35,y*1.35,-Math.PI/4,Math.PI/4,3718648));const at=new _f(988970,1.2);W.add(at);const mt=new hl(16776171,3.2);mt.position.set(-6,4,5),W.add(mt);const tt=new hl(165063,1.8);tt.position.set(6,-3,-2),W.add(tt);const Nt=()=>{if(!R||!V||!P)return;const ht=R.clientWidth,I=R.clientHeight;P.aspect=ht/I,P.updateProjectionMatrix(),V.setSize(ht,I)};window.addEventListener("resize",Nt);let ut,Pt=0;const Lt=()=>{if(ut=requestAnimationFrame(Lt),!f.current&&j&&(j.rotation.y-=.0012),Ee&&(Ee.rotation.y-=.0016),Pt++,Pt%2===0&&R&&P&&j){const ht=R.getBoundingClientRect(),I=[];Gi.forEach(_t=>{const $e=px(_t.lat,_t.lon,y).clone().applyMatrix4(j.matrixWorld);new G().subVectors(new G(0,0,0),P.position),new G().subVectors($e,P.position);const de=$e.clone().normalize(),lt=P.position.clone().sub($e).normalize(),Ne=de.dot(lt)>.05;$e.project(P);const w=($e.x+1)*ht.width/2,v=(-$e.y+1)*ht.height/2;I.push({city:_t,x:w,y:v,isVisible:Ne})}),d(I)}V.render(W,P)};return Lt(),()=>{cancelAnimationFrame(ut),window.removeEventListener("resize",Nt),V.dispose(),R&&(R.innerHTML="")}},[]);const C=Ie.useCallback(R=>{if(!b.current)return;const D=rs.degToRad(-R.lon),k=rs.degToRad(R.lat*.7),W=b.current.rotation.y,P=b.current.rotation.x,V=performance.now(),j=600,U=Z=>{const z=Z-V,K=Math.min(1,z/j),te=K<.5?2*K*K:-1+(4-2*K)*K;b.current&&(b.current.rotation.y=W+(D-W)*te,b.current.rotation.x=P+(k-P)*te),K<1&&requestAnimationFrame(U)};requestAnimationFrame(U)},[]),T=R=>{f.current=!0,h(!0),x.current={x:R.clientX,y:R.clientY},R.target.setPointerCapture(R.pointerId)},_=R=>{if(!f.current||!b.current)return;const D=R.clientX-x.current.x,k=R.clientY-x.current.y;b.current.rotation.y+=D*.005,b.current.rotation.x=Math.max(-.85,Math.min(.85,b.current.rotation.x+k*.005)),x.current={x:R.clientX,y:R.clientY}},E=R=>{f.current=!1,h(!1);try{R.target.releasePointerCapture(R.pointerId)}catch{}},O=R=>{if(!g.current)return;const D=Math.max(5,Math.min(10.5,g.current.position.z+R));g.current.position.z=D,u(+(7.6/D).toFixed(2))};return Gi.find(R=>R.id===n)||Gi[1],c.jsxs("div",{ref:r,className:"relative w-full h-[580px] sm:h-[660px] lg:h-[720px] overflow-hidden select-none",children:[c.jsx("div",{className:"absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-amber-400/30 via-orange-500/20 to-transparent rounded-full blur-3xl pointer-events-none"}),c.jsx("div",{className:"absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/40 rounded-full blur-2xl pointer-events-none"}),c.jsx("div",{ref:a,onPointerDown:T,onPointerMove:_,onPointerUp:E,className:"absolute inset-0 cursor-grab active:cursor-grabbing touch-none z-10"}),c.jsx("div",{className:"absolute inset-0 pointer-events-none z-20 overflow-hidden",children:o.map(({city:R,x:D,y:k,isVisible:W})=>{if(!W)return null;const P=R.id===n;return c.jsxs("div",{style:{left:`${D}px`,top:`${k}px`,transform:"translate(-50%, -50%)"},className:"absolute pointer-events-auto cursor-pointer group",onClick:V=>{V.stopPropagation(),s(R.id),C(R)},children:[c.jsx("div",{className:"absolute -inset-2 rounded-full animate-ping opacity-60",style:{backgroundColor:R.color}}),c.jsx("div",{className:`relative flex items-center justify-center font-extrabold text-[11px] font-mono px-2 py-0.5 rounded-full border shadow-lg transition-transform ${P?"ring-4 ring-emerald-400 scale-125 z-30":"group-hover:scale-115"}`,style:{backgroundColor:`${R.color}`,color:"#FFFFFF",borderColor:"rgba(255, 255, 255, 0.6)",boxShadow:`0 0 16px ${R.color}80`},children:R.aqi}),c.jsx("div",{className:"w-2 h-2 rounded-full mx-auto mt-0.5 shadow-md",style:{backgroundColor:R.color}}),(P||R.id==="jakarta-indonesia")&&c.jsxs("div",{className:"absolute bottom-9 right-4 sm:right-6 w-64 p-3 rounded-2xl bg-slate-900/95 border border-slate-700/80 backdrop-blur-xl shadow-2xl text-left pointer-events-auto animate-in fade-in zoom-in-95 duration-200 z-40",style:{boxShadow:"0 20px 40px rgba(0, 0, 0, 0.7)"},children:[c.jsxs("svg",{className:"absolute -bottom-6 -right-1 w-7 h-7 pointer-events-none",viewBox:"0 0 28 28",children:[c.jsx("path",{d:"M4 2 L22 20",stroke:"white",strokeWidth:"2.5",strokeLinecap:"round"}),c.jsx("circle",{cx:"22",cy:"20",r:"2.5",fill:"white"})]}),c.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold text-slate-300 pb-1.5 border-b border-slate-800",children:[c.jsxs("span",{className:"flex items-center space-x-1",children:[c.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-rose-500"}),c.jsx("span",{className:"font-bold text-white",children:"Jakarta, Indonesia • Air Quality"})]}),c.jsx("button",{onClick:()=>i&&i(R.id),className:"text-[11px] text-slate-400 hover:text-white font-bold ml-1 cursor-pointer",children:"›"})]}),c.jsxs("div",{className:"flex items-center space-x-2 my-2",children:[c.jsx("span",{className:"text-xs font-black px-2 py-0.5 rounded-md text-white font-mono bg-amber-500",children:"137 AQI"}),c.jsx("span",{className:"text-xs font-bold text-slate-200 truncate",children:"Unhealthy for sensitive people"})]}),c.jsxs("div",{className:"flex items-center justify-between text-[11px] text-slate-300 pt-1.5 border-t border-slate-800 font-mono",children:[c.jsx("span",{children:"☀️ 34 °C"}),c.jsx("span",{children:"💧 50%"}),c.jsx("span",{children:"💨 13.2 km/h"})]})]})]},R.id)})}),c.jsxs("div",{className:"absolute bottom-6 inset-x-0 flex items-center justify-center space-x-3 z-30 pointer-events-auto",children:[c.jsxs("div",{className:"flex items-center space-x-1.5 p-1 rounded-full bg-slate-900/85 border border-slate-700/80 backdrop-blur-xl shadow-2xl",children:[c.jsxs("button",{onClick:()=>t&&t("globe"),className:`flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${e==="globe"?"bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 ring-1 ring-emerald-400":"text-slate-400 hover:text-white hover:bg-slate-800/60"}`,children:[c.jsx("span",{className:"text-sm",children:"🧊"}),c.jsx("span",{children:"3D GLOBE"})]}),c.jsxs("button",{onClick:()=>i&&i(n),className:"flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all cursor-pointer",children:[c.jsx("span",{className:"text-sm",children:"🗺️"}),c.jsx("span",{children:"IQ AIR MAP"})]})]}),c.jsxs("div",{className:"flex items-center space-x-1 px-3 py-1.5 rounded-full bg-slate-900/85 border border-slate-700/80 backdrop-blur-xl text-xs font-semibold text-slate-300 shadow-xl",children:[c.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-400 mr-1",children:"Zoom"}),c.jsx("button",{onClick:()=>O(-.8),className:"w-6 h-6 rounded-full hover:bg-slate-800 flex items-center justify-center text-white font-bold cursor-pointer transition-colors",title:"Zoom In",children:"+"}),c.jsx("button",{onClick:()=>O(.8),className:"w-6 h-6 rounded-full hover:bg-slate-800 flex items-center justify-center text-white font-bold cursor-pointer transition-colors",title:"Zoom Out",children:"−"})]}),c.jsx("button",{onClick:()=>{navigator.share&&navigator.share({title:"BreatheWise AI",url:window.location.href}).catch(()=>{})},className:"w-9 h-9 rounded-full bg-slate-900/85 border border-slate-700/80 backdrop-blur-xl flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 shadow-xl cursor-pointer transition-all",title:"Share",children:c.jsx("svg",{className:"w-4 h-4 fill-none stroke-current",strokeWidth:"2",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"})})})]})]})},gx=()=>{const{setActiveTab:i,selectedCityId:e,selectCity:t,setIsTransparencyOpen:n,telemetry:s}=kt(),[r,a]=Ie.useState("India 🇮🇳");Gi.find(f=>f.id==="bengaluru-indiranagar")||Gi[1];const o=78,d="Satisfactory",l="PM2.5",u=13.2,p="25 Jul 2025 • 10:11 AM (IST)",h=f=>{f&&t(f),i("overview")};return c.jsxs("div",{className:"min-h-screen bg-[#070D18] text-slate-100 flex flex-col font-sans relative overflow-x-hidden selection:bg-emerald-500 selection:text-slate-900",children:[c.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#060B16] via-[#091528] to-[#040812] pointer-events-none"}),c.jsxs("div",{className:"absolute bottom-0 inset-x-0 h-72 sm:h-80 pointer-events-none z-0 overflow-hidden",children:[c.jsx("img",{src:"./images/mountain-clouds.png",alt:"Atmospheric landscape clouds",className:"w-full h-full object-cover object-bottom opacity-85 mix-blend-screen"}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#040812] via-transparent to-transparent opacity-90"})]}),c.jsx("header",{className:"relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6",children:c.jsxs("div",{className:"flex items-center justify-between h-16 sm:h-18",children:[c.jsxs("div",{className:"flex items-center space-x-2.5 cursor-pointer",onClick:()=>h(),children:[c.jsx("div",{className:"w-9 h-9 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 shadow-lg shadow-emerald-500/25",children:c.jsx("svg",{className:"w-5 h-5 fill-current",viewBox:"0 0 24 24",children:c.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"})})}),c.jsxs("span",{className:"font-extrabold text-xl text-white tracking-tight",children:["BreatheWise ",c.jsx("span",{className:"text-emerald-400",children:"AI"})]})]}),c.jsxs("nav",{className:"hidden lg:flex items-center space-x-1.5 p-1 rounded-full bg-slate-900/60 border border-slate-800/80 backdrop-blur-md",children:[c.jsx("button",{onClick:()=>i("landing"),className:"px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20 cursor-pointer",children:"Air Quality"}),c.jsx("button",{onClick:()=>h(),className:"px-4 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer",children:"Air Monitors"}),c.jsx("button",{onClick:()=>h(),className:"px-4 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer",children:"Discover"}),c.jsx("button",{onClick:()=>n(!0),className:"px-4 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer",children:"About"}),c.jsx("button",{onClick:()=>n(!0),className:"px-4 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer",children:"Technology"})]}),c.jsx("div",{className:"flex items-center space-x-3",children:c.jsxs("button",{onClick:()=>h(),className:"flex items-center space-x-1.5 px-5 py-2.5 rounded-full text-xs font-extrabold bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 transition-all shadow-lg shadow-emerald-500/25 hover:scale-[1.02] cursor-pointer",children:[c.jsx("span",{children:"Get Started"}),c.jsx(Ol,{className:"w-3.5 h-3.5 stroke-[2.5]"})]})})]})}),c.jsxs("main",{className:"relative z-20 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12",children:[c.jsxs("div",{className:"w-full lg:w-[440px] flex flex-col justify-center space-y-4 sm:space-y-4.5 z-30 text-left",children:[c.jsxs("div",{className:"text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400/90 flex items-center space-x-2",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),c.jsx("span",{children:"GLOBAL AIR INTELLIGENCE"})]}),c.jsxs("h1",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.08]",children:["Air Quality ",c.jsx("span",{className:"text-emerald-400",children:"Index"})]}),c.jsxs("div",{className:"flex items-center space-x-3 text-xs text-slate-300 pt-0.5",children:[c.jsx("span",{className:"w-1 h-4 bg-emerald-500 rounded-full shrink-0"}),c.jsx("span",{className:"font-medium font-mono text-slate-300",children:p}),c.jsx("span",{className:"text-slate-600",children:"|"}),c.jsxs("div",{className:"relative inline-flex items-center space-x-1 font-semibold text-white bg-slate-900/60 px-2.5 py-1 rounded-lg border border-slate-700/60 cursor-pointer",children:[c.jsxs("span",{children:["Location: ",r]}),c.jsx(Sd,{className:"w-3.5 h-3.5 text-slate-400"})]})]}),c.jsxs("div",{className:"relative p-5 rounded-3xl bg-slate-900/75 border border-emerald-500/35 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-emerald-400/60 transition-all",children:[c.jsx("div",{className:"absolute top-2 right-2 w-32 h-20 opacity-70 pointer-events-none",children:c.jsxs("svg",{viewBox:"0 0 120 60",fill:"none",className:"w-full h-full",children:[c.jsx("path",{d:"M0 30 Q 30 10, 60 30 T 120 30",stroke:"#10B981",strokeWidth:"3",fill:"none",className:"animate-pulse"}),c.jsx("path",{d:"M0 38 Q 30 18, 60 38 T 120 38",stroke:"#059669",strokeWidth:"1.5",fill:"none",opacity:"0.6"})]})}),c.jsxs("div",{className:"flex items-center space-x-2 text-xs font-bold text-white mb-3",children:[c.jsx("div",{className:"w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40",children:c.jsx(Ks,{className:"w-3.5 h-3.5"})}),c.jsx("span",{children:"Live Air Snapshot"})]}),c.jsxs("div",{className:"flex items-baseline space-x-3 my-2",children:[c.jsxs("div",{className:"flex flex-col",children:[c.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-slate-400",children:"AQI"}),c.jsx("span",{className:"text-5xl font-black text-emerald-400 tracking-tight font-mono",children:o})]}),c.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-bold bg-emerald-500 text-slate-950 font-sans shadow-md shadow-emerald-500/20",children:d})]}),c.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-300 pt-3 border-t border-slate-800/80 font-medium",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-slate-400",children:"Dominant Pollutant:"})," ",c.jsx("strong",{className:"text-white",children:l})]}),c.jsxs("div",{children:[c.jsx("span",{className:"text-slate-400",children:"Wind:"})," ",c.jsxs("strong",{className:"text-white font-mono",children:[u," km/h"]})]})]})]}),c.jsxs("div",{className:"relative p-5 rounded-3xl bg-slate-900/75 border border-slate-700/60 backdrop-blur-xl shadow-2xl overflow-hidden hover:border-slate-600 transition-all",children:[c.jsxs("div",{className:"flex items-center justify-between mb-3",children:[c.jsxs("div",{className:"flex items-center space-x-2 text-xs font-bold text-white",children:[c.jsx("div",{className:"w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/40",children:c.jsx(Md,{className:"w-3.5 h-3.5"})}),c.jsx("span",{children:"Risk of Pollution"})]}),c.jsxs("button",{onClick:()=>h(),className:"flex items-center space-x-1 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors shadow-md shadow-amber-500/20 cursor-pointer",children:[c.jsx("span",{children:"Details"}),c.jsx("span",{className:"text-xs",children:"→"})]})]}),c.jsxs("div",{className:"flex items-center justify-between my-2",children:[c.jsxs("div",{className:"flex flex-col",children:[c.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-slate-400",children:"Risk"}),c.jsx("span",{className:"text-3xl font-black text-amber-400 tracking-tight font-mono",children:"35%"})]}),c.jsx("div",{className:"flex items-end space-x-1.5 h-8",children:[{h:25,color:"bg-emerald-500"},{h:32,color:"bg-emerald-400"},{h:40,color:"bg-emerald-400"},{h:48,color:"bg-lime-400"},{h:56,color:"bg-yellow-400"},{h:64,color:"bg-amber-400"},{h:72,color:"bg-amber-500"},{h:80,color:"bg-orange-500"},{h:90,color:"bg-orange-600"},{h:100,color:"bg-red-500"}].map((f,x)=>c.jsx("div",{className:`w-2 sm:w-2.5 rounded-xs ${f.color} transition-all shadow-xs`,style:{height:`${f.h}%`,opacity:.95}},x))})]}),c.jsx("p",{className:"text-[11px] text-slate-400 pt-2 border-t border-slate-800/80 leading-relaxed",children:"Moderate risk due to weather conditions"})]}),c.jsxs("div",{className:"flex items-center space-x-2 pt-1 text-slate-400",children:[c.jsx("div",{className:"w-8 h-8 rounded-full bg-slate-900/80 border border-slate-700/80 flex items-center justify-center hover:text-white cursor-pointer transition-colors",children:c.jsx("span",{className:"text-xs font-bold",children:"f"})}),c.jsx("div",{className:"w-8 h-8 rounded-full bg-slate-900/80 border border-slate-700/80 flex items-center justify-center hover:text-white cursor-pointer transition-colors",children:c.jsx("span",{className:"text-xs font-bold",children:"w"})})]})]}),c.jsx("div",{className:"w-full lg:flex-1 flex items-center justify-center relative",children:c.jsx(mx,{onExploreCity:f=>h(f),activeView:"globe",onToggleView:f=>{f==="map"&&h()}})})]})]})},xx=()=>{const{activeTab:i,setActiveTab:e}=kt();return i==="landing"?c.jsxs(c.Fragment,{children:[c.jsx(gx,{}),c.jsx(Uo,{})]}):c.jsxs("div",{className:"min-h-screen bg-[#FAFBF8] flex flex-col font-sans text-slatecharcoal-900 pb-20 md:pb-12 selection:bg-emerald-100 selection:text-emerald-800 relative overflow-x-hidden",children:[c.jsx(yu,{}),c.jsxs("main",{className:"flex-1 max-w-7xl w-full mx-auto px-3.5 sm:px-6 lg:px-8 py-3 sm:py-4 space-y-3.5 sm:space-y-4 overflow-x-hidden",children:[i==="overview"&&c.jsxs("div",{className:"space-y-3.5 sm:space-y-4 animate-in fade-in duration-200",children:[c.jsx(wi,{}),c.jsx(Eu,{}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-4",children:[c.jsx("div",{className:"w-full order-1",children:c.jsx(wu,{})}),c.jsx("div",{className:"w-full order-2",children:c.jsx(Do,{})}),c.jsx("div",{className:"w-full order-4 lg:order-3",children:c.jsx(Po,{})}),c.jsx("div",{className:"w-full order-3 lg:order-4",children:c.jsx(Lo,{})})]})]}),i==="commute"&&c.jsxs("div",{className:"space-y-5 animate-in fade-in duration-200",children:[c.jsx(wi,{}),c.jsx(Po,{})]}),i==="indoor"&&c.jsxs("div",{className:"space-y-5 animate-in fade-in duration-200",children:[c.jsx(wi,{}),c.jsx(Lo,{})]}),i==="simulator"&&c.jsxs("div",{className:"space-y-5 animate-in fade-in duration-200",children:[c.jsx(wi,{}),c.jsx(Do,{})]}),i==="assistant"&&c.jsxs("div",{className:"space-y-5 animate-in fade-in duration-200",children:[c.jsx(wi,{}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-5",children:[c.jsx("div",{className:"lg:col-span-5",children:c.jsx(Au,{})}),c.jsx("div",{className:"lg:col-span-7",children:c.jsx(Nu,{})})]})]})]}),c.jsx(Uo,{}),c.jsx(Pu,{}),c.jsx("footer",{className:"border-t border-cream-200/80 py-8 text-center text-xs text-slate-500 mt-auto bg-cream-50",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("span",{className:"font-bold text-slatecharcoal-900",children:"BreatheWise AI"}),c.jsx("span",{children:"•"}),c.jsx("span",{className:"text-slate-600 font-medium",children:"PromptWars Virtual Challenge 06: Urban Air Quality Assistant"})]}),c.jsx("div",{className:"text-[11px] text-slate-400",children:"Copernicus CAMS Ensemble, Open-Meteo, CPCB Standards & Google Gemini"})]})})]})};Fr.createRoot(document.getElementById("root")).render(c.jsx(bd.StrictMode,{children:c.jsx(bu,{children:c.jsx(xx,{})})}));
