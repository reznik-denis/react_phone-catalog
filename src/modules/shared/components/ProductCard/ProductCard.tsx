import React from 'react';
import './ProductCard.scss';

import { Link, useLocation } from 'react-router-dom';
import { Product } from '../../../../types/Product';
import { MainButton } from '../MainButton';
import { useGlobalState } from '../../../../castomHuks/useGlobalState';
import { ActionButton } from '../../types/ActionButton';
import { FavoritesButton } from '../FavoritesButton';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const location = useLocation().pathname;
  const { cart, favorites } = useGlobalState();

  const isAddedProductToCart = cart.some(
    ({ itemId }) => itemId === product.itemId,
  );

  const isAddedProductToFavotites = favorites.some(
    ({ itemId }) => itemId === product.itemId,
  );

  const { itemId, name, fullPrice, price, screen, capacity, ram, image } =
    product;

  return (
    <article className="productCard">
      <Link to={`${location}/product/${itemId}`} className="productCard__link">
        <div className="productCard__img-container">
          <img src={image} className="productCard__img" />
        </div>
        <p className="productCard__title">{name}</p>
      </Link>
      <div className="productCard__price-container">
        <p className="productCard__price">{`$${price ? price : fullPrice}`}</p>
        {price && <p className="productCard__fullPrice">{`$${fullPrice}`}</p>}
      </div>
      <ul className="productCard__list">
        <li className="productCard__item">
          <p className="productCard__item-name">Screen</p>
          <p className="productCard__item-value">{screen}</p>
        </li>
        <li className="productCard__item">
          <p className="productCard__item-name">Capacity</p>
          <p className="productCard__item-value">{capacity}</p>
        </li>
        <li className="productCard__item">
          <p className="productCard__item-name">RAM</p>
          <p className="productCard__item-value">{ram}</p>
        </li>
      </ul>
      <div className="productCard__button-container">
        <div className="productCard__mainButton">
          {isAddedProductToCart ? (
            <MainButton
              title={'Aded to cart'}
              product={product}
              actionButton={ActionButton.REMOVE}
            />
          ) : (
            <MainButton
              title={'Add to cart'}
              product={product}
              actionButton={ActionButton.ADD}
            />
          )}
        </div>
        <div className="productCard__favoritesButton">
          {isAddedProductToFavotites ? (
            <FavoritesButton
              product={product}
              actionButton={ActionButton.REMOVE}
            />
          ) : (
            <FavoritesButton
              product={product}
              actionButton={ActionButton.ADD}
            />
          )}
        </div>
      </div>
    </article>
  );
};
