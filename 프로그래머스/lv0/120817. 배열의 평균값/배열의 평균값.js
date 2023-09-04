function solution(numbers) {
    let total = 0;
    numbers.forEach((num) => {
        total += num;
    })
    return total / numbers.length;
}