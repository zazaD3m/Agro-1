import { listings } from "@/constants/constants";
import CatalogPageListingCard from "../components/CatalogPageListingCard";
import { useSearchParams } from "react-router-dom";
import { memo } from "react";
import { useSelector } from "react-redux";
import { selectCatalogFilter } from "@/features/site/siteSlice";

const CatalogPageProducts = memo(() => {
  // const [searchParams, setSearchParams] = useSearchParams();

  // const filters = {
  //   SortId: Number(searchParams.get("SortId")) ?? 1,
  // };

  const filters = useSelector(selectCatalogFilter);

  console.log("filters-", filters);

  const cityFilter = false;

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
});

CatalogPageProducts.displayName = "CatalogPageProducts";
export default CatalogPageProducts;
