import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { askBreatheWiseAssistant } from '../services/gemini';
import { ChatMessage } from '../types/ai';
import { MessageSquare, Send, Sparkles, User, Bot, Key, Check } from 'lucide-react';

export const AiAssistantFeed: React.FC = () => {
  const { telemetry, cleanAirWindow, userPreferences, updatePreferences } = useApp();

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `Hello! I am your BreatheWise Environmental Living Assistant. In ${telemetry.city}, current PM2.5 is ${telemetry.current.pm25} µg/m³ (AQI ${telemetry.current.aqi}). Today's optimal clean-air window is ${cleanAirWindow.displayWindow}. How can I help you navigate your day safely?`,
      timestamp: 'Just now',
      suggestedFollowUps: [
        'Is it safe to go running today?',
        'When should I open my apartment windows?',
        'Compare metro vs. two-wheeler for my commute',
        'How should I protect my child today?',
      ],
    },
  ]);

  const [input, setInput] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showKeyModal, setShowKeyModal] = useState<boolean>(false);
  const [tempApiKey, setTempApiKey] = useState<string>(userPreferences.customGeminiApiKey || '');

  const chatEndRef = useRef<HTMLDivElement>(null);

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
        userPreferences.customGeminiApiKey
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
        content: 'I apologize, but I encountered an error synthesizing advice. Today\'s clean air window remains ' + cleanAirWindow.displayWindow + '.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errReply]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-cream-300 shadow-sm flex flex-col h-[560px] overflow-hidden">
      
      {/* Chat Header */}
      <div className="p-4 border-b border-cream-200 flex items-center justify-between bg-cream-50">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-forest-500 text-white flex items-center justify-center shadow-xs">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-slatecharcoal-900">
              BreatheWise Environmental Assistant
            </h3>
            <p className="text-[11px] text-slate-500">
              Grounded in live {telemetry.city} telemetry • Profile: {userPreferences.vulnerabilityProfile.replace('_', ' ')}
            </p>
          </div>
        </div>

        {/* API Key Config Button */}
        <button
          onClick={() => setShowKeyModal(!showKeyModal)}
          className="text-xs flex items-center space-x-1 px-2.5 py-1 rounded-lg border border-cream-300 hover:bg-cream-100 text-slate-600 transition-colors"
          title="Configure custom Gemini API Key"
        >
          <Key className="w-3.5 h-3.5 text-forest-600" />
          <span className="hidden sm:inline">Gemini Key</span>
        </button>
      </div>

      {/* Optional Custom Gemini API Key Modal / Drawer */}
      {showKeyModal && (
        <div className="p-3.5 bg-forest-50 border-b border-forest-200 text-xs space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-forest-800">Custom Google Gemini API Key (Optional)</span>
            <button
              onClick={() => setShowKeyModal(false)}
              className="text-forest-700 hover:text-forest-900 font-bold"
            >
              ✕
            </button>
          </div>
          <p className="text-forest-700 text-[11px]">
            By default, BreatheWise uses our deterministic grounded living engine. To use live Google AI Studio LLM calls, enter your free API key:
          </p>
          <div className="flex space-x-2">
            <input
              type="password"
              placeholder="AIzaSy..."
              value={tempApiKey}
              onChange={(e) => setTempApiKey(e.target.value)}
              className="flex-1 p-1.5 text-xs bg-white border border-forest-200 rounded-md focus:outline-none focus:ring-1 focus:ring-forest-500"
            />
            <button
              onClick={() => {
                updatePreferences({ customGeminiApiKey: tempApiKey });
                setShowKeyModal(false);
              }}
              className="px-3 py-1.5 bg-forest-500 text-white rounded-md font-semibold text-xs shadow-xs hover:bg-forest-600 transition-colors"
            >
              Save
            </button>
          </div>
        </div>
      )}

      {/* Message Feed */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex items-start space-x-2.5 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {m.role === 'assistant' && (
              <div className="w-6 h-6 rounded-full bg-forest-100 text-forest-700 flex items-center justify-center shrink-0 mt-0.5">
                <Bot className="w-3.5 h-3.5" />
              </div>
            )}

            <div
              className={`p-3.5 rounded-2xl max-w-[85%] sm:max-w-[75%] leading-relaxed ${
                m.role === 'user'
                  ? 'bg-slatecharcoal-900 text-white rounded-tr-none'
                  : 'bg-cream-100 text-slatecharcoal-900 rounded-tl-none border border-cream-200'
              }`}
            >
              <div className="whitespace-pre-wrap">{m.content}</div>

              {m.suggestedFollowUps && m.suggestedFollowUps.length > 0 && (
                <div className="mt-3 pt-2.5 border-t border-cream-200 space-y-1.5">
                  <div className="text-[10px] font-semibold uppercase text-slate-500">
                    Suggested Questions:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {m.suggestedFollowUps.map((prompt, pIdx) => (
                      <button
                        key={pIdx}
                        onClick={() => handleSend(prompt)}
                        className="text-left text-[11px] bg-white hover:bg-forest-50 text-slatecharcoal-800 hover:text-forest-700 px-2.5 py-1 rounded-lg border border-cream-300 transition-colors"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div
                className={`text-[9px] mt-1 text-right ${
                  m.role === 'user' ? 'text-slate-400' : 'text-slate-400'
                }`}
              >
                {m.timestamp}
              </div>
            </div>

            {m.role === 'user' && (
              <div className="w-6 h-6 rounded-full bg-slatecharcoal-800 text-white flex items-center justify-center shrink-0 mt-0.5">
                <User className="w-3.5 h-3.5" />
              </div>
            )}
          </div>
        ))}

        {isSubmitting && (
          <div className="flex items-center space-x-2 text-slate-500 text-xs italic p-2">
            <span className="w-2 h-2 rounded-full bg-forest-500 animate-ping mr-1"></span>
            Synthesizing exposure intelligence...
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input Bar */}
      <div className="p-3 border-t border-cream-200 bg-white">
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
            placeholder="Ask about exercise timing, commute choices, home ventilation..."
            className="flex-1 bg-cream-50 border border-cream-300 rounded-xl px-3.5 py-2.5 text-xs text-slatecharcoal-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-forest-500/20 focus:border-forest-500"
          />
          <button
            type="submit"
            disabled={!input.trim() || isSubmitting}
            className="bg-forest-500 hover:bg-forest-600 disabled:opacity-40 text-white p-2.5 rounded-xl shadow-xs transition-colors shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

    </div>
  );
};
