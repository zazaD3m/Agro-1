const LOCATION = {
  options: [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
    42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65,
  ],
  nameMap: {
    1: "ყველა",
    2: "თბილისი",
    3: "ადიგენი",
    4: "ამბროლაური",
    5: "ასპინძა",
    6: "ახალქალაქი",
    7: "ახალციხე",
    8: "ახმეტა",
    9: "ბათუმი",
    10: "ბაღდათი",
    11: "ბოლნისი",
    12: "ბორჯომი",
    13: "გარდაბანი",
    14: "გორი",
    15: "გურჯაანი",
    16: "დედოფლისწყარო",
    17: "დმანისი",
    18: "დუშეთი",
    19: "ვანი",
    20: "ზესტაფონი",
    21: "ზუგდიდი",
    22: "თეთრიწყარო",
    23: "თელავი",
    24: "თერჯოლა",
    25: "თიანეთი",
    26: "კასპი",
    27: "ლაგოდეხი",
    28: "ლანჩხუთი",
    29: "ლენტეხი",
    30: "მარნეული",
    31: "მარტვილი",
    32: "მესტია",
    33: "მცხეთა",
    34: "ნინოწმინდა",
    35: "ოზურგეთი",
    36: "ონი",
    37: "რუსთავი",
    38: "საგარეჯო",
    39: "სამტრედია",
    40: "საჩხერე",
    41: "სენაკი",
    42: "სიღნაღი",
    43: "ტყიბული",
    44: "ფოთი",
    45: "ქარელი",
    46: "ქედა",
    47: "ქობულეთი",
    48: "ქუთაისი",
    49: "სტეფანწმინდა",
    50: "ყვარელი",
    51: "შუახევი",
    52: "ჩოხატაური",
    53: "ჩხოროწყუ",
    54: "ცაგერი",
    55: "წალენჯიხა",
    56: "წალკა",
    57: "წყალტუბო",
    58: "ჭიათურა",
    59: "ხარაგაული",
    60: "ხაშური",
    61: "ხელვაჩაური",
    62: "ხობი",
    63: "ხონი",
    64: "ხულო",
    65: "ოქროყანა",
  },
  getLocName(locId) {
    return this.nameMap[locId];
  },
};

export default LOCATION;
