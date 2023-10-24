function solution(participant, completion) {
    let p = participant.sort();
    let c = completion.sort();
    c.push("");
    
    for(let i = 0; i < c.length; i++) {
        if (p[i] !== c[i]) return p[i];
    }
}