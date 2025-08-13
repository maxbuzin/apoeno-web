"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const target = document.querySelector(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];



  return (
    <nav className="fixed inset-x-0 top-0 lg:top-4 z-50 flex justify-center">
      <div className="w-full lg:w-fit lg:rounded-full bg-blue-600">
        <div className="px-4 md:px-16 py-1 flex gap-20 justify-between items-center max-w-4xl w-auto">
          <Link href="/" className="min-w-fit max-w-[90%] text-2xl font-bold text-white transition-all">
            APOENO LOGO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-slate-100/80 hover:text-slate-100 transition-colors relative"
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
              >
                {link.name}

              </Link>
            ))}
            
            {/* Social Media Icons */}
             <div className="flex items-center space-x-4 ml-4">
               <a href="#" className="text-slate-100/80 hover:text-slate-100 transition-colors">
                 <FaLinkedin className="w-5 h-5" />
               </a>
               <a href="#" className="text-slate-100/80 hover:text-slate-100 transition-colors">
                 <FaInstagram className="w-5 h-5" />
               </a>
             </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="lg:hidden text-slate-100 focus:outline-none hover:text-blue-200 transition-all cursor-pointer" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-blue-600 border-t border-blue-700">
          <div className="container mx-auto px-4 py-5 h-dvh flex flex-col gap-5 pt-[30%]">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="px-5 py-2 w-full text-center bg-blue-700"
                onClick={(e) => {
                   e.preventDefault();
                   setIsOpen(false);
                   scrollToSection(link.href);
                 }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;