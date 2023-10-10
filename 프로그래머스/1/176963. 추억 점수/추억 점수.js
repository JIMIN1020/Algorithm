function solution(name, yearning, photo) {
    // name에 해당하는 yearning으로 바꿔주기 (없을 경우 0)
    let cal = photo.map((v) => {
        return v.map((e) => name.indexOf(e) === -1 ? 0 : yearning[name.indexOf(e)]);
    });
    
    // 바꾼 값 합친 후 제출
    return cal.map((v) => v.reduce((a, c) => a + c, 0));
}