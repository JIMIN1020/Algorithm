const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let result = 0;

for (let i = 1; i <= +input; i++) {
  const num = i.toString().split("");

  if (num.length === 3) {
    if (+num[0] - +num[1] === +num[1] - +num[2]) result++;
  } else if (num.length <= 2) {
    result++;
  }
}

console.log(result);
