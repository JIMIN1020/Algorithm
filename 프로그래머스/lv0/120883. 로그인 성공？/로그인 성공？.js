function solution(id_pw, db) {
    // 일치하는 아이디가 있는지?
    let fail = db.filter((v) => v[0] === id_pw[0]).length;
    if(!fail) return "fail";    // 없으면 fail
    
    // 아이디, 비밀번호가 모두 일치하는지?
    let login = db.filter((v) => v[0] === id_pw[0] && v[1] === id_pw[1]).length;
    return login > 0 ? "login" : "wrong pw";
}