import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer uppercase tracking-wide";
  
  const variants = {
    primary: "border-transparent text-white bg-bayer hover:bg-sky-700 shadow-lg shadow-sky-900/20 focus:ring-bayer",
    outline: "border-bayer text-bayer bg-transparent hover:bg-sky-50 focus:ring-bayer",
    white: "border-transparent text-bayer-dark bg-white hover:bg-gray-100 focus:ring-white"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};