import React from 'react';
import { Outlet } from 'react-router-dom';

import './Layout.css';

import CustomLink from '../../elements/CustomLink';


function Layout() {
  return (
    <React.Fragment>
      <header>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/news">News</CustomLink>
        <CustomLink to="/blog">Blog</CustomLink>
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
