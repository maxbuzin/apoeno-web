"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section id="cta" className="py-20 bg-slate-800 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10 flex w-full  justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side: Text Content */}
          <div className="max-w-xl space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to take your <span className="text-blue-500">Jiu-Jitsu and MMA skills</span> to the next level?
            </h2>
            <div className="text-slate-300 text-lg space-y-4">
              <p>
                I create dynamic and engaging teaching methodologies for all ages and skill levels.
              </p>
              <p>
                Plus, I empower instructors with proven techniques and best practices, ensuring a high-quality learning experience for everyone.
              </p>
            </div>

            
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="text-blue-500 text-4xl font-bold mb-2">10+</div>
                <div className="text-white">Years Experience</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-blue-500 text-4xl font-bold mb-2">500+</div>
                <div className="text-white">Students Trained</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-blue-500 text-4xl font-bold mb-2">50+</div>
                <div className="text-white">Championships</div>
              </div>
            </div>
          </div>
          
          {/* Right Side: CTA Image */}
          <div className="">
            <div className="relative aspect-[9/16] max-w-md  rounded-lg h-[480px] overflow-hidden shadow-2xl">
              <Image
                src="/cta-img.png"
                alt="Ready to take your skills to the next level"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-slate-900/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;