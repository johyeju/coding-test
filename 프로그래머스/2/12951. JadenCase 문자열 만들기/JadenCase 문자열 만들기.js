function solution(s) {
  let result = "";
  let isFirst = true;

  for (let char of s.toLowerCase()) {
    if (isFirst && char >= 'a' && char <= 'z') {
      result += char.toUpperCase();
    } else {
      result += char;
    }

    isFirst = (char === " ");
  }

  return result;
}
