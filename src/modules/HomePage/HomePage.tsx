import React, { useEffect } from 'react';

import './HomePage.scss';

import { ImageSlider } from './components/ImageSlider';
import { useDispatch } from '../../castomHuks/useDispatch';
import { getProducts } from '../../api/products';
import { useGlobalState } from '../../castomHuks/useGlobalState';
import { Loader } from '../shared/components/Loader';
import { ErrorPage } from '../ErrorPage';
import { GoodsSlider } from '../shared/components/GoodsSlider/GoodsSlider';

export const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const { products, isLoading, isError } = useGlobalState();

  useEffect(() => {
    dispatch({ type: 'isLoading', payload: true });
    getProducts()
      .then(data => dispatch({ type: 'getProducts', payload: data }))
      .catch(() => dispatch({ type: 'isError', payload: true }))
      .finally(() => dispatch({ type: 'isLoading', payload: false }));
  }, []);

  return (
    <div className="homePage">
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <ErrorPage />
      ) : (
        <>
          <h1 className="homePage__title">Welcome to Nice Gadgets store!</h1>
          <ImageSlider />
          <GoodsSlider title="Brand new models" products={products} />
        </>
      )}
    </div>
  );
};
