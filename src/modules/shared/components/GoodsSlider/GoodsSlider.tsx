import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import './GoodsSlider.scss';

import { Product } from '../../../../types/Product';
import { ArrowIcon } from '../../icons/ArrowIcon';
import { ProductCard } from '../ProductCard';

type Props = {
  products: Product[];
  title: string;
};

export const GoodsSlider: React.FC<Props> = ({ products, title }) => {
  return (
    <section className="GoodsSlider__wrapper">
      <div className="GoodsSlider__header">
        <h2 className="GoodsSlider__title">{title}</h2>
        <div className="GoodsSlider__buttons-wrapper">
          <button className="GoodsSlider__button-prev">
            <ArrowIcon />
          </button>
          <button className="GoodsSlider__button-next">
            <ArrowIcon />
          </button>
        </div>
      </div>
      <ul className="GoodsSlider__list">
        <Swiper
          spaceBetween={16}
          loop={true}
          slidesPerView={1.3}
          breakpoints={{
            375: {
              slidesPerView: 1.5,
            },
            425: {
              slidesPerView: 1.8,
            },
            640: {
              slidesPerView: 2.5,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          navigation={{
            nextEl: '.GoodsSlider__button-next',
            prevEl: '.GoodsSlider__button-prev',
          }}
          modules={[Navigation]}
        >
          {products.map(product => (
            <SwiperSlide key={product.itemId}>
              <li className="GoodsSlider__item">
                <ProductCard product={product} />
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </section>
  );
};
