const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 입력 값 받아오기
let width = +input.shift();
let square = input.map((line) => line.split(" "));

// 종이 4등분 하는 함수
function splitArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    for (let j = 0; j < arr[i].length; j += size) {
      const subArray = [];
      for (let k = i; k < i + size; k++) {
        subArray.push(arr[k].slice(j, j + size));
      }
      result.push(subArray);
    }
  }
  return result;
}

// 1 or 0으로만 이루어져 있는지 체크하는 함수
function checkValue(paper, value) {
  for (let row of paper) {
    for (let element of row) {
      if (element !== value) {
        return false;
      }
    }
  }
  return true;
}

// 색종이 자르기 (재귀 함수)
function cutting(paper, width) {
  // 탈출 조건
  if (checkValue(paper, "1")) {
    return "1";
  } else if (checkValue(paper, "0")) {
    return "0";
  }

  let subArr = splitArray(paper, width / 2);

  // 자른 색종이 -> 또 자르기
  return (
    cutting(subArr[0], width / 2) +
    cutting(subArr[1], width / 2) +
    cutting(subArr[2], width / 2) +
    cutting(subArr[3], width / 2)
  );
}

const result = cutting(square, width);
const white = result.replaceAll("1", "").length;
const blue = result.replaceAll("0", "").length;

console.log(`${white}\n${blue}`);
