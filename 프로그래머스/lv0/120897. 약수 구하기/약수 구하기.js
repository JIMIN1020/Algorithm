function solution(n) {
    let answer = [1];
    for(let i = 2; i <= n; i++) {
        n % i === 0 && answer.push(i);
    }
    return answer;
}