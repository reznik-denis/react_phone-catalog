import { SortParams } from '../types/SortParams';

export const getSortTypeName = (typeSort: string | null) => {
  let sortType;

  if (!typeSort) {
    return 'Choose sort';
  } else {
    sortType = Object.entries(SortParams).find(
      ([, value]) => value === typeSort,
    );
  }

  return sortType ? sortType[0] : 'Choose sort';
};
