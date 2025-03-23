import { FaLinkedin, FaInstagram } from 'react-icons/fa6'
import Image from 'next/image'

export default function Header() {
	return (
		<header
			className='relative bg-cover bg-center bg-top z-0 min-h-fit max-h-[80dvh] -mt-20'
			style={{
				backgroundImage: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5)),url(/hero.webp)',
				backgroundSize: '100%',
				backgroundPosition: 'top center',
				backgroundRepeat: 'no-repeat',
				// backgroundColor: 'rgba(0,0,0,0.25)',
				backgroundBlendMode: 'multiply',
				aspectRatio: '21/9',
			}}>
			{/* Hero Text */}
			<div className='absolute inset-0 flex flex-col justify-center items-center pt-[10%] drop-shadow-lg'>
				<div className='scale-250 mb-16'>
					<h1
						data-aos='fade-down'
						data-aos-mirror='false'
						className='-mb-2 text-7xl font-bold uppercase text-center'>
						APOENO
					</h1>
					<h5
						data-aos='zoom-in'
						data-aos-mirror='false'
						data-aos-delay='300'
						className='text-center uppercase tracking-[0.7em]'>
						Sports Trainer
					</h5>
				</div>
				<p
					data-aos='fade-up'
					data-aos-mirror='false'
					data-aos-delay='600'
					className='text-center max-w-2xl mt-12 text-3xl leading-relaxed'>
					"Martial Arts instructor with a large background in Brazilian Jiu-Jitsu and MMA. Committed
					to empowering students through combat sports."
				</p>
				<div
					id='header'
					data-aos='zoom-out'
					data-aos-mirror='false'
					data-aos-delay='1000'
					className='flex gap-4 mt-6'>
					<FaLinkedin size={30} className='cursor-pointer hover:text-blue-500 duration-300' />
					<FaInstagram size={30} className='cursor-pointer hover:text-blue-500 duration-300' />
				</div>
			</div>
		</header>
	)
}
