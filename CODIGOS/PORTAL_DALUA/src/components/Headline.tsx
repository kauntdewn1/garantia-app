import React from 'react';
import { MessageCircle } from 'lucide-react';
import MainHeadline from './MainHeadline';
import { useNavigate } from 'react-router-dom';

const Headline: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 text-white" role="banner">
      {/* Mystical Line Section */}
      <div className="relative py-6 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent animate-[pulse_3s_ease-in-out_infinite]" 
          aria-hidden="true"
        />
        <div className="container mx-auto px-4">
          <p className="text-center text-lg font-medium text-orange-400/90 tracking-wide">
            ✨ Consultas limitadas para garantir dedicação total ✨
          </p>
        </div>
        {/* Sparkle effects */}
        <div 
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,_rgba(255,192,203,0.18)_0%,_rgba(255,192,203,0.08)_40%,_transparent_80%)] animate-pulse"
          aria-hidden="true"
        />
      </div>

      {/* Main Headline Section */}
      <MainHeadline />

      {/* CTA Section */}
      <section className="pt-16 pb-20" aria-label="Chamada para ação">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-medium text-xl md:text-2xl text-orange-400 mb-8">
              Pronto para dar o primeiro passo em direção à clareza?
            </p>
            <a 
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 rounded-xl text-white font-semibold group transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-300"
              aria-label="Falar com a IA do Portal"
              onClick={() => navigate('/webtalk')}
            >
              <MessageCircle className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
              <span>Fale com a IA do Portal</span>
            </a>
            <p className="mt-6 text-sm text-zinc-400 leading-relaxed">
              Atendimento humanizado e personalizado para suas necessidades.<br />
              <span className="text-orange-400/70">Resposta em até 2 horas úteis</span>
            </p>
            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-zinc-500">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Atendimento Ativo</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>Consultas Personalizadas</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Sigilo Garantido</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Headline;