import { defaultFilter } from "@/features/site/siteSlice";

function validate(input) {
  return this.options.includes(input);
}

const sortFilter = {
  default: defaultFilter.sortId,
  options: ["1", "2", "3", "4"],
  nameMap: {
    1: "თარიღი კლებადი",
    2: "თარიღი ზრდადი",
    3: "ფასი კლებადი",
    4: "ფასი ზრდადი",
  },
  validate,
};

const countryFilter = {
  default: defaultFilter.country,
  options: ["en", "ge"],
  validate,
};

export { sortFilter, countryFilter };
