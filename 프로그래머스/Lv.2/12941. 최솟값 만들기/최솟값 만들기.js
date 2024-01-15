function solution(A, B){
    let a = A.sort((a, b) => a - b);
    let b = B.sort((a, b) => b - a);
    
    let result = a.map((n, i) => n * b[i]);
    
    return result.reduce((a, c) => a + c);
}