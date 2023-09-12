function solution(my_string) {
    let answer = 0;
    [...my_string].filter((s) => !isNaN(s)).map(Number).forEach((n) => answer+=n);
    return answer;
}