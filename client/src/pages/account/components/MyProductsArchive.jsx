import { useLayoutEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const MyProductsArchive = () => {
  const { products } = useOutletContext();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (products.length === 0) {
      navigate("/account/my-products", { replace: true });
    }
  }, [products]);

  return <div>MyProductsArchive</div>;
};
export default MyProductsArchive;
