import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { CATEGORIES, MAIN_CAT_IDS } from "@/data/categories-data";
import { memo } from "react";

const Footer = memo(() => {
  return (
    <footer className="bg-background-green pb-20 pt-8 lg:pb-0">
      <div className="container px-2 sm:px-4">
        <div className="hidden flex-wrap gap-y-16 lg:flex">
          <div className="basis-1/4">
            <h2 className="mb-6 font-medium">ნავიგაცია</h2>
            <ul className="flex flex-col gap-y-4 text-xs">
              <li>
                <Link
                  to="/info/faq/rogor-davamato-gancxadeba"
                  className="opacity-80 hover:opacity-100"
                >
                  განცხადების დამატების ინსტრუქცია
                </Link>
              </li>
              <li>
                <Link to="/info/faq" className="opacity-80 hover:opacity-100">
                  ხშირად დასმული კითხვები
                </Link>
              </li>
              <li>
                <Link
                  to="/info/contact"
                  className="opacity-80 hover:opacity-100"
                >
                  მესიჯის მიწერა
                </Link>
              </li>

              <li>
                <a
                  href="mailto:agroezo@gmail.com"
                  className="opacity-80 hover:opacity-100"
                >
                  agroezo@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="basis-3/4">
            <h2 className="mb-6 font-medium">კატეგორიები</h2>
            <ul className="grid grid-cols-3 gap-y-4 text-xs">
              {MAIN_CAT_IDS.map((id) => {
                const cat = CATEGORIES[id];
                return (
                  <li key={id}>
                    <Link
                      to={`/catalog/${id}/${cat.link}`}
                      className="opacity-80 hover:opacity-100"
                    >
                      {cat.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex gap-x-4 py-4 lg:py-6">
          <a
            target="_blank"
            rel="noreferrer"
            className="flex size-10 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
            href="https://www.facebook.com/agroezo.ge/"
          >
            <Facebook strokeWidth={0} className="size-5 fill-black" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="flex size-10 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
            href="https://www.instagram.com/agroezo.ge/"
          >
            <Instagram strokeWidth={2} className="size-5 text-black" />
          </a>
        </div>
        <Accordion type="multiple" className="lg:hidden">
          <AccordionItem value="დახმარება">
            <AccordionTrigger>დახმარება</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/info/add-product"
                    className="text-xs opacity-80 hover:opacity-100 sm:text-sm"
                  >
                    განცხადების დამატების ინსტრუქცია
                  </Link>
                </li>
                <li>
                  <Link
                    to="/info/faq"
                    className="text-xs opacity-80 hover:opacity-100 sm:text-sm"
                  >
                    ხშირად დასმული კითხვები
                  </Link>
                </li>
                <li>
                  <Link
                    to="/info/contact"
                    className="text-xs opacity-80 hover:opacity-100 sm:text-sm"
                  >
                    მესიჯის მიწერა
                  </Link>
                </li>
                <li>
                  <a
                    href="tel:(032) 212 53 17"
                    className="text-xs opacity-80 hover:opacity-100 sm:text-sm"
                  >
                    (032) 212 53 17
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:agroezo@gmail.com"
                    className="text-xs opacity-80 hover:opacity-100 sm:text-sm"
                  >
                    agroezo@gmail.com
                  </a>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="კატეგორიები">
            <AccordionTrigger>კატეგორიები</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-6">
                {MAIN_CAT_IDS.map((id) => {
                  const cat = CATEGORIES[id];
                  return (
                    <li key={id}>
                      <Link
                        to={`/catalog/${id}/${cat.link}`}
                        className="opacity-80 hover:opacity-100"
                      >
                        {cat.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex flex-col gap-x-6 gap-y-4 border-b border-black/10 py-3 text-xs sm:flex-row sm:text-sm lg:border-y">
          <Link
            to="/info/terms-of-use"
            className="underline underline-offset-2 opacity-80 hover:opacity-100"
          >
            წესები და პირობები
          </Link>
          <Link
            to="/info/privacy-policy"
            className="underline underline-offset-2 opacity-80 hover:opacity-100"
          >
            კონფიდენციალობის პოლიტიკა
          </Link>
        </div>
        <span className="block py-4 text-center text-xs">
          © 2024 ყველა უფლება დაცულია
        </span>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
export default Footer;
