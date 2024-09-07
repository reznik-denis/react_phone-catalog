import React from 'react';
import './ProductList.scss';

import { ProductCard } from '../ProductCard';
import { Product } from '../../../../types/Product';

type Props = {
  products: Product[];
};

export const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <div className="productList__container">
      <ul className="productList__list">
        {products &&
          products.map(product => (
            <li className="productList__item" key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
      </ul>
    </div>
  );
};
