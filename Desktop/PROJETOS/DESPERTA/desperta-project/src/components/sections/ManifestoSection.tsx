import { useRef, useEffect, useState } from 'react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';

const ManifestoSection = () => {
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

  return (
    <section 
      id="manifesto" 
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className=" absolute top-0 right-0 w-1/3 h-full bg-manifesto-pattern bg-cover opacity-10"></div>
      
      <Container>
        <div className="text-primary-500: '#b6ff00' max-w-3xl mx-auto">
          <SectionTitle>Nosso Manifesto</SectionTitle>
          
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-2xl md:text-3xl font-display font-semibold text-primary-700 text-center mb-8">
              "Acordar o corpo é fácil.<br />
              Despertar o que te move é outra história."
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Na Desperta, acreditamos que a transformação real acontece quando corpo, mente e emoção se encontram no mesmo movimento. É sobre se conectar com você, com o agora e com quem está do seu lado.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              A Desperta nasceu da união de duas potências: Bianca e Jana. Mulheres que vivem o movimento, entendem de corpo e sentem de verdade. A missão delas? Criar um espaço onde suar, sorrir e silenciar sejam parte da mesma jornada.
            </p>
            
            <p className="text-xl text-primary-600 font-medium">
              Somos mais que treino. Somos presença em estado bruto.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Cada treino é uma experiência. Cada encontro é uma expansão.<br />
              Desperta não é só treino. É tribo. É pulso. É transformação real.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ManifestoSection;