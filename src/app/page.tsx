'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Experiences from './components/Experiences';
import Footer from './components/Footer';
import Certifications from './components/Certifications';

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <main className="relative bg-gray-950 text-slate-100">
      <Header />
      <Experiences />
      <Certifications />
      <Footer />
    </main>
  );
}