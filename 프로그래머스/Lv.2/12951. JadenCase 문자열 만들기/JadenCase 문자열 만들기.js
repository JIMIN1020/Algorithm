function solution(s) {
  let str = s.toLowerCase().split(" ");

  str = str.map((st) => st.charAt(0).toUpperCase() + st.slice(1));

  return str.join(" ");
}