import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function TrustIndicators() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [isPowered, setIsPowered] = useState(true);
  const [progress, setProgress] = useState(0);

  const indicators = [
    {
      icon: '✚',
      title: 'Seguro pela Lei 14.133/21',
      description: 'Em total conformidade com a legislação'
    },
    {
      icon: '✜',
      title: '+1.400 apólices emitidas',
      description: 'Empresas confiam em nossa solução'
    },
    {
      icon: '✚',
      title: 'Seus dados estão protegidos',
      description: 'Em conformidade com a LGPD'
    }
  ];

  useEffect(() => {
    if (!isPowered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % indicators.length);
      setProgress(0);
      document.getElementById("tick")?.play();
    }, 6000);

    return () => clearInterval(interval);
  }, [isPowered]);

  useEffect(() => {
    if (!isPowered) return;

    const tick = 100;
    const duration = 6000;
    const progressInterval = setInterval(() => {
      setProgress((p) => (p + tick >= duration ? 0 : p + tick));
    }, tick);

    return () => clearInterval(progressInterval);
  }, [isPowered]);

  useEffect(() => {
    if (!isPowered) return;

    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 1000);
    }, 60000);

    return () => clearInterval(glitchInterval);
  }, [isPowered]);

  return (
    <section className="py-4 bg-gradient-to-br from-gray-900 to-gray-800">
      <audio id="tick" src="/sfx/glitch.mp3" preload="auto"></audio>
      <div className="max-w-2xl mx-auto px-8 sm:px-6 lg:px-8">
        <motion.div
          className={`relative rounded-2xl overflow-hidden ${isGlitching ? 'animate-glitch' : ''}`}
          style={{
            background: 'linear-gradient(to bottom, #000 0%, #111 100%)',
            boxShadow: '0 0 30px rgba(0, 255, 255, 0.3), inset 0 0 40px rgba(0, 255, 255, 0.1)',
            border: '8px solid #333',
            transform: 'perspective(1000px) rotateX(2deg)'
          }}
        >
          <div className="absolute top-0 left-0 h-1 bg-cyan-400 z-30" style={{ width: `${(progress / 6000) * 100}%` }} />
          <div className="absolute inset-0 border-4 border-gray-800 rounded-xl pointer-events-none"></div>
          <div className="absolute inset-0 pointer-events-none bg-scanline opacity-10 z-20"></div>
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.1) 50%)',
            backgroundSize: '100% 10px',
            animation: 'flicker 1.70s infinite'
          }}></div>

          <div className="relative p-8">
            <div className="absolute top-0 right-0 text-xs text-cyan-300 opacity-70 p-2">
              <span>Próximo: {indicators[(currentIndex + 1) % indicators.length].title}</span>
            </div>
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

          <motion.button
            onClick={() => setIsPowered(!isPowered)}
            className="absolute right-2 bottom-2 cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            title={isPowered ? "Desligar" : "Ligar"}
          >
            <div className={`w-5 h-5 rounded-full ${isPowered ? 'bg-red-500' : 'bg-gray-600'} shadow-md border-2 border-white`}></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default TrustIndicators;