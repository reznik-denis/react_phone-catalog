import React from 'react';
import './Search.scss';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../../ProductPage/utils/searchHelper';

export const Search: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get('query');

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.trim();

    setSearchParams(
      getSearchWith(searchParams, {
        query: val.length > 0 ? val : null,
      }),
    );
  };

  return (
    <form className="panel-block Search">
      <p className="control has-icons-left Search__container">
        <input
          type="text"
          className="input Search__input"
          placeholder="Search"
          value={value || ''}
          onChange={handleQuery}
        />
        <span className="icon is-left Search__icon">
          <i className="fas fa-search" aria-hidden="true" />
        </span>
      </p>
    </form>
  );
};

Search.displayName = 'Search';
