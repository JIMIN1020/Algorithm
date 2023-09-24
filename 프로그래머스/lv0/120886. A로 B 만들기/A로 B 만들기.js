function solution(before, after) {
    before.split("").forEach((v) => after = after.replace(v, ""));
    return after.length === 0 ? 1 : 0;
}