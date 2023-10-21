function solution(X, Y) {
    let pair = [];
    let x = Array(10).fill(0);
    let y = Array(10).fill(0);
    
    // 인덱스를 이용해서 개수 세기
    [...X].forEach((n) => x[n]++);
    [...Y].forEach(n => y[n]++);
    
    // 0~9까지 x, y 각각 보유한 개수 중 최솟값 만큼 추가
    for (let i = 0; i < 10; i++) {
        for(let j = 0; j < Math.min(x[i], y[i]); j++) {
            pair.push(i);
        }
    }
    
    // 내림차순 정렬
    pair.sort((a, b) => b - a);
    
    // 조건에 따라 제출
    if (pair.length === 0) return "-1";
    else if (pair[0] === 0) return "0"
    else return pair.join("");
}