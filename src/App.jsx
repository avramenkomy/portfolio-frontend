import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import News from './components/News';
import Blog from './components/blogs/Blog';
import Post from './components/blogs/Post';
import CreatePost from './components/blogs/CreatePost';
import EditPost from './components/blogs/EditPost';
import NotFound from './components/NotFound';
import Layout from './components/layout/Layout';
import Login from './components/auth/Login';

import RequireAuth from './components/hoc/RequireAuth';
import AuthProvider from './components/hoc/AuthProvider';
import About from './components/About';

function App() {
  return (
    <AuthProvider>     
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="portfolio-frontend" element={<Navigate to="/" replace/>} />
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/create" element={
            <RequireAuth>
              <CreatePost />
            </RequireAuth>
          } />
          <Route path="blog/:id" element={<Post />} />
          <Route path="blog/edit/:id" element={<EditPost />} />
          <Route path="about" element={<About />}>
            <Route path="contacts" element={<p>Our contacts</p>}/>
            <Route path="team" element={<p>Our team</p>}/>
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>    
  );
}

export default App;
