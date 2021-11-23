const board = document.querySelector("#board"),
winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
(function renderBoard() {
  for (i = 1; i <= 9; i++) {
    board.appendChild(document.createElement("span"));
  }
})();
let choices = ["X", "O"];
for (const box of board.children) {
  box.onclick = (event) => {
    if (event.target.innerHTML != "") return;
    event.target.innerHTML = `<span>${choices[0]}</span>`;
    event.target.setAttribute("class", choices[0])
    console.log(checkWin(choices[0]))
    if (checkWin(choices[0])) {
      let winner = choices[0];
      showWin(winner);
    }
    else if (Array.from(board.children).every((box) => box.innerHTML != "")) {
      result.setAttribute("class", "display")
      result.innerHTML = "Tie";
    }
    choices = choices.map((choice) => (choice === "X" ? "O" : "X"));
  };
}

function checkWin(choice) {
    for (i=0;i<1;i++) {
        return winCombinations.some(combination => {
            return combination.every((index) => {
                return Array.from(board.children)[index].innerHTML == choice
            })
        })
    }
}
const result = document.querySelector("#result")
function showWin(winner) {
  startConfetti()
  setTimeout(() => {
    stopConfetti()
  }, 3000);
  result.setAttribute("class", "display");
  result.querySelector("span").innerHTML = winner;
  result.querySelector("span").setAttribute("class", winner)
}
// function showWin() {
//   for (j = 0; j < 3; j++) {
//     for (i = j; i < 9; i += 3) {
//       console.log(board.children[i]);
//     }
//   }
//   for (j = 0; j < 9; j += 3) {
//     for (i = j; i < j + 3; i++) {
//       console.log(board.children[i]);
//     }
//   }
//   for (j = 0; j < 9; j += 4) {
//     console.log(board.children[j]);
//   }
//   for (j = 2; j < 8; j += 2) {
//     console.log(board.children[j]);
//   }
// }
