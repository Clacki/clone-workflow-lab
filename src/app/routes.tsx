import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../components/layout/RootLayout';
import HomePage from '../pages/Home';
import ProductListPage from '../pages/Products/ProductListPage';
import NotFoundPage from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductListPage /> },
      { path: '*', element: <NotFoundPage /> },
      { path: '/not-found', element: <NotFoundPage /> },
    ],
  },
]);
