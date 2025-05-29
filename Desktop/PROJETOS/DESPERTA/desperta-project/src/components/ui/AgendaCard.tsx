import { MapPin, Clock } from 'lucide-react';

interface AgendaCardProps {
  date: string;
  time: string;
  title: string;
  location: string;
  type: string;
  isVisible: boolean;
  delay: number;
}

const AgendaCard = ({ date, time, title, location, type, isVisible, delay }: AgendaCardProps) => {
  const getTypeColor = () => {
    switch (type) {
      case 'yoga':
        return 'from-blue-400 to-purple-400';
      case 'funcional':
        return 'from-orange-400 to-red-500';
      case 'experience':
        return 'from-pink-400 to-purple-500';
      case 'trilha':
        return 'from-green-400 to-teal-500';
      case 'mantra':
        return 'from-indigo-400 to-blue-500';
      default:
        return 'from-primary-400 to-primary-500';
    }
  };

  return (
    <div 
      className={`bg-white/10 backdrop-blur-sm rounded-lg mb-4 overflow-hidden transition-all duration-700 ease-out hover:bg-white/20`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="flex flex-col sm:flex-row items-center">
        <div className={`w-full sm:w-24 p-4 text-center bg-gradient-to-r ${getTypeColor()}`}>
          <span className="block text-xl font-bold">{date}</span>
        </div>
        
        <div className="flex-1 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <div className="flex items-center text-white/80 text-sm mb-1">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{location}</span>
            </div>
          </div>
          
          <div className="flex items-center mt-2 sm:mt-0 text-white/80">
            <Clock className="w-4 h-4 mr-1" />
            <span>{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendaCard;