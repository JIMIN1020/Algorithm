function solution(rsp) {
    return rsp.split("").map((n) => n === "0" ? "5" : (n === "2" ? "0" : "2")).join("");
}