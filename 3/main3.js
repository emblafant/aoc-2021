const fs = require("fs");
const text = fs.readFileSync("./input-aoc3.txt").toString("utf-8");
const textByLine = text.split("\n").map(str=>String(str)).map(i=>i.split(" "));


let depth = 0;
let position = 0;

for (i = 0; i < textByLine.length; i++) {
  if (textByLine[i][0] == "forward") {
    position += Number(textByLine[i][1]);
  } else if (textByLine[i][0] == "down") {
    depth += Number(textByLine[i][1])
  } else if (textByLine[i][0] == "up") {
    depth -= Number(textByLine[i][1])
  }
}

const product = depth * position;
console.log(product)