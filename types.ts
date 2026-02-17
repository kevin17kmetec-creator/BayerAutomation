import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TechItem {
  name: string;
  category: 'PLC' | 'HMI' | 'Protocol' | 'Software';
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}