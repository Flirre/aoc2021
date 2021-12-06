const fs = require("fs");
function inputDataLinesIntegers(filename = "input.txt") {
  const fishes = fs.readFileSync(filename).toString().trim().split(",").map((x) => parseInt(x));
  const startingFish = new Array(10).fill(0);
  fishes.forEach((fish) => {
    startingFish[fish] += 1;
  });
  return startingFish;
}

const countFishes = (days, input) => {
  let day = 0;
  do {
    day++;
    const spawningFishes = input[0];
    let i = 0;
    do {
      input[i] = input[i + 1];
      i++;
    } while (i <= 8);
    input[8] = spawningFishes;
    input[6] += spawningFishes;
  } while (day < days);
  return input;
};

const getSolutionPart1 = () => countFishes(80, inputDataLinesIntegers()).reduce((sum, value) => sum + value, 0);
const getSolutionPart2 = () => countFishes(256, inputDataLinesIntegers()).reduce((sum, value) => sum + value, 0);
const input = inputDataLinesIntegers();
const part = process.env.part || "part1";
part === "part1" ? console.log(getSolutionPart1(input)) : console.log(getSolutionPart2(input));
