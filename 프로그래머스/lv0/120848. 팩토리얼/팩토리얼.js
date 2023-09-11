function solution(n) {
    let i = 1;
    while (fac(i) <= n) {
        i++;
    }
    return i-1;
}

const fac = (k) => k <= 1 ? 1 : k * fac(k-1);