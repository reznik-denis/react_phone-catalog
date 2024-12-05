import { Product } from '../../types/Product';

export type RootState = {
  products: Product[];
  isLoading: boolean;
  isError: boolean;
  notificationAddCart: boolean;
  cart: Product[] | [];
  favorites: Product[] | [];
};
