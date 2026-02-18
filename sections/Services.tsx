import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { Code2, Monitor, Zap, Settings, Database, Share2, LucideIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const ICONS: LucideIcon[] = [Code2, Monitor, Zap, Settings, Share2, Database];

  return (
    <SectionWrapper id="services" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-bayer-dark mb-4">{t.services.title}</h2>
        <div className="w-24 h-1.5 bg-bayer mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          {t.services.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.services.items.map((service, index) => {
          const Icon = ICONS[index % ICONS.length];
          return (
            <div 
              key={index} 
              className="group bg-gray-50 p-8 border border-gray-100 hover:border-bayer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Tech Decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gray-100 -mr-10 -mt-10 rotate-45 group-hover:bg-bayer/10 transition-colors"></div>
              
              <div className="w-16 h-16 bg-bayer-dark group-hover:bg-bayer rounded-sm flex items-center justify-center mb-6 transition-colors shadow-lg">
                <Icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-bayer transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>

              <div className="mt-6 w-12 h-1 bg-gray-300 group-hover:bg-bayer transition-colors"></div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};