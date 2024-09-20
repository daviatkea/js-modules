import { $, $$ } from "../utils/dom.js";

import { getRandomNumber } from "../utils/numbers.js";

import { Header } from "../utils/component.js";

$$(".btns").forEach();

const getComputerChoice = getRandomNumber(100);

$("body").insertAdjacentHTML("beforeend", Header("Guess the number!"));
