function solution(s1, s2) {
    const result = s1.filter((str) => s2.includes(str))
    return result.length;
}