function solution(polynomial) {
    /* ------ 동류항 분류 (x항, 상수항) ------ */
    let poly = polynomial.split(" + ");
    let x = poly.filter((v) => isNaN(v));
    let n = poly.filter((v) => !isNaN(v));
    
    /* ------ 계산 ------ */
    let coef = 0;   // 계수
    x.forEach((v) => v.length > 1 ? coef += parseInt(v.replace("x", "")) : coef += 1);
    
    let num = 0;    // 상수항
    n.map(Number).forEach((v) => num += v);

    /* ------ 값 다듬기 ------ */
    let answer = [];
    coef === 0 ? "" : coef === 1 ? answer.push("x") : answer.push(coef + "x");
    num = num > 0 ? answer.push(num) : "";
    return answer.join(" + ");
}