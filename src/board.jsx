import React, { useState } from 'react';
import Square from './square';
import calculateWinner from './calculateWin';
import CoinFlip from './coinFlip';
import CannotWin from './cannotWin'; 
import './App.css';

function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);
  const [winningLine, setWinningLine] = useState([]);
  const [showWinCounters, setShowWinCounters] = useState(false);

  const handleCoinFlip = (firstPlayer) => {
    setIsXNext(firstPlayer === "X");
    setGameStarted(true);
    
  };

  const handleClick = (index) => {
    if (gameStarted && !board[index] && !calculateWinner(board).winner) {
      const newBoard = [...board];
      const currentMarker = isXNext ? "X" : "O";
      newBoard[index] = currentMarker;
      setBoard(newBoard);
      setIsXNext(!isXNext);

      const winner = calculateWinner(newBoard).winner;
      if (winner) {
        setWinningLine(calculateWinner(newBoard).line);
        if (winner === "X") {
          setXWins((prevXWins) => prevXWins + 1);
        } else {
          setOWins((prevOWins) => prevOWins + 1);
        }
      }
    }
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameStarted(false);
    setWinningLine([]);
    setShowWinCounters(false);
  };

  const playAgain = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinningLine([]);
    setShowWinCounters(true);
  };

  const result = calculateWinner(board);
  const winner = result.winner;
  const status = winner
    ? `${winner} Wins!`
    : `Next player: ${isXNext ? "X" : "O"}`;

  return (
    <>
      <h1>Tic Tac Toe</h1>
      {showWinCounters && (
        <div className="win-count">
          <p>X Wins: {xWins}</p>
          <p>O Wins: {oWins}</p>
        </div>
      )}
      {!gameStarted && <CoinFlip onFlip={handleCoinFlip} />}
      {gameStarted && (
        <>
          <div className="status">{status}</div>
          <CannotWin squares={board} />
          <div className="board">
            {board.map((square, index) => (
              <Square
                key={index}
                value={square}
                onClick={() => handleClick(index)}
                highlight={winningLine.includes(index)}
              />
            ))}
          </div>
          {winner && (
            <>
              <div className="result">
                <p>{winner} Wins!</p>
              </div>
              <div className="buttons">
                <button onClick={restartGame}>Restart</button>
                <button onClick={playAgain}>Play Again</button>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Board;
