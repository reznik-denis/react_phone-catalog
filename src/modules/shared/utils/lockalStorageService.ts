import { Product } from '../../../types/Product';
import { ActionButton } from '../types/ActionButton';
import { Keys } from '../types/Constants';

export const localStorageService = (
  actionButton: ActionButton,
  product: Product,
  key: Keys,
) => {
  const storedProducts = localStorage.getItem(key);
  let products: Product[] = [];

  if (storedProducts) {
    products = JSON.parse(storedProducts);
  }

  switch (actionButton) {
    case 'add':
      products.push(product);
      break;
    case 'remove':
      products = products.filter(({ itemId }) => itemId !== product.itemId);
      break;
    default:
      break;
  }

  localStorage.setItem(key, JSON.stringify(products));
};
