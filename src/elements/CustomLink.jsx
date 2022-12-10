import React from 'react';
import { Link, useMatch } from 'react-router-dom';

function CustomLink ({to, children, ...props}) {
  const match = useMatch(to);
  // console.log('match_obj', {match});

  return (
    <Link
      to={to}
      style={{
        color: match ? 'var(--color-active)' : 'white',
      }}
      {...props}
    >
      {children}
    </Link>
  )
}

export default CustomLink;
