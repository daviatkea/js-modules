const buttonsContainer = document.querySelector(".btns");

const gameOptions = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(user, computer) {
  if (user === computer) {
    return "Draw";
  } else if (gameOptions[user] === computer) {
    return "User wins";
  } else {
    return "Computer wins";
  }
}

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

function displayResult(user, computer, result, selector) {
  const resultDiv = document.querySelector(selector);
  resultDiv.textContent = `You chose ${user}, computer chose ${computer}. ${result}`;
}
