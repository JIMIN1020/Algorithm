function solution(k, score) {
    let least = []; // 최하위 점수
    let list = [];  // 현재 명예의 전당 리스트
    
    score.forEach((v) => {
        list.push(v);
        list.sort((a, b) => b - a);
        list.length > k ? least.push(list[k-1]) : least.push(list[list.length-1]);
    })
    
    return least;
}