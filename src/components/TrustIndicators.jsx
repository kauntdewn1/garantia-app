import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function TrustIndicators() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const indicators = [
    {
      icon: '🛡️',
      title: 'Conformidade Legal',
      description: '100% em conformidade com a Lei 14.133/21',
      color: 'from-blue-500 to-blue-600',
      mobileIcon: '🛡️'
    },
    {
      icon: '📊',
      title: 'Experiência Comprovada',
      description: '+1.400 apólices emitidas com sucesso',
      color: 'from-green-500 to-green-600',
      mobileIcon: '📊'
    },
    {
      icon: '🔒',
      title: 'Segurança de Dados',
      description: 'LGPD compliant - Seus dados estão protegidos',
      color: 'from-purple-500 to-purple-600',
      mobileIcon: '🔒'
    },
    {
      icon: '⚡',
      title: 'Resposta Rápida',
      description: 'Cotação em até 24 horas úteis',
      color: 'from-orange-500 to-orange-600',
      mobileIcon: '⚡'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % indicators.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 sm:py-6 lg:py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Mobile First */}
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Por que escolher a MG Riscos?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Nossa solução combina expertise técnica com agilidade operacional para garantir que sua empresa nunca perca uma oportunidade de licitação.
          </p>
        </div>

        {/* Grid de Cards - Mobile First */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12">
          {indicators.map((indicator, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-3 sm:p-4 lg:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Ícone - Responsivo */}
              <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg bg-gradient-to-br ${indicator.color} flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4`}>
                <span className="text-sm sm:text-lg lg:text-2xl">{indicator.mobileIcon}</span>
              </div>
              
              {/* Título - Responsivo */}
              <h3 className="text-xs sm:text-sm lg:text-lg font-semibold text-gray-900 mb-1 sm:mb-2 text-center">
                {indicator.title}
              </h3>
              
              {/* Descrição - Responsiva */}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-center">
                {indicator.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Painel de Status Principal - Mobile First */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {/* Header do Painel */}
          <div className="bg-gradient-to-r from-primary to-secondary p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Status do Sistema
              </h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white text-xs sm:text-sm">Online</span>
              </div>
            </div>
          </div>

          {/* Conteúdo do Painel */}
          <div className="p-4 sm:p-6 lg:p-8">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Ícone Principal - Responsivo */}
              <div className="mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 block">
                  {indicators[currentIndex].icon}
                </span>
                
                {/* Título - Responsivo */}
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {indicators[currentIndex].title}
                </h4>
                
                {/* Descrição - Responsivo */}
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 px-2">
                  {indicators[currentIndex].description}
                </p>
              </div>

              {/* Barra de Progresso - Responsiva */}
              <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2 mb-3 sm:mb-4">
                <motion.div
                  className="bg-gradient-to-r from-primary to-secondary h-1.5 sm:h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "linear" }}
                />
              </div>

              {/* Indicadores de Navegação - Responsivos */}
              <div className="flex justify-center space-x-1.5 sm:space-x-2">
                {indicators.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
                      index === currentIndex 
                        ? 'bg-primary' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action - Mobile First */}
        <motion.div
          className="text-center mt-8 sm:mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 px-2">
            Pronto para garantir sua próxima licitação?
          </p>
          
          {/* Checkmarks - Responsivos */}
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <span className="text-xl sm:text-2xl">✓</span>
              <span className="text-xs sm:text-sm font-medium">Aprovação em 24h</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-blue-600">
              <span className="text-xl sm:text-2xl">✓</span>
              <span className="text-xs sm:text-sm font-medium">100% Digital</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-purple-600">
              <span className="text-xl sm:text-2xl">✓</span>
              <span className="text-xs sm:text-sm font-medium">SUSEP Aprovado</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TrustIndicators;