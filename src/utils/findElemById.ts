export const findElemById = <T extends { id: string }>(
  data: T[],
  elementId: string,
): T | undefined => {
  const findIndex = data.findIndex(({ id }) => elementId === id);
  const elementById = data[findIndex];

  return elementById;
};
