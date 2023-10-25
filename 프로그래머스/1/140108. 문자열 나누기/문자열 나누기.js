function solution(s) {
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        let x = 1;  // x 개수
        
        // x 다음 문자부터 체크
        for (let j = i+1; j < s.length; j++) {
            s[i] === s[j] ? x++ : x--;
            
            // 수가 같아지거나 끝까지 확인한 경우
            if (x === 0 || j === s.length - 1) {
                i = j;
                break;
            }
        }
        count++;
    }
    
    return count;
}