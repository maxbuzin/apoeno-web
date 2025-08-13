'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExperienceModal } from '../ui/experience-modal';

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

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Championship Victory',
    description: 'Won the regional MMA championship',
    image: '/slide/slide-1.png',
    alt: 'Championship victory celebration',
    details: {
      date: 'March 2023',
      location: 'Madison Square Garden',
      achievement: 'Regional MMA Championship',
      description: 'After months of intense training and preparation, I achieved my goal of winning the regional MMA championship. This victory represents not just personal success, but validation of the training methods and dedication that define my approach to martial arts.'
    }
  },
  {
    id: 2,
    title: 'Training Excellence',
    description: 'Advanced training techniques mastery',
    image: '/slide/slide-2.png',
    alt: 'Advanced training session',
    details: {
      date: 'Ongoing',
      location: 'Elite Training Facility',
      achievement: 'Master Trainer Certification',
      description: 'Continuous development of advanced training methodologies has allowed me to help students achieve their maximum potential. My focus on technique refinement and mental preparation sets my training programs apart.'
    }
  },
  {
    id: 3,
    title: 'Student Success',
    description: 'Mentoring the next generation of fighters',
    image: '/slide/slide-3.png',
    alt: 'Student training session',
    details: {
      date: 'Year Round',
      location: 'Various Locations',
      achievement: 'Multiple Student Championships',
      description: 'The greatest achievement is seeing my students succeed. Over the years, I have mentored numerous fighters who have gone on to win championships and achieve their personal goals in martial arts.'
    }
  },
  {
    id: 4,
    title: 'International Competition',
    description: 'Competing on the world stage',
    image: '/slide/slide-4.png',
    alt: 'International competition',
    details: {
      date: 'July 2022',
      location: 'Tokyo, Japan',
      achievement: 'International Tournament Finalist',
      description: 'Representing my country in international competition was both an honor and a challenge. Reaching the finals taught me valuable lessons about perseverance and the global nature of martial arts excellence.'
    }
  },
  {
    id: 5,
    title: 'Technique Innovation',
    description: 'Developing new training methods',
    image: '/slide/slide-5.png',
    alt: 'Innovative training technique',
    details: {
      date: 'Ongoing Research',
      location: 'Training Laboratory',
      achievement: 'Published Training Methodology',
      description: 'Innovation in training techniques is crucial for staying ahead in martial arts. My research into biomechanics and psychology has led to new methods that improve both performance and safety for practitioners.'
    }
  },
  {
    id: 6,
    title: 'Community Impact',
    description: 'Building stronger martial arts communities',
    image: '/slide/slide-1.png',
    alt: 'Community training program',
    details: {
      date: 'Ongoing Initiative',
      location: 'Local Communities',
      achievement: 'Community Leadership Award',
      description: 'Giving back to the community through martial arts programs has been one of my most rewarding experiences. These initiatives help build character, discipline, and confidence in people of all ages.'
    }
  }
];

export default function ExperiencesSection() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);



  return (
    <section id="experiences" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-blue-500">Journey</span> & Experiences
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Explore the highlights of my martial arts journey, from championship victories to training excellence.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-auto md:h-[500px] lg:h-[600px]">
            {/* Card 1 */}
            <div 
              className="relative rounded-xl overflow-hidden shadow-2xl transition-all duration-500 cursor-pointer border-2 border-white/20 hover:border-white/40 shadow-white/10 hover:shadow-white/20 group h-48 md:h-auto"
              onClick={() => setSelectedExperience(experiences[0])}
            >
              <div className="absolute inset-0 bg-slate-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900/60 group-hover:opacity-30 transition-all duration-500 z-10"></div>
                <Image
                  src={experiences[0].image}
                  alt={experiences[0].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent py-4 px-4 z-20">
                  <h3 className="text-white font-semibold text-lg mb-1">{experiences[0].title}</h3>
                  <p className="text-slate-200 text-sm opacity-90 line-clamp-2">{experiences[0].description}</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div 
              className="relative rounded-xl overflow-hidden shadow-2xl transition-all duration-500 cursor-pointer border-2 border-white/20 hover:border-white/40 shadow-white/10 hover:shadow-white/20 group h-48 md:h-auto"
              onClick={() => setSelectedExperience(experiences[1])}
            >
              <div className="absolute inset-0 bg-slate-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900/60 group-hover:opacity-30 transition-all duration-500 z-10"></div>
                <Image
                  src={experiences[1].image}
                  alt={experiences[1].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent py-4 px-4 z-20">
                  <h3 className="text-white font-semibold text-lg mb-1">{experiences[1].title}</h3>
                  <p className="text-slate-200 text-sm opacity-90 line-clamp-2">{experiences[1].description}</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div 
              className="relative rounded-xl overflow-hidden shadow-2xl transition-all duration-500 cursor-pointer border-2 border-white/20 hover:border-white/40 shadow-white/10 hover:shadow-white/20 group h-48 md:h-auto"
              onClick={() => setSelectedExperience(experiences[2])}
            >
              <div className="absolute inset-0 bg-slate-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900/60 group-hover:opacity-30 transition-all duration-500 z-10"></div>
                <Image
                  src={experiences[2].image}
                  alt={experiences[2].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent py-4 px-4 z-20">
                  <h3 className="text-white font-semibold text-lg mb-1">{experiences[2].title}</h3>
                  <p className="text-slate-200 text-sm opacity-90 line-clamp-2">{experiences[2].description}</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div 
              className="relative rounded-xl overflow-hidden shadow-2xl transition-all duration-500 cursor-pointer border-2 border-white/20 hover:border-white/40 shadow-white/10 hover:shadow-white/20 group h-48 md:h-auto"
              onClick={() => setSelectedExperience(experiences[3])}
            >
              <div className="absolute inset-0 bg-slate-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900/60 group-hover:opacity-30 transition-all duration-500 z-10"></div>
                <Image
                  src={experiences[3].image}
                  alt={experiences[3].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent py-4 px-4 z-20">
                  <h3 className="text-white font-semibold text-lg mb-1">{experiences[3].title}</h3>
                  <p className="text-slate-200 text-sm opacity-90 line-clamp-2">{experiences[3].description}</p>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div 
              className="relative rounded-xl overflow-hidden shadow-2xl transition-all duration-500 cursor-pointer border-2 border-white/20 hover:border-white/40 shadow-white/10 hover:shadow-white/20 group h-48 md:h-auto"
              onClick={() => setSelectedExperience(experiences[4])}
            >
              <div className="absolute inset-0 bg-slate-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900/60 group-hover:opacity-30 transition-all duration-500 z-10"></div>
                <Image
                  src={experiences[4].image}
                  alt={experiences[4].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent py-4 px-4 z-20">
                  <h3 className="text-white font-semibold text-lg mb-1">{experiences[4].title}</h3>
                  <p className="text-slate-200 text-sm opacity-90 line-clamp-2">{experiences[4].description}</p>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div 
              className="relative rounded-xl overflow-hidden shadow-2xl transition-all duration-500 cursor-pointer border-2 border-white/20 hover:border-white/40 shadow-white/10 hover:shadow-white/20 group h-48 md:h-auto"
              onClick={() => setSelectedExperience(experiences[5])}
            >
              <div className="absolute inset-0 bg-slate-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900/60 group-hover:opacity-30 transition-all duration-500 z-10"></div>
                <Image
                  src={experiences[5].image}
                  alt={experiences[5].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent py-4 px-4 z-20">
                  <h3 className="text-white font-semibold text-lg mb-1">{experiences[5].title}</h3>
                  <p className="text-slate-200 text-sm opacity-90 line-clamp-2">{experiences[5].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Modal */}
      <ExperienceModal
        experience={selectedExperience}
        isOpen={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </section>
  );
}