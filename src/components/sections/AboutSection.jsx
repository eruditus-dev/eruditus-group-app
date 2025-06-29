import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Star } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 px-6 bg-black/20 backdrop-blur-md">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              ¿Por qué elegir Eruditus?
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Somos un equipo de expertos apasionados por la tecnología, comprometidos con entregar soluciones 
              que no solo cumplan, sino que superen las expectativas de nuestros clientes.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg mr-4 mt-1">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Experiencia Comprobada</h3>
                  <p className="text-white/60">Más de 5 años desarrollando soluciones digitales exitosas</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg mr-4 mt-1">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Equipo Especializado</h3>
                  <p className="text-white/60">Profesionales certificados en las últimas tecnologías</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg mr-4 mt-1">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Calidad Garantizada</h3>
                  <p className="text-white/60">Procesos rigurosos de testing y control de calidad</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
              <img  alt="Equipo de desarrollo colaborando en una oficina moderna y luminosa" class="w-full h-64 object-cover rounded-2xl mb-6" src="https://images.unsplash.com/photo-1556761175-b413da4baf72" />
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Tecnología de Vanguardia</h3>
                <p className="text-white/70">
                  Utilizamos las herramientas y frameworks más avanzados para garantizar 
                  soluciones robustas, escalables y preparadas para el futuro.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;