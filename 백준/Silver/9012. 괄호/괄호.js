const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 입력 값 받아오기
let num = +input.shift();
let brackets = input;

// 괄호 쌍 맞추기
brackets = brackets.map((bracket) => {
  const stack = [];

  // 여는 괄호면 push, 닫는 괄호면 pop
  bracket.split("").forEach((b) => {
    if (b === "(") stack.push("(");
    else if (stack[stack.length - 1] === "(") stack.pop();
    else stack.push(")");
  });

  return stack.length === 0 ? "YES" : "NO";
});

console.log(brackets.join("\n"));
