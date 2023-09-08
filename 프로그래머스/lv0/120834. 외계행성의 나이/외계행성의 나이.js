function solution(age) {
    const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    const ages = (age+"").split("");
    return ages.map((n) => alpha[n]).join("");
}