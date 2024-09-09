import React from 'react';
import './NotificationAdd.scss';
import { useGlobalState } from '../../../../castomHuks/useGlobalState';

export const NotificationAdd: React.FC = () => {
  const { cart } = useGlobalState();

  return (
    <div className="notigication">{`${cart[cart.length - 1].name} added to cart`}</div>
  );
};
