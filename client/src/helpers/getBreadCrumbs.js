import {
  convertToEnglish,
  convertToGeorgian,
  isEnglish,
  isGeorgian,
} from "./translateString";

export function getBreadCrumbs(arrOfStrings) {
  let strings = [...arrOfStrings];

  const translatedStrings = strings.map((str, index) => {
    let translatedStr;

    if (isGeorgian(str[0])) {
      translatedStr = convertToEnglish(str);
    } else if (isEnglish(str[0])) {
      translatedStr = convertToGeorgian(str);
    }
    const links = strings.slice(0, index + 1).map((s) => s);
    const link = links.join("/");

    return { link, name: translatedStr };
  });

  return translatedStrings;
}
