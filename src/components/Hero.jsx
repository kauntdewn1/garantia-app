import React from 'react';
import { motion } from 'framer-motion';

function Hero({ onShowForm }) {
  const handleShowForm = () => {
    onShowForm();
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1a234e] via-[#233069] to-[#0e3e7d] overflow-hidden flex items-center bg-dot-white">
      {/* Decorative Blur Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-blue-200 text-sm font-semibold backdrop-blur-md border border-white/20 mb-6">
                ⚡ Emissão Expressa em até 24h
              </span>
              <h1 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
                Sem Seguro? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white opacity-90">
                  Sem Licitação.
                </span>
              </h1>
            </motion.div>
            
            <motion.div
              className="glass p-8 rounded-2xl max-w-2xl relative group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {/* Animated accent line */}
              <div className="absolute top-0 left-0 w-1 h-full bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
              
              <p className="text-xl text-blue-50/90 leading-relaxed font-medium">
                Sua empresa está ficando de fora de grandes oportunidades por falta de conformidade? Resolvemos sua garantia em horas – com respaldo jurídico total e aprovação imediata para os maiores editais do país.
              </p>
              
              <div className="mt-6 flex items-center gap-3 text-white/50 border-t border-white/10 pt-4">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#233069] bg-slate-300 flex items-center justify-center text-[10px] text-slate-800 font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-sm font-light">
                  +1.200 empresas já garantiram sua participação com a MG Riscos
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <button
                onClick={handleShowForm}
                className="btn-premium btn-accent-gradient group"
              >
                Solicitar Proposta Agora
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </button>
              <a
                href="#features"
                className="btn-premium bg-white/5 text-white border border-white/20 backdrop-blur-sm hover:bg-white/10"
              >
                Conhecer Diferenciais
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative z-10 animate-float">
              <div className="glass p-2 rounded-3xl shadow-2xl">
                <div className="bg-slate-900/40 rounded-2xl p-6 backdrop-blur-xl border border-white/10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                    </div>
                    <div className="px-3 py-1 rounded bg-blue-500/10 text-[10px] text-blue-300 font-mono">
                      SYSTEM_STATUS: ONLINE
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="h-4 bg-white/5 rounded w-3/4"></div>
                    <div className="h-4 bg-white/5 rounded w-full"></div>
                    <div className="h-4 bg-white/5 rounded w-5/6"></div>
                    <div className="pt-4 grid grid-cols-2 gap-4">
                      <div className="h-24 rounded-xl bg-gradient-to-br from-blue-500/20 to-transparent border border-blue-500/20"></div>
                      <div className="h-24 rounded-xl bg-gradient-to-br from-red-500/20 to-transparent border border-red-500/20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-red-600 rounded-full blur-3xl opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


export default Hero;