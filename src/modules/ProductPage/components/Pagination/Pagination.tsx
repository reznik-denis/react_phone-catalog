import cn from 'classnames';
import './Pagination.scss';
import { SearchLink } from '../SearchLink';
import { useSearchParams } from 'react-router-dom';
import { ArrowLeft } from './icons/ArrowLeft';
import { PerPage } from '../../types/perPage';
import { visiblePages } from './utils/visiblePages';
import React from 'react';

type Props = {
  total: number;
};

export const Pagination: React.FC<Props> = React.memo(({ total }) => {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const perPage = searchParams.get('perPage') || PerPage.ALL;
  const perPageForPagination =
    perPage === PerPage.ALL ? total : Number(perPage);
  const maxPage = Math.ceil(total / perPageForPagination);

  const pages = visiblePages(currentPage, maxPage);

  return (
    <ul className="pagination">
      <li>
        <SearchLink
          params={{ page: `${currentPage - 1}` }}
          className={cn('pagination__arrow-left', {
            'pagination__disabled-link': currentPage === 1,
          })}
        >
          <ArrowLeft isDisabled={currentPage === 1} />
        </SearchLink>
      </li>
      {pages.map((page, index) =>
        page === '...' ? (
          <li key={`ellipsis-${index}`} className="pagination__ellipsis">
            ...
          </li>
        ) : (
          <li key={page}>
            <SearchLink
              params={{ page: `${page}` }}
              className={cn('pagination__item', {
                'pagination__active-item': currentPage === page,
              })}
            >
              {page}
            </SearchLink>
          </li>
        ),
      )}
      <li>
        <SearchLink
          params={{ page: `${currentPage + 1}` }}
          className={cn('pagination__arrow-left pagination__arrow-right', {
            'pagination__disabled-link': currentPage === maxPage,
          })}
          aria-disabled={currentPage === maxPage}
        >
          <ArrowLeft isDisabled={currentPage === maxPage} />
        </SearchLink>
      </li>
    </ul>
  );
});

Pagination.displayName = 'Pagination';
