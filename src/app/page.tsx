import Hero from '@/components/sections/hero';
import Welcome from '@/components/sections/welcome';
import ExperiencesSection from '@/components/sections/experiences-section';
import CertificationsGallery from '@/components/sections/certifications-gallery';
import CtaSection from '@/components/sections/cta-section';
import ContactForm from '@/components/sections/contact-form';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100">
      <section id="home">
        <Hero />
        <Welcome />
      </section>
      <section id="experience">
        <ExperiencesSection />
      </section>
      <section id="certifications">
        <CertificationsGallery />
      </section>
      <CtaSection />
      <section id="contact">
        <ContactForm />
      </section>
    </main>
  );
}