import { Product } from '../../../types/Product';
import { SortParams } from '../components/SortDropdown/types/SortParams';

export const sortingProducts = (
  sortType: string | null,
  products: Product[],
) => {
  if (!sortType) {
    return products;
  }

  switch (sortType) {
    case SortParams.Alphabetically:
      return products.sort((a, b) => a.name.localeCompare(b.name));
    case SortParams.Cheapest:
      return products.sort((a, b) => a.price - b.price);
    case SortParams.Newest:
      return products.sort((a, b) => b.year - a.year);
    default:
      return products;
  }
};
