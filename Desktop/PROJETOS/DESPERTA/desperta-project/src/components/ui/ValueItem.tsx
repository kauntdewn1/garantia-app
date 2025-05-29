import { ReactNode } from 'react';

interface ValueItemProps {
  title: string;
  description: string;
  icon: ReactNode;
  isVisible: boolean;
  delay: number;
}

const ValueItem = ({ title, description, icon, isVisible, delay }: ValueItemProps) => {
  return (
    <div 
      className={`bg-white rounded-xl p-6 shadow-md transition-all duration-700 ease-out`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-5">
        {icon}
      </div>
      
      <h3 className="text-xl font-display font-semibold text-primary-600 mb-3">
        {title}
      </h3>
      
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default ValueItem;