function solution(slice, n) {
    return Math.trunc(n/slice) + (n%slice !== 0 ? 1 : 0);
}