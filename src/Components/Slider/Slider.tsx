'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import SliderItem from '../SliderItem/SliderItem';

import sliderImg from '../../../public/sliderImg.jpg';
import sliderImg2 from '../../../public/sliderImg2.jpg';

import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

const Slider = () => {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[EffectFade, Autoplay, Pagination]}
        effect={'fade'}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="mySwiper">
        <SwiperSlide>
          <SliderItem img={sliderImg} title="Gold big hoops " price={68.0} object-fit="cover" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem img={sliderImg2} title="Gold big hoops " price={68.0} object-fit="cover" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem img={sliderImg} title="Gold big hoops " price={68.0} object-fit="cover" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem img={sliderImg2} title="Gold big hoops " price={68.0} object-fit="cover" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem img={sliderImg} title="Gold big hoops " price={68.0} object-fit="cover" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
