import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { askBreatheWiseAssistant } from '../services/gemini';
import { ChatMessage } from '../types/ai';
import {
  ArrowRight,
  User,
  Bot,
  Key,
  ShieldCheck,
  Trash2,
  Sun,
  Coffee,
  Sunset,
  Moon,
  MessageSquare,
} from 'lucide-react';

export const AiAssistantWorkspace: React.FC = () => {
  const {
    telemetry,
    cleanAirWindow,
    userPreferences,
    livingPlan,
    sessionApiKey,
    setSessionApiKey,
  } = useApp();

  const cityShort = telemetry.city.includes('—') ? telemetry.city.split('—')[0].trim() : telemetry.city;

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `How can I help you with your air quality and daily routine today? In ${cityShort}, current PM2.5 is ${telemetry.current.pm25} µg/m³ (CPCB NAQI ${telemetry.current.aqi} — ${telemetry.current.aqiCategory}, driven by ${telemetry.current.primaryPollutant}).`,
      timestamp: 'Just now',
      suggestedFollowUps: [
        'Is it safe to exercise now?',
        'When should I open my windows?',
        'What mask should I use today?',
        'Plan my day for cleaner air',
      ],
    },
  ]);

  const [input, setInput] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showKeyModal, setShowKeyModal] = useState<boolean>(false);
  const [tempApiKey, setTempApiKey] = useState<string>(sessionApiKey || '');

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === 'welcome') {
        return [
          {
            ...prev[0],
            content: `How can I help you with your air quality and daily routine today? In ${cityShort}, current PM2.5 is ${telemetry.current.pm25} µg/m³ (CPCB NAQI ${telemetry.current.aqi} — ${telemetry.current.aqiCategory}, driven by ${telemetry.current.primaryPollutant}).`,
          },
        ];
      }
      return prev;
    });
  }, [cityShort, telemetry.current.pm25, telemetry.current.aqi, telemetry.current.aqiCategory, telemetry.current.primaryPollutant]);

  useEffect(() => {
    if (messages.length > 1) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = async (questionText?: string) => {
    const q = questionText || input;
    if (!q.trim() || isSubmitting) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: q.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsSubmitting(true);

    try {
      const answer = await askBreatheWiseAssistant(
        q,
        messages,
        telemetry,
        cleanAirWindow,
        userPreferences.vulnerabilityProfile,
        sessionApiKey
      );

      const botMsg: ChatMessage = {
        id: `b-${Date.now()}`,
        role: 'assistant',
        content: answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSlotCardStyle = (risk: string) => {
    switch (risk) {
      case 'SAFE':
        return {
          card: 'bg-[#ECFDF5] border-[#A7F3D0]',
          badge: 'bg-[#D1FAE5] text-[#065F46] border-[#6EE7B7]',
          label: 'SAFE',
        };
      case 'MODERATE':
        return {
          card: 'bg-[#FEF9E7] border-[#FDE68A]',
          badge: 'bg-[#FEF3C7] text-[#92400E] border-[#FCD34D]',
          label: 'MODERATE',
        };
      case 'HIGH':
        return {
          card: 'bg-[#FFF7ED] border-[#FED7AA]',
          badge: 'bg-[#FFEDD5] text-[#9A3412] border-[#FDBA74]',
          label: 'ELEVATED',
        };
      case 'CRITICAL':
      default:
        return {
          card: 'bg-[#FFF5F5] border-rose-200',
          badge: 'bg-rose-100 text-rose-800 border-rose-300',
          label: 'HAZARDOUS',
        };
    }
  };

  const getSlotIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Sun className="w-4 h-4 text-amber-500" />;
      case 1:
        return <Coffee className="w-4 h-4 text-[#059669]" />;
      case 2:
        return <Sunset className="w-4 h-4 text-orange-500" />;
      case 3:
      default:
        return <Moon className="w-4 h-4 text-[#0284C7]" />;
    }
  };

  return (
    <div className="space-y-4 animate-in fade-in duration-200">
      {/* 1. Adaptive Daily Living Routine Timeline Strip (Matches Reference Panel 6) */}
      {livingPlan && (
        <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-[#CBE0F2] p-4 sm:p-5 shadow-soft space-y-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-sm sm:text-base font-extrabold text-[#0C2D57] tracking-tight">
              Adaptive Daily Living Routine ({cityShort})
            </h3>
            <span className="text-[10px] font-bold text-[#476788] bg-[#F0F7FD] px-2.5 py-1 rounded-full border border-[#CBE0F2]">
              {livingPlan.scientificConfidence}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {livingPlan.dailyRoutine.map((slot, idx) => {
              const style = getSlotCardStyle(slot.exposureRisk);
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSend(`How should I adjust my routine for the ${slot.timeSlot} (${slot.activityName}) window?`)}
                  className={`p-4 rounded-2xl border text-center flex flex-col items-center justify-between space-y-2 transition-all hover:scale-[1.01] cursor-pointer shadow-2xs ${style.card}`}
                  title={slot.directive}
                >
                  <div className="w-8 h-8 rounded-full bg-white/90 border border-black/5 flex items-center justify-center shadow-2xs">
                    {getSlotIcon(idx)}
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-xs font-black font-mono text-[#0C2D57]">{slot.timeSlot}</div>
                    <div className="text-[11px] font-bold text-[#365779] line-clamp-1">{slot.activityName}</div>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider border ${style.badge}`}>
                    {style.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. Conversational AI Workspace (Matches Reference Panel 6 Bottom) */}
      <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-[#CBE0F2] shadow-soft flex flex-col min-h-[380px] max-h-[560px] overflow-hidden">
        {/* Top Bar */}
        <div className="px-4 sm:px-5 py-3 border-b border-[#E2EFFA] flex items-center justify-between bg-[#F4F9FE]">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#0284C7] text-white flex items-center justify-center shadow-2xs">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-extrabold text-[#0C2D57]">
                BreatheWise AI Advisor
              </h3>
              <p className="text-[10px] sm:text-[11px] text-[#476788]">
                {sessionApiKey ? 'Gemini 2.0 Flash Active' : 'Grounded Deterministic Advisor'} • {cityShort}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowKeyModal(!showKeyModal)}
            className={`text-xs flex items-center space-x-1.5 px-3 py-1.5 rounded-full border transition-all cursor-pointer font-semibold ${
              sessionApiKey
                ? 'bg-[#E6F4FA] border-[#0284C7] text-[#0369A1]'
                : 'bg-white border-[#CBE0F2] hover:bg-[#F0F7FD] text-[#365779]'
            }`}
            title="Configure optional session-only Google Gemini API Key"
          >
            <Key className="w-3.5 h-3.5 text-[#0891B2]" />
            <span className="hidden sm:inline">{sessionApiKey ? 'Gemini Key Active' : 'Gemini Key'}</span>
          </button>
        </div>

        {/* Optional Session API Key Drawer */}
        {showKeyModal && (
          <div className="p-3.5 bg-[#F0F7FD] border-b border-[#CBE0F2] text-xs space-y-2 animate-in fade-in">
            <div className="flex justify-between items-center">
              <span className="font-bold text-[#0C2D57] flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0284C7]" />
                <span>Session-Only Gemini API Key</span>
              </span>
              <button
                type="button"
                onClick={() => setShowKeyModal(false)}
                className="text-[#5A7896] hover:text-[#0C2D57] font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <p className="text-[#365779] text-[11px]">
              Stored only in temporary session memory and wiped on tab close. Without a key, BreatheWise uses its deterministic scientific advisor.
            </p>
            <div className="flex space-x-2">
              <input
                type="password"
                placeholder="AIzaSy..."
                value={tempApiKey}
                onChange={(e) => setTempApiKey(e.target.value)}
                className="flex-1 px-3 py-1.5 text-xs bg-white border border-[#CBE0F2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0284C7]/30 font-mono"
              />
              <button
                type="button"
                onClick={() => {
                  setSessionApiKey(tempApiKey.trim());
                  setShowKeyModal(false);
                }}
                className="px-4 py-1.5 bg-[#0284C7] hover:bg-[#0369A1] text-white rounded-xl font-bold text-xs cursor-pointer"
              >
                Save
              </button>
              {sessionApiKey && (
                <button
                  type="button"
                  onClick={() => {
                    setSessionApiKey('');
                    setTempApiKey('');
                    setShowKeyModal(false);
                  }}
                  className="px-3 py-1.5 bg-white border border-rose-200 text-rose-700 rounded-xl font-medium text-xs hover:bg-rose-50 cursor-pointer"
                  title="Remove Key"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Messages Area */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-3.5 text-xs">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex items-start space-x-2.5 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.role === 'assistant' && (
                <div className="w-7 h-7 rounded-full bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD] flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`p-3.5 sm:p-4 rounded-2xl max-w-[88%] sm:max-w-[80%] leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-[#0284C7] text-white rounded-tr-none shadow-xs'
                    : 'bg-[#F4F9FE] text-[#0F2C4C] rounded-tl-none border border-[#D6E7F5]'
                }`}
              >
                <div className="whitespace-pre-wrap">{m.content}</div>

                {m.suggestedFollowUps && m.suggestedFollowUps.length > 0 && (
                  <div className="mt-3 pt-2.5 border-t border-[#D6E7F5] flex flex-wrap gap-1.5">
                    {m.suggestedFollowUps.map((prompt, pIdx) => (
                      <button
                        key={pIdx}
                        type="button"
                        onClick={() => handleSend(prompt)}
                        className="text-left text-[11px] bg-white hover:bg-[#E0F2FE] text-[#0369A1] px-3 py-1.5 rounded-full border border-[#BAE6FD] shadow-2xs transition-all cursor-pointer font-semibold"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                )}

                <div className={`text-[9px] mt-1.5 text-right ${m.role === 'user' ? 'text-sky-100' : 'text-[#5A7896]'}`}>
                  {m.timestamp}
                </div>
              </div>

              {m.role === 'user' && (
                <div className="w-7 h-7 rounded-full bg-[#0C2D57] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isSubmitting && (
            <div className="flex items-center space-x-2 text-[#476788] text-xs italic p-2">
              <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-ping mr-1" />
              Evaluating atmospheric telemetry and safety thresholds...
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 border-t border-[#E2EFFA] bg-white">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center space-x-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about exercise timing, windows, masks, or live data provenance..."
              className="flex-1 bg-[#F4F9FE] border border-[#CBE0F2] rounded-full px-4 py-2.5 text-xs text-[#0F2C4C] placeholder:text-[#7B97B2] focus:outline-none focus:ring-2 focus:ring-[#0284C7]/25 focus:border-[#0284C7] transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim() || isSubmitting}
              aria-label="Send message"
              className="w-10 h-10 rounded-full bg-[#0284C7] hover:bg-[#0369A1] disabled:opacity-40 text-white flex items-center justify-center shadow-sm transition-all shrink-0 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
