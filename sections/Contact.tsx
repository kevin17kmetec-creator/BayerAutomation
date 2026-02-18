import React, { useState } from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { Button } from '../components/Button';
import { ContactFormData } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <SectionWrapper id="contact" className="bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white shadow-2xl overflow-hidden">
        
        {/* Contact Info */}
        <div className="bg-bayer-dark p-10 md:p-14 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-bayer/20 rounded-full -mr-40 -mt-40 blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-2">{t.contact.title}</h3>
              <div className="w-16 h-1 bg-bayer mb-8"></div>
              
              <p className="text-gray-300 mb-12 leading-relaxed text-lg">
                {t.contact.subtitle}
              </p>

              <div className="space-y-10">
                <div className="flex items-start space-x-6">
                  <div className="bg-bayer/20 p-4 rounded-sm border border-bayer/30">
                    <MapPin className="w-6 h-6 text-bayer" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{t.contact.location}</h4>
                    <p className="text-xl font-medium">Gnas 72</p>
                    <p className="text-xl font-medium">8342 Gnas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                   <div className="bg-bayer/20 p-4 rounded-sm border border-bayer/30">
                    <Mail className="w-6 h-6 text-bayer" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{t.contact.email}</h4>
                    <a href="mailto:office@bayer-automation.at" className="text-xl font-medium hover:text-bayer transition-colors">office@bayer-automation.at</a>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                   <div className="bg-bayer/20 p-4 rounded-sm border border-bayer/30">
                    <Phone className="w-6 h-6 text-bayer" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{t.contact.phone}</h4>
                    <a href="tel:+436604041401" className="text-xl font-medium hover:text-bayer transition-colors">+43(0)660/4041401</a>
                  </div>
                </div>
              </div>
            </div>
        </div>

        {/* Form */}
        <div id="contact-form" className="p-10 md:p-14 bg-white relative">
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t.contact.formTitle}</h3>
            
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1 uppercase tracking-wide">{t.contact.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-bayer focus:ring-1 focus:ring-bayer outline-none transition-all placeholder-gray-400"
                placeholder={t.contact.namePh}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1 uppercase tracking-wide">{t.contact.emailLabel}</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-bayer focus:ring-1 focus:ring-bayer outline-none transition-all placeholder-gray-400"
                placeholder={t.contact.emailPh}
              />
            </div>

             <div>
              <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-1 uppercase tracking-wide">{t.contact.company}</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-bayer focus:ring-1 focus:ring-bayer outline-none transition-all placeholder-gray-400"
                placeholder={t.contact.companyPh}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1 uppercase tracking-wide">{t.contact.message}</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-bayer focus:ring-1 focus:ring-bayer outline-none transition-all resize-none placeholder-gray-400"
                placeholder={t.contact.messagePh}
              ></textarea>
            </div>

            <Button type="submit" fullWidth disabled={status === 'submitting' || status === 'success'}>
              {status === 'submitting' ? (
                <span className="flex items-center">
                  <Loader2 className="animate-spin mr-2 h-5 w-5" /> {t.contact.submitting}
                </span>
              ) : status === 'success' ? (
                <span className="flex items-center text-green-700">
                  {t.contact.success}
                </span>
              ) : (
                <span className="flex items-center">
                  {t.contact.submit} <Send className="ml-2 h-4 w-4" />
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};