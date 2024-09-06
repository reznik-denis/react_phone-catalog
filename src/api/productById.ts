import { Phone } from './../types/Phone';
import { client } from '../utils/fetchClient';
import { findElemById } from '../utils/findElemById';
import { Tablet } from '../types/Tablet';
import { Accessore } from '../types/Accessore';

export const getPhoneById = (phoneId: string): Promise<Phone | undefined> => {
  return client.get<Phone[]>(`/phones.json`).then(data => {
    const element = findElemById(data, phoneId);

    return element ? Promise.resolve(element) : Promise.resolve(undefined);
  });
};

export const getTabletById = (
  tabletId: string,
): Promise<Tablet | undefined> => {
  return client.get<Tablet[]>(`/tablets.json`).then(data => {
    const element = findElemById(data, tabletId);

    return element ? Promise.resolve(element) : Promise.resolve(undefined);
  });
};

export const getAccessoreById = (
  accessoretId: string,
): Promise<Accessore | undefined> => {
  return client.get<Accessore[]>(`/accessories.json`).then(data => {
    const element = findElemById(data, accessoretId);

    return element ? Promise.resolve(element) : Promise.resolve(undefined);
  });
};
