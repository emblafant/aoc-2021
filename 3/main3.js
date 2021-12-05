const fs = require("fs");
const text = fs.readFileSync("./input-aoc3.txt").toString("utf-8");
const textByLine = text.split("\n").map(str=>String(str));

console.log(textByLine);