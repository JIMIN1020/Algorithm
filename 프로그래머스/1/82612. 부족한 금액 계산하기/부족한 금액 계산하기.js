function solution(price, money, count) {
    const sum = Array(count).fill().reduce((a, c, i) => a + i + 1, 0);
    const total = price * sum;

    return money - total > 0 ? 0 : (money - total) * -1;
}