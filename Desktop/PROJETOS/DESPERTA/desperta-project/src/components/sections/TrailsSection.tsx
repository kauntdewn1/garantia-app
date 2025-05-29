import { useRef, useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';

const TrailsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const locations = [
    'Cantareira', 
    'Pico do Jaraguá', 
    'Ibirapuera', 
    'Praça Pôr do Sol', 
    'Horto Florestal'
  ];

  return (
    <section 
      id="experiencias" 
      ref={sectionRef}
      className="py-20 relative bg-trails-pattern bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-primary-800/85"></div>
      
      <Container className="relative z-10">
        <SectionTitle className="text-white">
          Para Além do Treino
        </SectionTitle>
        
        <div className="max-w-3xl mx-auto">
          <div 
            className={`bg-white/10 backdrop-blur-md rounded-xl p-8 transition-all duration-700 ease-out`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            <p className="text-white text-lg leading-relaxed mb-6">
              A Desperta também se move pela natureza. Realizamos trilhas conscientes, vivências com respiração, caminhadas ao nascer do sol e encontros que equilibram energia e introspecção.
            </p>
            
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <MapPin className="w-5 h-5 text-secondary-300" />
              <span className="text-white/80 mr-2">Locais:</span>
              {locations.map((location, index) => (
                <span 
                  key={index}
                  className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-sm"
                >
                  {location}
                </span>
              ))}
            </div>
            
            <p className="text-white/90 italic">
              "O movimento que nos leva para fora também nos guia para dentro."
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrailsSection;