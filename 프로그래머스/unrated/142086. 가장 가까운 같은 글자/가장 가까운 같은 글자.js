function solution(s) {
    let str = [...s];
    
    return str.map((v, i) => {
        let idx = str.slice(0, i).reverse().indexOf(v);
        return idx < 0 ? idx : idx+1;
    })
}