/** @format */

import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/index.tsx";
import ProductDetailPage from "../pages/Products/ProductDetailPage";
import NotFound from "../pages/NotFound/index.tsx";
import ProductListPage from "../pages/Products/ProductListPage.tsx";
import RootLayout from "../components/layout/RootLayout.tsx";

function AppRouter() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
