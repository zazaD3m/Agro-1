import HomePageFeaturedProducts from "./sections/HomePageFeaturedProducts";
import HomePageHero from "./sections/HomePageHero";
import HomePageNewProducts from "./sections/HomePageNewProducts";
import HomePageSiteInfo from "./sections/HomePageSiteInfo";
import HomePageSiteStats from "./sections/HomePageSiteStats";
import HomePageTest from "./sections/HomePageTest";

const HomePage = () => {
  return (
    <>
      <section className="bg-background-green pb-8">
        <HomePageHero className="container px-2 lg:px-4" />
      </section>
      <section className="bg-background pb-12 pt-8">
        <HomePageNewProducts className="container px-2 lg:px-4" />
      </section>
      <section className="bg-background-green py-8">
        <HomePageSiteStats className="container px-2 lg:px-4" />
      </section>
      <section className="bg-background py-12">
        <HomePageFeaturedProducts className="container px-2 lg:px-4" />
      </section>
      <section className="bg-background-green py-8">
        <HomePageSiteInfo className="container px-2 lg:px-4" />
      </section>
      <section className="bg-background pb-8 pt-12">
        <HomePageTest />
      </section>
    </>
  );
};
export default HomePage;
