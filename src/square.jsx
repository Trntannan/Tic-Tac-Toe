// the logic that belongs to the Square component includes rendering the square and handling the onClick event that is passed down as a prop from board.

import React from 'react';
import './App.css';

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
