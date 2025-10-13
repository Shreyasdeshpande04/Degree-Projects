// src/utils/omitId.ts
export function omitId<T extends { id?: any }>(obj: T): Omit<T, 'id'> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, ...rest } = obj;
  return rest;
}
