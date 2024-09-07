import { Product } from '../../../types/Product';
import { TypeProducts } from '../types/typeProducts';

export const filteredProducts = (products: Product[], type: TypeProducts) => {
  const newProducts = products.filter(({ category }) => category === type);

  return newProducts;
};
