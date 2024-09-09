import React from 'react';
import './FavoritesPage.scss';
import { NoProductsPage } from '../NoProductsPage';
import { ProductList } from '../shared/components/ProductList';
import { useGlobalState } from '../../castomHuks/useGlobalState';

export const FavoritesPage: React.FC = () => {
  const { favorites } = useGlobalState();

  return (
    <div className="products">
      {favorites.length === 0 ? (
        <NoProductsPage type={'favorites products'} />
      ) : (
        <div className="catalog">
          <h1 className="FavoritesPage__title">Favorites</h1>
          <p className="FavoritesPage__count">{`${favorites.length} items`}</p>
          <ProductList products={favorites} />
        </div>
      )}
    </div>
  );
};
