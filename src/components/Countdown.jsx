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
    <section className="py-8 sm:py-6 lg:py-8 bg-[#1a2550]"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="backdrop-blur-sm bg-black/30 rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            {/* Título - Responsivo */}
            <h2 className="text-lg sm:text-xl lg:text-2xl text-white mb-4 sm:mb-6 flex items-center justify-center gap-2">
              <span className="text-xl sm:text-2xl">🕒</span>
              <span className="text-sm sm:text-base lg:text-lg">
                PRÓXIMA LICITAÇÃO COM PRAZO ABERTO EM:
              </span>
            </h2>
            
            {/* Contador em Linha - Como Relógio de Mesa */}
            <div className="flex justify-center items-center gap-1 sm:gap-2 lg:gap-4 mb-4 sm:mb-6 overflow-x-auto">
              {/* Dias */}
              <div className="bg-black/30 rounded-lg p-2 sm:p-3 lg:p-4 min-w-[60px] sm:min-w-[80px] lg:min-w-[100px]">
                <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-white leading-none">
                  {timeLeft.days}
                </div>
                <div className="text-xs sm:text-sm text-white/80 mt-1">Dias</div>
              </div>
              
              {/* Separador */}
              <div className="text-white text-lg sm:text-2xl lg:text-3xl font-bold">:</div>
              
              {/* Horas */}
              <div className="bg-black/30 rounded-lg p-2 sm:p-3 lg:p-4 min-w-[60px] sm:min-w-[80px] lg:min-w-[100px]">
                <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-white leading-none">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-xs sm:text-sm text-white/80 mt-1">Horas</div>
              </div>
              
              {/* Separador */}
              <div className="text-white text-lg sm:text-2xl lg:text-3xl font-bold">:</div>
              
              {/* Minutos */}
              <div className="bg-black/30 rounded-lg p-2 sm:p-3 lg:p-4 min-w-[60px] sm:min-w-[80px] lg:min-w-[100px]">
                <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-white leading-none">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-xs sm:text-sm text-white/80 mt-1">Minutos</div>
              </div>
              
              {/* Separador */}
              <div className="text-white text-lg sm:text-2xl lg:text-3xl font-bold">:</div>
              
              {/* Segundos */}
              <div className="bg-black/30 rounded-lg p-2 sm:p-3 lg:p-4 min-w-[60px] sm:min-w-[80px] lg:min-w-[100px]">
                <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-white leading-none">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-xs sm:text-sm text-white/80 mt-1">Segundos</div>
              </div>
            </div>
            
            {/* Aviso - Responsivo */}
            <p className="text-white text-sm sm:text-base lg:text-lg flex items-center justify-center gap-2 px-2">
              <span className="text-lg sm:text-xl lg:text-2xl">⚠️</span>
              <span className="text-xs sm:text-sm lg:text-base">
                "A empresa que não apresentar apólice válida será desclassificada."
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Countdown;