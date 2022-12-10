import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import News from './components/News';
import Blog from './components/Blog';
import NotFound from './components/NotFound';

function App() {
  return (
    <React.Fragment>
      <header>
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/blog">Blog</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
    
  );
}

export default App;
