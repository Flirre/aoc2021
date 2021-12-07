const fs = require("fs");

function inputDataLinesIntegers(filename = "input.txt") {
  return fs.readFileSync(filename).toString().trim().split("\n");
}

function getSolutionPart1(input) {
  let [positives, negatives] = countBits(input), gamma = "", epsilon = "";
  for (let i = 0; i < Object.keys(positives).length; i++) {
    positives[i] > negatives[i]
      ? (gamma = gamma.concat("1"))
      : (gamma = gamma.concat("0"));
  }
  for (let i = 0; i < Object.keys(negatives).length; i++) {
    positives[i] < negatives[i]
      ? (epsilon = epsilon.concat("1"))
      : (epsilon = epsilon.concat("0"));
  }
  return parseInt(gamma, 2) * parseInt(epsilon, 2);
}

const countBits = (input) => {
  let positives = new Array(input[0].length).fill(0), negatives = new Array(input[0].length).fill(0);
  input.forEach((binary) => {
    binary.split("").forEach((bit, index) => {
      bit === "1"
        ? (positives[index] = positives[index] + 1)
        : (negatives[index] = negatives[index] + 1);
    });
  });
  return [positives, negatives];
};

const countOxygen = (input, index = 0) => {
  let [positives, negatives] = countBits(input), oxygenBinary = "";
  for (let i = 0; i < positives.length; i++) {
    oxygenBinary = oxygenBinary.concat(
      positives[i] >= negatives[i] ? "1" : "0"
    );
  }
  input = input.filter(
    (binary) => binary.charAt(index) === oxygenBinary.charAt(index)
  );
  if (input.length === 1) return input[0];
  return countOxygen(input, index + 1);
};

const countCO2 = (input, index = 0) => {
  let [positives, negatives] = countBits(input), co2Binary = "";
  for (let i = 0; i < positives.length; i++) {
    co2Binary = co2Binary.concat(positives[i] < negatives[i] ? "1" : "0");
  }
  input = input.filter(
    (binary) => binary.charAt(index) === co2Binary.charAt(index)
  );
  if (input.length === 1) return input[0];
  return countCO2(input, index + 1);
};

function getSolutionPart2(input) {
  const oxygenInput = [...input], co2Input = [...input];
  return (
    parseInt(countOxygen(oxygenInput), 2) * parseInt(countCO2(co2Input), 2)
  );
}

const input = inputDataLinesIntegers(), part = process.env.part || "part1";
part === "part1" ? console.log(getSolutionPart1(input)) : console.log(getSolutionPart2(input));
