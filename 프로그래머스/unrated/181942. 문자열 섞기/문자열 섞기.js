function solution(str1, str2) {
    let s1 = [...str1];
    let s2 = [...str2];
    let answer = "";
    
    for(let i = 0; i < str1.length; i++) {
        answer += s1[i] + s2[i];
    }
    return answer;
}