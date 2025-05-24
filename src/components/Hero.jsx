import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-primary to-secondary overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-[url('/assets/lg_hrz_transp.png')] bg-center bg-no-repeat opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="relative z-10">
          <div className="text-left">
            <motion.h1 
              className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="block">Sem Seguro? </span>
              <span className="block text-blue-200">Sem Licitação.</span>
            </motion.h1>
            <motion.p 
              className="mt-6 text-xl text-gray-100 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Não perca mais licitações por falta de seguro. Emitimos sua apólice de forma rápida e segura, atendendo todas as exigências da Lei 14.133/21.
            </motion.p>
            <motion.div 
              className="mt-10 flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <a
                href="#form"
                className="px-8 py-4 rounded-lg bg-white text-primary font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg"
              >
                Solicitar Agora
              </a>
              <a
                href="#features"
                className="px-8 py-4 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors duration-300"
              >
                Saiba Mais
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;