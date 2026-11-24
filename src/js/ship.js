export class Ship {
  constructor(shipLength) {
    this.length = shipLength;
    this.hits = 0;
  }

  hit() {
    if (!this.isSunk()) {
      this.hits++;
      return true;
    }
    return false;
  }

  isSunk() {
    return this.hits === this.length;
  }
}
