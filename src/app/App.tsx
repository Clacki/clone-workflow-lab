/** @format */

import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/index.tsx";
import ProductDetailPage from "../pages/Products/ProductDetailPage";
import NotFound from "../pages/NotFound/index.tsx";
import ProductListPage from "../pages/Products/ProductListPage.tsx";
import RootLayout from "../components/layout/RootLayout.tsx";
import { useState } from "react";
import "./App.css";
import "../styles/globals.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>

      <div className="bg-red-500 text-white p-6 text-2xl font-bold">TEST</div>

      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
