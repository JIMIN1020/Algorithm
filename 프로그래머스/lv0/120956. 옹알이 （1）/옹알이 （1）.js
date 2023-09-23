function solution(babbling) {
    let bab = [...babbling];
    const words = ["aya", "ye", "woo", "ma"];
    
    // words 단어들이 포함되어 있으면 "1"로 변경
    // -> 공백("")으로 변경하면 나머지 단어가 붙어버림
    for(let i = 0; i < 4; i++) {
        bab = bab.map((v) => v.includes(words[i]) ? v.replace(`${words[i]}`, "1") : v);
    }
    
    // 1e1 같은 경우 지수 표기법으로 인식되기 때문에 필터링한 뒤 제출
    return bab.filter((v) => !v.includes("e") && !isNaN(v)).length;
}