'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Your logos array
const logos = [
  '/images/home/KT1.png',
  '/images/home/lustra.png',
  '/images/home/tridonic.png',
  '/images/home/panasonic.png',
  '/images/home/tci.png',
  '/images/home/vs.png',
  '/images/home/osram.png',
  '/images/home/luxram.png',
  '/images/home/meanwel.png',
  '/images/home/light1.png',
  '/images/home/light1.png',
  '/images/home/light1.png',
  '/images/home/light1.png',
];

const BrandCarousel = () => {
  return (
    <div className="max-w-[1440px] mx-auto py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Our Brand Partners</h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={6}
        autoplay={{ delay: 5000 }}
        // navigation={{
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // }}
        pagination={{ clickable: true }}
        breakpoints={{
          1024: { slidesPerView: 5 },
          768: { slidesPerView: 2 },
        }}
        className="w-full"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center p-4">
              <div className="relative w-32 h-16">
                <Image
                  src={logo}
                  alt={`Brand Logo ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                  className="mx-auto"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Custom Navigation Buttons */}
        {/* <div className="swiper-button-prev text-gray-800 text-xl after:text-xl after:content-['prev']"></div>
        <div className="swiper-button-next text-gray-800 text-xl after:text-xl after:content-['next']"></div> */}
      </Swiper>
    </div>
  );
};

export default BrandCarousel;