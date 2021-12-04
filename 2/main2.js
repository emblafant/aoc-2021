const fs = require("fs");
const text = fs.readFileSync("./input-aoc2.txt").toString("utf-8");
const textByLine = text.split("\n").map(num=>Number(num));

let counter = 0;

for (let i = 0; i < textByLine.length - 1; i++) {
  if (textByLine[i] + textByLine[i+1] + textByLine[i+2] < textByLine[i+1] + textByLine[i+2] + textByLine[i+3]) {
    counter ++;
  }
}

console.log(counter);