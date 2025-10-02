import React, { useState } from 'react';

function Inicio(){

  const [color, setColor] = useState('blue'); 

  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%', 
        backgroundColor: color, 
        cursor: 'pointer'
      }}
      onClick={() => setColor('green')} 
    ></div>
  );
  };
export default Inicio;
