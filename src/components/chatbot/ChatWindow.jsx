
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, X, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import InfoRequestForm from '@/components/chatbot/InfoRequestForm';

const ChatWindow = ({ messages, onSendMessage, onClose, onInfoRequestSubmit }) => {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  const showInput = !messages.some(m => m.type === 'form');

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed bottom-28 right-6 w-[calc(100%-48px)] max-w-sm h-[65vh] max-h-[600px] bg-slate-900/70 backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col z-50 border border-white/10"
    >
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex items-center justify-between p-4 bg-black/30 rounded-t-2xl text-white flex-shrink-0"
      >
        <div className="flex items-center gap-3">
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center">
                <Bot />
              </div>
              <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-slate-900" />
            </div>
            <div>
              <span className="font-bold">Asistente Eruditus</span>
              <p className="text-xs text-white/60">En línea</p>
            </div>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 hover:bg-white/20 rounded-full">
          <X size={20} />
        </Button>
      </motion.div>

      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg, index) => {
            if (msg.type === 'form') {
              return <InfoRequestForm key={msg.id} onSubmit={onInfoRequestSubmit} />;
            }
            return (
              <div key={msg.id || index} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'bot' && (
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center">
                    <Bot size={18} className="text-white" />
                  </div>
                )}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 shadow-md ${
                    msg.sender === 'user'
                      ? 'bg-purple-600 text-white rounded-br-lg'
                      : 'bg-slate-700 text-white/90 rounded-bl-lg'
                  }`}
                >
                  <p className="text-sm break-words">{msg.text}</p>
                </motion.div>
                 {msg.sender === 'user' && (
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-slate-600 flex items-center justify-center">
                    <User size={18} className="text-white" />
                  </div>
                )}
              </div>
            )
        })}
        <div ref={messagesEndRef} />
      </div>

      {showInput && (
        <motion.form 
          onSubmit={handleSubmit} 
          className="p-4 border-t border-white/10 flex-shrink-0"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe un mensaje..."
              autoComplete="off"
              className="w-full bg-slate-800 border border-slate-600 rounded-full py-3 pl-5 pr-14 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
            <Button type="submit" size="icon" className="absolute right-1.5 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors disabled:opacity-50" disabled={!input.trim()}>
              <Send size={18} />
            </Button>
          </div>
        </motion.form>
      )}
    </motion.div>
  );
};

export default ChatWindow;
