function solution(id_list, report, k) {
    let count = new Array(id_list.length).fill(0);  // 신고 횟수
    let banned = [];  // 정지 내역
    let users = {};   // 신고 이력
    
    id_list.forEach((id) => users[id] = []);
    
    report.forEach((r) => {
        const [u1, u2] = r.split(" ");
        
        // 신고 이력 확인
        if (!users[u1].includes(u2)) {
            users[u1].push(u2);
            count[id_list.indexOf(u2)]++;
        }
    })
    
    // 정지 여부 확인
    count.forEach((c, i) => {
        if (c >= k) banned.push(id_list[i]);
    })
    
    // 처리 결과 카운트
    return id_list.map((id) => {
        let count = 0;
        banned.forEach((b) => users[id].includes(b) ? count++ : "");
        return count;
    });
}