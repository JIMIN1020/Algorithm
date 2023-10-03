function solution(n) {
    let arr = [...(n+"")].map(Number);
    arr.sort((a, b) => b - a);
    return arr.join("") * 1;
}