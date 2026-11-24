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
  test("Hits ship correctly", () => {
    gameBoard.recieveHit([2, 1]);
    gameBoard.recieveHit([2, 2]);
    expect(ship.hits).toBe(2);
  });
  test("Returns false if target missed", () => {
    expect(gameBoard.recieveHit([3, 1])).toBeFalsy();
  });

  test("places hit on oppent board", () => {
    let succesfullHit = gameBoard.recieveHit([2, 3]);
    gameBoard.placeHit([2, 3], succesfullHit);
    expect(gameBoard.opponentBoard[3 - 1][2 - 1]).toBe("x");
  });

  test("Returns flase if hit placement is not valid", () => {
    let succesfullHit = gameBoard.recieveHit([2, 3]);

    let validHit = gameBoard.placeHit([2, 3], succesfullHit);
    expect(validHit).toBeFalsy();
  });
});
