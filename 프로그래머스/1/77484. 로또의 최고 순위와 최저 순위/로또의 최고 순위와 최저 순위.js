function solution(lottos, win_nums) {
    let rank = [6, 6, 5, 4, 3, 2, 1];
    
    let count = lottos.filter((v) => win_nums.includes(v)).length;  // 0 제외 맞춘 개수
    let zero = lottos.filter((v) => v === 0).length;  // 0의 개수
    
    // 인덱스 이용하여 등수 구하기
    return [rank[count+zero], rank[count]];
}