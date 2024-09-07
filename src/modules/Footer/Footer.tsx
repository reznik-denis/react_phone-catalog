import React from 'react';
import './Footer.scss';
import { Logo } from '../shared/components/Logo';
import { FooterMenu } from './components/FooterMenu';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <Logo />
        </div>
        <FooterMenu />
        <button className="footer__toTop" onClick={() => window.scrollTo(0, 0)}>
          Back to top
        </button>
      </div>
    </footer>
  );
};
