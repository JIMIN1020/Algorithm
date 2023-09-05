function solution(my_string) {
  const vowel = ["a", "e", "i", "o", "u"];  // 모음
    
  // 하나씩 확인 후 제거
  vowel.forEach((v) => {
    const regex = new RegExp(`${v}`, "g");  // 변수로 정규표현식 만들기
    my_string = my_string.replace(regex, "");
  });
  return my_string;
}
