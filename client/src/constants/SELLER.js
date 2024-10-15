const SELLER = {
  options: [2, 3],
  nameMap: {
    2: "მაღაზია",
    3: "ფიზიკური პირი",
  },
  getSellerName(sellerId) {
    return this.nameMap[sellerId];
  },
};

export default SELLER;
