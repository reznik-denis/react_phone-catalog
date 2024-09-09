import React, { useEffect, useState } from 'react';
import './ProductPage.scss';
import { ErrorPage } from '../ErrorPage';
import { Loader } from '../shared/components/Loader';
import { NoProductsPage } from '../NoProductsPage';
import { useLocation } from 'react-router-dom';
import { ProductList } from '../shared/components/ProductList';
import { useGlobalState } from '../../castomHuks/useGlobalState';
import { TypeProducts } from './types/typeProducts';
import { filteredProducts } from './utils/filteredProducts';
import { Product } from '../../types/Product';

export const ProductPage: React.FC = () => {
  const type = useLocation().pathname.slice(1);
  const { products } = useGlobalState();
  const [filterProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    switch (type) {
      case 'phones':
        setFilteredProducts(filteredProducts(products, TypeProducts.PHONES));
        break;
      case 'tablets':
        setFilteredProducts(filteredProducts(products, TypeProducts.TABLETS));
        break;
      case 'accessories':
        setFilteredProducts(
          filteredProducts(products, TypeProducts.ACCESSORIES),
        );
        break;
      default:
        setLoading(false);
        setError(true);

        return;
    }

    const timerId = setTimeout(() => {
      setLoading(false);
    }, 350);

    return () => clearTimeout(timerId);
  }, [type, products]);

  const namePage = type.slice(0, 1).toUpperCase() + type.slice(1);

  return (
    <div className="products">
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorPage />
      ) : filterProducts.length === 0 ? (
        <NoProductsPage type={type} />
      ) : (
        <div className="products__catalog">
          <h1 className="products__title">{namePage}</h1>
          <p className="products__count">{`${filterProducts.length} models`}</p>
          <ProductList products={filterProducts} />
        </div>
      )}
    </div>
  );
};
