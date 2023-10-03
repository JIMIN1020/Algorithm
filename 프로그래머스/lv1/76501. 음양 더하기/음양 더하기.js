function solution(absolutes, signs) {
    let sum = 0;
    absolutes.forEach((v, index) => signs[index] ? sum += v : sum -= v);
    return sum;
}