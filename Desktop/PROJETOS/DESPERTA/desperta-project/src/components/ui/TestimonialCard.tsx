interface TestimonialCardProps {
  quote: string;
  image: string;
  name: string;
  isVisible: boolean;
  delay: number;
}

const TestimonialCard = ({ quote, image, name, isVisible, delay }: TestimonialCardProps) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-700 ease-out`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="relative h-48">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/70 to-primary-700/70"></div>
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <p className="text-gray-700 font-medium italic mb-4">
          "{quote}"
        </p>
        
        <p className="text-primary-600 font-semibold">
          {name}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;