import { Ship } from "../js/ship";

describe("Tests for ship class", () => {
  const length = 4;
  const ship = new Ship(length);

  test("Outputs correct ship length", () => {
    expect(ship.length).toBe(length);
  });
  test("Recieves hit on hit function call", () => {
    ship.hit();
    expect(ship.hits).toBe(1);
  });
  test("Return false when hits is not equal to length", () => {
    expect(ship.isSunk()).toBeFalsy();
  });
  test("Return true when hits is equal to length", () => {
    for (let i = 1; i < ship.length; i++) {
      ship.hit();
    }
    expect(ship.isSunk()).toBeTruthy();
  });
});
