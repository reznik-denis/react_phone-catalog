import React, { useEffect, useRef, useState } from 'react';
import './SortDropdown.scss';
import classNames from 'classnames';
import { SearchLink } from '../SearchLink';
import { useSearchParams } from 'react-router-dom';
import { SortParams } from './types/SortParams';
import { getSortTypeName } from './utils/getSortTypeName';

export const SortDropdown: React.FC = React.memo(() => {
  const [isOpenSort, setIsOpenSort] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [searchParams] = useSearchParams();
  const sortTypeName = getSortTypeName(searchParams.get('sort'));

  const handleSort = () => {
    setIsOpenSort(prevState => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpenSort(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="Sort">
      <div className="Sort__lable">Sort by</div>
      <div
        className={classNames('dropdown Sort__select', {
          'is-active': isOpenSort,
        })}
        ref={dropdownRef}
      >
        <div className="dropdown-trigger Sort__select-trigger">
          <button
            className="button Sort__select-button"
            aria-haspopup="true"
            aria-controls="dropdown-menu3"
            onClick={handleSort}
          >
            <span>{sortTypeName}</span>
            <span className="icon is-small">
              <i
                className="fas fa-angle-down Sort__select-icon"
                aria-hidden="true"
              ></i>
            </span>
          </button>
        </div>
        <div
          className="dropdown-menu Sort__select-menu"
          id="dropdown-menu"
          role="menu"
        >
          <div className="dropdown-content Sort__select-content">
            {Object.entries(SortParams).map(([key, value]) => (
              <SearchLink
                className="dropdown-item Sort__select-item"
                key={key}
                params={{ sort: value }}
                onClick={handleSort}
              >
                {key}
              </SearchLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

SortDropdown.displayName = 'SortDropdown';
