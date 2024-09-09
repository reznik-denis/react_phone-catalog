import React from 'react';
import './MenuIcons.scss';
import { AdditionalPages } from '../../types/additionalPages';
import { useGlobalState } from '../../../../castomHuks/useGlobalState';

type Props = {
  namePage: AdditionalPages;
};

export const MenuIcons: React.FC<Props> = ({ namePage }) => {
  const { cart, favorites } = useGlobalState();

  return (
    <div className="MenuIcons__icon-container">
      <img
        className="MenuIcons__icon"
        src={`./img/icons/${namePage}.svg`}
        alt={namePage}
      />
      {namePage === AdditionalPages.FAVORITES && (
        <div className="MenuIcons__additional-count">{favorites.length}</div>
      )}
      {namePage === AdditionalPages.CART && (
        <div className="MenuIcons__additional-count">{cart.length}</div>
      )}
    </div>
  );
};
