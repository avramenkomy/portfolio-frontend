import React from 'react';
import './index.css';

const Toggle = ({ value, onChange }) => (
  
  <div class = 'toggle-switch'>
    <label htmlFor="toggler">
      <input
      id="toggler"
      type = 'checkbox'
      onClick={onChange}
      checked={value}
      readOnly
      />
      <span class = 'slider'></span>
    </label>   
  </div>
  
)

export default Toggle;
