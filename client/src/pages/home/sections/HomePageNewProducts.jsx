import ListingsCarousel from "@/components/ListingsCarousel";
import { cn } from "@/lib/utils";

const listings = [
  {
    id: 1,
    img: "https://example.com/image1.jpg",
    title: "ორგანიკური მატიანი თხელიანი",
    city: "თბილისი",
    review: Math.floor(Math.random() * 5) + 1,
    description:
      "საოჯახო ადგილის წინასწარ გაზიარება გავლილი ინდივიდუალური მატიანი თხელიანი.",
    author: {
      firstName: "ალისა",
      phoneNumber: "599-55-66-44",
    },
  },
  {
    id: 2,
    img: "https://example.com/image2.jpg",
    title: "თიხილის უმაღლესი პორცია",
    city: "ქუთაისი",
    review: Math.floor(Math.random() * 5) + 1,
    description:
      "სურვილებისა და საკუთარი სტანდარტების გაზიარება მოწმობილია ჩვენი მაღაზიიდან.",
    author: {
      firstName: "ბრენდა",
      phoneNumber: "599-55-66-44",
    },
    isFavorite: true,
  },
  {
    id: 3,
    img: "https://example.com/image3.jpg",
    title: "ორგანიკური მწვანე ფეხი",
    city: "ბათუმი",
    review: Math.floor(Math.random() * 5) + 1,
    description:
      "სერთიფიკატით დამტენილი ორგანიკური მწვანე ფეხი, რომელიც წესების შესახებ ეცადება გადასასვლელად.",
    author: {
      firstName: "გიორგი",
      phoneNumber: "599-55-66-44",
    },
  },
  {
    id: 4,
    img: "https://example.com/image4.jpg",
    title: "მწვანე სახლი გურიასი",
    city: "გურია",
    review: Math.floor(Math.random() * 5) + 1,
    description:
      "მიზნალიერებული მწვანე სახლები, რომელიც სადაციანების და გამზირის თვალწინაა.",
    author: {
      firstName: "დათო",
      phoneNumber: "599-55-66-44",
    },
  },
  {
    id: 5,
    img: "https://example.com/image5.jpg",
    title: "ღია ადგილში დაცული არწივის ხე",
    city: "თელავი",
    review: Math.floor(Math.random() * 5) + 1,
    description: "შემცველი პროდუქტების მსხვილი შემოტანა და მოძრაობა.",
    author: {
      firstName: "ელენე",
      phoneNumber: "599-55-66-44",
    },
  },
  {
    id: 6,
    img: "https://example.com/image6.jpg",
    title: "სამუშაო თემათური პროდუქტები",
    city: "ბათუმი",
    review: Math.floor(Math.random() * 5) + 1,
    description: "პროდუქტების აღდგენა და მათი დაცვა და გადაგზავნა.",
    author: {
      firstName: "ფრანგი",
      phoneNumber: "599-55-66-44",
    },
  },
  {
    id: 7,
    img: "https://example.com/image7.jpg",
    title: "ბარნის ღია ადგილში დაცული არწივის ხე",
    city: "გურია",
    review: Math.floor(Math.random() * 5) + 1,
    description: "შემცველი პროდუქტების მსხვილი შემოტანა და მოძრაობა.",
    author: {
      firstName: "გრიგოლ",
      phoneNumber: "599-55-66-44",
    },
  },
  {
    id: 8,
    img: "https://example.com/image8.jpg",
    title: "დახურული ბარათი",
    city: "თბილისი",
    review: Math.floor(Math.random() * 5) + 1,
    description: "უმაღლესი ხარისხის პროდუქტების გამოყენება.",
    author: {
      firstName: "ჰენრი",
      phoneNumber: "599-55-66-44",
    },
  },
  {
    id: 9,
    img: "https://example.com/image9.jpg",
    title: "ხელოსნობის ნაბიჯები",
    city: "თელავი",
    review: Math.floor(Math.random() * 5) + 1,
    description: "გადასვლა საგემოსათვის, მორეული გზების შექმნა.",
    author: {
      firstName: "ირაკლი",
      phoneNumber: "599-55-66-44",
    },
  },
  {
    id: 10,
    img: "https://example.com/image10.jpg",
    title: "სამეფო ხილის თაფლის მომსახურება",
    city: "თბილისი",
    review: Math.floor(Math.random() * 5) + 1,
    description: "მოძრაობა და გადასვლა საგემოსათვის, რაც გამოიწვევს შექმნას.",
    author: {
      firstName: "ჯაკო",
      phoneNumber: "599-55-66-44",
    },
  },
];

const HomePageNewProducts = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <ListingsCarousel listings={listings} />
    </div>
  );
};
export default HomePageNewProducts;
