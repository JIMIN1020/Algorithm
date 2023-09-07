function solution(my_string, n) {
    let answer = '';
    [...my_string].forEach((str) => answer += str.repeat(n))
    return answer;
}