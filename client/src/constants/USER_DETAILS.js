export const GENDER = {
  options: [1, 2],
  nameMap: {
    1: "მამრობითი",
    2: "მდედრობითი",
  },
  getGenderName(genderId) {
    return this.nameMap[genderId];
  },
};

export const BIRTH_YEARS = [
  1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962,
  1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975,
  1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988,
  1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,
  2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
];

export const SELLER = {
  options: [2, 3],
  nameMap: {
    2: "მაღაზია",
    3: "ფიზიკური პირი",
  },
  getSellerName(sellerId) {
    return this.nameMap[sellerId];
  },
};
