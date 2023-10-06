process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    let a = Number(n[0]), b = Number(n[1]);
    
    let stars = "";
    while (b-- > 0) {
        stars += "*".repeat(a);
        stars += "\n"
    }
    console.log(stars);
});