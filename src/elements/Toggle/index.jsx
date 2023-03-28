import React from 'react';
import './index.css';

const Toggle = ({ value, onChange }) => (
  
  <div className='toggle-switch'>
    <label htmlFor="toggler">
      <input
        id="toggler"
        type='checkbox'
        onClick={onChange}
        checked={value}
        readOnly
      />
      <span className='slider'></span>
    </label>   
  </div>
  
)

export default Toggle;
