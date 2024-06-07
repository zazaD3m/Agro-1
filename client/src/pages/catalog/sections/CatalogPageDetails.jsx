import { useSearchParams } from "react-router-dom";

const CatalogPageDetails = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const cityFilter = searchParams.get("city");

  // console.log(cityFilter);

  return <section className=""></section>;
};
export default CatalogPageDetails;
