import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import './Layout.css';

const setActive = ({isActive}) => isActive ? 'active-link' : '';


function Layout() {
  return (
    <React.Fragment>
      <header>
        <NavLink to="/" className={setActive}>Home</NavLink>
        <NavLink to="/news" className={setActive}>News</NavLink>
        <NavLink to="/blog" className={setActive}>Blog</NavLink>
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
