function solution(num_list) {
    let count = 0;
    num_list.forEach((num) => num % 2 === 0 && count++);
    return [count, num_list.length - count];
}