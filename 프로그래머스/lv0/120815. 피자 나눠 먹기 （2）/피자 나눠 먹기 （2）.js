function solution(n) {
    let answer = 0;
    for(let i = 1; i <= 100; i++) {
        if ((n * i) % 6 === 0) {
            answer = (n * i) / 6;
            break;
        }
    }
    return answer;
}