import React, { useEffect, useRef, useState } from 'react';
import './ProductPage.scss';
import { ErrorPage } from '../ErrorPage';
import { Loader } from '../shared/components/Loader';
import { NoProductsPage } from '../NoProductsPage';
import { useLocation, useSearchParams } from 'react-router-dom';
import { ProductList } from '../shared/components/ProductList';
import { useGlobalState } from '../../castomHuks/useGlobalState';
import { TypeProducts } from './types/typeProducts';
import { filteredProducts } from './utils/filteredProducts';
import { Product } from '../../types/Product';
import { Pagination } from './components/Pagination';
import { SearchParams } from './components/SearchParams';
import { PerPage } from './types/perPage';
import { sortingProducts } from './utils/sortedProducts';

export const ProductPage: React.FC = () => {
  const type = useLocation().pathname.slice(1);
  const { products, isLoading, isError } = useGlobalState();
  const [filterProducts, setFilteredProducts] = useState<Product[]>([]);
  const currentProducts = useRef<Product[]>([]);

  const [searchParams] = useSearchParams();
  const sortType = searchParams.get('sort');
  const searchQuery = searchParams.get('query');

  const currentPage = Number(searchParams.get('page'));
  const perPage = searchParams.get('perPage') || PerPage.ALL;
  const perPageForPagination =
    perPage === PerPage.ALL ? filterProducts.length : Number(perPage);

  const startEl = (currentPage - 1) * perPageForPagination + 1;
  const endEl =
    currentPage * perPageForPagination > filterProducts.length
      ? filterProducts.length
      : currentPage * perPageForPagination;

  useEffect(() => {
    if (!isLoading) {
      const data = filteredProducts(products, type as TypeProducts);

      setFilteredProducts(data);
      currentProducts.current = data;
    }
  }, [type, products, isLoading]);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredProducts(currentProducts.current);

      return;
    }

    const searchProducts = currentProducts.current.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase().trim()),
    );

    const timerId = setTimeout(() => {
      setFilteredProducts(searchProducts);
    }, 500);

    return () => clearTimeout(timerId);
  }, [searchQuery]);

  const namePage = type.slice(0, 1).toUpperCase() + type.slice(1);

  const sortedProducts = sortingProducts(sortType, filterProducts);

  return (
    <div className="products">
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <ErrorPage />
      ) : currentProducts.current.length === 0 ? (
        <NoProductsPage type={type} />
      ) : (
        <div className="products__catalog">
          <h1 className="products__title">{namePage}</h1>
          <p className="products__count">{`${sortedProducts.length} models`}</p>
          <SearchParams />
          {sortedProducts.length > 0 ? (
            <ProductList products={sortedProducts.slice(startEl - 1, endEl)} />
          ) : (
            <div>{`There are no ${type} matching the query`}</div>
          )}
          {perPage !== PerPage.ALL && (
            <Pagination total={sortedProducts.length} />
          )}
        </div>
      )}
    </div>
  );
};
