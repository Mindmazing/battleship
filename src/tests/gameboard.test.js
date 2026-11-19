import { GameBoard } from "../js/gameboard";
import { Ship } from "../js/ship";

describe("Test GameBoard Class", () => {
  const ship = new Ship(4);
  const gameBoard = new GameBoard();

  test("Places ship correctly", () => {
    gameBoard.placeShip(
      [
        [2, 1],
        [2, 2],
        [2, 3],
        [2, 4],
      ],
      ship,
    );
  });
});
