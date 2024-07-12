import PriceInput from "./PriceInput";

const CatalogPagePrice = () => {
  return (
    <div className="flex items-center overflow-hidden rounded-md border">
      <PriceInput variant="from" placeholder="დან" />
      <div className="h-6 w-1 bg-border"></div>
      <PriceInput variant="to" placeholder="მდე" />
    </div>
  );
};
export default CatalogPagePrice;
