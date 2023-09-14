function solution(array, n) {
    const sorted = [...array].sort((a, b) => a-b)
    const arr = sorted.map((v) => Math.abs(v - n));  // n을 뺀 값에 절대값
    const min = Math.min(...arr);   // 최소값 찾기
    const idx = arr.indexOf(min);   // 인덱스 구하기
    return sorted[idx];
}