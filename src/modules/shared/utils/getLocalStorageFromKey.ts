import { Product } from '../../../types/Product';
import { Keys } from '../types/Constants';

export const getLocalStorageFormKey = (key: Keys) => {
  const storedProducts = localStorage.getItem(key);
  let products: Product[] = [];

  if (storedProducts) {
    products = JSON.parse(storedProducts);
  } else {
    localStorage.setItem(key, JSON.stringify(products));
  }

  return products;
};
