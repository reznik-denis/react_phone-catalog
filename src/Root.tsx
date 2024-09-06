import React from 'react';
import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { NotFoundPage } from './modules/NotFoundPage/NotFoundPage';

export const Root: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route index element={<></>} />

          <Route path="/phones" element={<></>} />

          <Route path="/tablets" element={<></>} />

          <Route path="/accessories" element={<></>} />

          <Route path="/product" element={<></>}>
            <Route index element={<></>} />
            <Route path=":productId" element={<></>} />
          </Route>

          <Route path="/favorites" element={<></>} />

          <Route path="/cart" element={<></>} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
