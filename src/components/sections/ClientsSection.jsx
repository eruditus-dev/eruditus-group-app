import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: "TechCorp", description: "Logo de TechCorp" },
  { name: "Innovate Inc.", description: "Logo de Innovate Inc." },
  { name: "Quantum Solutions", description: "Logo de Quantum Solutions" },
  { name: "Future Systems", description: "Logo de Future Systems" },
  { name: "Digital Dynamics", description: "Logo de Digital Dynamics" },
  { name: "Global Networks", description: "Logo de Global Networks" },
  { name: "Apex Industries", description: "Logo de Apex Industries" },
];

const ClientsSection = () => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white/80">
            Con la confianza de empresas líderes
          </h2>
        </motion.div>
        
        <div className="relative w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)' }}>
          <div className="flex w-max scroller">
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8">
                <img 
                  class="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  alt={logo.description}
                 src="https://images.unsplash.com/photo-1485531865381-286666aa80a9" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;