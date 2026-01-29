import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../components/layout/RootLayout';
import HomePage from '../pages/Home';
import NotFoundPage from '../pages/NotFound';
import StorePage from '../pages/Products/StorePage';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <StorePage /> },
      { path: '*', element: <NotFoundPage /> },
      { path: '/not-found', element: <NotFoundPage /> },
    ],
  },
]);
