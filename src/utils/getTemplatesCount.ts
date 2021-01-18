import { Category } from '../data';

export const getTemplatesCount = (data: Category[]) => {
  return data
    .map((c) => c.children)
    .flat()
    .map((sc) => sc?.children?.length)
    .reduce((previousValue, currentValue) => previousValue! + currentValue!, 0);
};
