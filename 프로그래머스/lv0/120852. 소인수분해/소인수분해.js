function solution(n) {
    let answer = [];
    for (let i = 2; i <= n; i++) {
        let count = 0;
        for (let j = 2; j <= i; j++) {
            i % j === 0 && count++;
            if (count >= 2) break;
        }
        count === 1 && (n % i === 0 && answer.push(i));
    }
    return answer;
}