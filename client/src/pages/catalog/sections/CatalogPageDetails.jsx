import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router-dom";
import CatalogPageSort from "../components/CatalogPageSort";

const CatalogPageDetails = () => {
  // const [searchParams, setSearchParams] = useSearchParams();

  // const cityFilter = searchParams.get("city");

  // console.log(cityFilter);

  // const handleClick = () => {
  //   setSearchParams(
  //     (prev) => {
  //       prev.set("city", "tbilisi");
  //       return prev;
  //     },
  //     { preventScrollReset: true },
  //   );
  // };

  // const handleClick1 = () => {
  //   setSearchParams(
  //     (prev) => {
  //       prev.set("city", "tbilisi1");
  //       return prev;
  //     },
  //     { preventScrollReset: true },
  //   );
  // };

  // const handleReset = () => {
  //   setSearchParams({});
  // };

  return (
    <section className="flex">
      {/* <Button onClick={() => handleClick1()}>daachire1</Button>
      <Button onClick={() => handleReset()}>reset</Button> */}
      <CatalogPageSort />
    </section>
  );
};
export default CatalogPageDetails;
