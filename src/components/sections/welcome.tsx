"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const Welcome = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="welcome" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Welcome to <span className="text-blue-500">Elite Training</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Experience world-class martial arts instruction from a master with extensive background in Brazilian Jiu-Jitsu and MMA. Our mission is to empower students through combat sports.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
          {/* Video Thumbnail */}
          <div 
            className="relative aspect-video bg-slate-800 cursor-pointer group overflow-hidden"
            onClick={() => setVideoOpen(true)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900/60 group-hover:opacity-75 transition-opacity duration-300 z-10"></div>
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="bg-blue-600 rounded-full p-4 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                <Play className="h-8 w-8 text-white" />
              </div>
            </div>
            
            {/* Video Thumbnail - Using the mock video image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/mock-video-img.png"
                alt="Elite Training Techniques"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Video Dialog */}
        <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
          <DialogContent className="max-w-4xl p-0 bg-black overflow-hidden">
            <div className="aspect-video w-full">
              {/* Video player with mock image */}
              <div className="w-full h-full relative">
                <Image
                  src="/mock-video-img.png"
                  alt="Elite Training Video"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Play className="h-16 w-16 mx-auto mb-4 opacity-75" />
                    <p className="text-lg">Video Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Welcome;