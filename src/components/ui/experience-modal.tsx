'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import Image from 'next/image';

interface Experience {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  details: {
    date: string;
    location: string;
    achievement: string;
    description: string;
  };
}

interface ExperienceModalProps {
  experience: Experience | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ExperienceModal({ experience, isOpen, onClose }: ExperienceModalProps) {
  if (!experience) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 bg-slate-800 border-slate-700 overflow-hidden">
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Modal Content */}
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative aspect-[4/3] md:aspect-auto">
              <Image
                src={experience.image}
                alt={experience.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-800/20"></div>
            </div>

            {/* Content Section */}
            <div className="p-8 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {experience.title}
                </h2>
                <p className="text-blue-400 text-lg">
                  {experience.description}
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <h4 className="text-blue-400 font-semibold mb-1">Date</h4>
                    <p className="text-white">{experience.details.date}</p>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <h4 className="text-blue-400 font-semibold mb-1">Location</h4>
                    <p className="text-white">{experience.details.location}</p>
                  </div>
                </div>

                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="text-blue-400 font-semibold mb-2">Achievement</h4>
                  <p className="text-white font-medium">{experience.details.achievement}</p>
                </div>

                <div>
                  <h4 className="text-blue-400 font-semibold mb-3">Details</h4>
                  <p className="text-slate-300 leading-relaxed">
                    {experience.details.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}