import { useEffect } from 'react';
import './App.scss';
// import { getPhoneById } from './api/productById';
// import { Phone } from './types/Phone';
// import { Product } from './types/Product';
// import { getProducts } from './api/products';
import { Header } from './modules/Header';
import { Footer } from './modules/Footer';
import { Outlet } from 'react-router-dom';
import { useDispatch } from './castomHuks/useDispatch';
import { getProducts } from './api/products';

export const App = () => {
  // const [elem, setElem] = useState<Phone | undefined>(undefined);
  // const [elements, setElements] = useState<Product[] | undefined>(undefined);
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts()
      .then(data => dispatch({ type: 'getProducts', payload: data }))
      .catch();
  }, [dispatch]);

  return (
    <div className="App">
      <h1></h1>
      <Header />

      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};
