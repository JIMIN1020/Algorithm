function solution(my_string, n1, n2) {
    let str = [...my_string]
    str[n1] = my_string[n2];
    str[n2] = my_string[n1];
    return str.join("");
}