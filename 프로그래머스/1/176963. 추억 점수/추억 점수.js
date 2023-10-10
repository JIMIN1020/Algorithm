function solution(name, yearning, photo) {
    let cal = photo.map((v) => {
        return v.map((e) => name.indexOf(e) === -1 ? 0 : yearning[name.indexOf(e)]);
    });
    
    return cal.map((v) => v.reduce((a, c) => a + c, 0));
}