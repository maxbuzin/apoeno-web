'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const slides = [
  {
    img: '/slide_jjkids_1.jpg',
    title: 'Slide 1',
  },
  {
    img: '/slide_jjkids_1.jpg',
    title: 'Slide 2',
  },
  {
    img: '/slide_jjkids_1.jpg',
    title: 'Slide 3',
  },
  {
    img: '/slide_jjkids_1.jpg',
    title: 'Slide 4',
  },
  {
    img: '/slide_jjkids_1.jpg',
    title: 'Slide 5',
  },
  {
    img: '/slide_jjkids_1.jpg',
    title: 'Slide 6',
  },
]

export default function Experiences () {
  const [ emblaRef, emblaApi ] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      slidesToScroll: 3,
    },
    [ Autoplay() ]
  )

  return (
    <section
      data-aos='fade-up'
      className='flex flex-col pt-12 w-full min-h-fit container mx-auto'>
      <h2 className='text-3xl text-center font-semibold mb-6'>MY EXPERIENCES</h2>

      <div className='px-5 w-full'>

        <div className='overflow-hidden' ref={ emblaRef }>

          {/* essa que coloquei a borda vermelha esta com slide, ela toda, ai as imagens de dentro vao junto, o que apareceu na tela, foi o resto nao aparece, fica cordado */ }
          <div className='flex border border-red-600'> { slides.map( ( item, index ) => (

            // na minha cabeca essa div que deveria estar fazendo slide....
            <div className='flex-[0_0_33%] flex min-w-0' key={ index }>

              <article className='relative border-5 border-white select-none'>
                <img
                  src={ item.img }
                  alt={ item.title }
                />
                <div className='w-full bg-transparent absolute bottom-4 text-2xl p-2 pb-1 text-center text-white font-bold'>
                  { item.title }
                </div>
              </article>

            </div>
          ) ) }
          </div>

        </div>

      </div>

    </section>
  )
}
