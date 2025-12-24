/** @format */

import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div style={{ padding: 16 }}>
      <header style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
