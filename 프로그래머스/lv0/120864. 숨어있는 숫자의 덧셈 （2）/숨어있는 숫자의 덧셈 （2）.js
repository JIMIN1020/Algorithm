function solution(my_string) {
    let str = [...my_string];
    let num = [0];
    let ac = "";
    
    for(let i = 0; i < str.length; i++) {
        // 숫자이면 ac에 저장
        if (!isNaN(str[i])) {
            ac += str[i];
            // 다음에 문자가 나오면 ac를 num에 push
            if (isNaN(str[i+1])) {
                num.push(parseInt(ac));
                ac = "";
            }
        }
    }
    return num.reduce((a, c) => a + c);
}