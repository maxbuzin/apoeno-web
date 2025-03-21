'use client'

import React from 'react'
import { useRef } from 'react'
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-cards'
import 'swiper/css/effect-coverflow'
import 'swiper/css/effect-creative'
import 'swiper/css/effect-cube'
import 'swiper/css/effect-fade'
import 'swiper/css/effect-flip'
import 'swiper/css/navigation'
import {
 EffectCards,
 EffectCoverflow,
 EffectCreative,
 EffectCube,
 EffectFade,
 EffectFlip,
 Navigation,
} from 'swiper/modules'

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

register()

export default function Experiences() {
 const swiperElRef = useRef(null)

 return (
  <section className='py-5'>
   <Swiper
    ref={swiperElRef}
    modules={[
     Navigation,
     EffectFade,
     EffectFlip,
     EffectCoverflow,
     EffectCards,
     EffectCreative,
     EffectCube,
    ]}
    effect='coverflow'
    coverflowEffect={{
     rotate: 50,
     stretch: 0,
     depth: 100,
     modifier: 1,
     slideShadows: true,
    }}
    autoplay={true}
    slidesPerView={2.5}
    navigation
    loop={true}
    setWrapperSize={true}
    centeredSlides={true}
    spaceBetween={-50}
    className='w-full flex px-10'>
    {slides.map((item, index) => (
     <div className='w-full border-5 border-red-600 flex relative gap-5'>
      <SwiperSlide className='relative border-0 border-white'>
       <img src={item.img} />
       <span className='absolute bottom-0 text-xl font-bold text-center w-full backdrop-blur-[2px] bg-gradient-to-t from-black/20 to-black/0 py-3'>
        {item.title}
       </span>
      </SwiperSlide>
     </div>
    ))}
   </Swiper>
  </section>
 )
}
