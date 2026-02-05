
import React, { useState, useRef, useEffect } from 'react';
import { getBeautyAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIExpert: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm your BEAUTY CORNER AI consultant. Are you looking to refresh your look, prepare for an event, or start a new skincare routine? Ask me anything!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const response = await getBeautyAdvice(userMessage, messages);
    setMessages(prev => [...prev, { role: 'model', text: response || "I'm sorry, I couldn't process that. Try again!" }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-consultant" className="py-24 bg-[#1a1a1a] text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[#c5a47e]">Personalized Consult</h2>
          <p className="text-white/60">Not sure what you need? Speak with our AI Beauty Expert for a customized recommendation.</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm shadow-2xl h-[500px] flex flex-col">
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#c5a47e] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <p className="font-bold">AI Beauty Guide</p>
                <p className="text-xs text-white/40">Powered by Gemini</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs text-white/60">Online</span>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl ${m.role === 'user' ? 'bg-[#c5a47e] text-white rounded-br-none' : 'bg-white/10 text-white/90 rounded-bl-none'}`}>
                  <p className="text-sm leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 p-4 rounded-2xl rounded-bl-none">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce delay-75"></span>
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce delay-150"></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className="p-4 bg-white/5 border-t border-white/10">
            <div className="flex gap-2">
              <input 
                type="text"
                placeholder="Describe your skin type or desired look..."
                className="flex-1 bg-white/10 border-none rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-[#c5a47e] text-white placeholder-white/30 text-sm"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button 
                type="submit"
                className="bg-[#c5a47e] hover:bg-[#b4936d] p-3 rounded-xl transition-colors disabled:opacity-50"
                disabled={!input.trim() || isLoading}
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AIExpert;
