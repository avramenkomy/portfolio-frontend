import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Blogs() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setContent(json))
  }, []);

  return (
    <div>
      <h2>
        This Blogs component!!!
      </h2>
      <Link to={'/blog/create'}>Create a new Post</Link>
      {
        content.map(item => (
          <Link key={item.id} to={`/blog/${item.id}`}>
            <li>{item.title}</li>
          </Link>
        ))
      }      
    </div>
  )
}

export default Blogs;
