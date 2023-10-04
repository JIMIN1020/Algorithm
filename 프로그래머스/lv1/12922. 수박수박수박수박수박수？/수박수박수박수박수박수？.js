function solution(n) {
    let l1 = "수";
    let l2 = "박";
    let onOff = true;
    let str = "";
    
    while (n-- > 0) {
        onOff ? str += l1 : str += l2;
        onOff = !onOff;
    }
    
    return str;
}