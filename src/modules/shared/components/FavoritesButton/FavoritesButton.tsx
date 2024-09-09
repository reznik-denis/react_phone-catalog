import React from 'react';
import './FavoritesButton.scss';
import { Product } from '../../../../types/Product';
import { useDispatch } from '../../../../castomHuks/useDispatch';

import { localStorageService } from '../../utils/lockalStorageService';
import { ActionButton } from '../../types/ActionButton';
import { Keys } from '../../types/Constants';
import classNames from 'classnames';
import { FavoritesIcon } from '../../icons/Favorites/FavoritesIcon';

type Props = {
  product: Product;
  actionButton: ActionButton;
};

export const FavoritesButton: React.FC<Props> = ({ product, actionButton }) => {
  const dispatch = useDispatch();

  const handleProductFavorites = () => {
    switch (actionButton) {
      case ActionButton.ADD:
        localStorageService(ActionButton.ADD, product, Keys.FAVORITES_KEY);
        dispatch({ type: 'addFavorites', payload: product });
        break;
      case ActionButton.REMOVE:
        localStorageService(ActionButton.REMOVE, product, Keys.FAVORITES_KEY);
        dispatch({ type: 'removeFromFavorites', payload: product });
        break;
      default:
        break;
    }
  };

  return (
    <button
      className={classNames('favoritesButton', {
        favoritesButton__remove: actionButton === ActionButton.REMOVE,
      })}
      onClick={handleProductFavorites}
    >
      <FavoritesIcon action={actionButton} />
    </button>
  );
};
