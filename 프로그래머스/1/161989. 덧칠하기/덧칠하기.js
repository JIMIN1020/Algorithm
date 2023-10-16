function solution(n, m, section) {
    // 색칠할 벽
    let wall = Array(n+1).fill(0);
    
    // 색칠할 부분 1로 체크
    section.forEach((v) => wall[v] = 1);
    
    // 1이 나오면 카운트하고, m만큼 더해서 다음 부분으로 넘어가기
    let count = 0;
    for (let i = 1; i <= n; ) {
        if (wall[i] === 1) {
            i += m;
            count++;
        } else i++;
    }
    
    return count;
}