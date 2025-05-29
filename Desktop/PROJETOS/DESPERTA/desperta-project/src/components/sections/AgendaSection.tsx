import { useRef, useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import AgendaCard from '../ui/AgendaCard';
import Button from '../common/Button';

const AgendaSection = () => {
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

  const events = [
    {
      date: '27/05',
      time: '07:00',
      title: 'FUNCIONAL',
      location: 'Ibirapuera',
      type: 'funcional',
      delay: 0,
    },
    {
      date: '30/05',
      time: '17:00',
      title: 'YOGA Sunset',
      location: 'Praça Pôr do Sol',
      type: 'yoga',
      delay: 150,
    },
    {
      date: '02/06',
      time: '08:00',
      title: 'Desperta EXPERIENCE',
      location: 'Local surpresa',
      type: 'experience',
      delay: 300,
    },
    {
      date: '09/06',
      time: '06:30',
      title: 'Trilha Cantareira + Flow',
      location: 'Parque Estadual da Cantareira',
      type: 'trilha',
      delay: 450,
    },
    {
      date: '14/06',
      time: '19:00',
      title: 'Desperta com Mantra ao Vivo',
      location: 'Morumbi',
      type: 'mantra',
      delay: 600,
    },
  ];

  return (
    <section 
      id="agenda" 
      ref={sectionRef}
      className="py-20 bg-primary-600 text-white"
    >
      <Container>
        <div className="flex items-center justify-center mb-10">
          <Calendar className="w-10 h-10 mr-4" />
          <SectionTitle className="mb-0 text-white">Agenda de Treinos & Experiências</SectionTitle>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {events.map((event, index) => (
            <AgendaCard 
              key={index}
              date={event.date}
              time={event.time}
              title={event.title}
              location={event.location}
              type={event.type}
              isVisible={isVisible}
              delay={event.delay}
            />
          ))}
          
          <div 
            className={`text-center mt-10 transition-all duration-500 ease-out`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '750ms',
            }}
          >
            <Button 
              variant="secondary" 
              size="lg"
              className="font-semibold"
            >
              Garanta seu lugar nos próximos treinos
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AgendaSection;