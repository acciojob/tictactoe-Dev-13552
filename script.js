//your JS code here. If required.
const startButton = document.querySelector("#submit")
const game = document.querySelector(".game")
const first = document.querySelector(".first")
startButton.addEventListener("click", (e)=>{
game.classList.add("active")
first.classList.add("inactive")

const player1 = document.querySelector("#player-1").value;
const player2 = document.querySelector("#player-2").value;
const boxes = document.querySelectorAll(".board-items");
const message = document.querySelector(".message")

let currentPlayer;
let gameGrid;
let winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
initGame();
function initGame() {
  currentPlayer = player1;
  gameGrid = ["", "", "", "", "", "", "", "", ""];
  boxes.forEach((element) => {
    element.textContent = "";
    element.style.pointerEvents = "all";
    element.classList.remove("win");
  });

  message.textContent = `${currentPlayer}, you're up`;
}
console.log("gameGrid", gameGrid);
function swap() {
  if (currentPlayer == player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
  message.textContent = `${currentPlayer}, you're up`;
}
function checkGameOver() {
  if (!gameGrid.includes("")) {
    boxes.forEach((box, idx) => {
      box.style.pointerEvents = "none";
    });
    message.textContent = `Game Over`;
  }

  winningPositions.forEach((position, index) => {
    if (
      !(
        gameGrid[position[0]] == "" ||
        gameGrid[position[1]] == "" ||
        gameGrid[position[2] == ""]
      ) &&
      gameGrid[position[0]] == gameGrid[position[1]] &&
      gameGrid[position[0]] == gameGrid[position[2]]
    ) {
      boxes.forEach((box, idx) => {
        if (position.includes(idx)) {
          box.classList.add("win");
        }
        box.style.pointerEvents = "none";
      });
      if(currentPlayer == player1){
      message.textContent = `${player2}, congratulations you won!`;
      }
      else{
      message.textContent = `${player1}, congratulations you won!`;

      }
    }
  });
}
function handleClick(index) {
  if (gameGrid[index] == "") {
    if(currentPlayer == player1){
    boxes[index].textContent = "X";
    }
    else{
    boxes[index].textContent = "O";

    }
    boxes[index].style.pointerEvents = "none";
    gameGrid[index] = currentPlayer;
    swap();
    checkGameOver();
  }
}
boxes.forEach((box, index) => {
  box.addEventListener("click", (e) => {
    handleClick(index);
  });
});


})