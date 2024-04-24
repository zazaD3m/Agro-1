import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const CATEGORIES = [
  {
    mainCat: "ცხოველები და ფრინველები",
    icon: "meat.png",
    link: "/",
    subCats: [
      {
        subCatName: "ცხოველები",
        subCatItems: [
          {
            link: "/",
            name: "ღორი",
          },
          {
            link: "/",
            name: "ძროხა",
          },
          {
            link: "/",
            name: "ცხვარი",
          },
          {
            link: "/",
            name: "თხა",
          },
          {
            link: "/",
            name: "ცხენი",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "ფრინველები",
        subCatItems: [
          {
            link: "/",
            name: "ქათამი",
          },
          {
            link: "/",
            name: "ინდაური",
          },
          {
            link: "/",
            name: "იხვი",
          },
          {
            link: "/",
            name: "ბატი",
          },
          {
            link: "/",
            name: "მწყერი",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "შინაური ცხოველები",
        subCatItems: [
          {
            link: "/",
            name: "ძაღლი",
          },
          {
            link: "/",
            name: "კატა",
          },
          {
            link: "/",
            name: "ფრინველები",
          },
          {
            link: "/",
            name: "მღრნელები",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
    ],
  },
  {
    mainCat: "თევზი და ზღვისპროდუქტები",
    icon: "fish.png",
    link: "/",
    subCats: [
      {
        subCatName: "ზღვის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "ორაგული",
          },
          {
            link: "/",
            name: "სკუმბრია",
          },
          {
            link: "/",
            name: "ტუნა",
          },
          {
            link: "/",
            name: "ქაშაყი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "კეფალი",
          },
          {
            link: "/",
            name: "სარდინი",
          },
          {
            link: "/",
            name: "საირა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "მდინარის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "კალმახი",
          },
          {
            link: "/",
            name: "ზუთხი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "ქაშაპი",
          },
          {
            link: "/",
            name: "წვერა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "ტბის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "კობრი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "ამური",
          },
          {
            link: "/",
            name: "სქელშუბლა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "სხვა",
        link: "/",
        subCatItems: [
          {
            link: "/",
            name: "ხიზილალა",
          },
          {
            link: "/",
            name: "კიბორჩხალა მოლუსკები",
          },
          {
            link: "/",
            name: "მიდიები და ხამანწკები",
          },
          {
            link: "/",
            name: "რვაფეხა და ლობსტერი",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "სხვაasdads",
        link: "/",
        subCatItems: [
          {
            link: "/",
            name: "ხიზილალა",
          },
          {
            link: "/",
            name: "კიბორჩხალა მოლუსკები",
          },
          {
            link: "/",
            name: "მიდიები და ხამანწკები",
          },
          {
            link: "/",
            name: "რვაფეხა და ლობსტერი",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "აკჯსდგფალსჯფ",
        link: "/",
        subCatItems: [
          {
            link: "/",
            name: "ხიზილალა",
          },
          {
            link: "/",
            name: "კიბორჩხალა მოლუსკები",
          },
          {
            link: "/",
            name: "მიდიები და ხამანწკები",
          },
          {
            link: "/",
            name: "რვაფეხა და ლობსტერი",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "asdadsa",
        link: "/",
        subCatItems: [
          {
            link: "/",
            name: "ხიზილალა",
          },
          {
            link: "/",
            name: "კიბორჩხალა მოლუსკები",
          },
          {
            link: "/",
            name: "მიდიები და ხამანწკები",
          },
          {
            link: "/",
            name: "რვაფეხა და ლობსტერი",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "ასდადასდა",
        link: "/",
        subCatItems: [
          {
            link: "/",
            name: "ხიზილალა",
          },
          {
            link: "/",
            name: "კიბორჩხალა მოლუსკები",
          },
          {
            link: "/",
            name: "მიდიები და ხამანწკები",
          },
          {
            link: "/",
            name: "რვაფეხა და ლობსტერი",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "სდფფდს",
        link: "/",
        subCatItems: [
          {
            link: "/",
            name: "ხიზილალა",
          },
          {
            link: "/",
            name: "კიბორჩხალა მოლუსკები",
          },
          {
            link: "/",
            name: "მიდიები და ხამანწკები",
          },
          {
            link: "/",
            name: "რვაფეხა და ლობსტერი",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "ასდფს",
        link: "/",
        subCatItems: [
          {
            link: "/",
            name: "ხიზილალა",
          },
          {
            link: "/",
            name: "კიბორჩხალა მოლუსკები",
          },
          {
            link: "/",
            name: "მიდიები და ხამანწკები",
          },
          {
            link: "/",
            name: "რვაფეხა და ლობსტერი",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
    ],
  },
  {
    mainCat: "თევზი და ",
    icon: "fish.png",
    link: "/",
    subCats: [
      {
        subCatName: "ზღვის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "ორაგული",
          },
          {
            link: "/",
            name: "სკუმბრია",
          },
          {
            link: "/",
            name: "ტუნა",
          },
          {
            link: "/",
            name: "ქაშაყი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "კეფალი",
          },
          {
            link: "/",
            name: "სარდინი",
          },
          {
            link: "/",
            name: "საირა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "მდინარის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "კალმახი",
          },
          {
            link: "/",
            name: "ზუთხი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "ქაშაპი",
          },
          {
            link: "/",
            name: "წვერა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "ტბის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "კობრი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "ამური",
          },
          {
            link: "/",
            name: "სქელშუბლა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "სხვა",
        link: "/",
        subCatItems: [
          {
            link: "/",
            name: "ხიზილალა",
          },
          {
            link: "/",
            name: "კიბორჩხალა მოლუსკები",
          },
          {
            link: "/",
            name: "მიდიები და ხამანწკები",
          },
          {
            link: "/",
            name: "რვაფეხა და ლობსტერი",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
    ],
  },
  {
    mainCat: "თევზი  ",
    icon: "fish.png",
    link: "/",
    subCats: [
      {
        subCatName: "ზღვის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "ორაგული",
          },
          {
            link: "/",
            name: "სკუმბრია",
          },
          {
            link: "/",
            name: "ტუნა",
          },
          {
            link: "/",
            name: "ქაშაყი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "კეფალი",
          },
          {
            link: "/",
            name: "სარდინი",
          },
          {
            link: "/",
            name: "საირა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "მდინარის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "კალმახი",
          },
          {
            link: "/",
            name: "ზუთხი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "ქაშაპი",
          },
          {
            link: "/",
            name: "წვერა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "ტბის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "კობრი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "ამური",
          },
          {
            link: "/",
            name: "სქელშუბლა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "სხვა",
        link: "/",
        subCatItems: [
          {
            link: "/",
            name: "ხიზილალა",
          },
          {
            link: "/",
            name: "კიბორჩხალა მოლუსკები",
          },
          {
            link: "/",
            name: "მიდიები და ხამანწკები",
          },
          {
            link: "/",
            name: "რვაფეხა და ლობსტერი",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
    ],
  },
  {
    mainCat: "ლჯფჰლასკ  ",
    icon: "fish.png",
    link: "/",
    subCats: [
      {
        subCatName: "ზღვის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "ორაგული",
          },
          {
            link: "/",
            name: "სკუმბრია",
          },
          {
            link: "/",
            name: "ტუნა",
          },
          {
            link: "/",
            name: "ქაშაყი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "კეფალი",
          },
          {
            link: "/",
            name: "სარდინი",
          },
          {
            link: "/",
            name: "საირა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "მდინარის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "კალმახი",
          },
          {
            link: "/",
            name: "ზუთხი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "ქაშაპი",
          },
          {
            link: "/",
            name: "წვერა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "ტბის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "კობრი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "ამური",
          },
          {
            link: "/",
            name: "სქელშუბლა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "სხვა",
        link: "/",
        subCatItems: [
          {
            link: "/",
            name: "ხიზილალა",
          },
          {
            link: "/",
            name: "კიბორჩხალა მოლუსკები",
          },
          {
            link: "/",
            name: "მიდიები და ხამანწკები",
          },
          {
            link: "/",
            name: "რვაფეხა და ლობსტერი",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
    ],
  },
  {
    mainCat: "სდასაას  ",
    icon: "fish.png",
    link: "/",
    subCats: [
      {
        subCatName: "ზღვის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "ორაგული",
          },
          {
            link: "/",
            name: "სკუმბრია",
          },
          {
            link: "/",
            name: "ტუნა",
          },
          {
            link: "/",
            name: "ქაშაყი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "კეფალი",
          },
          {
            link: "/",
            name: "სარდინი",
          },
          {
            link: "/",
            name: "საირა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "მდინარის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "კალმახი",
          },
          {
            link: "/",
            name: "ზუთხი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "ქაშაპი",
          },
          {
            link: "/",
            name: "წვერა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "ტბის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "კობრი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "ამური",
          },
          {
            link: "/",
            name: "სქელშუბლა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "სხვა",
        link: "/",
        subCatItems: [
          {
            link: "/",
            name: "ხიზილალა",
          },
          {
            link: "/",
            name: "კიბორჩხალა მოლუსკები",
          },
          {
            link: "/",
            name: "მიდიები და ხამანწკები",
          },
          {
            link: "/",
            name: "რვაფეხა და ლობსტერი",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
    ],
  },
  {
    mainCat: "ასდად  ",
    icon: "fish.png",
    link: "/",
    subCats: [
      {
        subCatName: "ზღვის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "ორაგული",
          },
          {
            link: "/",
            name: "სკუმბრია",
          },
          {
            link: "/",
            name: "ტუნა",
          },
          {
            link: "/",
            name: "ქაშაყი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "კეფალი",
          },
          {
            link: "/",
            name: "სარდინი",
          },
          {
            link: "/",
            name: "საირა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "მდინარის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "კალმახი",
          },
          {
            link: "/",
            name: "ზუთხი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "ქაშაპი",
          },
          {
            link: "/",
            name: "წვერა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "ტბის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "კობრი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "ამური",
          },
          {
            link: "/",
            name: "სქელშუბლა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "სხვა",
        link: "/",
        subCatItems: [
          {
            link: "/",
            name: "ხიზილალა",
          },
          {
            link: "/",
            name: "კიბორჩხალა მოლუსკები",
          },
          {
            link: "/",
            name: "მიდიები და ხამანწკები",
          },
          {
            link: "/",
            name: "რვაფეხა და ლობსტერი",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
    ],
  },
  {
    mainCat: "სდდდსდს  ",
    icon: "fish.png",
    link: "/",
    subCats: [
      {
        subCatName: "ზღვის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "ორაგული",
          },
          {
            link: "/",
            name: "სკუმბრია",
          },
          {
            link: "/",
            name: "ტუნა",
          },
          {
            link: "/",
            name: "ქაშაყი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "კეფალი",
          },
          {
            link: "/",
            name: "სარდინი",
          },
          {
            link: "/",
            name: "საირა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "მდინარის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "კალმახი",
          },
          {
            link: "/",
            name: "ზუთხი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "ქაშაპი",
          },
          {
            link: "/",
            name: "წვერა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "ტბის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "კობრი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "ამური",
          },
          {
            link: "/",
            name: "სქელშუბლა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "სხვა",
        link: "/",
        subCatItems: [
          {
            link: "/",
            name: "ხიზილალა",
          },
          {
            link: "/",
            name: "კიბორჩხალა მოლუსკები",
          },
          {
            link: "/",
            name: "მიდიები და ხამანწკები",
          },
          {
            link: "/",
            name: "რვაფეხა და ლობსტერი",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
    ],
  },
  {
    mainCat: "სფდფდდ  ",
    icon: "fish.png",
    link: "/",
    subCats: [
      {
        subCatName: "ზღვის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "ორაგული",
          },
          {
            link: "/",
            name: "სკუმბრია",
          },
          {
            link: "/",
            name: "ტუნა",
          },
          {
            link: "/",
            name: "ქაშაყი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "კეფალი",
          },
          {
            link: "/",
            name: "სარდინი",
          },
          {
            link: "/",
            name: "საირა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "მდინარის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "კალმახი",
          },
          {
            link: "/",
            name: "ზუთხი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "ქაშაპი",
          },
          {
            link: "/",
            name: "წვერა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "ტბის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "კობრი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "ამური",
          },
          {
            link: "/",
            name: "სქელშუბლა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "სხვა",
        link: "/",
        subCatItems: [
          {
            link: "/",
            name: "ხიზილალა",
          },
          {
            link: "/",
            name: "კიბორჩხალა მოლუსკები",
          },
          {
            link: "/",
            name: "მიდიები და ხამანწკები",
          },
          {
            link: "/",
            name: "რვაფეხა და ლობსტერი",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
    ],
  },
  {
    mainCat: "ასსდსადსადს  ",
    icon: "fish.png",
    link: "/",
    subCats: [
      {
        subCatName: "ზღვის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "ორაგული",
          },
          {
            link: "/",
            name: "სკუმბრია",
          },
          {
            link: "/",
            name: "ტუნა",
          },
          {
            link: "/",
            name: "ქაშაყი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "კეფალი",
          },
          {
            link: "/",
            name: "სარდინი",
          },
          {
            link: "/",
            name: "საირა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "მდინარის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "კალმახი",
          },
          {
            link: "/",
            name: "ზუთხი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "ქაშაპი",
          },
          {
            link: "/",
            name: "წვერა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "ტბის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "კობრი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "ამური",
          },
          {
            link: "/",
            name: "სქელშუბლა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "სხვა",
        link: "/",
        subCatItems: [
          {
            link: "/",
            name: "ხიზილალა",
          },
          {
            link: "/",
            name: "კიბორჩხალა მოლუსკები",
          },
          {
            link: "/",
            name: "მიდიები და ხამანწკები",
          },
          {
            link: "/",
            name: "რვაფეხა და ლობსტერი",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
    ],
  },
  {
    mainCat: "გფსგსდფს",
    icon: "fish.png",
    link: "/",
    subCats: [
      {
        subCatName: "ზღვის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "ორაგული",
          },
          {
            link: "/",
            name: "სკუმბრია",
          },
          {
            link: "/",
            name: "ტუნა",
          },
          {
            link: "/",
            name: "ქაშაყი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "კეფალი",
          },
          {
            link: "/",
            name: "სარდინი",
          },
          {
            link: "/",
            name: "საირა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "მდინარის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "კალმახი",
          },
          {
            link: "/",
            name: "ზუთხი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "ქაშაპი",
          },
          {
            link: "/",
            name: "წვერა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "ტბის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "კობრი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "ამური",
          },
          {
            link: "/",
            name: "სქელშუბლა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "სხვა",
        link: "/",
        subCatItems: [
          {
            link: "/",
            name: "ხიზილალა",
          },
          {
            link: "/",
            name: "კიბორჩხალა მოლუსკები",
          },
          {
            link: "/",
            name: "მიდიები და ხამანწკები",
          },
          {
            link: "/",
            name: "რვაფეხა და ლობსტერი",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
    ],
  },
  {
    mainCat: "დფსდფსდფს  ",
    icon: "fish.png",
    link: "/",
    subCats: [
      {
        subCatName: "ზღვის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "ორაგული",
          },
          {
            link: "/",
            name: "სკუმბრია",
          },
          {
            link: "/",
            name: "ტუნა",
          },
          {
            link: "/",
            name: "ქაშაყი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "კეფალი",
          },
          {
            link: "/",
            name: "სარდინი",
          },
          {
            link: "/",
            name: "საირა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "მდინარის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "კალმახი",
          },
          {
            link: "/",
            name: "ზუთხი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "ქაშაპი",
          },
          {
            link: "/",
            name: "წვერა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "ტბის თევზი",
        subCatItems: [
          {
            link: "/",
            name: "კობრი",
          },
          {
            link: "/",
            name: "ლოქო",
          },
          {
            link: "/",
            name: "ამური",
          },
          {
            link: "/",
            name: "სქელშუბლა",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
      {
        subCatName: "სხვა",
        link: "/",
        subCatItems: [
          {
            link: "/",
            name: "ხიზილალა",
          },
          {
            link: "/",
            name: "კიბორჩხალა მოლუსკები",
          },
          {
            link: "/",
            name: "მიდიები და ხამანწკები",
          },
          {
            link: "/",
            name: "რვაფეხა და ლობსტერი",
          },
          {
            link: "/",
            name: "სხვა",
          },
        ],
      },
    ],
  },
];

const CategoriesDesktop = () => {
  return (
    <>
      <Tabs defaultValue="ცხოველები და ფრინველები" className="h-full w-full">
        <div className="h-full min-w-80 shrink-0 border-r border-muted pb-10">
          <h2 className="cursor-default pb-4 text-xl font-semibold">
            კატეგორია
          </h2>
          <TabsList className="">
            {CATEGORIES.map((e, i) => (
              <TabsTrigger key={e.mainCat + i} value={e.mainCat}>
                <img src={e.icon} className="h-auto w-10" />
                {e.mainCat}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {CATEGORIES.map((e, i) => (
          <TabsContent
            key={e.mainCat + i}
            value={e.mainCat}
            className="pb-12 pr-2"
          >
            <div className="mb-4 block w-full border-b-2 border-primary-light pb-2 text-xl font-semibold transition-colors ">
              <Link to={e.link} className="hover:text-action">
                {e.mainCat}
              </Link>
            </div>
            <div className="h-full overflow-y-auto">
              <ul className="flex flex-wrap gap-x-16 gap-y-8 ">
                {e.subCats.map((subCat, i) => (
                  <li key={subCat.subCatName + i} className="space-y-4">
                    <Link className=" font-semibold hover:text-primary">
                      {subCat.subCatName}
                    </Link>
                    <ul className="space-y-3">
                      {subCat.subCatItems.map((item, i) => (
                        <li
                          key={item.name + i}
                          className="border-primary pl-2 hover:border-l-2 hover:pl-1.5"
                        >
                          <Link
                            to={item.link}
                            className="text-sm hover:text-primary"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
};
export default CategoriesDesktop;
