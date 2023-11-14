'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import SliderItem from '../SliderItem/SliderItem';

import sliderImg from '../../../public/sliderImg.jpg';

import { Autoplay, Pagination } from 'swiper/modules';

const Slider = () => {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="mySwiper">
        <SwiperSlide>
          <SliderItem img={sliderImg} title="Gold big hoops " price={68.0} object-fit="cover" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem img={sliderImg} title="Gold big hoops " price={68.0} object-fit="cover" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem img={sliderImg} title="Gold big hoops " price={68.0} object-fit="cover" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem img={sliderImg} title="Gold big hoops " price={68.0} object-fit="cover" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem img={sliderImg} title="Gold big hoops " price={68.0} object-fit="cover" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
