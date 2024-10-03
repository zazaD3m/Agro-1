import { products } from "@/constants/constants";
import CatalogPageProductCard from "../components/CatalogPageProductCard";
import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectFilter } from "@/features/filter/filterSlice";
import { useParams } from "react-router-dom";
import { getCatType } from "@/data/categories-data";
import { cn } from "@/lib/utils";
import { selectCatalogViewType } from "@/features/site/sitePersistedSlice";
import useWindowSize from "@/hooks/useWindowSize";
import FullSizeLoader from "@/components/FullSizeLoader";

const CatalogPageProducts = memo(() => {
  const [render, setRender] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setRender(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);
  const { isMobile, isDesktop } = useWindowSize();
  const { SellerType, PriceFrom, PriceTo, LocId, SortId } =
    useSelector(selectFilter);
  // const totalProductCount = useSelector(selectTotalProductCount);
  const { catId } = useParams();
  const viewType = useSelector(selectCatalogViewType);

  let catType = catId ? getCatType(Number(catId)) : null;

  const filteredProducts = products
    .filter((l) => {
      if (catType === "mainCat" && l.MainCatId !== Number(catId)) {
        return false;
      }
      if (catType === "subCat" && l.SubCatId !== Number(catId)) {
        return false;
      }
      if (catType === "cat" && l.CatId !== Number(catId)) {
        return false;
      }
      if (SellerType !== 1 && SellerType !== l.SellerType) {
        return false;
      }
      if (LocId !== 1 && LocId !== l.LocId) {
        return false;
      }
      if (PriceFrom && parseInt(PriceFrom) > l.price) {
        return false;
      }
      if (PriceTo && parseInt(PriceTo) < l.price) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (SortId === 3) {
        return b.price - a.price;
      }
      if (SortId === 4) {
        return a.price - b.price;
      }
    });

  return render ? (
    <section
      className={cn(
        "grid auto-rows-fr grid-cols-1 gap-x-2 gap-y-4 sm:gap-x-4 sm:gap-y-8",
        viewType === "grid" && "xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4",
        viewType === "list" && "gap-y-2 sm:gap-y-4",
      )}
    >
      {filteredProducts.map((l) => (
        <CatalogPageProductCard
          key={l.id}
          isMobile={isMobile}
          isDesktop={isDesktop}
          product={l}
          viewType={viewType}
        />
      ))}
    </section>
  ) : (
    <FullSizeLoader />
  );
});

CatalogPageProducts.displayName = "CatalogPageProducts";
export default CatalogPageProducts;
