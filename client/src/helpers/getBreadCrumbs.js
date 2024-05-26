export function getBreadCrumbs(arrOfStrings) {
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

  let strings = [...arrOfStrings].slice(1);

  if (strings.length > 5) {
    strings = arrOfStrings.slice(0, 5);
  }

  function convertToGeorgian(input) {
    let result = "";

    for (let char of input) {
      const georgianChar = englishToGeorgianMap.get(char);
      result += georgianChar;
    }

    return result;
  }

  const translatedStrings = strings.map((str, index) => {
    const translatedStr = convertToGeorgian(str);
    const links = strings.slice(0, index + 1).map((s) => s);
    const link = links.join("/");

    return { link, name: translatedStr };
  });

  return translatedStrings;
}
