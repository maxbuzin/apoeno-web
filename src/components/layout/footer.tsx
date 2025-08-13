'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const target = document.querySelector(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Brand Section */}
          <div className='self-start flex flex-col w-full items-center space-y-2'>
            <Link href="/" className="text-2xl font-bold text-blue-500">
              APOENO
            </Link>
            <p className="text-slate-300 text-center">
              Elite martial arts instruction specializing in Brazilian Jiu-Jitsu, MMA, and combat sports training. Building champions through discipline, technique, and dedication.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/apoeno" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/apoeno" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <hr className='lg:hidden' />

          {/* Quick Links */}
          <div className='self-start flex flex-col w-full items-center space-y-2'>
            <h3 className="text-white font-semibold">Quick Links</h3>
            <ul className="space-y-2 w-full text-center">
              <li>
                <Link 
                  href="#home" 
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                  onClick={(e) => {
                     e.preventDefault();
                     scrollToSection('#home');
                   }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="#experience" 
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                  onClick={(e) => {
                     e.preventDefault();
                     scrollToSection('#experience');
                   }}
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link 
                  href="#certifications" 
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                  onClick={(e) => {
                     e.preventDefault();
                     scrollToSection('#certifications');
                   }}
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                  onClick={(e) => {
                     e.preventDefault();
                     scrollToSection('#contact');
                   }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <hr className='lg:hidden' />

          {/* Contact Info */}
          <div className='self-start flex flex-col pb-10 w-full items-center'>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-slate-300">+971 50 987 6543</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-slate-300">contact@apoeno.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-slate-300">
                  Elite Training Center<br />
                  Dubai Sports City, UAE
                </span>
              </div>
            </div>
          </div>
        </div>
        
          <hr className='lg:hidden' />

        {/* Bottom Section */}
        <div className="pt-12 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 APOENO. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;