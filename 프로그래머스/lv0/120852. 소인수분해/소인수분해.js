// i = 2부터 n을 나눠가며 n의 약수 구한 뒤, set으로 중복 제거
function solution(n) {
    let answer = [];
    let i = 2;
    while(i <= n) {
        if (n % i === 0) {
            n = n / i;
            answer.push(i);
        } else {
            i++;
        }
    }
    
    return [...new Set(answer)];
}