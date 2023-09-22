function solution(a, b) {
    let denom = b / gcd(a, b);
    
    // 2와 5로 나눠질 때까지 나누기
    while(denom % 2 === 0) denom /= 2;
    while(denom % 5 === 0) denom /= 5;
    
    // 남은 값이 1이면 딱 맞게 나눠진 것
    return denom === 1 ? 1 : 2;
}

// 최대공약수 구하는 함수 (유클리드 호제법)
const gcd = (a, b) => b === 0 ? a : gcd(b, a%b);