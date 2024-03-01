const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const m = input[0].split(" ").slice(-1);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

function solution(arr, m) {
  // 초기 탐색 범위 설정 -> 인덱스가 아닌 첫 요소, 마지막 요소로
  let low = 1;
  let high = arr[arr.length - 1];

  while (low <= high) {
    let mid = Math.floor((low + high) / 2); // 중간값

    // 자른 나무의 합 구하기
    const sum = arr
      .map((h) => (h > mid ? h - mid : 0))
      .reduce((a, c) => a + c, 0);

    // 합계 비교
    if (sum >= m) low = mid + 1;
    else if (sum < m) high = mid - 1;
  }
  return high;
}

console.log(solution(arr, +m));
