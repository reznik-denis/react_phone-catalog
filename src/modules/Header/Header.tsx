import React, { useState } from 'react';
import './Header.scss';
import { Menu } from './components/Menu';
import { Logo } from '../shared/components/Logo';
import { Search } from './components/Search';
import { useLocation } from 'react-router-dom';
import { TypeProducts } from '../ProductPage/types/typeProducts';

export const Header: React.FC = React.memo(() => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isSearch = (Object.values(TypeProducts) as string[]).includes(
    location.pathname.slice(1),
  );

  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
      </div>

      {isSearch && <Search />}

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
