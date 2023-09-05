function solution(array) {
    const count = Array.from({length: 1000}, () => 0); // 배열 생성 및 초기화
    array.forEach((num) => count[num]++);   // 카운트 하기
    
    const max = Math.max(...count); // 최댓값 구하기
    return count.indexOf(max) === count.lastIndexOf(max) ? count.indexOf(max) : -1;
}