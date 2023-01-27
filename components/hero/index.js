import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

export default function Hero({ background }) {
  return (
    <>
      <div className='border-b-4 border-brand-blue md:border-none'>
        <Swiper
          id='hero_swiper'
          modules={[EffectFade, Autoplay]}
          effect='fade'
          loop
          autoplay={{ delay: 4000 }}
          spaceBetween={0}
          slidesPerView={1}>
          {background.map((i, el) => {
            return (
              <SwiperSlide key={'hero_' + i}>
                <div
                  className='-z-10 h-[370px] md:h-[70vh] relative bg-cover bg-center'
                  style={{ backgroundImage: `url(${i})` }}></div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
