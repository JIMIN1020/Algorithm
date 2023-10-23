function solution(n, lost, reserve) {
    
    // 여벌 체육복이 있는 학생들 중 도난당한 학생 제외
    let reserv = reserve.filter((v) => !lost.includes(v));
    let lose = lost.filter((v) => !reserve.includes(v));
    
    reserv.sort((a, b) => a - b);
    lose.sort((a, b) => a - b);
    
    // reserv 번호들 중 +- 1을 한 값이 있는지 확인 후 0으로 변경
    reserv.forEach((v) => {
        if (lose.includes(v-1)) lose[lose.indexOf(v-1)] = 0
        else if (lose.includes(v+1)) lose[lose.indexOf(v+1)] = 0
    });
    
    // 남은 학생 수 빼고 제출
    return n - lose.filter((v) => v !== 0).length;
}