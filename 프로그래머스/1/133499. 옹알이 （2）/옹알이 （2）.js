function solution(babbling) {
    let bab = [...babbling];
    let count = 0;
    
    // 단어들이 포함되어 있으면 숫자로 변경
    bab = bab.map((v) => v.replace(/\aya/g, "1").replace(/\ye/g, "2").replace(/\woo/g, "3").replace(/\ma/g, "4"));
    
    // 숫자만 필터링 후 개수 세기
    bab = bab.filter((v) => /^[0-9]+$/.test(v));
    count += bab.length;
    
    // 연속된 경우는 빼기
    bab.forEach((v) => {
        for (let i = 0; i < v.length-1; i++) {
            if(v[i] === v[i+1]) {
                count--;
                break;
            } 
        }
    });
    
    return count;
}