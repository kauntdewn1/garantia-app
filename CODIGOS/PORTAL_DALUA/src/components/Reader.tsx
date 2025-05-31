import React, { useState } from 'react';
import { Sparkles, Crown, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Reader: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section 
      className="py-20 bg-gradient-to-b from-zinc-50 to-zinc-100"
      aria-label="Sobre a taróloga Ária"
      role="region"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image Section */}
            <div className="relative w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
              <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-2xl" aria-hidden="true" />
              
              {!imageError ? (
                <img 
                  src="/she.png" 
                  alt="Ária - Taróloga Intuitiva" 
                  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-orange-500/50 shadow-xl transition-transform duration-300 hover:scale-105"
                  onError={handleImageError}
                  loading="lazy"
                />
              ) : (
                // Fallback case a imagem não carregue
                <div className="relative z-10 w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-full border-4 border-orange-500/50 shadow-xl flex items-center justify-center">
                  <span className="text-white text-4xl md:text-6xl font-bold">Á</span>
                </div>
              )}
              
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Content Section */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Ária
                </span>{" "}
                <span className="text-zinc-800">| Taróloga Intuitiva</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-zinc-700 mb-6 font-medium">
                Clareza, cura e direcionamento
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-6 justify-center md:justify-start">
                <div className="flex items-center gap-2 bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20 hover:bg-orange-500/20 transition-colors">
                  <Crown className="w-4 h-4 text-orange-500" />
                  <span className="text-sm font-medium text-orange-700">
                    Pioneira em Tarot Online no Brasil
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20 hover:bg-orange-500/20 transition-colors">
                  <Calendar className="w-4 h-4 text-orange-500" />
                  <span className="text-sm font-medium text-orange-700">
                    Atendimento Limitado - Apenas 15 Vagas/Mês
                  </span>
                </div>
              </div>
              
              {/* Description Card */}
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-orange-500/20 shadow-lg hover:shadow-xl transition-shadow">
                <p className="text-lg text-zinc-600 leading-relaxed">
                  Especializada em roteiros de intenções personalizados,
                  com 1 ano e meio de experiência, trabalho com Tarot tradicional de 78 cartas.
                  Ajudo pessoas a encontrarem seu caminho através da 
                  intuição e das cartas do tarot.
                </p>
              </div>

              {/* Call to Action (opcional) */}
              <div className="mt-8">
                <button 
                  className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-300"
                  aria-label="Agendar consulta com Ária"
                  onClick={() => navigate('/webtalk')}
                >
                  Buscar minha cura
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reader;