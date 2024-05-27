const englishToGeorgianMap = new Map([
  ["a", "ა"],
  ["b", "ბ"],
  ["g", "გ"],
  ["d", "დ"],
  ["e", "ე"],
  ["v", "ვ"],
  ["z", "ზ"],
  ["T", "თ"],
  ["i", "ი"],
  ["k", "კ"],
  ["l", "ლ"],
  ["m", "მ"],
  ["n", "ნ"],
  ["o", "ო"],
  ["p", "პ"],
  ["J", "ჟ"],
  ["r", "რ"],
  ["s", "ს"],
  ["t", "ტ"],
  ["u", "უ"],
  ["f", "ფ"],
  ["q", "ქ"],
  ["R", "ღ"],
  ["y", "ყ"],
  ["S", "შ"],
  ["C", "ჩ"],
  ["c", "ც"],
  ["Z", "ძ"],
  ["w", "წ"],
  ["W", "ჭ"],
  ["x", "ხ"],
  ["j", "ჯ"],
  ["h", "ჰ"],
  ["-", " "],
]);
const georgianToEnglishMap = new Map([
  ["ა", "a"],
  ["ბ", "b"],
  ["გ", "g"],
  ["დ", "d"],
  ["ე", "e"],
  ["ვ", "v"],
  ["ზ", "z"],
  ["თ", "T"],
  ["ი", "i"],
  ["კ", "k"],
  ["ლ", "l"],
  ["მ", "m"],
  ["ნ", "n"],
  ["ო", "o"],
  ["პ", "p"],
  ["ჟ", "J"],
  ["რ", "r"],
  ["ს", "s"],
  ["ტ", "t"],
  ["უ", "u"],
  ["ფ", "f"],
  ["ქ", "q"],
  ["ღ", "R"],
  ["ყ", "y"],
  ["შ", "S"],
  ["ჩ", "C"],
  ["ც", "c"],
  ["ძ", "Z"],
  ["წ", "w"],
  ["ჭ", "W"],
  ["ხ", "x"],
  ["ჯ", "j"],
  ["ჰ", "h"],
  ["-", "-"],
  ["/", "-"],
  [" ", "-"],
]);

export function convertToGeorgian(input) {
  let result = "";
  for (let char of input) {
    const georgianChar = englishToGeorgianMap.get(char) || char;
    result += georgianChar;
  }
  return result;
}

export function convertToEnglish(input) {
  let result = "";
  for (let char of input) {
    const englishChar = georgianToEnglishMap.get(char) || char;
    result += englishChar;
  }
  return result;
}

export function isEnglish(input) {
  const englishRange = /^[a-zA-Z\s]*$/;
  return englishRange.test(input);
}

export function isGeorgian(input) {
  const georgianRange = /[\u10A0-\u10FF]/;
  return georgianRange.test(input);
}
