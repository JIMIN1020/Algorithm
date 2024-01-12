function solution(wallpaper) {
    let answer = [];
    let top = -1;
    let bottom = -1;
    let left = 50;
    let right = -1;
    
    wallpaper.forEach((line, i) => {
        if (line.includes('#') && top === -1) {
            top = i;
        } else if (line.includes('#')) {
            bottom = i+1;
        }
        
        if (left > line.indexOf('#') && line.indexOf('#') >= 0)
            left = line.indexOf('#');
        if (right <= line.lastIndexOf('#'))
            right = line.lastIndexOf('#') + 1;
    })
    
    if (bottom === -1) bottom = top+1;
    
    return [top, left, bottom, right];
}