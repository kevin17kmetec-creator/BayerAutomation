import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="about" className="bg-white">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative">
            {/* Border decoration */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-cyan-500/30 z-0"></div>
            {/* Replaced with high-tech automated production line / conveyor - No people */}
            <img 
              src="https://images.unsplash.com/photo-1537462713505-a1d77725bb0c?q=80&w=2069&auto=format&fit=crop" 
              alt="Automatisierte Fertigungsstraße" 
              className="relative z-10 w-full h-auto shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 object-cover"
            />
            
            {/* Overlay stats card */}
            <div className="absolute -bottom-6 -right-6 bg-bayer-dark p-6 z-20 shadow-xl max-w-xs border-l-4 border-cyan-500">
              <p className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-1">{t.about.experience}</p>
              <p className="text-white text-lg font-medium">{t.about.experienceDesc}</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-bayer-dark mb-6">
            {t.about.title} <span className="text-cyan-600">{t.about.titleHighlight}</span>
          </h2>
          
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            {t.about.p1}
          </p>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            {t.about.p2}
          </p>

          <div className="space-y-4">
            {t.about.features.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};