function solution(num) {
    let answer = "";
    for (let i = 0; i < num.length-1; i++) {
        if (num[i] < num[i+1]) {
            num[i+1] - num[i] === 1 ? answer += "w" : answer += "d";
        } else {
            num[i] - num[i+1] === 1 ? answer += "s" : answer += "a";
        }
    }
    return answer;
}