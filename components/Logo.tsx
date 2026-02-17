import React from 'react';

interface LogoProps {
  className?: string;
  lightMode?: boolean; 
}

export const Logo: React.FC<LogoProps> = ({ className = "h-12 w-auto", lightMode = false }) => {
  // STRICT URL - DO NOT CHANGE
  const logoUrl = "https://lh3.googleusercontent.com/d/1yHqYVlSx4LjT03vOZUsB_r9ZnLS0BcKi";

  return (
    <img 
      src={logoUrl} 
      alt="Bayer Automation" 
      // object-contain ensures no distortion.
      // lightMode=true applies filter to make logo white for dark backgrounds.
      className={`object-contain ${className} ${lightMode ? 'filter grayscale brightness-0 invert' : ''}`}
    />
  );
};