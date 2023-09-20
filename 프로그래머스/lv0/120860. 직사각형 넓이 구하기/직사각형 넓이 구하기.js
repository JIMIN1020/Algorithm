function solution(dots) {
    const h = Math.max(...dots.map(v => v[0])) - Math.min(...dots.map(v => v[0]));
    const v = Math.max(...dots.map(v => v[1])) - Math.min(...dots.map(v => v[1]));
    return h * v;
}