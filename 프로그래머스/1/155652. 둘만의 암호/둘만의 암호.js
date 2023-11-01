function solution(s, skip, index) {
    // 알파벳 리스트
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    // skip할 알파벳 제거
    [...skip].forEach((v) => alphabet = alphabet.replace(v, ""));
    
    // 길이 구하기
    let len = alphabet.length;
    
    // 문자열 바꾸기
    let answer = [...s].map((v) => {
        let cur = alphabet.indexOf(v);  // 현재 인덱스
        return alphabet[(cur+index) % len];
    })
    
    return answer.join("");
}