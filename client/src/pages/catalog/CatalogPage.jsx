import { useParams } from "react-router-dom";

const CatalogPage = () => {
  let params = useParams();
  return (
    <div>{params["*"] ? params["*"].split("/").pop() : "CatalogPage"}</div>
  );
};
export default CatalogPage;
