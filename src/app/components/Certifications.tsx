'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { carouselOptions } from '@/lib/carouselOptions';

export default function Certifications() {
  // Remove type argument from useEmblaCarousel
  const [emblaRef] = useEmblaCarousel(carouselOptions);

  return (
    <section data-aos="fade-up" className="py-16">
      <h2 className="text-3xl text-center font-semibold mb-6">MY Certifications</h2>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {/* Example slide - replace with dynamic slides */}
          <div className="flex-[0_0_80%] md:flex-[0_0_40%] mx-2 bg-gray-900 p-4 rounded-xl shadow-xl">
            <img 
              src="/path-to-experience-image.jpg" 
              className="rounded" 
              alt="Experience description" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}