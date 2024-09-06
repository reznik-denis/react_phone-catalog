import { Product } from './Product';

export type RootState = {
  products: Product[];
  isLoading: boolean;
};
