export class GameBoard {
  #BOARD_SIZE = 10;

  #createBoard() {
    let board = [];
    for (let i = 0; i < this.#BOARD_SIZE; i++) {
      board.push(["", "", "", "", "", "", "", "", "", ""]);
    }
    return board;
  }

  constructor() {
    this.playerBoard = this.#createBoard();
    this.opponentBoard = this.#createBoard();
  }

  placeShip(coors, ship) {
    coors.forEach((coor) => {
      this.playerBoard[coor[1]][coor[0]] = ship;
    });
  }
}
