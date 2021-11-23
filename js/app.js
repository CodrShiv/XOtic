const board = document.querySelector("#board"),
  winCombinations = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],],
  result = document.querySelector("#result");
let choices = ["X", "O"];
(function renderBoard() {for (i = 1; i <= 9; i++) board.appendChild(document.createElement("span"));})();
for (const box of board.children) {
  box.onclick = (event) => {
    if (event.target.innerHTML != "") return;
    event.target.innerHTML = `<span>${choices[0]}</span>`;
    event.target.setAttribute("class", choices[0]);
    if (winCombinations.some((combination) => combination.every((index) => Array.from(board.children)[index].innerHTML == `<span>${choices[0]}</span>`))) {
      startConfetti();
      result.setAttribute("class", "display");
      result.querySelector("span").innerHTML = choices[0];
      result.querySelector("span").setAttribute("class", choices[0]);
    } else if (Array.from(board.children).every((box) => box.innerHTML != "")) {
      result.setAttribute("class", "display");
      result.querySelector("div").innerHTML = "<h1>It's a Tie!</h1>";
    }
    choices = choices.map((choice) => (choice === "X" ? "O" : "X"));
  };
}