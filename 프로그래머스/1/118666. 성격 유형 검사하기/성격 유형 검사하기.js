function solution(survey, choices) {
  const scores = { R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0 };

  const types = survey.map((value) => value.split(""));

  for (let i = 0; i < types.length; i++) {
    const disagreeType = types[i][0];
    const agreeType = types[i][1];
    const choice = choices[i];

    if (choice === 4) continue;

    const point = choice > 4 ? choice - 4 : 4 - choice;

    if (choice < 4) {
      scores[disagreeType] += point;
    } else {
      scores[agreeType] += point;
    }
  }

  let result = "";
  result += scores.R >= scores.T ? "R" : "T";
  result += scores.C >= scores.F ? "C" : "F";
  result += scores.J >= scores.M ? "J" : "M";
  result += scores.A >= scores.N ? "A" : "N";

  return result;
}