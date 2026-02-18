import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { NavItem } from '../types';
import { Logo } from './Logo';
import { useLanguage } from '../contexts/LanguageContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Removed Home (handled by Logo) and Contact (handled by CTA button)
  const NAV_ITEMS: NavItem[] = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.tech, href: '#tech' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const id = href.replace('#', '');
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

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de');
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-md ${
        scrolled ? 'py-2' : 'py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Click triggers scroll to top */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Logo className="h-12 w-auto" lightMode={false} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-700 hover:text-bayer px-3 py-2 text-sm font-bold transition-all duration-200 uppercase tracking-wide hover:scale-105 hover:underline hover:underline-offset-8 decoration-2 decoration-bayer"
              >
                {item.label}
              </a>
            ))}
            
            <a 
              href="#contact-form"
              onClick={(e) => handleNavClick(e, '#contact-form')}
              className="bg-bayer hover:bg-sky-700 text-white px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 transform rounded-sm"
            >
              {t.nav.request}
            </a>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-bayer font-medium transition-colors border border-gray-300 rounded-sm px-2 py-1 hover:border-bayer"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase text-sm">{language}</span>
            </button>
          </div>

          {/* Mobile menu button & Language */}
          <div className="md:hidden flex items-center space-x-4">
             <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-bayer font-medium transition-colors"
            >
              <span className="uppercase text-sm font-bold">{language}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white border-t border-gray-100 shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-gray-700 hover:bg-gray-50 hover:text-bayer block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
          {/* Mobile Request Button */}
           <a
              href="#contact-form"
              onClick={(e) => handleNavClick(e, '#contact-form')}
              className="text-gray-700 hover:bg-gray-50 hover:text-bayer block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              {t.nav.request}
            </a>
        </div>
      </div>
    </nav>
  );
};