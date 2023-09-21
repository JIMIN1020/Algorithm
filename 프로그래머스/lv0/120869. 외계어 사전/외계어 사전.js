function solution(spell, dic) {
    while(spell.length) {
        let s = spell.pop();
        dic = dic.filter((v) => v.includes(s));
    }
    return dic.length > 0 ? 1 : 2;
}