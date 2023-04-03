import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from './hook/useAuth';

import CustomLink from '../elements/CustomLink';
import Toggle from '../elements/Toggle';
import { ThemeContext, themes } from './hoc/ThemeProvider';

function Header () {
  const navigate = useNavigate();
  const { user, signout } = useAuth();

  const handleLogout = () => {
    signout(() => navigate('/', { replace: true }));
  }
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
         <header>
          <div className="logo-img"></div>
          <nav>
            <CustomLink to="/">Главная</CustomLink>
            <CustomLink to="/about-me">Обо мне</CustomLink>
            <CustomLink to="/skills">Навыки</CustomLink>
            <CustomLink to="/projects">Проекты</CustomLink>
            <CustomLink to="/blog">Блог</CustomLink>
            <CustomLink to="/contact-me">Контакты</CustomLink>
            <CustomLink to="/resume">Резюме</CustomLink>
          </nav>
          <div className="props">
            {user && <button onClick={handleLogout}>Logout</button>}        
            <Toggle
              onChange={() => {
                if (theme === themes.light) setTheme(themes.dark)
                if (theme === themes.dark) setTheme(themes.light)
              }}
              value={theme === themes.dark}
            />
          </div>

        </header>
       )}
    </ThemeContext.Consumer>
  )
}

export default Header;
