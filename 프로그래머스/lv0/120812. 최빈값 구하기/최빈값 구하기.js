function solution(array) {
    const count = Array.from({length: 1000}, () => 0); // 배열 생성 및 초기화
    array.forEach((num) => count[num]++);   // 카운트하기
    
    const maxCount = Math.max(...count);
    let maxValue = [];
    for (let i = 0; i < 1000; i++) {
        count[i] === maxCount ? maxValue.push(i) : undefined;
    }
    return maxValue.length === 1 ? maxValue[0] : -1;
}