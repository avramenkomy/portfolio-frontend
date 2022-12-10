import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


function BlogPage() {
  const {id} = useParams();
  // console.log(useParams());

  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(json => setContent(json))
  }, [id]);

  return (
    <React.Fragment>
      {content
        ? <h2>{content.title}</h2>
        : <h2>...Загрузка</h2>
      }
      <Link to={`/blog/edit/${id}`}>Edit this post</Link>
    </React.Fragment>
  )
}

export default BlogPage;
