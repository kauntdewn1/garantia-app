import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 11,
    minutes: 43,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <h2 className="text-xl text-white mb-6 flex items-center justify-center gap-2">
              <span className="text-2xl">🕒</span>
              PRÓXIMA LICITAÇÃO COM PRAZO ABERTO EM:
            </h2>
            
            <div className="flex justify-center gap-4 mb-6">
              <div className="bg-white/20 rounded-lg p-4 min-w-[100px]">
                <div className="text-4xl font-bold text-white">{timeLeft.days}</div>
                <div className="text-sm text-white/80">Dias</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 min-w-[100px]">
                <div className="text-4xl font-bold text-white">{timeLeft.hours}</div>
                <div className="text-sm text-white/80">Horas</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 min-w-[100px]">
                <div className="text-4xl font-bold text-white">{timeLeft.minutes}</div>
                <div className="text-sm text-white/80">Minutos</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 min-w-[100px]">
                <div className="text-4xl font-bold text-white">{timeLeft.seconds}</div>
                <div className="text-sm text-white/80">Segundos</div>
              </div>
            </div>
            
            <p className="text-white text-lg flex items-center justify-center gap-2">
              <span className="text-2xl">⚠️</span>
              "A empresa que não apresentar apólice válida será desclassificada."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Countdown;