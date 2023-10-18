function solution(dart) {
    // 점수만 담기 & 보너스, 옵션만 담기
    let score = dart.split(/\D/).filter((v) => v.length > 0);
    let bonus = dart.split(/\d/).filter((v) => v.length > 0);
    
    for (let i = 0; i < bonus.length; i++) {
        let sc = score[i];
        let bn = [...bonus[i]];
        
        bn.forEach((v) => {
            switch(v) {
                case "D":
                    sc = Math.pow(sc, 2); break;
                case "T":
                    sc = Math.pow(sc, 3); break;
                case "*":
                    score[i-1] *= 2;
                    sc *= 2;
                    break;
                case "#":
                   sc *= -1; break;
            }
        })
       
        score[i] = sc;
    }
    
    return score.reduce((a,c) => a + c*1, 0);
}