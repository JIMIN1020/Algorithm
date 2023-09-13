function solution(s) {
    let answer = 0;
    let arr = s.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            answer -= parseInt(arr[i-1]);
        } else {
            answer += parseInt(arr[i]);
        }
    }
    return answer;
}