function solution(balls, share) {
    return Math.round(fac(balls) / (fac(balls-share)*fac(share)));
}

const fac = (n) => n <= 1 ? 1 : n * fac(n-1);