import { FaLinkedin, FaInstagram } from 'react-icons/fa6'
import Image from 'next/image'

export default function Header() {
 return (
  <header
   className='relative bg-cover bg-center bg-top z-0 min-h-fit max-h-[80dvh] -mt-20'
   style={{
    backgroundImage: 'url(/hero.jpeg)',
    backgroundSize: '120%',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    aspectRatio: "21/9",
   }}>
   <div className='absolute inset-0 flex flex-col justify-start items-center pt-[10%] drop-shadow-lg'>
    <div className='scale-200 mb-16'>
     <h1
      data-aos='fade-up'
      className='text-7xl font-bold uppercase text-center'>
      APOENO
     </h1>
     <h5
      data-aos='fade-up'
      className='text-center uppercase tracking-[0.7em]'>
      Sports Trainer
     </h5>
    </div>
    <p
     data-aos='fade-up'
     className='text-center max-w-2xl mt-12 text-3xl leading-relaxed'>
     "Martial Arts instructor with a large background in Brazilian Jiu-Jitsu and
     MMA. Committed to empowering students through combat sports."
    </p>
    <div
     data-aos='fade-up'
     className='flex gap-4 mt-6'>
     <FaLinkedin
      size={30}
      className='cursor-pointer hover:text-blue-500 hover:drop-shadow-none'
     />
     <FaInstagram
      size={30}
      className='cursor-pointer hover:text-blue-500 hover:drop-shadow-none'
     />
    </div>
   </div>
  </header>
 )
}
