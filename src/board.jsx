// contains the logic for managing the game state,
// including:
// Handling clicks on squares (handleClick).
// Managing which player's turn it is (isXNext).
// Checking if there is a winner using the calculateWinner function.
// Updating the squares array that represents the current state of the board.

import React, { useState } from 'react';
import Square from './square';
import calculateWinner from './calculateWin';
import './App.css';

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));//An array of 9 null spaces (squares)
  const [isXNext, setIsXNext] = useState(true);//A boolean indicating whose turn it is ( isXNext)

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) return;//if the square is filled or there is a winner, return

    const newSquares = squares.slice();//create a copy of the squares array
    newSquares[index] = isXNext ? 'X' : 'O';//set the value of the square based on whose turn it is
    setSquares(newSquares);//update the squares array
    setIsXNext(!isXNext);//toggle whose turn it is
  };

  const winner = calculateWinner(squares);//if there is a winner, return the winner
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;//set the status message based on the winner or whose turn it is

  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        {squares.map((square, index) => (
          <Square key={index} value={square} onClick={() => handleClick(index)} />
        ))}
      </div>
    </>
  );
}

export default Board;
