const fs = require("fs");
const text = fs.readFileSync("./input-aoc5.txt").toString("utf-8");
const textByLine = text.split("\n").map(str=>String(str)).map(i=>i.split(""));

let gamma = "";
let epsilon = "";


for (i = 0; i < 12; i++) {
  let zero = 0;
  let one = 0;
  for (j = 0; j < textByLine.length; j++) {
    if (textByLine[j][i] == 0) {
      zero = zero + 1;
    } else {
      one = one + 1;
    }
  }
  if (zero > one) {
    gamma += "0";
    epsilon += "1";
  } else {
    gamma += "1";
    epsilon += "0";
  }
}
console.log(gamma);
console.log(epsilon);

const gammaDec = parseInt(gamma, 2);
const epsilonDec = parseInt(epsilon, 2);
console.log(gammaDec);
console.log(epsilonDec);

const powerConsumption = gammaDec * epsilonDec;
console.log(powerConsumption);