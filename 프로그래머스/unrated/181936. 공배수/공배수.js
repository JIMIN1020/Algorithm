function solution(num, n, m) {
    return num % n === 0 && num % m === 0 ? 1 : 0;
}