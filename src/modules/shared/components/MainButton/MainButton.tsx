import React from 'react';
import './MainButton.scss';
import { Product } from '../../../../types/Product';
import { useDispatch } from '../../../../castomHuks/useDispatch';

import { localStorageService } from '../../utils/lockalStorageService';
import { ActionButton } from '../../types/ActionButton';
import { Keys } from '../../types/Constants';
import classNames from 'classnames';

type Props = {
  title: string;
  product: Product;
  actionButton: ActionButton;
};

export const MainButton: React.FC<Props> = ({
  title,
  product,
  actionButton,
}) => {
  const dispatch = useDispatch();

  const handleProductCart = () => {
    switch (actionButton) {
      case ActionButton.ADD:
        localStorageService(ActionButton.ADD, product, Keys.CART_KEY);
        dispatch({ type: 'addCart', payload: product });
        break;
      case ActionButton.REMOVE:
        localStorageService(ActionButton.REMOVE, product, Keys.CART_KEY);
        dispatch({ type: 'removeFromCart', payload: product });
        break;
      default:
        break;
    }
  };

  return (
    <button
      className={classNames('mainButton', {
        mainButton__remove: actionButton === ActionButton.REMOVE,
      })}
      onClick={handleProductCart}
    >
      {title}
    </button>
  );
};
