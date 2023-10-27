function solution(keymap, targets) {
    let result = [];
    
    targets.forEach((t) => {
        let count = 0;  // 자판 클릭 횟수
        
        // 문자 하나씩 체크
        for (let i = 0; i < t.length; i++) {
            // keymap에서 특정 문자가 나오는 인덱스
            let index = [];
            
            // 인덱스 구하기
            keymap.forEach((v) => {
            if (v.indexOf(t[i]) >= 0)
                index.push(v.indexOf(t[i])+1);
            })
            
            // 구해진 인덱스가 없는 경우에는 -1로 리턴
            if (index.length === 0) {
                count = -1;
                break;
            }
            // 아닌 경우에는 최솟값인 인덱스 값으로 횟수 더하기
            else count += Math.min(...index);
        }
        // 최종 횟수 저장
        result.push(count);
    })
    
    return result;
}