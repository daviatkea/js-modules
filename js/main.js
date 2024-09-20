import {
  determineWinner,
  getComputerChoice,
  optionsArray,
} from "./gameLogic.js";
import { displayResult, createButtons } from "./ui.js";

const buttonsContainer = document.querySelector(".btns");

buttonsContainer.innerHTML = createButtons(optionsArray).join("");

buttonsContainer.addEventListener("click", (e) => {
  if (!e.target.dataset.choice) {
    return;
  }

  playGame(e.target.dataset.choice);
});

function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);
  displayResult(userChoice, computerChoice, result, ".result");
}
