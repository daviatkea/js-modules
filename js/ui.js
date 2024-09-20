export function displayResult(user, computer, result, selector) {
  const resultDiv = document.querySelector(selector);
  resultDiv.textContent = `You chose ${user}, computer chose ${computer}. ${result}`;
}

export function createButtons(array) {
  return array.map((btn) => {
    return `<button class="btn" data-choice="${btn}">${btn}</button>`;
  });
}
