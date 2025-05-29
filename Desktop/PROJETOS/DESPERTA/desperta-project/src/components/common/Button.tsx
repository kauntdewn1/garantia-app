import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  const baseStyles = 'font-medium rounded-full transition-all duration-300 inline-flex items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-primary-500 text-primary-900 hover:bg-primary-400 active:bg-primary-600 shadow-md hover:shadow-lg',
    secondary: 'bg-white text-primary-800 hover:bg-primary-50 active:bg-primary-100 shadow-sm hover:shadow',
    outline: 'bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500/10 active:bg-primary-500/20',
    text: 'bg-transparent text-primary-500 hover:text-primary-600 hover:bg-primary-50 active:bg-primary-100',
  };

  const sizeStyles = {
    sm: 'text-sm py-1.5 px-4',
    md: 'text-base py-2.5 px-6',
    lg: 'text-lg py-3 px-8',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;