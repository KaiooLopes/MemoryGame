import { randomCards } from "./Card";
import {Game} from "./Game"

const gameDOM = document.querySelector("[data-game]") as HTMLDivElement;

const game = new Game(gameDOM, randomCards)
game.init()