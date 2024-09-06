import { Accessore } from '../types/Accessore';
import { Phone } from '../types/Phone';
import { Product } from '../types/Product';
import { Tablet } from '../types/Tablet';
import { client } from '../utils/fetchClient';

export const getProducts = () => {
  return client.get<Product[]>(`/products.json`);
};

export const getPhones = () => {
  return client.get<Phone[]>(`/phones.json`);
};

export const getTablets = () => {
  return client.get<Tablet[]>(`/tablets.json`);
};

export const getAccessories = () => {
  return client.get<Accessore[]>(`/accessories.json`);
};
