function solution(k, m, score) {
    let answer = 0;
    let sc = score.sort((a, b) => b - a);  // 내림차순 정렬
    
    // m번째.. 2m번째.. -> 한 상자의 최저 사과 점수
    for (let i = m-1; i < score.length; i += m) {
        answer += sc[i] * m;
    }
    
    return answer;
}