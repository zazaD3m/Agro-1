import { defaultFilter } from "@/features/site/siteSlice";

function validate(input) {
  return this.options.includes(input);
}

const SortFilter = {
  default: defaultFilter.SortId,
  options: ["1", "2", "3", "4"],
  nameMap: {
    1: "თარიღი კლებადი",
    2: "თარიღი ზრდადი",
    3: "ფასი კლებადი",
    4: "ფასი ზრდადი",
  },
  validate,
};

const SellerFilter = {
  default: defaultFilter.SellerType,
  options: ["1", "2", "3"],
  nameMap: {
    1: "ყველა",
    2: "კერძო",
    3: "მაღაზია",
  },
  validate,
};

const countryFilter = {
  default: defaultFilter.country,
  options: ["en", "ge"],
  validate,
};

export { SortFilter, SellerFilter, countryFilter };
