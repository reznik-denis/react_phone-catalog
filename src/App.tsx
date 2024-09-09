import { useEffect } from 'react';
import './App.scss';
import { Header } from './modules/Header';
import { Footer } from './modules/Footer';
import { Outlet } from 'react-router-dom';
import { useDispatch } from './castomHuks/useDispatch';
import { getProducts } from './api/products';
// eslint-disable-next-line max-len
import { getLocalStorageFormKey } from './modules/shared/utils/getLocalStorageFromKey';
import { Keys } from './modules/shared/types/Constants';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts()
      .then(data => dispatch({ type: 'getProducts', payload: data }))
      .catch();
    dispatch({
      type: 'getCartFromLS',
      payload: getLocalStorageFormKey(Keys.CART_KEY),
    });
    dispatch({
      type: 'getFavoritesFromLS',
      payload: getLocalStorageFormKey(Keys.FAVORITES_KEY),
    });
  }, []);

  return (
    <div className="App">
      <Header />

      <main>
        <h1></h1>
        <div className="container">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};
