let playerText = document.getElementById("playerText");
let restartBtn = document.getElementById("restartBtn");
let Boxes = Array.from(document.getElementsByClassName("box"));

let winnerIndicator = getComputedStyle(document.body).getPropertyValue("--winning-blocks");

const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);
let movesCount = 0;

const startGame = () => {
  Boxes.forEach(box => box.addEventListener("click", boxClicked));
};

function boxClicked(e) {
  const id = e.target.id;

  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;
    movesCount++;

    if (playerHasWon()) {
      playerText.innerHTML = `${currentPlayer} Gana!`;
      let winning_blocks = playerHasWon();
      winning_blocks.map(box => (Boxes[box].style.background = winnerIndicator));
      disableClicks();
      return;
    }

    currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT;

    if (movesCount === 9) {
      checkTie();
    }
  }
}

function disableClicks() {
  Boxes.forEach(box => box.removeEventListener("click", boxClicked));
}

function playerHasWon() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;

    if (spaces[a] && spaces[a] === spaces[b] && spaces[a] === spaces[c]) {
      return combo;
    }
  }

  return false;
}

function checkTie() {
  if (movesCount === 9) {
    playerText.innerText = "EMPATE";
    disableClicks();
  }
}

restartBtn.addEventListener("click", restart);

function restart() {
  spaces = Array(9).fill(null);
  movesCount = 0;

  Boxes.forEach(box => {
    box.innerText = "";
    box.style.background = "";
    box.addEventListener("click", boxClicked);
  });

  playerText.innerText = "tic tac toe";
  currentPlayer = X_TEXT;
}

startGame();