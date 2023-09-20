function solution(num) {
    num.sort((a, b) => b-a);
    let max = num[0] * num[1];
    let min = num[num.length-1] * num[num.length-2];
    return Math.max(max, min);
}