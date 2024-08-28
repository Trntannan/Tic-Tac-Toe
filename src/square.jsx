import React from 'react';
import './App.css';


function Square({ value, onClick, isHighlighted }) {
  const squareClass = `square ${isHighlighted ? 'highlight' : ''}`;

  return (
    <button className={squareClass} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
