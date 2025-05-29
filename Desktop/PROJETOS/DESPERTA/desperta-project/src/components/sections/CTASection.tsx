import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Handle form submission logic here
      setIsSubmitted(true);
      setEmail('');
      
      // Reset the submitted state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <Container>
        <div 
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ease-out`}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-700 mb-4">
            Fique por dentro dos próximos treinos
          </h2>
          
          <p className="text-gray-600 mb-8">
            Seja o primeiro a saber sobre novos eventos, treinos especiais e experiências exclusivas da Desperta.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
              
              <Button 
                type="submit"
                variant="primary"
                className="flex items-center justify-center gap-2"
              >
                <span>Inscrever</span>
                <Send size={16} />
              </Button>
            </div>
            
            {isSubmitted && (
              <p className="text-green-600 mt-3 animate-fade-in">
                Obrigado! Você foi inscrito com sucesso.
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;