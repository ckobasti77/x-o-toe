const squares = document.querySelectorAll('.square');
let player = "X";
const winnerEl = document.getElementById("winner");
let gameOver = false;

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function(event) {
    if (!event.target.textContent && !gameOver) {
        event.target.textContent = player;
        checkWinner();
        if (!gameOver) {
            player = (player === "X") ? "O" : "X";
        }
    }
  });
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (squares[a].textContent === player && squares[b].textContent === player && squares[c].textContent === player) {
      winnerEl.textContent = `Winner is:  ${player} &#128526;`;
      gameOver = true;
      return;
    }
  }
}

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }
  winnerEl.textContent = "";
  gameOver = false;
});
