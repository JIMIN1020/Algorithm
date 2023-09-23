function solution(numlist, n) {
    // 비교 함수 -> 절댓값이 같으면 숫자가 더 큰 순서대로!
    const compare = (a, b) => {
      if(Math.abs(n-a) === Math.abs(n-b)) {
        return a > b ? -1 : 1;
      } else {
          return Math.abs(n-a) - Math.abs(n-b);
      }
    }
    return numlist.sort((a, b) => compare(a, b));
}