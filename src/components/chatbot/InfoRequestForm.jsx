
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const InfoRequestForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      onSubmit(formData);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, height: 0 }}
      animate={{ opacity: 1, y: 0, height: 'auto' }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="bg-slate-800/50 rounded-lg p-4 my-2 border border-slate-700"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-white/80 text-xs">Nombre Completo</Label>
          <Input 
            id="name" 
            name="name"
            type="text" 
            placeholder="Ej. Juan Pérez" 
            value={formData.name}
            onChange={handleChange}
            required 
            className="bg-slate-900 border-slate-700 text-white mt-1"
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-white/80 text-xs">Correo Electrónico</Label>
          <Input 
            id="email" 
            name="email"
            type="email" 
            placeholder="juan.perez@ejemplo.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-slate-900 border-slate-700 text-white mt-1"
          />
        </div>
        <div>
          <Label htmlFor="phone" className="text-white/80 text-xs">Teléfono (Opcional)</Label>
          <Input 
            id="phone" 
            name="phone"
            type="tel"
            placeholder="Tu número de contacto"
            value={formData.phone}
            onChange={handleChange}
            className="bg-slate-900 border-slate-700 text-white mt-1"
          />
        </div>
        <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90">
          Enviar Solicitud
        </Button>
      </form>
    </motion.div>
  );
};

export default InfoRequestForm;
