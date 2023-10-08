function solution(sizes) {
    // 각 크기 오름차순 정렬
    sizes.forEach((v) => v.sort((a, b) => a - b));
    
    // 인덱스 별로 분리
    let s1 = sizes.map((v) => v[0]);
    let s2 = sizes.map((v) => v[1]);
    
    // 최댓값 구해서 곱하기
    return Math.max(...s1) * Math.max(...s2);
}