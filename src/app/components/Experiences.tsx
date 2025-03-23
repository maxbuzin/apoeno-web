'use client';
import React, { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';

// Add type declarations for Swiper element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        init?: string;
        navigation?: string;
        pagination?: string;
      };
      'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

interface SwiperElement extends HTMLElement {
  initialize: () => void;
}

// Register Swiper web components
register();

// Mock movie data - would come from an API/database in a real app
const movies = [
  {
    id: 1,
    title: 'Thor: Ragnarok',
    description: 'Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarok, the destruction of his world, at the hands of the powerful Hela.',
    image: '/slide_jjkids_1.jpg',
  },
  {
    id: 2,
    title: 'The Suicide Squad',
    description: 'Supervillain Harley Quinn, bloodsport, peacemaker, and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X.',
    image: '/slide_jjkids_1.jpg',
  },
  {
    id: 3,
    title: 'Spider-Man: No Way Home',
    description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
    image: '/slide_jjkids_1.jpg',
  },
  {
    id: 4,
    title: 'Doctor Strange',
    description: 'Doctor Strange and Wong are chased by a demon searching for the Book of Vishanti!',
    image: '/slide_jjkids_1.jpg',
  },
  {
    id: 5,
    title: 'Avengers: Endgame',
    description: 'After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos actions.',
    image: '/slide_jjkids_1.jpg',
  },
];

export default function Experiences() {
  const swiperElRef = useRef<SwiperElement | null>(null);

  useEffect(() => {
    // Make sure swiper-element is defined before setting parameters
    if (swiperElRef.current) {
      // Set custom parameters for swiper element
      Object.assign(swiperElRef.current, {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
        grabCursor: true,
        loop: true,
        effect: 'coverflow',
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        },
        pagination: {
          clickable: false,
          dynamicBullets: false,
          dynamicMainBullets: 1,
          el: '.swiper-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        },
        navigation: false,
        speed: 500,
        // Add autoplay
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        breakpoints: {
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }
      });

      // Initialize Swiper
      swiperElRef.current.initialize();
    }
  }, []);

  // Add a style block for custom swiper styles
  const swiperStyles = `
    :root {
      --swiper-pagination-bottom: 20px;
      --swiper-theme-color: #ffffff;
      --swiper-pagination-bullet-inactive-color: rgba(255, 255, 255, 0.5);
      --swiper-pagination-bullet-inactive-opacity: 0.5;
      --swiper-pagination-bullet-size: 10px;
      --swiper-pagination-bullet-horizontal-gap: 8px;
    }
    
    swiper-container {
      padding-bottom: 60px;
    }
    
    swiper-container::part(pagination) {
      bottom: 15px;
      padding: 10px 0;
    }
    
    swiper-container::part(bullet) {
      margin: 0 6px;
    }
    
    swiper-container::part(bullet-active) {
      transform: scale(1.2);
    }
    
    swiper-slide {
      filter: blur(3px) brightness(0.6);
      transition: all 0.4s ease;
      transform: scale(0.9);
    }
    
    swiper-slide.swiper-slide-active {
      filter: blur(0) brightness(1);
      transform: scale(1);
    }
    
    swiper-slide.swiper-slide-prev, 
    swiper-slide.swiper-slide-next {
      filter: blur(1.5px) brightness(0.75);
      transform: scale(0.95);
    }
  `;

  return (
    <section data-aos="fade-up" className="pt-16 relative bg-slate-950">
      {/* Add style tag for custom styles */}
      <style jsx global>{swiperStyles}</style>
      
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl text-center font-semibold mb-8 text-white"></h2>
        
        {/* Movie Carousel */}
        <div className="relative mb-10">
          {React.createElement('swiper-container', { 
            ref: swiperElRef,
            init: 'false',
            className: 'w-full',
            autoplay: 'true',
            pagination: 'true',
            'effect': 'coverflow'
          }, movies.map((movie) => {
            return React.createElement('swiper-slide', { 
              key: movie.id,
              className: 'overflow-hidden rounded-xl'
            }, 
              <div className="relative group aspect-[16/9] md:aspect-[16/10] cursor-pointer shadow-lg">
                {/* Movie Image */}
                <img 
                  src={movie.image} 
                  alt={movie.title}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent rounded-xl"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-5 pb-6 text-white text-center">
                  <h3 className="text-xl md:text-2xl font-bold drop-shadow-lg">{movie.title}</h3>
                </div>
              </div>
            );
          }))}

          {/* Gradient Edges */}
          <div className="absolute pointer-events-none inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
          <div className="absolute pointer-events-none inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
}