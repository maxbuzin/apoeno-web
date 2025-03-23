'use client'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/Header'
import Experiences from './components/Experiences'
import Footer from './components/Footer'
import Certifications from './components/Certifications'
import Testimonials from './components/Testimonials'

export default function HomePage() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			mirror: true,
			offset: 0,
			once: false,
			easing: 'ease-out-cubic'
		})
	}, [])

	return (
		<main className='relative'>
			<Header />
			<Testimonials />
			<Experiences />
			<Certifications />
			<Footer />
		</main>
	)
}
