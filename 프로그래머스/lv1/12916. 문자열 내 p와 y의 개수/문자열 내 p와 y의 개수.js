function solution(s){
    let p = [...s].filter((v) => v === "P" || v === "p");
    let y = [...s].filter((v) => v === "Y" || v === "y");
    
    return p.length === y.length ? true : false;
}