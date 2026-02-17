import React from 'react';

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
  return (
    <div id="tech" className="py-20 bg-bayer-dark border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Technologie-Stack</h2>
          <p className="text-gray-400">Wir setzen auf bewährte Tools und Plattformen führender Hersteller.</p>
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

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 items-center">
            {/* Logos represented as text placeholders for reliability */}
            <div className="flex items-center justify-center h-16">
                <span className="text-2xl font-black text-white tracking-widest">SIEMENS</span>
            </div>
            <div className="flex items-center justify-center h-16">
                <span className="text-2xl font-black text-white tracking-widest">BECKHOFF</span>
            </div>
            <div className="flex items-center justify-center h-16">
                <span className="text-2xl font-black text-white tracking-widest">EPLAN</span>
            </div>
            <div className="flex items-center justify-center h-16">
                <span className="text-2xl font-black text-white tracking-widest">RITTAL</span>
            </div>
        </div>
      </div>
    </div>
  );
};