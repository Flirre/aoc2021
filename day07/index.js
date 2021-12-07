const fs = require("fs");
function inputDataLinesIntegers(filename = "input.txt") {
  let input = fs.readFileSync(filename).toString().trim().split(",").map((x) => parseInt(x)), highest = 0;
  for(let i = 0; i<input.length;i++){
    if (input[i] > highest) highest = input[i];
  }
  return [input, highest];
}

const fuelCalcs = {};
const countFuel = (pos, newPos, part1) => {
  if (fuelCalcs[Math.abs(newPos - pos)]) return fuelCalcs[Math.abs(newPos - pos)];
  let steps = Math.abs(newPos - pos), fuel = 0;
  if (part1) return steps
  for (let i = 1; i <= steps; i++) {
    fuel += i;
  }
  fuelCalcs[Math.abs(newPos - pos)] = fuel;
  return part1 ? steps:steps+fuel;
};

const getSolutionPart1 = (input, highest) => {
  let smallestSum = Infinity, sum = 0;
  for (let i = 0; i < highest; i++) {
    sum = sumUp(input, i, true)
    if (sum < smallestSum) smallestSum = sum;
  }
  return smallestSum;
};
const sumUp = (input, pos, part1) => {
  let i = 0, sum = 0;
  do{sum += countFuel(input[i], pos, part1); i++;} while (i<input.length)
  return sum;
}

const getSolutionPart2 = (input, highest) => {
  let smallestSum = Infinity, sum = 0;
  for (let i = 0; i < highest; i++) {
    sum = sumUp(input, i, false);
    if (sum < smallestSum) smallestSum = sum;
  }
  return smallestSum;
};

const [input, highest] = inputDataLinesIntegers();
const part = process.env.part || "part1";
part === "part1" ? console.log(getSolutionPart1(input, highest)) : console.log(getSolutionPart2(input, highest));
