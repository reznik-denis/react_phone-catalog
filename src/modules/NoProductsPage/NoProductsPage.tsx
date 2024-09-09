import React from 'react';
import './NoProductsPage.scss';

type Props = {
  type: string;
};

export const NoProductsPage: React.FC<Props> = ({ type }) => {
  return (
    <div className="noProductPage">
      <h2>{`There are no ${type} yet`}</h2>
      {type === 'favorites products' ? (
        <img
          src="./img/cart-is-empty.png"
          alt="no product page"
          className="noProductPage__image"
        />
      ) : (
        <img
          src="./img/product-not-found.png"
          alt="no product page"
          className="noProductPage__image"
        />
      )}
    </div>
  );
};
