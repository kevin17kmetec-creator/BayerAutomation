import React from 'react';

interface LogoProps {
  className?: string;
  lightMode?: boolean; 
}

export const Logo: React.FC<LogoProps> = ({ className = "h-12 w-auto", lightMode = false }) => {
  // Updated to the reliable direct stream URL
  const logoUrl = "https://lh3.googleusercontent.com/d/1yHqYVlSx4LjT03vOZUsB_r9ZnLS0BcKi";

  return (
    <img 
      src={logoUrl} 
      alt="Bayer Automation" 
      // Enforce object-contain to prevent distortion.
      // lightMode prop handles color inversion for dark backgrounds (Hero/Footer) to ensure visibility.
      className={`${className} object-contain ${lightMode ? 'filter grayscale brightness-0 invert' : ''}`}
    />
  );
};