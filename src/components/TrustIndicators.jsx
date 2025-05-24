import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function TrustIndicators() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [isPowered, setIsPowered] = useState(true);

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

  // Rotate indicators every 3 seconds when powered
  useEffect(() => {
    if (!isPowered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % indicators.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPowered]);

  // Trigger glitch effect every minute when powered
  useEffect(() => {
    if (!isPowered) return;
    
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 1000);
    }, 60000);

    return () => clearInterval(glitchInterval);
  }, [isPowered]);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TV Container */}
        <motion.div 
          className={`relative rounded-2xl overflow-hidden ${isGlitching ? 'animate-glitch' : ''}`}
          style={{
            background: 'linear-gradient(to bottom, #000 0%, #111 100%)',
            boxShadow: '0 0 30px rgba(0, 255, 255, 0.3), inset 0 0 40px rgba(0, 255, 255, 0.1)',
            border: '8px solid #333',
            transform: 'perspective(1000px) rotateX(2deg)'
          }}
        >
          {/* TV Frame Details */}
          <div className="absolute inset-0 border-4 border-gray-800 rounded-xl pointer-events-none"></div>
          
          {/* Screen scanlines effect */}
          <div className="absolute inset-0 pointer-events-none bg-scanline opacity-20"></div>
          
          {/* Screen flicker effect */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.1) 50%)',
              backgroundSize: '100% 4px',
              animation: 'flicker 0.15s infinite'
            }}
          ></div>

          {/* Content */}
          <div className="relative p-8">
            {/* Display area */}
            <AnimatePresence mode="wait">
              {isPowered && (
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12 grid grid-cols-1 gap-8"
                >
                  <div className="space-y-4">
                    <span className="text-5xl mb-4 block filter drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]">
                      {indicators[currentIndex].icon}
                    </span>
                    <h3 className="text-cyan-400 text-xl font-bold font-mono tracking-wider">
                      {indicators[currentIndex].title}
                    </h3>
                    <p className="text-cyan-200 font-mono text-sm">
                      {indicators[currentIndex].description}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Power Button - Now on the right side */}
          <motion.button
            onClick={() => setIsPowered(!isPowered)}
            className="absolute right-1 top-1/2 transform -translate-y-1/2"
            whileHover={{ scale: 0.1 }}
            whileTap={{ scale: 0.10 }}
          >
            <div className="w-12 h-12 rounded-full bg-red-600 shadow-lg flex items-center justify-center border-4 border-gray-800">
              <div className="w-6 h-6 rounded-full bg-red-800"></div>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default TrustIndicators;