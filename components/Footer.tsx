import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bayer-dark text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          
          <div className="text-sm text-gray-500 text-center">
            <p className="mb-4">&copy; {new Date().getFullYear()} Bayer Automation. Alle Rechte vorbehalten.</p>
            <div className="flex justify-center space-x-8">
              <a href="#" className="hover:text-bayer hover:underline hover:underline-offset-4 transition-all duration-300">Impressum</a>
              <a href="#" className="hover:text-bayer hover:underline hover:underline-offset-4 transition-all duration-300">Datenschutz</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};