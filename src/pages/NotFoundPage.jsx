
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 - Página no encontrada | Eruditus Group</title>
        <meta name="description" content="La página que buscas no existe o ha sido movida." />
      </Helmet>
      <div className="flex flex-col items-center justify-center text-center py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: 'spring' }}
        >
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            404
          </h1>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl font-semibold text-white mt-4 mb-6"
        >
          Página no encontrada
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-white/70 max-w-md mx-auto mb-8"
        >
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
          Verifica la URL o vuelve al inicio.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Volver al Inicio
            </Link>
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default NotFoundPage;
