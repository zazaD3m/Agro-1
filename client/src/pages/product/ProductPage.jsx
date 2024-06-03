import ProductPageProductDetails from "./sections/ProductPageProductDetails";
import ProductPageSimilarProducts from "./sections/ProductPageSimilarProducts";

const ProductPage = () => {
  return (
    <>
      <ProductPageProductDetails className="container px-2 py-8 sm:px-4" />
      <section className="bg-accent">
        <ProductPageSimilarProducts className="container px-2 pb-16 pt-8 sm:px-4" />
      </section>
    </>
  );
};
export default ProductPage;
