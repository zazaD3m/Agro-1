import { blogPosts } from "@/constants/constants";
import HomePageBlogCarousel from "../components/HomePageBlogCarousel";
import { cn } from "@/lib/utils";

const HomePageBlogPosts = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <HomePageBlogCarousel blogs={blogPosts} />
    </div>
  );
};

export default HomePageBlogPosts;
