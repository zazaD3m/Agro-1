import HomePageHero from "./sections/HomePageHero";
import HomePageNewProducts from "./sections/HomePageNewProducts";

const HomePage = () => {
  return (
    <>
      <section className="bg-background-green pb-8">
        <HomePageHero className="container px-2 lg:px-4" />
      </section>
      <section className="bg-background pb-8">
        <HomePageNewProducts className="container px-2 pt-8 lg:px-4" />
      </section>
    </>
  );
};
export default HomePage;
