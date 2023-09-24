function solution(i, j, k) {
    let count = 0;
    for(let n = i; n <= j; n++) {
        let num = n+"";
        while (num.includes(k)) {
            num = num.replace(`${k}`, "");
            count++;
        }
    }
    return count;
}