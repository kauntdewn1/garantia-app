import { useRef, useEffect, useState } from 'react';
import { Brain, Heart, Dumbbell } from 'lucide-react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import ValueItem from '../ui/ValueItem';

const ValuesSection = () => {
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

  const values = [
    {
      title: 'Mente',
      description: 'Clareza, foco e leveza. Treinamos a mente para estar presente, cultivando consciência plena em cada movimento.',
      icon: <Brain className="w-10 h-10 text-primary-500" />,
      delay: 0,
    },
    {
      title: 'Corpo',
      description: 'Movimento com potência e presença. Fortalecemos o corpo de forma integral, respeitando seus limites e expandindo suas possibilidades.',
      icon: <Dumbbell className="w-10 h-10 text-primary-500" />,
      delay: 200,
    },
    {
      title: 'Emoção',
      description: 'Conexão consigo e com o grupo. Acolhemos todas as emoções que surgem durante a prática, transformando energia em movimento consciente.',
      icon: <Heart className="w-10 h-10 text-primary-500" />,
      delay: 400,
    },
  ];

  return (
    <section 
      id="dna" 
      ref={sectionRef}
      className="py-20 bg-primary-50"
    >
      <Container>
        <SectionTitle>Nosso DNA</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueItem 
              key={index}
              title={value.title}
              description={value.description}
              icon={value.icon}
              isVisible={isVisible}
              delay={value.delay}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ValuesSection;