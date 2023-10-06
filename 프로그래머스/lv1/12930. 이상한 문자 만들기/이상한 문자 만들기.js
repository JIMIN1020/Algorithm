function solution(s) {
    let str = s.split(" ").map((s) => modify(s));
    return str.join(" ");
}

const modify = (str) => {
    return [...str].map((v, i) => i % 2 === 0 ? v.toUpperCase() : v.toLowerCase()).join("");
}