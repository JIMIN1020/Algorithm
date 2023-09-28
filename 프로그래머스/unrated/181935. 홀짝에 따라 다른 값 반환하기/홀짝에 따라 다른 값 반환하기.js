function solution(n) {
    let sum = 0;
    
    if (n % 2 === 0) {
      for (let i = n; i > 0; i -= 2) {
        sum += i*i;
      }
    } else {
      for (let i = n; i > 0; i -= 2) {
        sum += i;
      }
    }
    
    return sum;
}