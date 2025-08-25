let isXTurn = true;
const board = Array(9).fill(null); // Store X and O
const buttons = document.querySelectorAll('.board button');

function checkWinner(board) {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // columns
    [0,4,8], [2,4,6]           // diagonals
  ];
  for (const [a, b, c] of winPatterns) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; // 'X' or 'O'
    }
  }
  return null;
}

buttons.forEach((button, idx) => {
  button.addEventListener('click', () => {
    const mark = isXTurn ? 'X' : 'O';
    button.textContent = mark;
    button.disabled = true;
    board[idx] = mark;

    const winner = checkWinner(board);
    if (winner) {
      setTimeout(() => alert(`${winner} wins!`), 10);
      buttons.forEach(btn => btn.disabled = true);
      return;
    } else if (board.every(cell => cell)) {
      setTimeout(() => alert("It's a draw!"), 10);
      return;
    }

    isXTurn = !isXTurn;
  });
});