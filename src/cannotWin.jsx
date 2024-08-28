import React from 'react';


const CannotWin = ({ squares }) => {
  const isBoardFull = squares.every(square => square !== null);
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const isWinningLineBlocked = (line) => {
    const [firstSquare, secondSquare, thirdSquare] = line;
    const firstSquareValue = squares[firstSquare];
    return (
      firstSquareValue &&
      firstSquareValue === squares[secondSquare] &&
      firstSquareValue === squares[thirdSquare]
    );
  };

  const canWin = winningLines.some(line => !isWinningLineBlocked(line));

  return (
    !canWin && isBoardFull ? (
      <div className="cannot-win">
        <p>Game is a draw. No more winning moves possible.</p>
      </div>
    ) : null
  );
};

export default CannotWin;
