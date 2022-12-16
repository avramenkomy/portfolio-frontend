import React from 'react';
import { Link, useMatch } from 'react-router-dom';

function CustomLink ({to, children, ...props}) {
  const match = useMatch({
    path: to,
    end: to.length === 1,
  });

  return (
    <Link
      to={to}
      className={match ? 'active-link' : ''}
      {...props}
    >
      {children}
    </Link>
  )
}

export default CustomLink;
