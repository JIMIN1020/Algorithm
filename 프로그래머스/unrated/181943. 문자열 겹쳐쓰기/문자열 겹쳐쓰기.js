function solution(my_string, overwrite, s) {
    let arr = [...my_string];
    arr.splice(s, overwrite.length, overwrite);
    return arr.join("");
}