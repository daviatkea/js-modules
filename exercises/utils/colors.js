import { getRandomNumber } from "./numbers.js";

export function getRandomColor() {
  return `hsl( ${getRandomNumber(360)} 50% 50% )`;
}
