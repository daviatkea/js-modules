const gameOptions = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  spock: ["rock", "scissors"],
  lizard: ["spock", "paper"],
};

export const optionsArray = Object.keys(gameOptions); // ["rock", "paper", "scissors"]

export function getComputerChoice() {
  const choices = optionsArray;
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

export function determineWinner(user, computer) {
  if (user === computer) {
    return "Draw";
  } else if (gameOptions[user].includes(computer)) {
    return "User wins";
  } else {
    return "Computer wins";
  }
}
