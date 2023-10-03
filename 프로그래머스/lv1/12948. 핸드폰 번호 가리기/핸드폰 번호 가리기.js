function solution(phone_number) {
    let len = phone_number.length - 4;
    let number = [...phone_number];
    for (let i = 0; i < len; i++) {
        number[i] = "*";
    }
    return number.join("");
}