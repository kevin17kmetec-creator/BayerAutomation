import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TECH_STACK = [
  "Siemens TIA Portal",
  "SIMATIC S7-1500/1200",
  "WinCC Unified",
  "Beckhoff TwinCAT 3",
  "EPLAN Electric P8",
  "Profinet / Profibus",
  "EtherCAT",
  "IO-Link",
  "Structured Text (ST)",
  "Safety Integrated"
];

export const Technologies: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div id="tech" className="py-20 bg-bayer-dark border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">{t.tech.title}</h2>
          <p className="text-gray-400">{t.tech.subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {TECH_STACK.map((tech, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 hover:bg-cyan-900/30 border border-gray-700 hover:border-cyan-500/50 px-6 py-4 transition-all duration-300 backdrop-blur-sm group cursor-default"
            >
              <span className="text-gray-300 font-mono font-medium text-lg group-hover:text-cyan-400 transition-colors">
                {tech}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* SIEMENS */}
            <div className="bg-white rounded-sm p-8 flex items-center justify-center h-32 shadow-lg border border-gray-200">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg" 
                  alt="Siemens" 
                  className="h-12 w-auto object-contain mx-auto transition-transform duration-300 hover:scale-110"
                />
            </div>
            
            {/* BECKHOFF */}
            <div className="bg-white rounded-sm p-8 flex items-center justify-center h-32 shadow-lg border border-gray-200">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Beckhoff_Logo.svg/960px-Beckhoff_Logo.svg.png" 
                  alt="Beckhoff" 
                  className="h-12 w-auto object-contain mx-auto transition-transform duration-300 hover:scale-110"
                />
            </div>

            {/* EPLAN */}
            <div className="bg-white rounded-sm p-6 flex items-center justify-center h-32 shadow-lg border border-gray-200">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Eplan-logo.svg/500px-Eplan-logo.svg.png?20220426093737" 
                  alt="EPLAN" 
                  className="h-20 w-auto object-contain mx-auto transition-transform duration-300 hover:scale-110"
                />
            </div>

            {/* RITTAL */}
            <div className="bg-white rounded-sm p-2 flex items-center justify-center h-32 shadow-lg border border-gray-200">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Rittal-Logo_2010.svg/120px-Rittal-Logo_2010.svg.png?20220426093506" 
                  alt="Rittal" 
                  className="h-28 w-auto object-contain mx-auto transition-transform duration-300 hover:scale-110"
                />
            </div>
        </div>
      </div>
    </div>
  );
};