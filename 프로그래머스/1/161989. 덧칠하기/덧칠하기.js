function solution(n, m, sec) {
    let count = 0;
    let wall = Array(n+1).fill(0);
    
    // 색칠할 부분
    sec.forEach((v) => wall[v] = 1);
    
    // 
    for (let i = 1; i <= n; ) {
        if (wall[i] === 1) {
            i += m;
            count++;
        } else i++;
    }
    
    return count;
}