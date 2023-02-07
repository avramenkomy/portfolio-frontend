import React from 'react';

const root_style = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
}

const item = {
  marginLeft: '20px',
  marginRight: '20px',
}


function Resume () {
  return (
    <div>
      <h2 style={{ color: 'var(--contrast-text)'}}>Resume</h2>
      <p style={{ color: 'var(--contrast-text)'}}>This is my resume page</p>
      <br />
      <div style={{ ...root_style, marginLeft: '100px' }}>
        <p style={{ ...item, color: 'var(--contrast-text)' }}>Contrast Text</p>
        <p style={{ ...item, color: 'var(--primary)' }}>Primary Text</p>
        <p style={{ ...item, color: 'var(--primary2)' }}>Primary2 Text</p>

        <p style={{ ...item, color: 'var(--secondary)' }}>Secondary Text</p>
        <p style={{ ...item, color: 'var(--secondary2)' }}>Secondary2 Text</p>

        <p style={{ ...item, color: 'var(--error)' }}>Error Text</p>
        <p style={{ ...item, color: 'var(--warning)' }}>Warning Text</p>
        <p style={{ ...item, color: 'var(--success)' }}>Success Text</p>

        <p style={{ ...item, color: 'var(--orange)' }}>Orange Text</p>
        <p style={{ ...item, color: 'var(--red)' }}>Red Text</p>      
        <p style={{ ...item, color: 'var(--yellow)' }}>Yellow Text</p>
        <p style={{ ...item, color: 'var(--green)' }}>Green Text</p>
        <p style={{ ...item, color: 'var(--white)' }}>White Text</p>
        <p style={{ ...item, color: 'var(--azur)' }}>Azur Text</p>
        <p style={{ ...item, color: 'var(--navy)' }}>Navy Text</p>
      </div>

      <br />
    </div>
  )
}

export default Resume;
