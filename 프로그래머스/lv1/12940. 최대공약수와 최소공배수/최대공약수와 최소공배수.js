function solution(n, m) {
    let max = gcd(n, m);
    let min = (n * m) / max;
    
    return [max, min];
}

const gcd = (a, b) => a % b > 0 ? gcd(b, a%b) : b;