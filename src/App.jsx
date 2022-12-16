import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import {
  NotFound, Home, About,
  Skills, Projects, Blog,
  Contacts, Resume
} from './components';

// import Home from './components/Home';
// import Blog from './components/blogs/Blog';
// import Post from './components/blogs/Post';
// import CreatePost from './components/blogs/CreatePost';
// import EditPost from './components/blogs/EditPost';
// import NotFound from './components/NotFound';
// import Layout from './Layout';
// import Login from './components/auth/Login';

// import RequireAuth from './components/hoc/RequireAuth';
import AuthProvider from './components/hoc/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-me" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact-me" element={<Contacts />} />
          <Route path="resume" element={<Resume />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
