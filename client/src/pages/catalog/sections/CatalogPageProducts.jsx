import { listings } from "@/constants/constants";
import CatalogPageListingCard from "../components/CatalogPageListingCard";
import { useSearchParams } from "react-router-dom";

const CatalogPageProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const cityFilter = searchParams.get("city");

  const filteredListings = cityFilter
    ? listings().filter((listing) => listing.city === cityFilter)
    : listings();

  return (
    <section className="grid auto-rows-fr gap-4 gap-y-8 lg:grid-cols-3 xl:grid-cols-4">
      {filteredListings.map((l) => (
        <CatalogPageListingCard key={l.id} listing={l} className="shadow-sm" />
      ))}
    </section>
  );
};
export default CatalogPageProducts;
