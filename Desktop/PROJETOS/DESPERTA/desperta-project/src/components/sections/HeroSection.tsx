import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import Container from '../common/Container';
import Button from '../common/Button';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-hero-pattern bg-cover bg-center bg-no-repeat flex items-center">
      <div className="absolute inset-0 bg-black/30"></div>
      
      <Container className="relative z-20">
        <div className="flex flex-col items-center text-center">
          <img 
            src="https://res.cloudinary.com/dgyocpguk/image/upload/v1748231374/simbolo_crknbf.png"
            alt="Símbolo Desperta"
            className="w-32 md:w-48 mb-8 animate-fade-in"
          />
          
          <div className={`max-w-3xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="inline-block px-4 py-1.5 mb-4 bg-primary-500 text-primary-900 font-medium rounded-full text-sm">
              Treinos ao ar livre com propósito
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Desperte seu corpo, <br />
              <span className="text-primary-500">Transforme sua energia</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Mais que treino, uma jornada de conexão onde corpo, mente e emoção se encontram no mesmo movimento. Venha despertar com a gente.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Quero Despertar
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                Ver Agenda
              </Button>
            </div>
          </div>
        </div>
      </Container>
      
      <a 
        href="#manifesto" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors duration-300 animate-pulse-slow"
        aria-label="Scroll down"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
};

export default HeroSection;