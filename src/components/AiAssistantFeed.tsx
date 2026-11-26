import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { askBreatheWiseAssistant } from '../services/gemini';
import { ChatMessage } from '../types/ai';
import { Send, Sparkles, User, Bot, Key, ShieldCheck, Trash2, ArrowRight } from 'lucide-react';

export const AiAssistantFeed: React.FC = () => {
  const { telemetry, cleanAirWindow, userPreferences, sessionApiKey, setSessionApiKey } = useApp();

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `Hello! I am your BreatheWise Environmental Living Assistant. In ${telemetry.city}, current PM2.5 is ${telemetry.current.pm25} µg/m³ (CPCB NAQI ${telemetry.current.aqi} — ${telemetry.current.aqiCategory}). Today's lowest relative exposure window is ${cleanAirWindow.displayWindow}. How can I assist you in planning your day safely?`,
      timestamp: 'Just now',
      suggestedFollowUps: [
        'Is it safe to go running today?',
        'Can I open my apartment windows right now?',
        'Compare metro vs. two-wheeler for my commute',
        'How should I protect my child from today\'s air?',
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
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
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
    } catch (err) {
      const errReply: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        content: 'I apologize, but I encountered an error synthesizing guidance. Today\'s lowest relative exposure window is ' + cleanAirWindow.displayWindow + '.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errReply]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-cream-200/80 shadow-soft flex flex-col h-[600px] overflow-hidden">
      
      {/* Chat Header */}
      <div className="p-4 sm:p-5 border-b border-cream-200/60 flex items-center justify-between bg-cream-50/40">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-xl bg-forest-600 text-white flex items-center justify-center shadow-2xs">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-slatecharcoal-900">
              BreatheWise Living Assistant
            </h3>
            <p className="text-[11px] text-slate-500 truncate max-w-[190px] sm:max-w-none">
              {sessionApiKey ? 'Gemini 2.0 Flash Active' : 'Deterministic Engine + AI Synthesis'} • {telemetry.city}
            </p>
          </div>
        </div>

        {/* API Key Config Button */}
        <button
          onClick={() => setShowKeyModal(!showKeyModal)}
          className={`text-xs flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border transition-all cursor-pointer font-medium ${
            sessionApiKey
              ? 'bg-sage-50 border-sage-300 text-sage-800'
              : 'border-cream-300 hover:bg-cream-100 text-slate-600 bg-white shadow-2xs'
          }`}
          title="Configure optional temporary Google Gemini API Key"
        >
          <Key className="w-3.5 h-3.5 text-forest-600" />
          <span className="hidden sm:inline">{sessionApiKey ? 'Active Gemini Key' : 'Gemini Key'}</span>
        </button>
      </div>

      {/* Session-Only Gemini API Key Configuration Drawer */}
      {showKeyModal && (
        <div className="p-4 bg-forest-50/70 border-b border-forest-200 text-xs space-y-2.5 animate-in fade-in">
          <div className="flex justify-between items-center">
            <span className="font-bold text-forest-900 flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-forest-700" />
              <span>Session-Only Google Gemini Key (Volatile Memory)</span>
            </span>
            <button
              onClick={() => setShowKeyModal(false)}
              aria-label="Close API Key settings"
              className="text-forest-700 hover:text-forest-900 font-bold p-1 cursor-pointer"
            >
              ✕
            </button>
          </div>
          <p className="text-forest-800 text-[11px] leading-relaxed">
            BreatheWise operates with full deterministic rules out-of-the-box. Enter your Google AI Studio key to enable live generative dialogues. <strong>Security Notice:</strong> Keys are kept strictly in volatile React state and are purged upon tab refresh or exit.
          </p>
          <div className="flex space-x-2">
            <input
              type="password"
              placeholder="AIzaSy..."
              value={tempApiKey}
              onChange={(e) => setTempApiKey(e.target.value)}
              className="flex-1 px-3 py-2 text-xs bg-white border border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 font-mono shadow-2xs"
            />
            <button
              onClick={() => {
                setSessionApiKey(tempApiKey.trim());
                setShowKeyModal(false);
              }}
              className="px-4 py-2 bg-forest-600 hover:bg-forest-700 text-white rounded-xl font-bold text-xs shadow-2xs transition-colors cursor-pointer"
            >
              Save Key
            </button>
            {sessionApiKey && (
              <button
                onClick={() => {
                  setSessionApiKey('');
                  setTempApiKey('');
                  setShowKeyModal(false);
                }}
                className="px-3 py-2 bg-white border border-rose-200 text-rose-700 rounded-xl font-medium text-xs hover:bg-rose-50 cursor-pointer"
                title="Remove API Key"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Message Feed */}
      <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 text-xs">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex items-start space-x-2.5 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {m.role === 'assistant' && (
              <div className="w-7 h-7 rounded-full bg-forest-100 text-forest-700 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                <Bot className="w-4 h-4" />
              </div>
            )}

            <div
              className={`p-4 rounded-2xl max-w-[85%] sm:max-w-[78%] leading-relaxed ${
                m.role === 'user'
                  ? 'bg-forest-700 text-white rounded-tr-none shadow-soft'
                  : 'bg-cream-50/80 text-slatecharcoal-900 rounded-tl-none border border-cream-200/80'
              }`}
            >
              <div className="whitespace-pre-wrap">{m.content}</div>

              {m.suggestedFollowUps && m.suggestedFollowUps.length > 0 && (
                <div className="mt-3.5 pt-3 border-t border-cream-200/70 space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Suggested Explorations:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {m.suggestedFollowUps.map((prompt, pIdx) => (
                      <button
                        key={pIdx}
                        onClick={() => handleSend(prompt)}
                        className="text-left text-[11px] bg-white hover:bg-forest-50 text-slatecharcoal-800 hover:text-forest-700 px-3 py-1.5 rounded-xl border border-cream-200 shadow-2xs transition-all cursor-pointer font-medium"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div
                className={`text-[9px] mt-1.5 text-right ${
                  m.role === 'user' ? 'text-forest-200' : 'text-slate-400'
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
            <span className="w-2 h-2 rounded-full bg-forest-500 animate-ping mr-1"></span>
            Evaluating environmental context & guidelines...
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input Bar */}
      <div className="p-3.5 sm:p-4 border-t border-cream-200/60 bg-white">
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
            placeholder="Ask about outdoor workout safety, commute swaps, window timing..."
            className="flex-1 bg-cream-50/60 border border-cream-200/90 rounded-2xl px-4 py-3 text-xs text-slatecharcoal-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-forest-500/20 focus:border-forest-500 transition-all"
          />
          <button
            type="submit"
            disabled={!input.trim() || isSubmitting}
            aria-label="Send message"
            className="bg-forest-600 hover:bg-forest-700 disabled:opacity-40 text-white p-3 rounded-2xl shadow-soft transition-all shrink-0 cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

    </div>
  );
};
