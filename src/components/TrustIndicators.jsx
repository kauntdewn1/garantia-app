import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function TrustIndicators() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  const indicators = [
    {
      icon: '✅',
      title: 'Seguro pela Lei 14.133/21',
      description: 'Em total conformidade com a legislação'
    },
    {
      icon: '📊',
      title: '+1.400 apólices emitidas',
      description: 'Empresas confiam em nossa solução'
    },
    {
      icon: '🔐',
      title: 'Seus dados estão protegidos',
      description: 'Em conformidade com a LGPD'
    }
  ];

  // Rotate indicators every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % indicators.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Trigger glitch effect every minute
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 1000);
    }, 60000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TV Container */}
        <motion.div 
          className={`relative rounded-lg overflow-hidden ${isGlitching ? 'animate-glitch' : ''}`}
          style={{
            background: 'linear-gradient(to bottom, #000 0%, #111 100%)',
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.2), inset 0 0 20px rgba(0, 255, 255, 0.1)',
            border: '2px solid rgba(0, 255, 255, 0.3)'
          }}
        >
          {/* Screen scanlines effect */}
          <div className="absolute inset-0 pointer-events-none bg-scanline opacity-10"></div>
          
          {/* Content */}
          <div className="relative p-8">
            {/* TV Power indicator */}
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-red-500 shadow-glow"></div>
            
            {/* Display area */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12"
              >
                <span className="text-5xl mb-4 block">{indicators[currentIndex].icon}</span>
                <h3 className="text-cyan-400 text-xl font-bold mb-2 font-mono">
                  {indicators[currentIndex].title}
                </h3>
                <p className="text-cyan-200 font-mono text-sm">
                  {indicators[currentIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TrustIndicators;