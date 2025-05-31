import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Pequeno delay para animação mais suave
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section 
      className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden pb-20 mt-20"
      aria-label="Hero section do Portal da Claridade"
      role="banner"
    >
      {/* Background banner image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/Banner.png")' }}
        aria-hidden="true"
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-10" aria-hidden="true" />
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-20 text-center max-w-4xl mt-20">
        {/* Logo container with animation */}
        <div 
          className={`relative transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center border-4 border-orange-500 shadow-2xl mx-auto overflow-hidden animate-pulse hover:scale-105 transition-transform duration-300">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full flex items-center justify-center overflow-hidden">
              {!imageError ? (
                <img 
                  src="/portal.png" 
                  alt="Logo do Portal da Claridade" 
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                  loading="eager"
                />
              ) : (
                // Fallback caso a imagem não carregue
                <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <span className="text-white text-4xl md:text-6xl font-bold">P</span>
                </div>
              )}
            </div>
          </div>
          
          <h1 className="mt-8 text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Portal da <span className="text-orange-400 drop-shadow-lg">Claridade</span>
          </h1>
          
          <p className="mt-4 text-lg md:text-xl lg:text-2xl text-zinc-200 max-w-2xl mx-auto leading-relaxed">
            Encontre o caminho para a clareza em sua vida
          </p>

          {/* Call to action button (opcional) */}
          <div className="mt-8">
            <button 
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-300"
              aria-label="Explorar o Portal da Claridade"
              onClick={() => navigate('/webtalk')}
            >
              Encontrar meu caminho
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-500/10 via-orange-500/5 to-transparent z-10 pointer-events-none" 
        aria-hidden="true"
      />
    </section>
  );
};

export default Hero;