import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import './Layout.css';

function Layout() {
  return (
    <React.Fragment>
      <header>
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/blog">Blog</Link>
      </header>

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
