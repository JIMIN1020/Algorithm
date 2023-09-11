function solution(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        let divisor = 1;  // 약수의 개수
        for (let j = 2; j <= i; j++) {
            i % j === 0 && divisor++;
            if (divisor >= 3) {
                count++;
                break;
            }
        }
    }
    return count;
}