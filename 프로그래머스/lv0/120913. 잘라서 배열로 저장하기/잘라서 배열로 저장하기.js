function solution(my_str, n) {
    let answer = [];
    my_str = my_str.split("")
    while(my_str.length) {
        if (my_str.length < n) {
            answer.push(my_str.join(""));
            break
        }
        answer.push(my_str.splice(0, n).join(""));
    }
    return answer;
}