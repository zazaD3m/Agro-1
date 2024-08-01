import { Helmet } from "react-helmet-async";

const Seo = ({ title = "", description = "agroezo", type = "website" }) => {
  return (
    <Helmet prioritizeSeoTags>
      <title>
        {title
          ? title + " | Agroezo - ყიდვა, გაყიდვა, აგრო საქონელი"
          : "აგრო საქონლის ყიდვა, გაყიდვა, განცხადებები | Agroezo - ყიდვა, გაყიდვა, აგრო საქონელი"}
      </title>
      <meta
        name="description"
        lang="ka"
        content={description + " | აგრო საქონლის ყიდვა, გაყიდვა, განცხადებები."}
      />
      <meta property="og:type" lang="ka" content={type} />
      <meta
        property="og:title"
        lang="ka"
        content={title + " | Agroezo - ყიდვა, გაყიდვა, აგრო საქონელი"}
      />
      <meta
        property="og:description"
        lang="ka"
        content={description + " | აგრო საქონელის ყიდვა, გაყიდვა."}
      />
      <meta name="twitter:card" lang="ka" content={type} />
      <meta
        name="twitter:title"
        lang="ka"
        content={title + " | Agroezo - ყიდვა, გაყიდვა, აგრო საქონელი"}
      />
      <meta
        name="twitter:description"
        lang="ka"
        content={description + " | აგრო საქონელის ყიდვა, გაყიდვა."}
      />
    </Helmet>
  );
};
export default Seo;
