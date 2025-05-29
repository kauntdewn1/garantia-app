import { useRef, useEffect, useState } from 'react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import TestimonialCard from '../ui/TestimonialCard';

const CommunitySection = () => {
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

  const testimonials = [
    {
      quote: "Nunca imaginei me sentir tão viva em uma terça às 7h da manhã!",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Mariana R.",
      delay: 0,
    },
    {
      quote: "É treino, mas é também terapia em movimento.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Lucas F.",
      delay: 200,
    },
    {
      quote: "O sorriso depois do yoga ao pôr do sol vale tudo.",
      image: "https://images.pexels.com/photos/1037915/pexels-photo-1037915.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Fernanda L.",
      delay: 400,
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-primary-50"
    >
      <Container>
        <SectionTitle>Quem Já Despertou com a Gente</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              image={testimonial.image}
              name={testimonial.name}
              isVisible={isVisible}
              delay={testimonial.delay}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CommunitySection;