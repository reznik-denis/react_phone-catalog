import React, { useState } from 'react';
import './Header.scss';
import { Menu } from './components/Menu';
import { Logo } from '../shared/components/Logo';

export const Header: React.FC = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
      </div>

      <div className="header__button-container">
        {isOpen ? (
          <button className="header__button" onClick={() => setIsOpen(false)}>
            <img
              className="header__button-icon"
              src="./img/icons/Close.svg"
              alt="close menu"
            />
          </button>
        ) : (
          <button className="header__button" onClick={() => setIsOpen(true)}>
            <img
              className="header__button-icon"
              src="./img/icons/Menu.svg"
              alt="menu"
            />
          </button>
        )}
      </div>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
});

Header.displayName = 'Header';
