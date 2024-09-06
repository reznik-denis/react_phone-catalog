import { Action } from '../types/Action';
import { RootState } from '../types/RootState';

export const reducer = (state: RootState, action: Action) => {
  switch (action.type) {
    case 'getProducts':
      return { ...state, products: action.payload };
    case 'isLoading':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
