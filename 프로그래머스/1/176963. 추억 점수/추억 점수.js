function solution(name, yearning, photo) {
    const point = {};
    
    name.forEach((n, i) => point[n] = yearning[i]);
    
    return photo.map((p) => p.reduce((a, c) => a + (point[c] || 0), 0));
}