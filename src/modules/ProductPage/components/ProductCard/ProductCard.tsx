import React from 'react';
import './ProductCard.scss';

import { Link, useLocation } from 'react-router-dom';
import { Product } from '../../../../types/Product';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const location = useLocation().pathname;

  return (
    <article className="productCard">
      <Link to={`${location}/product/${product.itemId}`}>
        <img src={product.image} />
        <p>{product.name}</p>
      </Link>
    </article>
  );
};
