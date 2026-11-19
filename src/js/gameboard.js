class GameBoard {
  #BOARD_SIZE = 10;

  #createBoard() {
    const board = Array(10);
    for (let i = 0; i < this.#BOARD_SIZE; i++) {
      board[i] = Array(10);
    }
    return board;
  }

  constructor() {
    this.playerBoard = this.#createBoard();
    this.opponentBoard = this.#createBoard();
  }
}

s;
