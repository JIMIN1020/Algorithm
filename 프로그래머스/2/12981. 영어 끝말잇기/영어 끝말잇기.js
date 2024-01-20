function solution(n, words) {
    let out = [];
    let last = words[0].slice(-1);  // 첫번째 단어의 끝글자
    
    for (let i = 1; i < words.length; i++) {
        let w = words[i];
        
        // 만약 틀리거나 중복인 경우?
        if (last !== w.slice(0, 1) || words.indexOf(w) !== i) {
            out.push(i % n + 1);  // 탈락자 번호
            out.push(Math.floor(i / n) + 1);  // 차례
            break;
        }
        // 맞은 경우
        else {
            last = w.slice(-1);
        }
    }
    
    return out.length > 0 ? out : [0, 0];
}