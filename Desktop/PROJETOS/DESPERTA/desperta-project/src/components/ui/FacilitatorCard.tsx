interface FacilitatorCardProps {
  name: string;
  photo: string;
  specialties: string[];
  isVisible: boolean;
  delay: number;
}

const FacilitatorCard = ({ name, photo, specialties, isVisible, delay }: FacilitatorCardProps) => {
  return (
    <div 
      className={`bg-white border-2 border-primary-100 rounded-xl overflow-hidden shadow-lg transition-all duration-700 ease-out`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent"></div>
        <img 
          src={photo} 
          alt={name} 
          className="w-full h-72 object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full p-6">
          <h3 className="text-2xl font-display font-bold text-white mb-2">
            {name}
          </h3>
        </div>
      </div>
      
      <div className="p-6 bg-gradient-to-b from-primary-50 to-white">
        <ul className="space-y-2">
          {specialties.map((specialty, index) => (
            <li key={index} className="text-gray-700">
              {specialty}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FacilitatorCard;