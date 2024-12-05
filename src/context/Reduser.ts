import { Action } from './types/Action';
import { RootState } from './types/RootState';

export const reducer = (state: RootState, action: Action) => {
  switch (action.type) {
    case 'getProducts':
      return { ...state, products: action.payload };
    case 'isLoading':
      return { ...state, isLoading: action.payload };
    case 'isError':
      return { ...state, isError: action.payload };
    case 'isNotificationAddCart':
      return { ...state, notificationAddCart: action.payload };
    case 'addCart':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'removeFromCart':
      return {
        ...state,
        cart: [
          ...state.cart.filter(
            ({ itemId }) => itemId !== action.payload.itemId,
          ),
        ],
      };
    case 'getCartFromLS':
      return { ...state, cart: [...action.payload] };
    case 'addFavorites':
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'removeFromFavorites':
      return {
        ...state,
        favorites: [
          ...state.favorites.filter(
            ({ itemId }) => itemId !== action.payload.itemId,
          ),
        ],
      };
    case 'getFavoritesFromLS':
      return { ...state, favorites: [...action.payload] };
    default:
      return state;
  }
};
