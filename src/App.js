import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import News from './components/News';
import Blog from './components/Blog';
import NotFound from './components/NotFound';
import Layout from './components/layout/Layout';

function App() {
  return (
    <React.Fragment>     
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </React.Fragment>    
  );
}

export default App;
