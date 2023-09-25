// total을 num으로 나눈 몫 = 중간값
function solution(num, total) {
    let ans = [];
    let mid = Math.round(total / num);
    ans.push(mid);
    
    // 앞 뒤로 연속된 수 담기
    let i = 1;
    while (ans.length < num) {
        ans.push(mid+i);
        ans.unshift(mid-i);
        i++;
    }
    
    // num보다 더 많은 경우 초과값 제거
    if (ans.length > num) {
        let n = total - ans.reduce((a, c) => a + c);
        ans.splice(ans.indexOf(n), 1);
    }
    
    return ans;
}