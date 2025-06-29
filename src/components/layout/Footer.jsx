import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import Logo from '@/components/Logo';

const Footer = () => {
  const { toast } = useToast();

  const handleContactClick = () => {
    toast({
      title: "🚧 Esta función aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀",
    });
  };

  return (
    <footer id="contacto" className="bg-black/40 backdrop-blur-md border-t border-white/10 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-white/60 mb-4">
              Transformando ideas en soluciones digitales extraordinarias
            </p>
            <div className="flex space-x-4">
              <Button 
                onClick={handleContactClick}
                variant="ghost" 
                size="sm" 
                className="text-white/60 hover:text-white p-2"
              >
                LinkedIn
              </Button>
              <Button 
                onClick={handleContactClick}
                variant="ghost" 
                size="sm" 
                className="text-white/60 hover:text-white p-2"
              >
                Twitter
              </Button>
              <Button 
                onClick={handleContactClick}
                variant="ghost" 
                size="sm" 
                className="text-white/60 hover:text-white p-2"
              >
                GitHub
              </Button>
            </div>
          </div>
          
          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Servicios</span>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <Link to="/servicio/desarrollo-web" className="block text-white/60 hover:text-white transition-colors">Desarrollo Web</Link>
              <Link to="/servicio/soluciones-a-medida" className="block text-white/60 hover:text-white transition-colors">Soluciones a Medida</Link>
              <Link to="/servicio/e-commerce" className="block text-white/60 hover:text-white transition-colors">E-commerce</Link>
              <Link to="/servicio/optimizacion-seo" className="block text-white/60 hover:text-white transition-colors">Optimización SEO</Link>
              <Link to="/servicio/email-marketing" className="block text-white/60 hover:text-white transition-colors">Email Marketing</Link>
              <Link to="/servicio/optimizacion-de-sitios" className="block text-white/60 hover:text-white transition-colors">Optimización de Sitios</Link>
              <Link to="/servicio/desarrollo-wp" className="block text-white/60 hover:text-white transition-colors">Desarrollo WP</Link>
              <Link to="/servicio/chatbots" className="block text-white/60 hover:text-white transition-colors">Chatbots</Link>
            </div>
          </div>
          
          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Contacto</span>
            <div className="space-y-2">
              <p className="text-white/60">info@eruditus.group</p>
              <p className="text-white/60">305 8643021</p>
              <p className="text-white/60">Disponible 24/7</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © 2025 Eruditus.group. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;