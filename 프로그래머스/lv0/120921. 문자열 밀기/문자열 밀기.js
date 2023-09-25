function solution(A, B) {
    let answer = -1;
    let a = [...A];
    let b = [...B];
    
    for (let i = 0; i < a.length; i++) {
        if (a.join("") === b.join("")) {
            answer = i;
            break;
        }
        a.unshift(a.pop());
    }
    
    return answer;
}