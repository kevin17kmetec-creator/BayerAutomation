import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Technologies } from './sections/Technologies';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Services />
          <Technologies />
          <Contact />
        </main>

        <Footer />
        <BackToTop />
      </div>
    </LanguageProvider>
  );
};

export default App;