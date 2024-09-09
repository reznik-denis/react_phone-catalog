import { Product } from '../../types/Product';

export type Action =
  | { type: 'getProducts'; payload: Product[] }
  | { type: 'isLoading'; payload: boolean }
  | { type: 'isNotificationAddCart'; payload: boolean }
  | { type: 'addCart'; payload: Product }
  | { type: 'removeFromCart'; payload: Product }
  | { type: 'getCartFromLS'; payload: Product[] | [] }
  | { type: 'addFavorites'; payload: Product }
  | { type: 'removeFromFavorites'; payload: Product }
  | { type: 'getFavoritesFromLS'; payload: Product[] | [] };
