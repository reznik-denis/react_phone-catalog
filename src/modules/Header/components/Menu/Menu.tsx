import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';
import classNames from 'classnames';
import { Pages } from '../../types/pages';
import { AdditionalPages } from '../../types/additionalPages';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const Menu: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <div className={classNames('nav', { nav__isOpen: isOpen })}>
      <ul className="nav__list">
        {Object.values(Pages).map(namePage => {
          const name = namePage.slice(0, 1).toUpperCase() + namePage.slice(1);

          return (
            <li key={namePage}>
              <NavLink
                to={`/${namePage}`}
                end
                className={({ isActive }) => {
                  return classNames('nav__link', {
                    'nav__is-active': isActive,
                  });
                }}
                onClick={() => setIsOpen(false)}
              >
                {name}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <ul className="nav__additional-list">
        {Object.values(AdditionalPages).map(namePage => (
          <li className="nav__additional-link" key={namePage}>
            <NavLink
              to={`/${namePage}`}
              end
              className={({ isActive }) => {
                return classNames('nav__additional-navLink', {
                  'nav__additional-is-active': isActive,
                });
              }}
              onClick={() => setIsOpen(false)}
            >
              <img
                className="nav__icon"
                src={`./img/icons/${namePage}.svg`}
                alt={namePage}
              />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
