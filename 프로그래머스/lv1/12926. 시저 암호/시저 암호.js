function solution(s, n) {
    let ascii = [...s].map((v) => v.charCodeAt(0));
    
    ascii = ascii.map((v) => {
        if (v >= 65 && v <= 90) {
            return v + n <= 90 ?
                String.fromCharCode(v + n)
                : String.fromCharCode((v + n) % 90 + 64);
        }
        else if (v >= 97 && v <= 122) {
            return v + n <= 122 ?
                String.fromCharCode(v + n)
                : String.fromCharCode((v + n) % 122 + 96);
        }
        else return " ";
    });
    return ascii.join("");
}