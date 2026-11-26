import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { askBreatheWiseAssistant } from '../services/gemini';
import { ChatMessage } from '../types/ai';
import { 
  Send, 
  Sparkles, 
  User, 
  Bot, 
  Key, 
  ShieldCheck, 
  Trash2, 
  Sun, 
  Coffee, 
  Sunset, 
  Moon, 
  AlertCircle, 
  Check, 
  Leaf,
  MessageSquare
} from 'lucide-react';

export const AiAssistantWorkspace: React.FC = () => {
  const { 
    telemetry, 
    cleanAirWindow, 
    userPreferences, 
    livingPlan, 
    isLoadingPlan, 
    sessionApiKey, 
    setSessionApiKey 
  } = useApp();

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `Hello! I am your BreatheWise Environmental Living Assistant. In ${telemetry.city}, current PM2.5 is ${telemetry.current.pm25} µg/m³ (CPCB NAQI ${telemetry.current.aqi} — ${telemetry.current.aqiCategory}). Today's lowest relative exposure window is ${cleanAirWindow.displayWindow}. How can I assist you in planning your day safely?`,
      timestamp: 'Just now',
      suggestedFollowUps: [
        'Is it safe to go running outdoors today?',
        'When should I open my apartment windows?',
        'Compare metro vs. two-wheeler for my commute',
        'How should I protect my family from today\'s air?',
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
            content: `Hello! I am your BreatheWise Environmental Living Assistant. In ${telemetry.city}, current PM2.5 is ${telemetry.current.pm25} µg/m³ (CPCB NAQI ${telemetry.current.aqi} — ${telemetry.current.aqiCategory}). Today's lowest relative exposure window is ${cleanAirWindow.displayWindow}. How can I assist you in planning your day safely?`,
          },
        ];
      }
      return prev;
    });
  }, [telemetry.city, telemetry.current.pm25, telemetry.current.aqi, telemetry.current.aqiCategory, cleanAirWindow.displayWindow]);

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
    } catch {
      const errReply: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        content: `I apologize, but I encountered an error synthesizing guidance. Today's lowest relative exposure window is ${cleanAirWindow.displayWindow}. Keep windows sealed during morning stagnation.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errReply]);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case 'SAFE':
        return (
          <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs">
            <span>SAFE</span>
          </span>
        );
      case 'MODERATE':
        return (
          <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-50 text-amber-800 border border-amber-200 shadow-2xs">
            <span>MODERATE</span>
          </span>
        );
      case 'HIGH':
        return (
          <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-orange-50 text-orange-800 border border-orange-200 shadow-2xs">
            <span>ELEVATED</span>
          </span>
        );
      case 'CRITICAL':
        return (
          <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-rose-50 text-rose-800 border border-rose-200 shadow-2xs">
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

  return (
    <div className="space-y-4 animate-in fade-in duration-200">
      
      {/* 1. Top Adaptive Routine Ribbon: 4 Clean Time Slots */}
      {livingPlan && (
        <div className="bg-white rounded-3xl border border-stone-200/80 p-4 sm:p-5 shadow-2xs space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-stone-100">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100 shrink-0">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-slatecharcoal-900 tracking-tight">
                  Adaptive Daily Living Routine
                </h3>
                <p className="text-[10px] sm:text-[11px] text-slate-500">
                  Calibrated for <strong className="text-emerald-800">{telemetry.city}</strong> diurnal conditions
                </p>
              </div>
            </div>

            <div className="text-[10px] text-slate-500 font-mono bg-stone-100/70 px-2.5 py-1 rounded-full border border-stone-200/60 self-start sm:self-auto">
              Confidence: {livingPlan.scientificConfidence}
            </div>
          </div>

          {/* 4 Responsive Routine Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {livingPlan.dailyRoutine.map((slot, idx) => (
              <div
                key={idx}
                className="p-3 rounded-2xl border border-stone-200/80 bg-stone-50/50 hover:bg-white hover:border-emerald-300 transition-all flex flex-col justify-between space-y-2 group shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5 text-slate-700 font-bold text-xs">
                    <span className="w-6 h-6 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-emerald-700 shadow-2xs">
                      {getSlotIcon(idx)}
                    </span>
                    <span className="font-mono text-[11px]">{slot.timeSlot}</span>
                  </div>
                  {getRiskBadge(slot.exposureRisk)}
                </div>

                <div>
                  <div className="text-xs font-bold text-slatecharcoal-900 leading-tight">
                    {slot.activityName}
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed mt-1 line-clamp-2">
                    {slot.directive}
                  </p>
                </div>

                <button
                  onClick={() => handleSend(`How should I adjust my routine for the ${slot.timeSlot} (${slot.activityName}) window?`)}
                  className="w-full text-center text-[10px] font-bold text-emerald-800 bg-white hover:bg-emerald-50 py-1.5 px-2 rounded-xl border border-stone-200/80 transition-colors shadow-2xs cursor-pointer"
                >
                  Ask AI About This Window →
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. Primary Conversational Workspace */}
      <div className="bg-white rounded-3xl border border-stone-200/80 shadow-2xs flex flex-col min-h-[480px] max-h-[640px] overflow-hidden">
        
        {/* Chat Workspace Header */}
        <div className="p-4 sm:p-4.5 border-b border-stone-100 flex items-center justify-between bg-stone-50/50">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-700 text-white flex items-center justify-center shadow-2xs">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-slatecharcoal-900">
                BreatheWise AI Living Assistant
              </h3>
              <p className="text-[10px] sm:text-[11px] text-slate-500">
                {sessionApiKey ? 'Gemini 2.0 Flash Active' : 'Deterministic Protocol + Synthesis'} • {telemetry.city}
              </p>
            </div>
          </div>

          {/* Key Config Button */}
          <button
            onClick={() => setShowKeyModal(!showKeyModal)}
            className={`text-xs flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border transition-all cursor-pointer font-medium ${
              sessionApiKey
                ? 'bg-emerald-50 border-emerald-300 text-emerald-800 shadow-2xs'
                : 'border-stone-200 hover:bg-stone-100 text-slate-600 bg-white shadow-2xs'
            }`}
            title="Configure optional temporary Google Gemini API Key"
          >
            <Key className="w-3.5 h-3.5 text-emerald-700" />
            <span className="hidden sm:inline">{sessionApiKey ? 'Gemini Key Active' : 'Gemini Key (Optional)'}</span>
          </button>
        </div>

        {/* API Key Modal Drawer */}
        {showKeyModal && (
          <div className="p-3.5 bg-emerald-50/70 border-b border-emerald-200/80 text-xs space-y-2 animate-in fade-in">
            <div className="flex justify-between items-center">
              <span className="font-bold text-emerald-950 flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Session-Only Gemini API Key</span>
              </span>
              <button
                onClick={() => setShowKeyModal(false)}
                className="text-slate-500 hover:text-slate-800 font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <p className="text-emerald-900 text-[11px] leading-relaxed">
              BreatheWise operates with full deterministic models out of the box. Key is stored strictly in temporary session memory and wiped on tab close.
            </p>
            <div className="flex space-x-2">
              <input
                type="password"
                placeholder="AIzaSy..."
                value={tempApiKey}
                onChange={(e) => setTempApiKey(e.target.value)}
                className="flex-1 px-3 py-1.5 text-xs bg-white border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono shadow-2xs"
              />
              <button
                onClick={() => {
                  setSessionApiKey(tempApiKey.trim());
                  setShowKeyModal(false);
                }}
                className="px-4 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold text-xs shadow-2xs transition-colors cursor-pointer"
              >
                Save
              </button>
              {sessionApiKey && (
                <button
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

        {/* Messages Scroll Area */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-3.5 text-xs">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex items-start space-x-2.5 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.role === 'assistant' && (
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`p-3.5 sm:p-4 rounded-2xl max-w-[88%] sm:max-w-[78%] leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-emerald-800 text-white rounded-tr-none shadow-2xs'
                    : 'bg-stone-50/90 text-slatecharcoal-900 rounded-tl-none border border-stone-200/80 shadow-2xs'
                }`}
              >
                <div className="whitespace-pre-wrap">{m.content}</div>

                {m.suggestedFollowUps && m.suggestedFollowUps.length > 0 && (
                  <div className="mt-3 pt-2.5 border-t border-stone-200/70 space-y-1.5">
                    <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      Suggested Inquiries:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {m.suggestedFollowUps.map((prompt, pIdx) => (
                        <button
                          key={pIdx}
                          onClick={() => handleSend(prompt)}
                          className="text-left text-[10px] sm:text-[11px] bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 px-2.5 py-1 rounded-lg border border-stone-200 shadow-2xs transition-all cursor-pointer font-medium"
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div
                  className={`text-[9px] mt-1 text-right ${
                    m.role === 'user' ? 'text-emerald-200' : 'text-slate-400'
                  }`}
                >
                  {m.timestamp}
                </div>
              </div>

              {m.role === 'user' && (
                <div className="w-7 h-7 rounded-full bg-slatecharcoal-800 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isSubmitting && (
            <div className="flex items-center space-x-2 text-slate-500 text-xs italic p-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping mr-1" />
              Evaluating atmospheric telemetry and physiological guidelines...
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 border-t border-stone-100 bg-white">
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
              placeholder="Ask about workout timing, mask selection, ventilation windows..."
              className="flex-1 bg-stone-50 border border-stone-200 rounded-2xl px-4 py-2.5 text-xs text-slatecharcoal-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim() || isSubmitting}
              aria-label="Send message"
              className="bg-emerald-700 hover:bg-emerald-800 disabled:opacity-40 text-white p-2.5 sm:p-3 rounded-2xl shadow-2xs transition-all shrink-0 cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>

      {/* 3. Supporting Strategies: Indoor Protocol & Civic Eco-Swap */}
      {livingPlan && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div className="bg-white p-4 rounded-2xl border border-stone-200/80 text-xs space-y-1.5 shadow-2xs">
            <div className="font-semibold text-slatecharcoal-900 flex items-center space-x-2">
              <div className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Check className="w-3 h-3" />
              </div>
              <span className="font-bold">Indoor Envelope Protocol</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-[11px] pl-7">
              {livingPlan.indoorProtocol}
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-stone-200/80 text-xs space-y-1.5 shadow-2xs">
            <div className="font-semibold text-slatecharcoal-900 flex items-center space-x-2">
              <div className="w-5 h-5 rounded-md bg-teal-100 text-teal-800 flex items-center justify-center">
                <Leaf className="w-3 h-3" />
              </div>
              <span className="font-bold">Civic Eco-Swap Action</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-[11px] pl-7">
              {livingPlan.ecoActionOfTheDay}
            </p>
          </div>
        </div>
      )}

    </div>
  );
};
