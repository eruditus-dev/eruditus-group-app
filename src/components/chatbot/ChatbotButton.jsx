
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';

const ChatbotButton = ({ onClick, isOpen }) => {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-700 text-white shadow-lg flex items-center justify-center z-[60]"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat'}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, rgba(99, 102, 241, 0) 70%)'
        }}
      />
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={isOpen ? 'x' : 'chat'}
          initial={{ y: -20, opacity: 0, rotate: -30 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 30 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <X size={32} /> : <MessageSquare size={32} />}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

export default ChatbotButton;
