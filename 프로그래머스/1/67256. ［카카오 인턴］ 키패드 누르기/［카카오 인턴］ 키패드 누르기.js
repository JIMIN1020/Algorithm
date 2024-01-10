/*
  "*" = 10 / "0" = 11 / "#" = 12로 치환하여 계산함.
*/
function solution(numbers, hand) {
  let result = "";
  let right = 10;
  let left = 12;
  const h = hand === "right" ? "R" : "L";
  const leftside = [1, 4, 7];
  const rightside = [3, 6, 9];

  numbers.forEach((n) => {
    if (n === 0) n = 11;
    // 왼쪽에 위치한 숫자라면?
    if (leftside.includes(n)) {
      result += "L";
      left = n;
    }
    // 오른쪽에 위치한 숫자라면?
    else if (rightside.includes(n)) {
      result += "R";
      right = n;
    }
    // 중앙에 위치한 숫자라면?
    else {
      // 거리 구하기 (n으로 빼고 3으로 나눈 몫 + 나머지)
      let l = Math.trunc(Math.abs(left - n) / 3) + (Math.abs(left - n) % 3);
      let r = Math.trunc(Math.abs(right - n) / 3) + (Math.abs(right - n) % 3);

       // 거리 비교
      if (l > r) {
        result += "R";
        right = n;
      } else if (l < r) {
        result += "L";
        left = n;
      } else {
        // 거리가 같을 경우
        result += h;
        h === "R" ? (right = n) : (left = n);
      }
    }
  });

  return result;
}