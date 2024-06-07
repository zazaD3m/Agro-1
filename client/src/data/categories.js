/*
  ==MAIN CATEGORIES==
  {
    name,
    icon,
    link,
    id // 1000, 2000, ...
  }
  ==SUB CATEGORIES==
  {
    mainCatId, // 1000, 2000, ...
    id, // 1050, 1100, ...
    name, ? optional
    link, ? optional
  }
  ==CATEGORIES==
  {
    name,
    link,
    id, // 1051, 1052, ...
    subCatId, // 1050, 1100, ...
  }
*/

export const MAIN_CATEGORIES = [
  {
    name: "ცხოველები და ფრინველები",
    icon: "meat.png",
    link: "cxovelebi-da-frinvelebi",
    id: 1000,
  },
  {
    name: "თევზი და ზღვისპროდუქტები",
    icon: "fish.png",
    link: "Tevzi-da-zRvisproduqtebi",
    id: 2000,
  },
  {
    name: "ნერგები",
    icon: "fish.png",
    link: "nergebi",
    id: 3000,
  },
  {
    name: "ყვავილები",
    icon: "fish.png",
    link: "yvavilebi",
    id: 4000,
  },
  {
    name: "წიწვოვანი მარადმწვანე",
    icon: "fish.png",
    link: "wiwvovani-maradmwvane",
    id: 5000,
  },
  {
    name: "ჩითილები და სათესლე მასალა",
    icon: "fish.png",
    link: "CiTilebi-da-saTesle-masala",
    id: 6000,
  },
  {
    name: "სოფლის ნობათი",
    icon: "fish.png",
    link: "soflis-nobaTi",
    id: 7000,
  },
  {
    name: "სასმელები",
    icon: "fish.png",
    link: "sasmelebi",
    id: 8000,
  },
  {
    name: "მცენარეთა დაცვის საშუალებები",
    icon: "fish.png",
    link: "mcenareTa-dacvis-saSualebebi",
    id: 9000,
  },
  {
    name: "აგრო ინვენტარი",
    icon: "fish.png",
    link: "agro-inventari",
    id: 10000,
  },
  {
    name: "სხვადასხვა",
    icon: "fish.png",
    link: "sxvadasxva",
    id: 11000,
  },
];

export const SUB_CATEGORIES = [
  {
    mainCatId: 1000,
    id: 1050,
    name: "ცხოველები",
    link: "cxovelebi",
  },
  {
    mainCatId: 1000,
    id: 1100,
    name: "ფრინველები",
    link: "frinvelebi",
  },
  {
    mainCatId: 2000,
    id: 2050,
    name: "ზღვის თევზი",
    link: "zRvis-Tevzi",
  },
  {
    mainCatId: 2000,
    id: 2100,
    name: "მდინარის თევზი",
    link: "mdinaris-Tevzi",
  },
  {
    mainCatId: 2000,
    id: 2150,
    name: "ტბის თევზი",
    link: "tbis-Tevzi",
  },
  {
    mainCatId: 2000,
    id: 2200,
    name: "სხვა",
    link: "sxva",
  },
  {
    mainCatId: 3000,
    id: 3050,
    name: "ხეხილის ნერგები",
    link: "xexilis-nergebi",
  },
  {
    mainCatId: 3000,
    id: 3100,
    name: "კენკრა",
    link: "kenkra",
  },
  {
    mainCatId: 3000,
    id: 3150,
    name: "ციტრუსი",
    link: "citrusi",
  },
  {
    mainCatId: 4000,
    id: 4050,
    name: "დეკორატიული-ყვავილები",
    link: "dekoratiuli-yvavilebi",
  },
  {
    mainCatId: 4000,
    id: 4100,
    name: "ქოთნის ყვავილები",
    link: "qoTnis-yvavilebi",
  },
  {
    mainCatId: 4000,
    id: 4150,
    name: "დეკორატიული მცენარეები",
    link: "dekoratiuli-mcenareebi",
  },
  {
    mainCatId: 4000,
    id: 4200,
    name: "სხვა",
    link: "sxva",
  },
  {
    mainCatId: 5000,
    id: 5050,
    name: "წიწვოვანი მარადმწვანე",
    link: "wiwvovani-maradmwvane",
  },
  {
    mainCatId: 6000,
    id: 6050,
    name: "ჩითილი",
    link: "CiTili",
  },
  {
    mainCatId: 6000,
    id: 6100,
    name: "თესლი",
    link: "Tesli",
  },
  {
    mainCatId: 7000,
    id: 7050,
    name: "რძის პროდუქტი",
    link: "rZis-produqti",
  },
  {
    mainCatId: 7000,
    id: 7100,
    name: "ხორცეული",
    link: "xorceuli",
  },
  {
    mainCatId: 7000,
    id: 7150,
    name: "ხილი",
    link: "xili",
  },
  {
    mainCatId: 7000,
    id: 7200,
    name: "ბოსტნეული",
    link: "bostneuli",
  },
  {
    mainCatId: 7000,
    id: 7250,
    name: "სხვადასხვა",
    link: "sxvadasxva",
  },
  {
    mainCatId: 8000,
    id: 8050,
    name: "ალკოჰოლური",
    link: "alkoholuri",
  },
  {
    mainCatId: 9000,
    id: 9050,
    name: "სასუქი",
    link: "sasuqi",
  },
  {
    mainCatId: 10000,
    id: 10050,
    name: "აგრო ინვენტარი",
    link: "agro-inventari",
  },
  {
    mainCatId: 11000,
    id: 11050,
  },
];

export const CATEGORIES = [
  {
    link: "ZaRli",
    name: "ძაღლი",
    id: 1051,
    subCatId: 1050,
  },
  {
    link: "Zroxa",
    name: "ძროხა",
    id: 1052,
    subCatId: 1050,
  },
  {
    link: "cxvari",
    name: "ცხვარი",
    id: 1053,
    subCatId: 1050,
  },
  {
    link: "Txa",
    name: "თხა",
    id: 1054,
    subCatId: 1050,
  },
  {
    link: "cxeni",
    name: "ცხენი",
    id: 1055,
    subCatId: 1050,
  },
  {
    link: "Rori",
    name: "ღორი",
    id: 1056,
    subCatId: 1050,
  },
  {
    link: "kata",
    name: "კატა",
    id: 1057,
    subCatId: 1050,
  },
  {
    link: "sxva",
    name: "სხვა",
    id: 1058,
    subCatId: 1050,
  },
  {
    link: "qaTami",
    name: "ქათამი",
    id: 1101,
    subCatId: 1100,
  },
  {
    link: "indauri",
    name: "ინდაური",
    id: 1102,
    subCatId: 1100,
  },
  {
    link: "ixvi",
    name: "იხვი",
    id: 1103,
    subCatId: 1100,
  },
  {
    link: "bati",
    name: "ბატი",
    id: 1104,
    subCatId: 1100,
  },
  {
    link: "mwyeri",
    name: "მწყერი",
    id: 1105,
    subCatId: 1100,
  },
  {
    link: "cicari",
    name: "ციცარი",
    id: 1106,
    subCatId: 1100,
  },
  {
    link: "sxva",
    name: "სხვა",
    id: 1107,
    subCatId: 1100,
  },
  {
    link: "oraguli",
    name: "ორაგული",
    id: 2051,
    subCatId: 2050,
  },
  {
    link: "skumbria",
    name: "სკუმბრია",
    id: 2052,
    subCatId: 2050,
  },
  {
    link: "tuna",
    name: "ტუნა",
    id: 2053,
    subCatId: 2050,
  },
  {
    link: "qaSayi",
    name: "ქაშაყი",
    id: 2054,
    subCatId: 2050,
  },
  {
    link: "loqo",
    name: "ლოქო",
    id: 2055,
    subCatId: 2050,
  },
  {
    link: "kefali",
    name: "კეფალი",
    id: 2056,
    subCatId: 2050,
  },
  {
    link: "sardini",
    name: "სარდინი",
    id: 2057,
    subCatId: 2050,
  },
  {
    link: "saira",
    name: "საირა",
    id: 2058,
    subCatId: 2050,
  },
  {
    link: "sxva",
    name: "სხვა",
    id: 2059,
    subCatId: 2050,
  },
  {
    link: "kalmaXi",
    name: "კალმახი",
    id: 2101,
    subCatId: 2100,
  },
  {
    link: "tobi",
    name: "ტობი",
    id: 2102,
    subCatId: 2100,
  },
  {
    link: "ZuTxi",
    name: "ზუთხი",
    id: 2103,
    subCatId: 2100,
  },
  {
    link: "loqo",
    name: "ლოქო",
    id: 2104,
    subCatId: 2100,
  },
  {
    link: "qaSayi",
    name: "ქაშაყი",
    id: 2105,
    subCatId: 2100,
  },
  {
    link: "wvera",
    name: "წვერა",
    id: 2106,
    subCatId: 2100,
  },
  {
    link: "sxva",
    name: "სხვა",
    id: 2107,
    subCatId: 2100,
  },
  {
    link: "kobri",
    name: "კობრი",
    id: 2151,
    subCatId: 2150,
  },
  {
    link: "loqo",
    name: "ლოქო",
    id: 2152,
    subCatId: 2150,
  },
  {
    link: "amuri",
    name: "ამური",
    id: 2153,
    subCatId: 2150,
  },
  {
    link: "sqelSubla",
    name: "სქელშუბლა",
    id: 2154,
    subCatId: 2150,
  },
  {
    link: "sxva",
    name: "სხვა",
    id: 2155,
    subCatId: 2150,
  },
  {
    link: "xizilala",
    name: "ხიზილალა",
    id: 2201,
    subCatId: 2200,
  },
  {
    link: "kiborCxala-da-moluskebi",
    name: "კიბორჩხალა და მოლუსკები",
    id: 2202,
    subCatId: 2200,
  },
  {
    link: "midiebi-da-xamanwkebi",
    name: "მიდიები და ხამანწკები",
    id: 2203,
    subCatId: 2200,
  },
  {
    link: "rvafexa-da-lobsteri",
    name: "რვაფეხა და ლობსტერი",
    id: 2204,
    subCatId: 2200,
  },
  {
    link: "sxva",
    name: "სხვა",
    id: 2205,
    subCatId: 2200,
  },
  {
    link: "vaSli",
    name: "ვაშლი",
    id: 3051,
    subCatId: 3050,
  },
  {
    link: "msxali",
    name: "მსხალი",
    id: 3052,
    subCatId: 3050,
  },
  {
    link: "nigozi",
    name: "ნიგოზი",
    id: 3053,
    subCatId: 3050,
  },
  {
    link: "nuSi",
    name: "ნუში",
    id: 3054,
    subCatId: 3050,
  },
  {
    link: "fista",
    name: "ფისტა",
    id: 3055,
    subCatId: 3050,
  },
  {
    link: "leRvi",
    name: "ლეღვი",
    id: 3056,
    subCatId: 3050,
  },
  {
    link: "aluCa",
    name: "ალუჩა",
    id: 3057,
    subCatId: 3050,
  },
  {
    link: "qliavi",
    name: "ქლიავი",
    id: 3058,
    subCatId: 3050,
  },
  {
    link: "broweuli",
    name: "ბროწეული",
    id: 3059,
    subCatId: 3050,
  },
  {
    link: "atami",
    name: "ატამი",
    id: 3060,
    subCatId: 3050,
  },
  {
    link: "gargari",
    name: "გარგარი",
    id: 3061,
    subCatId: 3050,
  },
  {
    link: "bali",
    name: "ბალი",
    id: 3062,
    subCatId: 3050,
  },
  {
    link: "alubali",
    name: "ალუბალი",
    id: 3063,
    subCatId: 3050,
  },
  {
    link: "xurma",
    name: "ხურმა",
    id: 3064,
    subCatId: 3050,
  },
  {
    link: "kivi",
    name: "კივი",
    id: 3065,
    subCatId: 3050,
  },
  {
    link: "sxva",
    name: "სხვა",
    id: 3066,
    subCatId: 3050,
  },
  {
    link: "vazi",
    name: "ვაზი",
    id: 3101,
    subCatId: 3100,
  },
  {
    link: "mocvi",
    name: "მოცვი",
    id: 3102,
    subCatId: 3100,
  },
  {
    link: "Jolo",
    name: "ჟოლო",
    id: 3103,
    subCatId: 3100,
  },
  {
    link: "TuTa",
    name: "თუთა",
    id: 3104,
    subCatId: 3100,
  },
  {
    link: "goji-beri",
    name: "გოჯი ბერი",
    id: 3105,
    subCatId: 3100,
  },
  {
    link: "marwyvi",
    name: "მარწყვი",
    id: 3106,
    subCatId: 3100,
  },
  {
    link: "StoSi",
    name: "შტოში",
    id: 3107,
    subCatId: 3100,
  },
  {
    link: "mocxari",
    name: "მოცხარი",
    id: 3108,
    subCatId: 3100,
  },
  {
    link: "sxva",
    name: "სხვა",
    id: 3109,
    subCatId: 3100,
  },
  {
    link: "limoni",
    name: "ლიმონი",
    id: 3151,
    subCatId: 3150,
  },
  {
    link: "laimi",
    name: "ლაიმი",
    id: 3152,
    subCatId: 3150,
  },
  {
    link: "mandarini",
    name: "მანდარინი",
    id: 3153,
    subCatId: 3150,
  },
  {
    link: "fortoxali",
    name: "ფორთოხალი",
    id: 3154,
    subCatId: 3150,
  },
  {
    link: "greifruti",
    name: "გრეიფრუტი",
    id: 3155,
    subCatId: 3150,
  },
  {
    link: "Cai",
    name: "ჩაი",
    id: 3156,
    subCatId: 3150,
  },
  {
    link: "sxva",
    name: "სხვა",
    id: 3157,
    subCatId: 3150,
  },
  {
    link: "vardi",
    name: "ვარდი",
    id: 4051,
    subCatId: 4050,
  },
  {
    link: "orqidia",
    name: "ორქიდია",
    id: 4052,
    subCatId: 4050,
  },
  {
    link: "qrizanTema",
    name: "ქრიზანთემა",
    id: 4053,
    subCatId: 4050,
  },
  {
    link: "lilia",
    name: "ლილია",
    id: 4054,
    subCatId: 4050,
  },
  {
    link: "hortenzia",
    name: "ჰორტენზია",
    id: 4055,
    subCatId: 4050,
  },
  {
    link: "tita",
    name: "ტიტა",
    id: 4056,
    subCatId: 4050,
  },
  {
    link: "pioni",
    name: "პიონი",
    id: 4057,
    subCatId: 4050,
  },
  {
    link: "irisi",
    name: "ირისი",
    id: 4058,
    subCatId: 4050,
  },
  {
    link: "sxva",
    name: "სხვა",
    id: 4059,
    subCatId: 4050,
  },
  {
    link: "kaktusi",
    name: "კაკტუსი",
    id: 4101,
    subCatId: 4100,
  },
  {
    link: "monstera",
    name: "მონსტერა",
    id: 4102,
    subCatId: 4100,
  },
  {
    link: "aloe",
    name: "ალოე",
    id: 4103,
    subCatId: 4100,
  },
  {
    link: "fikusi",
    name: "ფიკუსი",
    id: 4104,
    subCatId: 4100,
  },
  {
    link: "kalaTea",
    name: "კალათეა",
    id: 4105,
    subCatId: 4100,
  },
  {
    link: "filodendroni",
    name: "ფილოდენდრონი",
    id: 4106,
    subCatId: 4100,
  },
  {
    link: "sansiviera",
    name: "სანსივიერა",
    id: 4107,
    subCatId: 4100,
  },
  {
    link: "sxva",
    name: "სხვა",
    id: 4108,
    subCatId: 4100,
  },
  {
    link: "palma",
    name: "პალმა",
    id: 4151,
    subCatId: 4150,
  },
  {
    link: "nekerCxali",
    name: "ნეკერჩხალი",
    id: 4152,
    subCatId: 4150,
  },
  {
    link: "kordi-balaxi",
    name: "კორდი ბალახი",
    id: 4153,
    subCatId: 4150,
  },
  {
    link: "azalia",
    name: "აზალია",
    id: 4154,
    subCatId: 4150,
  },
  {
    link: "sxva",
    name: "სხვა",
    id: 4155,
    subCatId: 4150,
  },
  {
    link: "torfi",
    name: "ტორფი",
    id: 4201,
    subCatId: 4200,
  },
  {
    link: "Savi-miwa",
    name: "შავი მიწა",
    id: 4202,
    subCatId: 4200,
  },
  {
    link: "qoTnebi",
    name: "ქოთნები",
    id: 4203,
    subCatId: 4200,
  },
  {
    link: "dekoratiuli-qvebi",
    name: "დეკორატიული ქვები",
    id: 4204,
    subCatId: 4200,
  },
  {
    link: "sxva",
    name: "სხვა",
    id: 4205,
    subCatId: 4200,
  },
  {
    link: "tuia",
    name: "ტუია",
    id: 5051,
    subCatId: 5050,
  },
  {
    link: "naZvi",
    name: "ნაძვი",
    id: 5052,
    subCatId: 5050,
  },
  {
    link: "kavkasiuri-soWi",
    name: "კავკასიური სოჭი",
    id: 5053,
    subCatId: 5050,
  },
  {
    link: "vercxlisferi-naZvi",
    name: "ვერცხლისფერი ნაძვი",
    id: 5054,
    subCatId: 5050,
  },
  {
    link: "fiWvi",
    name: "ფიჭვი",
    id: 5055,
    subCatId: 5050,
  },
  {
    link: "kedari",
    name: "კედარი",
    id: 5056,
    subCatId: 5050,
  },
  {
    link: "aRmosavluri-naZvi",
    name: "აღმოსავლური ნაძვი",
    id: 5057,
    subCatId: 5050,
  },
  {
    link: "evropuli-lariqsi",
    name: "ევროპული ლარიქსი",
    id: 5058,
    subCatId: 5050,
  },
  {
    link: "kviparosi",
    name: "კვიპაროსი",
    id: 5059,
    subCatId: 5050,
  },
  {
    link: "cacxvi",
    name: "ცაცხვი",
    id: 5060,
    subCatId: 5050,
  },
  {
    link: "sxva",
    name: "სხვა",
    id: 5061,
    subCatId: 5050,
  },
  {
    link: "kitri",
    name: "კიტრი",
    id: 6051,
    subCatId: 6050,
  },
  {
    link: "pomidori",
    name: "პომიდორი",
    id: 6052,
    subCatId: 6050,
  },
  {
    link: "badrijani",
    name: "ბადრიჯანი",
    id: 6053,
    subCatId: 6050,
  },
  {
    link: "bulgaruli",
    name: "ბულგარული",
    id: 6054,
    subCatId: 6050,
  },
  {
    link: "pimpili",
    name: "პიმპილი",
    id: 6055,
    subCatId: 6050,
  },
  {
    link: "rukola",
    name: "რუკოლა",
    id: 6056,
    subCatId: 6050,
  },
  {
    link: "rehani",
    name: "რეჰანი",
    id: 6057,
    subCatId: 6050,
  },
  {
    link: "pitna",
    name: "პიტნა",
    id: 6058,
    subCatId: 6050,
  },
  {
    link: "SaSkvlavi",
    name: "შაშკვლავი",
    id: 6059,
    subCatId: 6050,
  },
  {
    link: "salaTis-furceli",
    name: "სალათის ფურცელი",
    id: 6060,
    subCatId: 6050,
  },
  {
    link: "yvavilebi",
    name: "ყვავილები",
    id: 6061,
    subCatId: 6050,
  },
  {
    link: "mzesumzira",
    name: "მზესუმზირა",
    id: 6062,
    subCatId: 6050,
  },
  {
    link: "sxva",
    name: "სხვა",
    id: 6063,
    subCatId: 6050,
  },
  {
    link: "kitri",
    name: "კიტრი",
    id: 6101,
    subCatId: 6100,
  },
  {
    link: "pomidori",
    name: "პომიდორი",
    id: 6102,
    subCatId: 6100,
  },
  {
    link: "badrijani",
    name: "ბადრიჯანი",
    id: 6103,
    subCatId: 6100,
  },
  {
    link: "bulgaruli",
    name: "ბულგარული",
    id: 6104,
    subCatId: 6100,
  },
  {
    link: "pimpili",
    name: "პიმპილი",
    id: 6105,
    subCatId: 6100,
  },
  {
    link: "yabayi",
    name: "ყაბაყი",
    id: 6106,
    subCatId: 6100,
  },
  {
    link: "rehani",
    name: "რეჰანი",
    id: 6107,
    subCatId: 6100,
  },
  {
    link: "pitna",
    name: "პიტნა",
    id: 6108,
    subCatId: 6100,
  },
  {
    link: "SaSkvlavi",
    name: "შაშკვლავი",
    id: 6109,
    subCatId: 6100,
  },
  {
    link: "salaTis-furceli",
    name: "სალათის ფურცელი",
    id: 6110,
    subCatId: 6100,
  },
  {
    link: "rukola",
    name: "რუკოლა",
    id: 6111,
    subCatId: 6100,
  },
  {
    link: "barda",
    name: "ბარდა",
    id: 6112,
    subCatId: 6100,
  },
  {
    link: "boloki",
    name: "ბოლოკი",
    id: 6113,
    subCatId: 6100,
  },
  {
    link: "Warxali",
    name: "ჭარხალი",
    id: 6114,
    subCatId: 6100,
  },
  {
    link: "sazamTro",
    name: "საზამთრო",
    id: 6115,
    subCatId: 6100,
  },
  {
    link: "nesvi",
    name: "ნესვი",
    id: 6116,
    subCatId: 6100,
  },
  {
    link: "stafilo",
    name: "სტაფილო",
    id: 6117,
    subCatId: 6100,
  },
  {
    link: "kombosto",
    name: "კომბოსტო",
    id: 6118,
    subCatId: 6100,
  },
  {
    link: "simindi",
    name: "სიმინდი",
    id: 6119,
    subCatId: 6100,
  },
  {
    link: "mwvanilebi",
    name: "მწვანილები",
    id: 6120,
    subCatId: 6100,
  },
  {
    link: "yvavilebi",
    name: "ყვავილები",
    id: 6121,
    subCatId: 6100,
  },
  {
    link: "soko",
    name: "სოკო",
    id: 6122,
    subCatId: 6100,
  },
  {
    link: "mzesumzira",
    name: "მზესუმზირა",
    id: 6123,
    subCatId: 6100,
  },
  {
    link: "balaxi-kordi",
    name: "ბალახი / კორდი",
    id: 6124,
    subCatId: 6100,
  },
  {
    link: "sxva",
    name: "სხვა",
    id: 6125,
    subCatId: 6100,
  },
  {
    link: "yveli",
    name: "ყველი",
    id: 7051,
    subCatId: 7050,
  },
  {
    link: "xaWo",
    name: "ხაჭო",
    id: 7052,
    subCatId: 7050,
  },
  {
    link: "erbo",
    name: "ერბო",
    id: 7053,
    subCatId: 7050,
  },
  {
    link: "araJani",
    name: "არაჟანი",
    id: 7054,
    subCatId: 7050,
  },
  {
    link: "mawoni",
    name: "მაწონი",
    id: 7055,
    subCatId: 7050,
  },
  {
    link: "naduRi",
    name: "ნადუღი",
    id: 7056,
    subCatId: 7050,
  },
  {
    link: "rZe",
    name: "რძე",
    id: 7057,
    subCatId: 7050,
  },
  {
    link: "sxva",
    name: "სხვა",
    id: 7058,
    subCatId: 7050,
  },
  {
    link: "qatami",
    name: "ქათამი",
    id: 7101,
    subCatId: 7100,
  },
  {
    link: "indauri",
    name: "ინდაური",
    id: 7102,
    subCatId: 7100,
  },
  {
    link: "Roris-xorci",
    name: "ღორის ხორცი",
    id: 7103,
    subCatId: 7100,
  },
  {
    link: "Zroxis-xorci",
    name: "ძროხის ხორცი",
    id: 7104,
    subCatId: 7100,
  },
  {
    link: "goWi",
    name: "გოჭი",
    id: 7105,
    subCatId: 7100,
  },
  {
    link: "xbo",
    name: "ხბო",
    id: 7106,
    subCatId: 7100,
  },
  {
    link: "wiwila-tabaka",
    name: "წიწილა / ტაბაკა",
    id: 7107,
    subCatId: 7100,
  },
  {
    link: "kurdReli",
    name: "კურდღელი",
    id: 7108,
    subCatId: 7100,
  },
  {
    link: "ixvi",
    name: "იხვი",
    id: 7109,
    subCatId: 7100,
  },
  {
    link: "mwyeri",
    name: "მწყერი",
    id: 7110,
    subCatId: 7100,
  },
  {
    link: "cxvari",
    name: "ცხვარი",
    id: 7111,
    subCatId: 7100,
  },
  {
    link: "cikani",
    name: "ციკანი",
    id: 7112,
    subCatId: 7100,
  },
  {
    link: "Txa",
    name: "თხა",
    id: 7113,
    subCatId: 7100,
  },
  {
    link: "sxva",
    name: "სხვა",
    id: 7114,
    subCatId: 7100,
  },
  {
    link: "vaSli",
    name: "ვაშლი",
    id: 7151,
    subCatId: 7150,
  },
  {
    link: "msxali",
    name: "მსხალი",
    id: 7152,
    subCatId: 7150,
  },
  {
    link: "atami",
    name: "ატამი",
    id: 7153,
    subCatId: 7150,
  },
  {
    link: "kakali",
    name: "კაკალი",
    id: 7154,
    subCatId: 7150,
  },
  {
    link: "bali",
    name: "ბალი",
    id: 7155,
    subCatId: 7150,
  },
  {
    link: "alubali",
    name: "ალუბალი",
    id: 7156,
    subCatId: 7150,
  },
  {
    link: "leRvi",
    name: "ლეღვი",
    id: 7157,
    subCatId: 7150,
  },
  {
    link: "gargari",
    name: "გარგარი",
    id: 7158,
    subCatId: 7150,
  },
  {
    link: "sxva",
    name: "სხვა",
    id: 7159,
    subCatId: 7150,
  },
  {
    link: "kitri",
    name: "კიტრი",
    id: 7201,
    subCatId: 7200,
  },
  {
    link: "pomidori",
    name: "პომიდორი",
    id: 7202,
    subCatId: 7200,
  },
  {
    link: "kartofili",
    name: "კარტოფილი",
    id: 7203,
    subCatId: 7200,
  },
  {
    link: "mwvanilebi",
    name: "მწვანილები",
    id: 7204,
    subCatId: 7200,
  },
  {
    link: "stafilo",
    name: "სტაფილო",
    id: 7205,
    subCatId: 7200,
  },
  {
    link: "Warxali",
    name: "ჭარხალი",
    id: 7206,
    subCatId: 7200,
  },
  {
    link: "soko",
    name: "სოკო",
    id: 7207,
    subCatId: 7200,
  },
  {
    link: "sxva",
    name: "სხვა",
    id: 7208,
    subCatId: 7200,
  },
  {
    link: "Tafli",
    name: "თაფლი",
    id: 7251,
    subCatId: 7250,
  },
  {
    link: "fqvili",
    name: "ფქვილი",
    id: 7252,
    subCatId: 7250,
  },
  {
    link: "kakali",
    name: "კაკალი",
    id: 7253,
    subCatId: 7250,
  },
  {
    link: "Cai",
    name: "ჩაი",
    id: 7254,
    subCatId: 7250,
  },
  {
    link: "zeTi",
    name: "ზეთი",
    id: 7255,
    subCatId: 7250,
  },
  {
    link: "sunelebi",
    name: "სუნელები",
    id: 7256,
    subCatId: 7250,
  },
  {
    link: "kvercxi",
    name: "კვერცხი",
    id: 7257,
    subCatId: 7250,
  },
  {
    link: "badagi",
    name: "ბადაგი",
    id: 7258,
    subCatId: 7250,
  },
  {
    link: "sxva",
    name: "სხვა",
    id: 7259,
    subCatId: 7250,
  },
  {
    link: "TeTri-Rvino",
    name: "თეთრი ღვინო",
    id: 8051,
    subCatId: 8050,
  },
  {
    link: "wiTeli-Rvino",
    name: "წიტელი ღვინო",
    id: 8052,
    subCatId: 8050,
  },
  {
    link: "qvevris-Rvino",
    name: "ქვევრის ღვინო",
    id: 8053,
    subCatId: 8050,
  },
  {
    link: "WaWa",
    name: "ჭაჭა",
    id: 8054,
    subCatId: 8050,
  },
  {
    link: "arayi",
    name: "არაყი",
    id: 8055,
    subCatId: 8050,
  },
  {
    link: "koniaki",
    name: "კონიაკი",
    id: 8056,
    subCatId: 8050,
  },
  {
    link: "spirti",
    name: "სპირტი",
    id: 8057,
    subCatId: 8050,
  },
  {
    link: "liqiori",
    name: "ლიქიორი",
    id: 8058,
    subCatId: 8050,
  },
  {
    link: "sxva",
    name: "სხვა",
    id: 8059,
    subCatId: 8050,
  },
  {
    link: "bio-sasuqi",
    name: "ბიო სასუქი",
    id: 9051,
    subCatId: 9050,
  },
  {
    link: "organuli-sasuqi",
    name: "ორგანული სასუქი",
    id: 9052,
    subCatId: 9050,
  },
  {
    link: "mineraluri-sasuqi",
    name: "მინერალური სასუქი",
    id: 9053,
    subCatId: 9050,
  },
  {
    link: "universaluri-sasuqi",
    name: "უნივერსალური სასუქი",
    id: 9054,
    subCatId: 9050,
  },
  {
    link: "pesticidi",
    name: "პესტიციდი",
    id: 9055,
    subCatId: 9050,
  },
  {
    link: "stimulatori",
    name: "სტიმულატორი",
    id: 9056,
    subCatId: 9050,
  },
  {
    link: "komposti",
    name: "კომპოსტი",
    id: 9057,
    subCatId: 9050,
  },
  {
    link: "sxva",
    name: "სხვა",
    id: 9058,
    subCatId: 9050,
  },
  {
    link: "baRis-movlis-iaraRi",
    name: "ბაღის მოვლის იარაღი",
    id: 1051,
    subCatId: 1050,
  },
  {
    link: "irigacia",
    name: "ირიგაცია",
    id: 1052,
    subCatId: 1050,
  },
  {
    link: "agro-teqnika",
    name: "აგრო ტექნიკა",
    id: 1053,
    subCatId: 1050,
  },
  {
    link: "traqtori",
    name: "ტრაქტორი",
    id: 1054,
    subCatId: 1050,
  },
  {
    link: "motobloki",
    name: "მოტობლოკი",
    id: 1055,
    subCatId: 1050,
  },
  {
    link: "meRvineoba",
    name: "მეღვინეობა",
    id: 1056,
    subCatId: 1050,
  },
  {
    link: "sxva",
    name: "სხვა",
    id: 1057,
    subCatId: 1050,
  },
  {
    name: "აგრო სერვისი",
    link: "agro-servisi",
    id: 11051,
    subCatId: 11050,
  },
  {
    name: "თივა",
    link: "Tiva",
    id: 11052,
    subCatId: 11050,
  },
  {
    name: "თევზაობა",
    link: "Tevzaoba",
    id: 11053,
    subCatId: 11050,
  },
  {
    name: "ნადირობა",
    link: "nadiroba",
    id: 11054,
    subCatId: 11050,
  },
  {
    name: "სხვა",
    link: "sxva",
    id: 11055,
    subCatId: 11050,
  },
];

export const MAIN_CATS_RANGE = [
  1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000,
];

export const SUB_CATS_RANGE = [
  1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650,
  1700, 1750, 1800, 1850, 1900, 1950, 2050, 2100, 2150, 2200, 2250, 2300, 2350,
  2400, 2450, 2500, 2550, 2600, 2650, 2700, 2750, 2800, 2850, 2900, 2950, 3050,
  3100, 3150, 3200, 3250, 3300, 3350, 3400, 3450, 3500, 3550, 3600, 3650, 3700,
  3750, 3800, 3850, 3900, 3950, 4050, 4100, 4150, 4200, 4250, 4300, 4350, 4400,
  4450, 4500, 4550, 4600, 4650, 4700, 4750, 4800, 4850, 4900, 4950, 5050, 5100,
  5150, 5200, 5250, 5300, 5350, 5400, 5450, 5500, 5550, 5600, 5650, 5700, 5750,
  5800, 5850, 5900, 5950, 6050, 6100, 6150, 6200, 6250, 6300, 6350, 6400, 6450,
  6500, 6550, 6600, 6650, 6700, 6750, 6800, 6850, 6900, 6950, 7050, 7100, 7150,
  7200, 7250, 7300, 7350, 7400, 7450, 7500, 7550, 7600, 7650, 7700, 7750, 7800,
  7850, 7900, 7950, 8050, 8100, 8150, 8200, 8250, 8300, 8350, 8400, 8450, 8500,
  8550, 8600, 8650, 8700, 8750, 8800, 8850, 8900, 8950, 9050, 9100, 9150, 9200,
  9250, 9300, 9350, 9400, 9450, 9500, 9550, 9600, 9650, 9700, 9750, 9800, 9850,
  9900, 9950, 10050, 10100, 10150, 10200, 10250, 10300, 10350, 10400, 10450,
  10500, 10550, 10600, 10650, 10700, 10750, 10800, 10850, 10900, 10950, 11050,
  11100, 11150, 11200, 11250, 11300, 11350, 11400, 11450, 11500, 11550, 11600,
  11650, 11700, 11750, 11800, 11850, 11900, 11950,
];

// const getCatType = (catId) => {
//   if (MAIN_CATS_RANGE.includes(catId)) return "mainCat";
//   if (SUB_CATS_RANGE.includes(catId)) return "subCat";
//   return "cat";
// };

// const calcMainCatIdFromSubCatId = (subCatId) => {
//   // finds subCats parent mainCat and returns mainCats id
//   const index = Math.floor((subCatId - 1050) / 1000);
//   return MAIN_CATS_RANGE[index];
// };

// const findMainCatIndex = (catId) => {
//   return CATEGORIES.findIndex((cat) => cat.id === catId);
// };

// const getMainCat = (catId) => {
//   const mainCatIndex = findMainCatIndex(catId);
//   return {
//     name: CATEGORIES[mainCatIndex].name,
//     link: CATEGORIES[mainCatIndex].link,
//   };
// };

// const getSubCat = (catId) => {
//   const mainCatId = calcMainCatIdFromSubCatId(catId);
//   const mainCatIndex = findMainCatIndex(mainCatId);
//   const tempSubCat = CATEGORIES[mainCatIndex].subCategories.find(
//     (cat) => cat.id === catId,
//   );
//   return {
//     mainCat: {
//       name: CATEGORIES[mainCatIndex].name,
//       link: CATEGORIES[mainCatIndex].link,
//     },
//     subCat: {},
//   };
// };

// export const getBreadCrumbs = (catId) => {
//   const catType = getCatType(catId);
//   let breadCrumbs;
//   if (catType === "mainCat") {
//     breadCrumbs = {
//       mainCat: getMainCat(catId),
//     };
//   } else if (catType === "subCat") {
//   } else if (catType === "cat") {
//   }
//   console.log(breadCrumbs);
// };

// getBreadCrumbs(2000);
