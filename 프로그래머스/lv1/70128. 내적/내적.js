function solution(a, b) {
    let num = [...a];
    
    let i = 0;
    while (i < a.length) {
        num[i] *= b[i++];
    }
    
    return num.reduce((a, c) => a + c, 0);
}