// 유클리드 호제법
const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

function solution(numer1, denom1, numer2, denom2) {
    const denom = denom1 * denom2;
    const numer = numer1 * denom2 + numer2 * denom1;
    const GCD = gcd(numer, denom);
    return [numer/GCD, denom/GCD];
}
