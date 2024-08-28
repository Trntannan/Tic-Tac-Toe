function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];// an array of all the lines that could be a winner
  
    for (const [a, b, c] of lines) {// for each line
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];// if there is a winner, return the winner
      }
    }
    return null;// if there is no winner
  }
  
  export default calculateWinner;
  