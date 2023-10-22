function solution(lottos, win_nums) {
    let count = 0;  // 0 제외 맞춘 개수
    let zero = lottos.filter((v) => v === 0).length;  // 0의 개수
    
    // 현재 맞춘 번호 개수 세기
    lottos.forEach((v) => {
        if (win_nums.includes(v)) count++;
    });
    
    // 경우에 따라 처리
    if (!count && !zero) return [6, 6];
    else if (!count) return [7-(count+zero), 6];
    else return [7-(count+zero), 7-count];
}