import Seo from "@/components/Seo";
import HomePageBlogPosts from "./sections/HomePageBlogPosts";
import HomePageFeaturedProducts from "./sections/HomePageFeaturedProducts";
import HomePageHero from "./sections/HomePageHero";
import HomePageNewProducts from "./sections/HomePageNewProducts";
import HomePageSiteInfo from "./sections/HomePageSiteInfo";

const HomePage = () => {
  return (
    <>
      <Seo />
      <section className="bg-background-green pb-8">
        <HomePageHero className="container px-2 sm:px-4" />
      </section>
      <section className="bg-background pb-12 pt-8">
        <HomePageNewProducts className="container px-2 sm:px-4" />
      </section>
      <section className="bg-background py-12">
        <HomePageFeaturedProducts className="container px-2 sm:px-4" />
      </section>
      {/* <section className="bg-background-green py-8">
        <HomePageSiteInfo className="container px-2 sm:px-4" />
      </section> */}
      <section className="bg-background py-12">
        <HomePageBlogPosts className="container px-2 sm:px-4" />
      </section>
    </>
  );
};
export default HomePage;
