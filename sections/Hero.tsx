import React from 'react';
import { ArrowRight, Cpu } from 'lucide-react';
import { Button } from '../components/Button';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div id="home" className="relative bg-bayer-dark min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Strictly Industrial Background: Robotic arm / Manufacturing - NO PEOPLE */}
        <img 
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
          alt="Industrielle Automatisierungstechnik Roboterarm" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bayer-dark via-bayer-dark/95 to-bayer-dark/50" />
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.1 }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="lg:w-3/4">

          <div className="inline-flex items-center space-x-2 bg-sky-900/30 border border-sky-700/50 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
            <Cpu className="w-4 h-4 text-bayer" />
            <span className="text-sky-100 text-sm font-bold tracking-wide uppercase">{t.hero.badge}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            {t.hero.title} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bayer to-sky-400">
              {t.hero.titleHighlight}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => scrollTo('contact')}>
              {t.hero.ctaContact} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-bayer-dark" onClick={() => scrollTo('services')}>
              {t.hero.ctaServices}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};