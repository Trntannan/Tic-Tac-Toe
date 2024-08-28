import React, { useState } from 'react';
import './App.css';

function CoinFlip({ onFlip }) {
  const [flipping, setFlipping] = useState(false);
  const [result, setResult] = useState(null);

  const flipCoin = () => {
    setFlipping(true);

    setTimeout(() => {
      const flipResult = Math.random() < 0.5 ? 'X' : 'O';
      setResult(flipResult);

      setTimeout(() => {
        setFlipping(false);
        onFlip(flipResult);
      }, 1000);
    }, 1000);
  };

  const renderResult = () => {
    if (result && !flipping) {
      return <p>Coin Flip Result: {result} goes first!</p>;
    }
    return null;
  };

  const renderFlipButton = () => {
    return (
      <button onClick={flipCoin} disabled={flipping}>
        {flipping ? 'Flipping...' : 'Flip Coin'}
      </button>
    );
  };

  return (
    <div className="coin-flip">
      <div className={`coin ${flipping ? 'flipping' : ''}`}>
        <div className="coin-face front">X</div>
        <div className="coin-face back">O</div>
      </div>
      {renderFlipButton()}
      {renderResult()}
    </div>
  );
}

export default CoinFlip;
