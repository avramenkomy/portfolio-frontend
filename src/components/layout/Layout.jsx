import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import './Layout.css';


function Layout() {
  return (
    <React.Fragment>
      <header>
        <NavLink to="/" className={({isActive}) => isActive ? 'active-link' : ''}>Home</NavLink>
        <NavLink to="/news" className={({isActive}) => isActive ? 'active-link' : ''}>News</NavLink>
        <NavLink to="/blog" className={({isActive}) => isActive ? 'active-link' : ''}>Blog</NavLink>
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
