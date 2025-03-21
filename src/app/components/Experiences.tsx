'use client'

import React, { useRef } from 'react'
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import { EffectCards, EffectCoverflow, Navigation } from 'swiper/modules'

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
    modules={[Navigation, EffectCoverflow]}
    grabCursor={true}
    autoplay={true}
    slidesPerView={2.25}
    navigation
    loop={true}
    speed={5000}
    setWrapperSize={true}
    centeredSlides
    spaceBetween={20}
    style={{ width: '100%' }}
    className='w-full px-10'
    breakpoints={{
     320: { slidesPerView: 1.25 },
     768: { slidesPerView: 2.25 },
     1280: { slidesPerView: 3.5 },
    }}>
    {slides.map((item, index) => (
     <SwiperSlide
      key={index}
      className='cursor-grab aspect-video'>
      <img
       src={item.img}
       className='object-bottom w-full'
      />
      <span className='absolute bottom-0 text-xl font-bold text-center w-full bg-gradient-to-t from-black/80 to-black/0 h-fit'>
       {item.title}
      </span>
     </SwiperSlide>
    ))}
   </Swiper>
  </section>
 )
}
