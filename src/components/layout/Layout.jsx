import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import './Layout.css';

const setActive = ({isActive}) => ({ color: isActive ? 'var(--color-active' : 'white'})


function Layout() {
  return (
    <React.Fragment>
      <header>
        <NavLink to="/" style={setActive}>Home</NavLink>
        <NavLink to="/news" style={setActive}>News</NavLink>
        <NavLink to="/blog" style={setActive}>Blog</NavLink>
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
