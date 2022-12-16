import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';


function Layout() {

  return (
    <React.Fragment>

      <Header />

      <main className="container">
        <Outlet />
      </main>

      <footer className="container">
        This is page's footer
      </footer>
    </React.Fragment>
  )
}

export default Layout;
