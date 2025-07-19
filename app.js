// 간단한 비속어 리스트 예시
const badWords = ["시발", "ㅅㅂ", "ㅈㄴ"];

// 비속어를 ***로 치환하는 함수
function filterBadWords(text) {
  let filtered = text;
  badWords.forEach(word => {
    const regex = new RegExp(word, "gi");
    filtered = filtered.replace(regex, "***");
  });
  return filtered;
}
