function solution(N, stages) {
    let result = [];
    
    for (let i = 1; i <= N; i++) {
        let current = 0; // 현재 도전 중
        let pass = 0;    // 클리어
        
        // 도달한 플레이어, 클리어한 플레이어 구하기
        stages.forEach((v) => {
            if (v === i) {
                current++;
                pass++;
            }
            else if (v > i) pass++;
        })
        
        // 실패율 구하기
        current && pass ? result.push(current / pass) : result.push(0);
    }
    
    // 내림차순 정렬
    let sorted = [...result].sort((a, b) => b - a);
    
    return sorted.map((v) => {
        let index = result.indexOf(v);  // 인덱스 구하기
        result[index] = -1;     // 값 리셋
        return index+1;
    })
}