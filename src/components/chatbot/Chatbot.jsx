
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ChatbotButton from '@/components/chatbot/ChatbotButton';
import ChatWindow from '@/components/chatbot/ChatWindow';
import { useToast } from '@/components/ui/use-toast';
import { services } from '@/data/servicesData';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const [messages, setMessages] = useState([
    {
      id: 'initial',
      sender: 'bot',
      text: '¡Hola! 👋 Soy tu asistente virtual de Eruditus.group. ¿Cómo puedo ayudarte? Puedes preguntar sobre nuestros servicios (ej. "Desarrollo Web") o solicitar información.',
    },
  ]);
  const [conversationState, setConversationState] = useState('greeting'); // 'greeting', 'info', 'collecting_lead', 'lead_collected'

  const toggleChat = () => setIsOpen(!isOpen);

  const addMessage = (sender, text, type = 'text') => {
    setMessages(prev => [...prev, { id: `${Date.now()}-${Math.random()}`, sender, text, type }]);
  };

  const handleSendMessage = (text) => {
    addMessage('user', text);

    setTimeout(() => {
      if (conversationState === 'collecting_lead') {
        addMessage('bot', "Por favor, completa el formulario para que podamos ponernos en contacto contigo.");
        return;
      }

      const lowerCaseText = text.toLowerCase();
      const serviceKeywords = services.map(s => ({...s, keywords: [s.title.toLowerCase(), s.slug.replace(/-/g, ' ')]}));
      
      let serviceFound = null;
      for(const service of serviceKeywords) {
          for(const keyword of service.keywords) {
              if (lowerCaseText.includes(keyword)) {
                  serviceFound = service;
                  break;
              }
          }
          if (serviceFound) break;
      }

      if (serviceFound) {
          addMessage('bot', `¡Claro! En Eruditus.group ofrecemos ${serviceFound.title}. ${serviceFound.description} ¿Te gustaría ver más detalles en la página del servicio o solicitar una cotización?`);
          setConversationState('info');
      } else if (lowerCaseText.includes('informacion') || lowerCaseText.includes('cotiza') || lowerCaseText.includes('contacto') || lowerCaseText.includes('ayuda')) {
          setConversationState('collecting_lead');
          addMessage('bot', '¡Perfecto! Para darte información detallada o una cotización, por favor, déjanos tus datos en el siguiente formulario y un especialista se pondrá en contacto contigo a la brevedad.');
          addMessage('bot', '', 'form');
      } else {
           addMessage('bot', 'No estoy seguro de haber entendido. Puedes preguntarme sobre nuestros servicios como "E-commerce" o "SEO", o puedes "solicitar información" para que un humano te contacte.');
      }
    }, 1200);
  };
  
  const handleInfoRequestSubmit = (formData) => {
    // Remove the form from messages
    setMessages(prev => prev.filter(m => m.type !== 'form'));

    addMessage('bot', `¡Excelente, ${formData.name}! Hemos recibido tu información. Un especialista de Eruditus.group se pondrá en contacto contigo pronto a través de ${formData.email} o tu teléfono. ¿Hay algo más en lo que pueda ayudarte?`);
    setConversationState('lead_collected');

    console.log("--- SOLICITUD DE INFORMACIÓN ---");
    console.log(`Email para: developer@eruditus.group`);
    console.log("Nombre:", formData.name);
    console.log("Email:", formData.email);
    console.log("Teléfono:", formData.phone);
    console.log("---------------------------------");

    toast({
      title: "✅ Solicitud Enviada",
      description: `Gracias, ${formData.name}. Nos pondremos en contacto contigo pronto.`,
    });
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && <ChatWindow 
          messages={messages} 
          onSendMessage={handleSendMessage} 
          onClose={toggleChat}
          onInfoRequestSubmit={handleInfoRequestSubmit}
        />}
      </AnimatePresence>
      <ChatbotButton onClick={toggleChat} isOpen={isOpen} />
    </>
  );
};

export default Chatbot;
