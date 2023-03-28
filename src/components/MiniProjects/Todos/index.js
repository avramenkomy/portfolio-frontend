import React from 'react';

import { useNavigate } from 'react-router-dom';

function TodosApp() {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <React.Fragment>
      <p>Todos App</p>
      <button onClick={goBack} className="go_back__btn">Go Back</button>
    </React.Fragment>
  )
}

export default TodosApp;
