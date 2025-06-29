import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { services } from '@/data/servicesData';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import CTASection from '@/components/sections/CTASection';

const ServicePage = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const { title, details, icon: Icon, features } = service;

  return (
    <>
      <Helmet>
        <title>{`${title} - Eruditus Group`}</title>
        <meta name="description" content={details.mainDescription} />
      </Helmet>
      <div className="overflow-hidden">
        {/* Service Hero */}
        <section className="relative py-20 px-6 bg-black/20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-pink-900/50 opacity-50"></div>
          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-2xl mb-6">
                  <Icon className="h-10 w-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  {title}
                </h1>
                <p className="text-xl text-white/80 leading-relaxed">
                  {details.mainDescription}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-50"></div>
                <img  src={details.imageUrl} alt={`Ilustración del servicio de ${title}`} class="relative w-full h-auto object-cover rounded-2xl shadow-2xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Points Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white">Beneficios Clave</h2>
              <p className="text-lg text-white/70 mt-2">Cómo nuestro servicio de {title} impulsa tu éxito.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {details.keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
                >
                  <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg mb-4">
                    <point.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{point.title}</h3>
                  <p className="text-white/60">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 bg-black/20">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">¿Qué incluye nuestro servicio?</h2>
                <p className="text-lg text-white/70 mb-8">
                  Ofrecemos un paquete completo de funcionalidades para garantizar los mejores resultados.
                </p>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <CheckCircle className="h-6 w-6 text-green-400 mr-4 flex-shrink-0" />
                      <span className="text-lg text-white">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <img  alt="Diagrama de flujo de trabajo" class="w-full max-w-md mx-auto rounded-lg" src="https://images.unsplash.com/photo-1556740758-90de374c12ad" />
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </div>
    </>
  );
};

export default ServicePage;