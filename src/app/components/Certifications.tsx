import React from 'react'
import Link from 'next/link'

interface Certificate {
  id: number;
  imageUrl: string;
  alt: string;
}

const certificates: Certificate[] = [
  { id: 1, imageUrl: '/slides/certificates/certificate1.jpeg', alt: 'Certificate 1' },
  { id: 2, imageUrl: '/slides/certificates/certificate1.jpeg', alt: 'Certificate 1' },
  { id: 3, imageUrl: '/slides/certificates/certificate1.jpeg', alt: 'Certificate 1' },
  { id: 4, imageUrl: '/slides/certificates/certificate1.jpeg', alt: 'Certificate 1' },
  { id: 5, imageUrl: '/slides/certificates/certificate1.jpeg', alt: 'Certificate 1' },,
  { id: 6, imageUrl: '/slides/certificates/certificate1.jpeg', alt: 'Certificate 1' },
];

export default function Certifications() {
  return (
    <section data-aos="fade-up" data-aos-offset="-100" className="w-full px-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          FEATURED CERTIFICATIONS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {certificates.map((cert) => (
            <div 
              key={cert.id}
              className="relative aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {/* Replace img with next/image when you have the actual images */}
              <img
                src={cert.imageUrl}
                alt={cert.alt}
                className="w-full h-full object-cover cursor-pointer"
              />
            </div>
          ))}
        </div>

        {/* <div className="text-center">
          <Link 
            href="/all-certifications" 
            className="inline-block px-8 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            More certificates...
          </Link>
        </div> */}
      </div>
    </section>
  )
}
