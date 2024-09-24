import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Facebook, Instagram } from "lucide-react";

const SECONDARY_NAV_ITEMS = [
  { text: "ჩვენ შესახებ", link: "about-us" },
  { text: "ბლოგი", link: "blog" },
  { text: "დახმარება", link: "info/faq" },
  {
    text: "დაგვიკავშირდით",
    link: "info/contact",
  },
];

const SOCIAL_LINKS = [
  {
    icon: <Facebook className="size-5" />,
    link: "/",
  },
  {
    icon: <Instagram className="size-5" />,
    link: "/",
  },
];

const HeaderDesktopTop = () => {
  return (
    <div className="container flex justify-between pr-1">
      <ul className="flex h-10 items-center divide-x">
        {SECONDARY_NAV_ITEMS.map((item, i) => (
          <li key={i}>
            <Button
              asChild
              variant="link"
              className="text-xs leading-3 tracking-wider"
            >
              <Link to={item.link}>{item.text}</Link>
            </Button>
          </li>
        ))}
      </ul>
      <ul className="flex h-10 items-center justify-end">
        {SOCIAL_LINKS.map((item, i) => (
          <li key={i}>
            <Button
              size="icon"
              variant="ghost"
              asChild
              className="cursor-pointer text-primary hover:text-action"
            >
              <a to={item.link}>{item.icon}</a>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default HeaderDesktopTop;
