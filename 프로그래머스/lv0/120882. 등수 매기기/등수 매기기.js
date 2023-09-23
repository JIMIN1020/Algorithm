function solution(score) {
    // 평균 구하기 & 등수 추가 (초기값 = 1)
    let avg = score.map(s => [(s[0] + s[1])/2, 1]);
    
    // 평균값을 하나씩 나머지 값들과 비교 -> 현재 값보다 작은 값은 등수 카운트 ++
    for(let i = 0; i < avg.length; i++) {
        let sc = avg[i][0];
        avg.forEach((v) => v[0] < sc ? v[1]++ : "");
    }
    
    // 등수만 뽑아서 제출
    return avg.map((v) => v[1]);
}