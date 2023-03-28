import React from 'react';
import propTypes from 'prop-types';

import { Link } from 'react-router-dom';

function ProjectCard ({ project_info }) {
  console.log('project_info', project_info);
  return (
    <Link to={`${project_info.url}`}>
      <div className="project__card">
        <p>Project card</p>
      </div>
    </Link>
  )
}

ProjectCard.propTypes = {
  project_info: propTypes.object,
}

export default ProjectCard;
