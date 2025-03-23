import React from 'react'

export default function Testimonials() {
	return (
		<section className='w-full mx-auto flex gap-20 justify-center items-center bg-gradient-to-t from-slate-950 to-blue-950 p-5'>
			<div data-aos='fade-right' className='flex flex-col items-start text-left max-w-96 pt-10'>
				<h1>Testimonials</h1>
				<blockquote className='text-xl'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum harum placeat beatae! Eveniet
					voluptas quo sapiente magni neque accusantium! Modi nisi labore cumque libero quia
					accusantium quod non delectus reiciendis.
				</blockquote>
				<p className='mt-8 text-right w-full'> - Glover Teixeira, UFC Champion</p>
			</div>
			<iframe
				data-aos='fade-left'
				data-aos-delay='300'
				src='https://www.youtube.com/embed/qDt1xjEr2mw?autoplay=1&mute=1&controls=1&modestbranding=1&loop=1&rel=0'
				className='flex aspect-video h-[400px] shadow-black shadow-lg'
				allow='autoplay; encrypted-media'
			/>
		</section>
	)
}
