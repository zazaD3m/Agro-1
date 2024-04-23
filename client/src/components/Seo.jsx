import { Helmet } from "react-helmet-async";

const Seo = ({
  title = "agroezo.ge",
  description = "ყიდვა გაყიდვა",
  type = "website",
}) => {
  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" lang="ka" content={description} />
      <meta property="og:type" lang="ka" content={type} />
      <meta property="og:title" lang="ka" content={title} />
      <meta property="og:description" lang="ka" content={description} />
      <meta name="twitter:card" lang="ka" content={type} />
      <meta name="twitter:title" lang="ka" content={title} />
      <meta name="twitter:description" lang="ka" content={description} />
    </Helmet>
  );
};
export default Seo;
