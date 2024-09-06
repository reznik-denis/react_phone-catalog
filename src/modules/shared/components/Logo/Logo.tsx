import React from 'react';
import { Link } from 'react-router-dom';
import './logo.scss';

export const Logo: React.FC = () => (
  <Link to="/" className="logo__link">
    <img src="./img/icons/logo.svg" alt="logo" className="logo-img" />
  </Link>
);
