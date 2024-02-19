// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../../styles/hero styles/index.css';

// import 'swiper/swiper-bundle.min.css'

export default function Slider({ slides }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='slider-wrapper'
    >
{
    slides.map((e) => (
        <SwiperSlide key={e.id}>
            <img src={e.image} alt={e.subtitle}/>
        </SwiperSlide>
    ))
}
    </Swiper>
  );
};