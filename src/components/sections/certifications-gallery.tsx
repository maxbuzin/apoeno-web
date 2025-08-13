"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent } from '@/components/ui/dialog';

type Certificate = {
  id: string;
  title: string;
  image: string;
  alt: string;
};

const certificates: Certificate[] = [
  {
    id: 'cert-1',
    title: 'Professional Certification',
    image: '/certifications/image.png',
    alt: 'Professional Martial Arts Certification',
  },
  {
    id: 'cert-2',
    title: 'Advanced Training Certificate',
    image: '/certifications/image-1.png',
    alt: 'Advanced Training Certificate',
  },
  {
    id: 'cert-3',
    title: 'Instructor Qualification',
    image: '/certifications/image-2.png',
    alt: 'Instructor Qualification Certificate',
  },
  {
    id: 'cert-4',
    title: 'Competition Achievement',
    image: '/certifications/image-3.png',
    alt: 'Competition Achievement Certificate',
  },
  {
    id: 'cert-5',
    title: 'Master Level Certification',
    image: '/certifications/WhatsApp Image 2025-03-17 at 15.40.44.png',
    alt: 'Master Level Certification',
  },
  {
    id: 'cert-6',
    title: 'Elite Training Diploma',
    image: '/certifications/WhatsApp Image 2025-03-17 at 15.40.44-1.png',
    alt: 'Elite Training Diploma',
  },
];

const CertificationsGallery = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  return (
    <section id="certifications" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-blue-500">Certifications</span> & Achievements
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Professional qualifications and recognitions in Brazilian Jiu-Jitsu, MMA, and combat sports instruction.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certificates.map((cert) => (
              <div 
                key={cert.id} 
                className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer gallery-image shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => setSelectedCertificate(cert)}
              >
                <div className="absolute inset-0 bg-slate-800 flex items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-slate-900/40 group-hover:opacity-75 transition-opacity duration-300 z-10"></div>
                  <Image
                    src={cert.image}
                    alt={cert.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-slate-900/90 py-3 px-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                    <span className="text-sm text-slate-300 text-center block font-medium">{cert.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate Dialog */}
        <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
          <DialogContent className="max-w-4xl p-4 bg-slate-900 border-slate-700">
            {selectedCertificate && (
              <div className="space-y-4">
                <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={selectedCertificate.image}
                    alt={selectedCertificate.alt}
                    fill
                    className="object-contain bg-slate-800"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl text-white font-medium">{selectedCertificate.title}</h3>
                  <p className="text-slate-400 mt-2">
                    Professional certification in martial arts instruction and training
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default CertificationsGallery;