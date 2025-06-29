import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import ClientsSection from '@/components/sections/ClientsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import CTASection from '@/components/sections/CTASection';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Eruditus Group - Desarrollo Web y Soluciones Digitales</title>
        <meta name="description" content="Expertos en desarrollo web, e-commerce, SEO, email marketing, optimización de sitios, WordPress a medida, y soluciones digitales para impulsar tu negocio." />
      </Helmet>
      <HeroSection />
      <StatsSection />
      <ClientsSection />
      <ServicesSection />
      <AboutSection />
      <CTASection />
    </>
  );
};

export default HomePage;