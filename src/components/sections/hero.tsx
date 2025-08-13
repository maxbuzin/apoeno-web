'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const target = document.querySelector(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-img.png"
          alt="Martial Arts Instructor"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0  z-10"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 z-20 mt-16">
        <div className="max-w-2xl text-balanced ml-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 animate-[fadeIn_1s_ease-in]">
            <span className="text-blue-500">Master</span> the Art of <span className="text-blue-500">Combat</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-800 mb-8 animate-[fadeIn_1.5s_ease-in]">
            Professional instruction in Brazilian Jiu-Jitsu and MMA. 
            Empowering students through discipline, technique, and mental fortitude.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg 
          className="w-6 h-6 text-blue-500" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;