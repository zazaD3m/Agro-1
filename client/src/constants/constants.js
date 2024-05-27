export const BIRTH_YEARS = [
  1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962,
  1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975,
  1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988,
  1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,
  2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
];

export const listings = () => {
  return [
    {
      id: 1,
      img: "product_1.webp",
      title: "კვიპაროსი და ტუია ცოცხალი ღობის გასაშენებლად",
      city: "თბილისი",
      review: Math.floor(Math.random() * 5) + 1,
      price: Math.floor(Math.random() * 100) + 1,
      description:
        "საოჯახო ადგილის წინასწარ გაზიარება გავლილი ინდივიდუალური მატიანი თხელიანი.",
      author: {
        firstName: "გურანდუხტი",
        phoneNumber: "919-55-66-44",
      },
    },
    {
      id: 2,
      img: "product_2.webp",
      title: "ალოე ვერა",
      city: "ქუთაისი",
      review: Math.floor(Math.random() * 5) + 1,
      price: Math.floor(Math.random() * 100) + 1,
      description:
        "სურვილებისა და საკუთარი სტანდარტების გაზიარება მოწმობილია ჩვენი მაღაზიიდან.",
      author: {
        firstName: "ბრენდა",
        phoneNumber: "919-55-66-44",
      },
      isFavorite: true,
    },
    {
      id: 3,
      img: "product_3.webp",
      title: "ბარაქის ხე",
      city: "ბათუმი",
      review: Math.floor(Math.random() * 5) + 1,
      price: Math.floor(Math.random() * 100) + 1,
      description:
        "სერთიფიკატით დამტენილი ორგანიკური მწვანე ფეხი, რომელიც წესების შესახებ ეცადება გადასასვლელად.",
      author: {
        firstName: "გიორგი",
        phoneNumber: "919-55-66-44",
      },
    },
    {
      id: 4,
      img: "product_4.webp",
      title: "ნაძვის ნერგები",
      city: "მცხეთა",
      review: Math.floor(Math.random() * 5) + 1,
      price: Math.floor(Math.random() * 100) + 1,
      description:
        "მიზნალიერებული მწვანე სახლები, რომელიც სადაციანების და გამზირის თვალწინაა.",
      author: {
        firstName: "დათო",
        phoneNumber: "919-55-66-44",
      },
    },
    {
      id: 5,
      img: "product_5.webp",
      title: "მცენარეს ქოთანი",
      city: "თელავი",
      review: Math.floor(Math.random() * 5) + 1,
      price: Math.floor(Math.random() * 100) + 1,
      description: "შემცველი პროდუქტების მსხვილი შემოტანა და მოძრაობა.",
      author: {
        firstName: "ელენე",
        phoneNumber: "919-55-66-44",
      },
    },
    {
      id: 6,
      img: "product_6.webp",
      title: "სიმინდის სათესლე მასალა",
      city: "ქუთაისი",
      review: Math.floor(Math.random() * 5) + 1,
      price: Math.floor(Math.random() * 100) + 1,
      description: "პროდუქტების აღდგენა და მათი დაცვა და გადაგზავნა.",
      author: {
        firstName: "ფრანგი",
        phoneNumber: "919-55-66-44",
      },
    },
    {
      id: 7,
      img: "product_7.webp",
      title: "ხორბალი",
      city: "გურია",
      review: Math.floor(Math.random() * 5) + 1,
      price: Math.floor(Math.random() * 100) + 1,
      description: "შემცველი პროდუქტების მსხვილი შემოტანა და მოძრაობა.",
      author: {
        firstName: "გრიგოლ",
        phoneNumber: "919-55-66-44",
      },
    },
    {
      id: 8,
      img: "product_8.webp",
      title: "ღვინის 500 ლიტრიანი ქვევრი",
      city: "თბილისი",
      review: Math.floor(Math.random() * 5) + 1,
      price: Math.floor(Math.random() * 100) + 1,
      description: "უმაღლესი ხარისხის პროდუქტების გამოყენება.",
      author: {
        firstName: "ჰენრი",
        phoneNumber: "919-55-66-44",
      },
    },
    {
      id: 9,
      img: "product_9.webp",
      title: "წყლის ტუმბო/პომპა",
      city: "თელავი",
      review: Math.floor(Math.random() * 5) + 1,
      price: Math.floor(Math.random() * 100) + 1,
      description: "გადასვლა საგემოსათვის, მორეული გზების შექმნა.",
      author: {
        firstName: "ირაკლი",
        phoneNumber: "919-55-66-44",
      },
    },
    {
      id: 10,
      img: "product_10.webp",
      title: "სახარე ხბოები",
      city: "სამეგრელო",
      review: Math.floor(Math.random() * 5) + 1,
      price: Math.floor(Math.random() * 100) + 1,
      description: "მოძრაობა და გადასვლა საგემოსათვის, რაც გამოიწვევს შექმნას.",
      author: {
        firstName: "ჯაკო",
        phoneNumber: "919-55-66-44",
      },
    },
    {
      id: 11,
      img: "product_11.webp",
      title: "ლიმონისფერი კოხინხინი",
      city: "სამეგრელო",
      review: Math.floor(Math.random() * 5) + 1,
      price: Math.floor(Math.random() * 100) + 1,
      description: "მოძრაობა და გადასვლა საგემოსათვის, რაც გამოიწვევს შექმნას.",
      author: {
        firstName: "ჯაკო",
        phoneNumber: "919-55-66-44",
      },
    },
    {
      id: 12,
      img: "product_12.webp",
      title: "ბეკონის გოჭები",
      city: "სამეგრელო",
      review: Math.floor(Math.random() * 5) + 1,
      price: Math.floor(Math.random() * 100) + 1,
      description: "მოძრაობა და გადასვლა საგემოსათვის, რაც გამოიწვევს შექმნას.",
      author: {
        firstName: "ჯაკო",
        phoneNumber: "919-55-66-44",
      },
    },
  ].sort(() => Math.random() - 0.5);
};

export const blogPosts = [
  {
    title: "5 რჩევა სიმინდის თესვისთვის",
    description: "5 რამ, რაც სიმინდის თესვამდე, აუცილებლად უნდა გაითვალისწინოთ",
    createdAt: new Date(),
    img: "blog_1.webp",
  },
  {
    title: "ნიადაგის ნიმუშის აღების ინსტრუქცია საანალიზოდ",
    description:
      "ანალიზის შედეგებისა და რეკომენდაციების სანდოობა, პირველ რიგში, დამოკიდებულია პირველ ეტაპზე, კერძოდ ნიმუშის აღებაზე. ნიმუშის აღება შეიძლება განვიხილოთ სამ მარტივ ეტაპად",
    createdAt: new Date(),
    img: "blog_2.webp",
  },
  {
    title: "არათანაბარი განაწილება - პივოტური სარწყავი სისტემები",
    description:
      "ირიგაციის სისტემის მოსაწყობად, თქვენ საკმაოდ დიდ ინვესტიციას იღებთ და მისი დანიშნულებაა, თქვენი ნაკვეთიდან მაქსიმალური ეკონომიკური შემოსავლები მიიღოთ. თუმცა",
    createdAt: new Date(),
    img: "blog_3.webp",
  },
  {
    title: "პესტიციდების დადებითი შედეგები",
    description:
      "მიწასთან მომუშავე ფერმერისა თუ გლეხის ყოველდღიური საქმიანობის უმთავრესი მიზანი უხვი და ჯანსაღი მოსავლის მიღებაა. სხვადასხვა კულტურის სიჯანსაღესა და მოსავლიანობას ხელს უშლის განსხვავებული დაავადებები და მავნებლები, მათთან საბრძოლველად კი ყველაზე ეფექტური გზა მცენარეთა დაცვის საშუალებების გამოყენებაა.",
    createdAt: new Date(),
    img: "blog_4.webp",
  },
  {
    title: "ჩაი ევროპის ბაზარზე (ექსპორტის გზამკვლევი)",
    description:
      "სურსათის უვნებლობის და გარემოს დაცვის მოთხოვნებთან შესაბამისობაში მყოფი, სერტიფიცირებული ჩაის წილი",
    createdAt: new Date(),
    img: "blog_5.webp",
  },
  {
    title: "რა განსხვავებაა ჰიბრიდსა და გენმოდიფიცირებულს შორის?",
    description:
      "გაიგე რა განსხვავებაა ჰიბრიდულ და გენმოდიფიცირებულ სათერსლე მასალას შორის, გაეცანი ჩვენს ბლოგს ამ საკითხზე",
    createdAt: new Date(),
    img: "blog_6.webp",
  },
];
