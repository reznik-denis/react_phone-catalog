export const visiblePages = (currentPage: number, maxPage: number) => {
  const Pages = [];
  const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(maxPage, currentPage + 1);

  if (currentPage > 2) {
    Pages.push(1);
    if (currentPage > 3) {
      Pages.push('...');
    }
  }

  for (let page = startPage; page <= endPage; page++) {
    Pages.push(page);
  }

  if (currentPage < maxPage - 2) {
    if (currentPage < maxPage - 3) {
      Pages.push('...');
    }

    Pages.push(maxPage);
  }

  return Pages;
};
