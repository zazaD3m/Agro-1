export const BIRTH_YEARS = [
  1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962,
  1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975,
  1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988,
  1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,
  2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
];

export const listings = [
  {
    id: 1,
    img: "https://example.com/image1.jpg",
    title: "ორგანიკური მატიანი თხელიანი",
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
    img: "https://example.com/image2.jpg",
    title: "თიხილის უმაღლესი პორცია",
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
    img: "https://example.com/image3.jpg",
    title: "ორგანიკური მწვანე ფეხი",
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
    img: "https://example.com/image4.jpg",
    title: "მწვანე სახლი გურიასი",
    city: "გურია",
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
    img: "https://example.com/image5.jpg",
    title: "ღია ადგილში დაცული არწივის ხე",
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
    img: "https://example.com/image6.jpg",
    title: "სამუშაო თემათური პროდუქტები",
    city: "ბათუმი",
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
    img: "https://example.com/image7.jpg",
    title: "ბარნის ღია ადგილში დაცული არწივის ხე",
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
    img: "https://example.com/image8.jpg",
    title: "დახურული ბარათი",
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
    img: "https://example.com/image9.jpg",
    title: "ხელოსნობის ნაბიჯები",
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
    img: "https://example.com/image10.jpg",
    title: "სამეფო ხილის თაფლის მომსახურება",
    city: "თბილისი",
    review: Math.floor(Math.random() * 5) + 1,
    price: Math.floor(Math.random() * 100) + 1,
    description: "მოძრაობა და გადასვლა საგემოსათვის, რაც გამოიწვევს შექმნას.",
    author: {
      firstName: "ჯაკო",
      phoneNumber: "919-55-66-44",
    },
  },
];
