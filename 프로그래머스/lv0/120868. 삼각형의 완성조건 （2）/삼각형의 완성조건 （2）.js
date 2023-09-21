function solution(sides) {
    let count = 0;
    
    // 가장 긴 변이 sides 중 하나인 경우
    sides.sort((a, b) => b - a);
    const s1 = sides[0];    // 가장 긴 변
    for (let i = 1; i <= s1; i++) {
        i + sides[1] > s1 ? count++ : "";
    }
    
    // 나머지 한 변이 가장 긴 변인 경우
    for (let i = s1+1; i < sides[0]+sides[1]; i++) {
        count++;
    }
    
    return count;
}