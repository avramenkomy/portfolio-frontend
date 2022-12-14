import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

import './Layout.css';

import CustomLink from '../../elements/CustomLink';


function Layout() {
  const navigate = useNavigate();
  const { user, signout } = useAuth();

  const handleLogout = () => {
    signout(() => navigate('/', { replace: true }));
  }

  return (
    <React.Fragment>
      <header>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/news">News</CustomLink>
        <CustomLink to="/blog">Blog</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        {user && <button onClick={handleLogout}>Logout</button>}
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
