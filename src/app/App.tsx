/** @format */

import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home/index.tsx';
import ProductDetailPage from '../pages/Products/ProductDetailPage';
import ProductListPage from '../pages/Products/ProductListPage.tsx';
import RootLayout from '../components/layout/RootLayout.tsx';
import './App.css';
import '../styles/globals.css';
import NotFoundPage from '../pages/NotFound/index.tsx';

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
