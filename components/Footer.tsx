import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bayer-dark text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="flex items-center mb-6 md:mb-0">
             {/* Logo in light mode for dark background. Updated size to h-20 */}
             <Logo className="h-20 w-auto" lightMode={true} />
          </div>
          
          <div className="text-sm text-gray-500 text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Bayer Automation. Alle Rechte vorbehalten.</p>
            <div className="mt-2 space-x-4">
              <a href="#" className="hover:text-bayer hover:underline hover:underline-offset-4 transition-all duration-300">Impressum</a>
              <a href="#" className="hover:text-bayer hover:underline hover:underline-offset-4 transition-all duration-300">Datenschutz</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};