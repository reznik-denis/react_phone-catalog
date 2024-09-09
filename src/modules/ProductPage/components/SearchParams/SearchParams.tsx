import React from 'react';
import './SearchParams.scss';
import { PerPageDropdown } from '../PerPageDropdown';
import { SortDropdown } from '../SortDropdown';

export const SearchParams: React.FC = React.memo(() => {
  return (
    <div className="SearchParams">
      <SortDropdown />
      <PerPageDropdown />
    </div>
  );
});

SearchParams.displayName = 'SearchParams';
