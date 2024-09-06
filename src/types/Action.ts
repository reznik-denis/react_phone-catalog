import { Product } from './Product';

export type Action =
  | { type: 'getProducts'; payload: Product[] }
  | { type: 'isLoading'; payload: boolean };
