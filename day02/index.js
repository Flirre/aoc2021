const fs = require("fs");
function inputDataLines(filename = "input.txt") {
  return fs.readFileSync(filename).toString().trim().split("\n");
}

function getSolutionPart1(input) {
  let depth = 0; let horizontal = 0;
  input.forEach((data) => {
    const [direction, length] = data.split(" ");
    if (direction === "forward") horizontal += parseInt(length);
    if (direction === "up") depth -= parseInt(length);
    if (direction === "down") depth += parseInt(length);
  });
  return depth * horizontal;
}

function getSolutionPart2(input) {
  let depth = 0; let horizontal = 0; let aim = 0;
  input.forEach((data) => {
    const [direction, length] = data.split(" ");
    if (direction === "forward") {
      horizontal += parseInt(length);
      depth += parseInt(length * aim);
    }
    if (direction === "up") aim -= parseInt(length);
    if (direction === "down") aim += parseInt(length);
  });
  return depth * horizontal;
}

const input = inputDataLines();
const part = process.env.part || "part1";
if (part === "part1") console.log(getSolutionPart1(input));
else console.log(getSolutionPart2(input));
