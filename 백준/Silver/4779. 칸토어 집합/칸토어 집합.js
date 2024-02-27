const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

function cantor(n) {
  if (n === 1) {
    return "-";
  }

  return cantor(n / 3) + " ".repeat(n / 3) + cantor(n / 3);
}

input.forEach((n) => console.log(cantor(3 ** n)));
