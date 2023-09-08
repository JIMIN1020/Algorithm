// n의 약수 개수 = 순서쌍의 개수
function solution(n) {
    let count = 0;
    for(let i = 1; i <= n; i++) {
        if (n % i === 0) count++;
    }
    return count;
}