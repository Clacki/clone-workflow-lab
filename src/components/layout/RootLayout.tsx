/** @format */

import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function RootLayout() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ maxWidth: 960, margin: '0 auto', padding: '16px', flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
