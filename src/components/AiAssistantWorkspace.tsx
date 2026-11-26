import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { askBreatheWiseAssistant } from '../services/gemini';
import { ChatMessage } from '../types/ai';
import {
  Send,
  User,
  SlidersHorizontal,
  ShieldCheck,
  Trash2,
  Activity,
  Home,
  Shield,
  HelpCircle,
  Radio,
} from 'lucide-react';

export const AiAssistantWorkspace: React.FC = () => {
  const {
    telemetry,
    cleanAirWindow,
    userPreferences,
    sessionApiKey,
    setSessionApiKey,
    scenarioState,
  } = useApp();

  const isUnavailable = Boolean(telemetry.metadata.isUnavailable);
  const cityShort = telemetry.city.includes('—') ? telemetry.city.split('—')[0].trim() : telemetry.city;

  const getWelcomeContent = () => {
    if (isUnavailable) {
      return `Live atmospheric measurements are unavailable for ${telemetry.city}, ${telemetry.state}. Ask any exposure-protection question or select a monitoring station in the header.`;
    }
    return `Based on the current air quality in ${cityShort}:\n• Current AQI: ${telemetry.current.aqi} (${telemetry.current.aqiCategory}, driven by ${telemetry.current.primaryPollutant})\n• PM₂.₅: ${telemetry.current.pm25} µg/m³\n• Optimal Exposure Window: ${cleanAirWindow.displayWindow}\n• Ask me about exercise timing, masks, indoor air, or AQI drivers.`;
  };

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: getWelcomeContent(),
      timestamp: 'Just now',
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
        return [{ ...prev[0], content: getWelcomeContent() }];
      }
      return prev;
    });
  }, [telemetry.city, telemetry.current.pm25, telemetry.current.aqi, telemetry.current.aqiCategory, telemetry.current.primaryPollutant, cleanAirWindow.displayWindow, isUnavailable]);

  useEffect(() => {
    if (messages.length > 1) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const buildScenarioSummary = () => {
    const c = scenarioState.commute;
    const i = scenarioState.indoor;
    const e = scenarioState.exposure;
    return `Commute: ${c.origin} -> ${c.destination} (${c.distanceKm} km via ${c.mode}); Indoor: ${i.roomType} ${i.roomAreaM2}m² at ${i.ventilationAch} ACH, Purifier ${i.usingPurifier ? `ON (${i.purifierCadr} m³/h CADR)` : 'OFF'}, Source=${i.indoorSource}; Exposure: ${e.activity} for ${e.durationMinutes} min, Mask=${e.maskType}.`;
  };

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
        sessionApiKey,
        buildScenarioSummary()
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

  const quickQuestions = [
    {
      label: 'Is it safe to exercise today?',
      icon: <Activity className="w-4 h-4 text-[#0284C7]" />,
      bg: 'bg-[#E0F2FE]',
    },
    {
      label: 'How can I reduce indoor pollution?',
      icon: <Home className="w-4 h-4 text-[#16A34A]" />,
      bg: 'bg-[#DCFCE7]',
    },
    {
      label: 'Which mask is best?',
      icon: <Shield className="w-4 h-4 text-[#2563EB]" />,
      bg: 'bg-[#DBEAFE]',
    },
    {
      label: 'Why is AQI high when PM2.5 is low?',
      icon: <HelpCircle className="w-4 h-4 text-[#0D9488]" />,
      bg: 'bg-[#CCFBF1]',
    },
    {
      label: 'Is this based on live data?',
      icon: <Radio className="w-4 h-4 text-[#D97706]" />,
      bg: 'bg-[#FEF3C7]',
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch animate-in fade-in duration-200">
      {/* Main Conversational Panel (8 Columns) */}
      <div className="lg:col-span-8 rounded-2xl bg-white/88 backdrop-blur-md border border-white/95 shadow-[0_10px_28px_-8px_rgba(15,44,76,0.1)] flex flex-col min-h-[430px] max-h-[540px] overflow-hidden">
        {/* Collapsible Session API Key Panel (triggered via bottom-left sliders icon) */}
        {showKeyModal && (
          <div className="p-3.5 bg-[#F0F7FD] border-b border-[#CBE0F2] text-xs space-y-2 animate-in fade-in">
            <div className="flex justify-between items-center">
              <span className="font-bold text-[#0C2340] flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0EA5E9]" />
                <span>Session-Only Gemini API Key {sessionApiKey ? '(Active)' : '(Optional)'}</span>
              </span>
              <button
                type="button"
                onClick={() => setShowKeyModal(false)}
                className="text-[#5A7896] hover:text-[#0C2340] font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <p className="text-[#476788] text-[11px]">
              Stored only in volatile session memory and cleared when you close the tab.
            </p>
            <div className="flex space-x-2">
              <input
                type="password"
                placeholder="AIzaSy..."
                value={tempApiKey}
                onChange={(e) => setTempApiKey(e.target.value)}
                className="flex-1 px-3 py-1.5 text-xs bg-white border border-[#CBE0F2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30 font-mono"
              />
              <button
                type="button"
                onClick={() => {
                  setSessionApiKey(tempApiKey.trim());
                  setShowKeyModal(false);
                }}
                className="px-4 py-1.5 bg-[#0EA5E9] hover:bg-[#0284C7] text-white rounded-xl font-bold text-xs cursor-pointer"
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

        {/* Chat Messages Feed */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4 text-[13px]">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex items-start space-x-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.role === 'assistant' && (
                <div className="w-9 h-9 rounded-full bg-gradient-to-b from-[#38BDF8] to-[#0284C7] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                  </svg>
                </div>
              )}

              <div
                className={`p-4 rounded-2xl max-w-[85%] sm:max-w-[80%] leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] text-white shadow-sm font-medium'
                    : 'bg-white/95 text-[#0C2340] border border-[#E6F1FA] shadow-2xs'
                }`}
              >
                {m.role === 'assistant' && (
                  <div className="font-extrabold text-[#0C2340] mb-1.5">
                    BreatheWise <span className="text-[#10B981]">AI</span>
                  </div>
                )}
                <div className="whitespace-pre-wrap">{m.content}</div>
              </div>

              {m.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#38BDF8] to-[#0284C7] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isSubmitting && (
            <div className="flex items-center space-x-2 text-[#476788] text-xs italic p-2">
              <span className="w-2 h-2 rounded-full bg-[#0EA5E9] animate-ping mr-1" />
              Evaluating live telemetry and guidelines...
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Bottom Input Bar Matching Image 8 */}
        <div className="p-3.5 border-t border-[#E6F1FA] bg-white/85">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center space-x-2"
          >
            <button
              type="button"
              onClick={() => setShowKeyModal((prev) => !prev)}
              aria-label="Gemini API Key Settings"
              title={sessionApiKey ? 'Gemini Key Active (Click to manage)' : 'Optional Session Gemini Key'}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer shrink-0 ${
                sessionApiKey || showKeyModal
                  ? 'bg-[#E0F2FE] border-[#0EA5E9] text-[#0284C7]'
                  : 'bg-white border-[#DCEBF7] text-[#476788] hover:text-[#0C2340]'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about air quality, health tips, or exposure..."
              className="flex-1 bg-white border border-[#DCEBF7] rounded-xl px-4 py-2.5 text-xs text-[#0C2340] placeholder:text-[#7B97B2] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/25 focus:border-[#0EA5E9] transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim() || isSubmitting}
              aria-label="Send question"
              className="p-2.5 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] hover:brightness-105 disabled:opacity-45 text-white transition-all cursor-pointer shadow-sm shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Right Column: Quick Questions (4 Columns) Matching Image 8 */}
      <div className="lg:col-span-4 rounded-2xl bg-white/88 backdrop-blur-md border border-white/95 p-5 shadow-[0_10px_28px_-8px_rgba(15,44,76,0.1)] flex flex-col space-y-3">
        <h2 className="text-[15px] font-extrabold text-[#0C2340]">
          Quick Questions
        </h2>

        <div className="space-y-2.5 flex-1 flex flex-col justify-center">
          {quickQuestions.map((q) => (
            <button
              key={q.label}
              type="button"
              onClick={() => handleSend(q.label)}
              disabled={isSubmitting}
              className="w-full px-3.5 py-3 rounded-xl bg-white/95 hover:bg-white border border-[#E6F1FA] hover:border-[#0EA5E9]/60 flex items-center space-x-3 transition-all cursor-pointer text-left shadow-2xs"
            >
              <div className={`w-8 h-8 rounded-lg ${q.bg} flex items-center justify-center shrink-0`}>
                {q.icon}
              </div>
              <span className="text-xs font-bold text-[#0C2340] leading-snug">
                {q.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
