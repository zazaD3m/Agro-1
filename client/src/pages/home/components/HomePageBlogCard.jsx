import { getFullDate } from "@/lib/parseDate";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const HomePageBlogCard = ({ blog }) => {
  return (
    <div
      className={cn(
        "group relative h-full overflow-hidden rounded-md shadow-md transition-shadow hover:shadow-black/25",
      )}
    >
      <Link className="block" to={"/"}>
        <div className="aspect-[3/2] overflow-hidden">
          <img
            src={"hero-sidebar-1.webp"}
            className={cn(
              "size-full object-cover duration-300 ease-in group-hover:scale-110",
            )}
          />
        </div>
      </Link>
      <div className="rounded-md rounded-t-none border-2 border-t-0 p-4">
        <span className="mb-2 inline-block text-xs font-light">
          {getFullDate(blog.createdAt)}
        </span>
        <Link to={"/"}>
          <h1 className="mb-6 font-medium transition-opacity hover:opacity-80">
            {blog.title}
          </h1>
        </Link>
        <p className="clamp mb-8 line-clamp-4 text-sm font-light">
          {blog.description}
        </p>
        <Link
          className="w-min text-nowrap text-primary transition-opacity hover:opacity-80"
          to={"/"}
        >
          კითხვის გაგრძელება
        </Link>
      </div>
    </div>
  );
};

export default HomePageBlogCard;
