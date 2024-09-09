import React, { useEffect, useRef, useState } from 'react';
import './PerPageDropdown.scss';
import { SearchLink } from '../SearchLink';
import { useLocation, useSearchParams } from 'react-router-dom';
import { PerPage } from '../../types/perPage';
import classNames from 'classnames';

export const PerPageDropdown: React.FC = React.memo(() => {
  const type = useLocation().pathname.slice(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpenPerPage, setIsOpenPerPage] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    searchParams.set('page', '1');
    searchParams.set('perPage', PerPage.ALL);
    setSearchParams(searchParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  const perPage = searchParams.get('perPage') || PerPage.ALL;

  const handlePerPage = () => {
    setIsOpenPerPage(prevState => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpenPerPage(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="PerPageDropdown">
      <div className="PerPageDropdown__lable">Items on page</div>
      <div
        className={classNames('dropdown PerPageDropdown__select', {
          'is-active': isOpenPerPage,
        })}
        ref={dropdownRef}
      >
        <div className="dropdown-trigger PerPageDropdown__select-trigger">
          <button
            className="button PerPageDropdown__select-button"
            aria-haspopup="true"
            aria-controls="dropdown-menu3"
            onClick={handlePerPage}
          >
            <span>{perPage}</span>
            <span className="icon is-small">
              <i
                className="fas fa-angle-down PerPageDropdown__select-icon"
                aria-hidden="true"
              ></i>
            </span>
          </button>
        </div>
        <div
          className="dropdown-menu PerPageDropdown__select-menu"
          id="dropdown-menu"
          role="menu"
        >
          <div className="dropdown-content PerPageDropdown__select-content">
            {Object.values(PerPage).map(item => (
              <SearchLink
                className="dropdown-item PerPageDropdown__select-item"
                key={item}
                params={{ page: '1', perPage: item }}
                onClick={handlePerPage}
              >
                {item}
              </SearchLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

PerPageDropdown.displayName = 'PerPageDropdown';
