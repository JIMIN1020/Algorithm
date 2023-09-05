function solution(my_string, letter) {
    /* ---- 기존 풀이: 정규표현식
    const regex = new RegExp(`${letter}`, "g")
    return my_string.replace(regex, "");
    */
    return my_string.replaceAll(letter, "");
}