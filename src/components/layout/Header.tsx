import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <header style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
      </header>
    </>
  );
}

export default Header;
