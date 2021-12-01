const fs = require("fs");

function inputDataLinesIntegers(filename = "input.txt") {
  return fs
    .readFileSync(filename)
    .toString()
    .trim()
    .split("\n")
    .map((x) => parseInt(x));
}

function getSolutionPart1() {
  const input = inputDataLinesIntegers();
  let increase = 0;
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] < input[i + 1]) increase++;
  }
  return increase;
}

function getSolutionPart2() {
  const input = inputDataLinesIntegers();
  let increase = 0;
  for (let i = 0; i < input.length - 3; i++) {
    if (
      input[i] + input[i + 1] + input[i + 2] <
      input[i + 1] + input[i + 2] + input[i + 3]
    )
      increase++;
  }
  return increase;
}

const part = process.env.part || "part1";

if (part === "part1") console.log(getSolutionPart1());
else console.log(getSolutionPart2());

module.exports = {
  getSolutionPart1,
  getSolutionPart2,
  inputDataLinesIntegers,
};
