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
      this.playerBoard[coor[1] - 1][coor[0] - 1] = ship;
    });
  }

  recieveHit(coor) {
    let targetTile = this.playerBoard[coor[1] - 1][coor[0] - 1];
    if (targetTile != "") {
      targetTile.hit();
      return true;
    }
    return false;
  }

  placeHit(coor, succesfullHit) {
    this.opponentBoard[coor[1] - 1][coor[0] - 1] = succesfullHit ? "x" : "o";
  }
}
