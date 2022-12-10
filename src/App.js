import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import News from './components/News';
import Blog from './components/blogs/Blog';
import Post from './components/blogs/Post';
import CreatePost from './components/blogs/CreatePost';
import EditPost from './components/blogs/EditPost';
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
          <Route path="blog/create" element={<CreatePost />} />
          <Route path="blog/:id" element={<Post />} />
          <Route path="blog/edit/:id" element={<EditPost />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </React.Fragment>    
  );
}

export default App;
