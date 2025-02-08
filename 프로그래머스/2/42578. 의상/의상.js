function solution(clothes) {
    const closet = {};
    let answer = 1;
    
    // 개수 계산
    clothes.forEach(([_, key]) => {
        if (isNaN(closet[key])) {
            closet[key] = 1;
        } else {
            closet[key] = closet[key] + 1;
        }
    });
    
    // 조합 수 계산
    for (key in closet) {
        answer *= closet[key] + 1; // 해당 의상 자체를 입지 않는 경우 +1
    }
    
    return answer - 1; // 모든 의상을 입지 않는 경우 -1
}