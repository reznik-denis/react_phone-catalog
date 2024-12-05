import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import './ImageSlider.scss';

import banners from '../../api/images.json';
import { ArrowIcon } from '../../../shared/icons/ArrowIcon';

export const ImageSlider: React.FC = () => {
  return (
    <section className="swiper__wrapper">
      <Swiper
        spaceBetween={1}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: 'bullets',
          el: '.swiper-pagination',
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {banners.map(({ id, url }) => (
          <SwiperSlide key={id}>
            <div className="swiper__image">
              <img
                src={url}
                alt={`banner ${id}`}
                className="swiper__image--item"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="buttons-wrapper">
        <button className="swiper-button-prev">
          <ArrowIcon />
        </button>
        <button className="swiper-button-next">
          <ArrowIcon />
        </button>
        <button className="swiper-pagination"></button>
      </div>
    </section>
  );
};
