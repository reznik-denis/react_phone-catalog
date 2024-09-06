import { useEffect, useState } from 'react';
import './App.scss';
import { getPhoneById } from './api/productById';
import { Phone } from './types/Phone';
import { Product } from './types/Product';
import { getProducts } from './api/products';
import { Header } from './modules/Header/components/Header';
import { Footer } from './modules/Footer/components/Footer';
import { Outlet } from 'react-router-dom';

export const App = () => {
  const [elem, setElem] = useState<Phone | undefined>(undefined);
  const [elements, setElements] = useState<Product[] | undefined>(undefined);

  useEffect(() => {
    getPhoneById('apple-iphone-11-128gb-black')
      .then(data => setElem(data))
      .catch(() => console.log('some wrong'));
    getProducts().then(data => setElements(data));
  }, []);

  console.log(elem, elements);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <h1>Product Catalog</h1>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
