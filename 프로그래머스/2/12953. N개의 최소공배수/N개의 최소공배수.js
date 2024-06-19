const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
const lcm = (a, b) => a * b / gcd(a, b);

function solution(arr) {
    let cur = 1;
    
    arr.forEach((num) => {
        cur = lcm(cur, num);
    });
    
    return cur;
}