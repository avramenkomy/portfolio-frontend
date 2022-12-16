import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import {
  NotFound, Home, About,
  Skills, Projects, Blog,
  Contacts, Resume
} from './components';

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
