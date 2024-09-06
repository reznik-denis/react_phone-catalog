import React from 'react';
import './FooterMenu.scss';

export const FooterMenu: React.FC = () => {
  return (
    <div className="footerMenu">
      <ul className="footerMenu__list">
        <li className="footerMenu__item">
          <a
            href="https://github.com/reznik-denis"
            target="_blank"
            rel="noopener noreferrer"
            className="footerMenu__link"
          >
            GitHub
          </a>
        </li>
        <li className="footerMenu__item">
          <a href="#" rel="noopener noreferrer" className="footerMenu__link">
            Contacts
          </a>
        </li>
        <li className="footerMenu__item">
          <a href="#" rel="noopener noreferrer" className="footerMenu__link">
            Rights
          </a>
        </li>
      </ul>
    </div>
  );
};
