const { getSolutionPart1, getSolutionPart2 } = require("../index");

test("part1", () => {
  expect(getSolutionPart1()).toBe(1532);
});

test("part2", () => {
  expect(getSolutionPart2()).toBe(1571);
});
