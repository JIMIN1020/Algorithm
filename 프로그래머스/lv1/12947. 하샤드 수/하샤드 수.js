function solution(x) {
    let sum = [...(x+"")].reduce((a, c) => a + c*1, 0);
    return x % sum === 0 ? true : false;
}