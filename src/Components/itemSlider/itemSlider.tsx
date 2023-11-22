'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';

import sliderImg from '../../../public/card1.jpg';

import 'swiper/css';
import 'swiper/css/free-mode';

import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import './style.css';

import { Pagination, FreeMode, Navigation, Thumbs } from 'swiper/modules';

interface IItemSliderProps {
  img: string;
}

export default function ItemSlider({ img }: IItemSliderProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="slider">
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        direction="vertical"
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper">
        <SwiperSlide>
          <Image src={img} alt="slider img" width={120} height={110} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img} alt="slider img" width={120} height={110} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img} alt="slider img" width={120} height={110} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img} alt="slider img" width={120} height={110} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img} alt="slider img" width={120} height={110} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img} alt="slider img" width={120} height={110} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Pagination, FreeMode, Thumbs]}
        className="mySwiper2">
        <SwiperSlide>
          <Image src={img} alt="slider img" width={540} height={600} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img} alt="slider img" width={540} height={600} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img} alt="slider img" width={540} height={600} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img} alt="slider img" width={540} height={600} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img} alt="slider img" width={540} height={600} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img} alt="slider img" width={540} height={600} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
