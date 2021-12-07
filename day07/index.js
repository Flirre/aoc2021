const fs = require("fs");
function inputDataLinesIntegers(filename = "input.txt") {
  const input = fs.readFileSync(filename).toString().trim().split(",").map((x) => parseInt(x));
  let highest = 0;
  for(let i = 0; i<input.length;i++){
    if (input[i] > highest) highest = input[i];
  }
  return [input, highest];
}
const fuelCalcs = {};
const countFuel = (pos, newPos) => {
  if (fuelCalcs[Math.abs(newPos - pos)]) return fuelCalcs[Math.abs(newPos - pos)];
  let steps = Math.abs(newPos - pos);
  let fuel = 0;
  for (let i = 1; i <= steps; i++) {
    fuel += i;
  }
  fuelCalcs[Math.abs(newPos - pos)] = fuel;
  return fuel;
};

const getSolutionPart1 = (input, highest) => {
  let smallestSum = Infinity;
  let sum = 0;
  for (let i = 0; i < highest; i++) {
    sum = input.reduce((a, b) => a + Math.abs(b - i), 0);
    if (sum < smallestSum) smallestSum = sum;
  }
  return smallestSum;
};
const getSolutionPart2 = (input, highest) => {
  let smallestSum = Infinity;
  let sum = 0;
  for (let i = 0; i < highest; i++) {
    sum = input.reduce((a, b) => a + countFuel(b, i), 0);
    if (sum < smallestSum) smallestSum = sum;
  }
  return smallestSum;
};
const [input, highest] = inputDataLinesIntegers();
const part = process.env.part || "part1";
part === "part1" ? console.log(getSolutionPart1(input, highest)) : console.log(getSolutionPart2(input, highest));
