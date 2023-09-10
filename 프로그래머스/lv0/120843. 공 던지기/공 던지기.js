function solution(numbers, k) {
    let i = 0;
    while(--k) {
        i = (i+2) % numbers.length;
    }
    return numbers[i];
}