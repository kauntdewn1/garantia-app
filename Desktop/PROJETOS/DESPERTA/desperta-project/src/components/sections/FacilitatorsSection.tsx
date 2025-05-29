import { useRef, useEffect, useState } from 'react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import FacilitatorCard from '../ui/FacilitatorCard';

const FacilitatorsSection = () => {
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

  const facilitators = [
    {
      name: 'Bianca Borges',
      photo: 'https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg?auto=compress&cs=tinysrgb&w=600',
      specialties: [
        '❤️ Treinamento em Grupo',
        '🚴🏻‍♀️ Indoor Cycle',
        '👩🏻‍💻 Gerente Regional de Coletivas @bluefitacademia',
        '✨ Transformando & Impactando com energia real',
      ],
      delay: 0,
    },
    {
      name: 'Janaina Costa',
      photo: 'https://images.pexels.com/photos/4132347/pexels-photo-4132347.jpeg?auto=compress&cs=tinysrgb&w=600',
      specialties: [
        '🏋🏼‍♀️ Treinamento em Grupo',
        '🧘🏼‍♀️ No Flow do Pilates e da Yoga',
        '🎓 Educação Física',
        '💫 Acredita que cuidar do corpo é amar a vida',
      ],
      delay: 300,
    },
  ];

  return (
    <section 
      id="facilitadoras" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <Container>
        <SectionTitle>Quem Guia o Despertar</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {facilitators.map((facilitator, index) => (
            <FacilitatorCard 
              key={index}
              name={facilitator.name}
              photo={facilitator.photo}
              specialties={facilitator.specialties}
              isVisible={isVisible}
              delay={facilitator.delay}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FacilitatorsSection;