import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from './hook/useAuth';

import CustomLink from '../elements/CustomLink';

function Header () {
  const navigate = useNavigate();
  const { user, signout } = useAuth();

  const handleLogout = () => {
    signout(() => navigate('/', { replace: true }));
  }
  return (
    <header>
      <CustomLink to="/">Главная</CustomLink>
      <CustomLink to="/about-me">Обо мне</CustomLink>
      <CustomLink to="/skills">Навыки</CustomLink>
      <CustomLink to="/blog">Блог</CustomLink>
      <CustomLink to="/contact-me">Контакты</CustomLink>
      <CustomLink to="/resume">Резюме</CustomLink>
      {user && <button onClick={handleLogout}>Logout</button>}
    </header>
  )
}

export default Header;
