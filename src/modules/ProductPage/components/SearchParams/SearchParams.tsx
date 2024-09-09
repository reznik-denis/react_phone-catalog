import React from 'react';
import './SearchParams.scss';
import { PerPageDropdown } from '../PerPageDropdown';

export const SearchParams: React.FC = () => {
  return (
    <div className="SearchParams">
      <PerPageDropdown />
    </div>
  );
};
