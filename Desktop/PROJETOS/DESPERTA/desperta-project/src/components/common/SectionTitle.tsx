import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle = ({
  children,
  subtitle,
  centered = true,
  className = '',
}: SectionTitleProps) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-700 mb-3">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;