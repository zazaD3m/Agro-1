import useWindowSize from "@/hooks/useWindowSize";
import { MAIN_CATEGORIES } from "./categories-data";
import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const { width } = useWindowSize();

  return (
    <footer className="bg-background-green pb-16 pt-8 lg:pb-0">
      <div className="container px-2 lg:px-4">
        {width >= 1024 && (
          <div className="flex flex-wrap gap-y-16 pb-6">
            <div className="basis-1/4">
              <h2 className="mb-6 font-medium">დახმარება</h2>
              <ul className="flex flex-col gap-y-4 text-xs">
                <li>
                  <Link
                    to="/info/add-product"
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
                    href="tel:(032) 212 53 17"
                    className="opacity-80 hover:opacity-100"
                  >
                    (032) 212 53 17
                  </a>
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
              <div className="flex gap-x-4 pt-6">
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
            </div>
            <div className="basis-3/4">
              <h2 className="mb-6 font-medium">კატეგორიები</h2>
              <ul className="grid grid-cols-3 gap-y-4 text-xs ">
                {MAIN_CATEGORIES.map((cat) => (
                  <li key={cat.name}>
                    <Link
                      to={"/catalog/" + cat.link}
                      className="opacity-80 hover:opacity-100"
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {/* {width < 1024 && <div></div>} */}
        <div className="flex flex-col gap-x-6 gap-y-4 border-y border-black/10 py-3 text-sm lg:flex-row">
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
};
export default Footer;
