export class GameBoard {
  #BOARD_SIZE = 10;

  #createBoard() {
    let board = [];
    for (let i = 0; i < this.#BOARD_SIZE; i++) {
      board.push(["", "", "", "", "", "", "", "", "", ""]);
    }
    return board;
  }

  #validHit(coor) {
    if (this.opponentBoard[coor[1] - 1][coor[0] - 1] != "") {
      return false;
    }
    return true;
  }

  constructor() {
    this.playerBoard = this.#createBoard();
    this.opponentBoard = this.#createBoard();
    this.ships = [];
  }

  placeShip(coors, ship) {
    coors.forEach((coor) => {
      this.playerBoard[coor[1] - 1][coor[0] - 1] = ship;
    });
    this.ships.push(ship);
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
    if (this.#validHit(coor)) {
      this.opponentBoard[coor[1] - 1][coor[0] - 1] = succesfullHit ? "x" : "o";
      return true;
    }
    return false;
  }

  isEveryShipSunk() {
    this.ships.forEach((ship) => {
      if (!ship.isSunk()) {
        return false;
      }
    });
    return true;
  }
}
