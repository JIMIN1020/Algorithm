function solution(strlist) {
    /* ---- 기존 코드 ----
    let answer = [];
    strlist.forEach((str) => answer.push(str.length));
    return answer;
    */
    
    return strlist.map((str) => str.length);
}