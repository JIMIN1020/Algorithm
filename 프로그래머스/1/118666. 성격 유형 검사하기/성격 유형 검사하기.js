function solution(survey, choices) {
  let result = "";
  let mbti = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  const point = [3, 2, 1, 0, 1, 2, 3];  // 문항 별 점수

  for (let i = 0; i < survey.length; i++) {
    let p = point[choices[i] - 1];

    // 답변에 따라 유형 점수 부여
    if (choices[i] < 4) {
      mbti[survey[i][0]] += p;
    } else {
      mbti[survey[i][1]] += p;
    }
  }

  // 유형 결정
  const types = Object.keys(mbti);
  for (let i = 0; i <= 6; i += 2) {
    // 두번째 타입 점수가 더 클 경우
    if (mbti[types[i]] < mbti[types[i + 1]]) {
      result += types[i + 1];
    }
    // 그 외의 경우
    else {
      result += types[i];
    }
  }

  return result;
}