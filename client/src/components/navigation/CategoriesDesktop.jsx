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
    ],
  },
];

const CategoriesDesktop = () => {
  return (
    <>
      <Tabs defaultValue="ცხოველები და ფრინველები">
        <TabsList>
          {CATEGORIES.map((e) => (
            <TabsTrigger key={e.mainCat} value={e.mainCat}>
              <img src={e.icon} className="h-auto w-10" />
              {e.mainCat}
            </TabsTrigger>
          ))}
        </TabsList>
        {CATEGORIES.map((e) => (
          <TabsContent key={e.mainCat} value={e.mainCat}>
            <Link
              to={e.link}
              className="mb-4 flex items-center gap-x-4 border-b-2 border-primary-light pb-2 text-2xl font-semibold transition-colors hover:text-action"
            >
              {e.mainCat}
            </Link>
            <ul className="flex flex-wrap gap-20">
              {e.subCats.map((subCat) => (
                <li key={subCat.subCatName} className="flex flex-col">
                  <Link className="mb-4 text-lg font-medium hover:text-primary">
                    {subCat.subCatName}
                  </Link>
                  <ul className="flex flex-col gap-y-4">
                    {subCat.subCatItems.map((item) => (
                      <li
                        key={item.name}
                        className="border-primary pl-2 hover:border-l-2 hover:pl-[6px]"
                      >
                        <Link to={item.link} className="hover:text-primary">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
};
export default CategoriesDesktop;
