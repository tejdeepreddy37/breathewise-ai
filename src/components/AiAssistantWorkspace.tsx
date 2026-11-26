import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { askBreatheWiseAssistant } from '../services/gemini';
import { ChatMessage } from '../types/ai';
import {
  Send,
  User,
  Key,
  ShieldCheck,
  Trash2,
  ChevronRight,
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
      return `Live telemetry is currently unavailable for ${telemetry.city}, ${telemetry.state}. Ask any general protection question or switch to a calibrated monitoring station in the header.`;
    }
    return `Based on the current environmental readings in ${cityShort}:\n• Current AQI: ${telemetry.current.aqi} (${telemetry.current.aqiCategory}, driven by ${telemetry.current.primaryPollutant})\n• PM2.5: ${telemetry.current.pm25} µg/m³\n• Optimal Exposure Window: ${cleanAirWindow.displayWindow}\n• How can I help you plan safely today?`;
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
    'Is it safe to exercise today?',
    'How can I reduce indoor pollution?',
    'Which mask is best?',
    'Why is AQI high when PM2.5 is low?',
    'Is this based on live data?',
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch animate-in fade-in duration-200">
      {/* Main Conversational Panel (8 Columns) */}
      <div className="lg:col-span-8 rounded-3xl bg-white/85 backdrop-blur-md border border-white shadow-soft flex flex-col min-h-[460px] max-h-[600px] overflow-hidden">
        {/* Compact Top Provenance / Key Header */}
        <div className="px-5 py-3 border-b border-[#E2EFFA] flex items-center justify-between bg-[#F4F9FE]/70">
          <div className="text-xs font-bold text-[#334E68]">
            {sessionApiKey ? 'Gemini 2.0 Flash Grounded' : 'Grounded Deterministic Advisor'} •{' '}
            <span className="text-[#0C2340]">{cityShort}</span>
          </div>

          <button
            type="button"
            onClick={() => setShowKeyModal(!showKeyModal)}
            className={`text-[11px] flex items-center space-x-1.5 px-3 py-1 rounded-full border transition-all cursor-pointer font-bold ${
              sessionApiKey
                ? 'bg-[#E0F2FE] border-[#0EA5E9] text-[#0369A1]'
                : 'bg-white border-[#CBE0F2] hover:bg-[#F0F7FD] text-[#476788]'
            }`}
            title="Optional temporary Gemini API key"
          >
            <Key className="w-3 h-3 text-[#0EA5E9]" />
            <span>{sessionApiKey ? 'Gemini Key Active' : 'Gemini Key (Optional)'}</span>
          </button>
        </div>

        {/* Optional Session API Key Drawer */}
        {showKeyModal && (
          <div className="p-3.5 bg-[#F0F7FD] border-b border-[#CBE0F2] text-xs space-y-2 animate-in fade-in">
            <div className="flex justify-between items-center">
              <span className="font-bold text-[#0C2340] flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0EA5E9]" />
                <span>Session-Only Gemini API Key</span>
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
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 text-xs">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex items-start space-x-2.5 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#38BDF8] to-[#0284C7] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                  </svg>
                </div>
              )}

              <div
                className={`p-4 rounded-2xl max-w-[85%] sm:max-w-[78%] leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-[#0EA5E9] text-white rounded-tr-sm shadow-xs font-medium'
                    : 'bg-[#F4F9FE] text-[#0C2340] rounded-tl-sm border border-[#D6E7F5]'
                }`}
              >
                {m.role === 'assistant' && (
                  <div className="font-extrabold text-[#0C2340] mb-1 flex items-center justify-between">
                    <span>BreatheWise <span className="text-[#10B981]">AI</span></span>
                  </div>
                )}
                <div className="whitespace-pre-wrap">{m.content}</div>
              </div>

              {m.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-white border border-[#CBE0F2] text-[#0EA5E9] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
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

        {/* Input Bar */}
        <div className="p-3.5 sm:p-4 border-t border-[#E2EFFA] bg-white/90">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center space-x-2.5"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about air quality, health tips, or exposure..."
              className="flex-1 bg-[#F4F9FE] border border-[#CBE0F2] rounded-xl px-4 py-2.5 text-xs text-[#0C2340] placeholder:text-[#7B97B2] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/25 focus:border-[#0EA5E9] transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim() || isSubmitting}
              aria-label="Send message"
              className="w-10 h-10 rounded-xl bg-[#0EA5E9] hover:bg-[#0284C7] disabled:opacity-40 text-white flex items-center justify-center shadow-sm transition-all shrink-0 cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Right Sidebar: Quick Questions (4 Columns) */}
      <div className="lg:col-span-4 rounded-3xl bg-white/85 backdrop-blur-md border border-white p-5 shadow-soft flex flex-col space-y-3">
        <h2 className="text-sm sm:text-base font-extrabold text-[#0C2340]">
          Quick Questions
        </h2>

        <div className="space-y-2.5 flex-1">
          {quickQuestions.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => handleSend(q)}
              className="w-full p-3.5 rounded-2xl bg-[#F4F9FE] hover:bg-white border border-[#D6E7F5] hover:border-[#0EA5E9] flex items-center justify-between gap-2 text-left text-xs font-bold text-[#1E3A5F] hover:text-[#0C2340] transition-all cursor-pointer shadow-2xs"
            >
              <span>{q}</span>
              <ChevronRight className="w-4 h-4 text-[#5A7896] shrink-0" />
            </button>
          ))}
        </div>

        <div className="pt-3 border-t border-[#E2EFFA] text-[10px] text-[#5A7896] leading-relaxed">
          Context-aware responses use your selected Indian location, data provenance, vulnerability profile, and active Commute, Indoor, and Exposure parameters.
        </div>
      </div>
    </div>
  );
};
