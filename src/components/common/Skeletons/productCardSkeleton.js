import React from "react";
import ContentLoader from "react-content-loader";

const ProductCardSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={300}
    height={405}
    viewBox="0 0 300 405"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{ margin: "1em" }}
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="300" height="185" />
    <circle cx="52" cy="176" r="27" />
    <rect x="0" y="214" rx="0" ry="0" width="300" height="22" />
    <rect x="0" y="257" rx="0" ry="0" width="300" height="14" />
    <rect x="0" y="277" rx="0" ry="0" width="300" height="14" />
    <rect x="0" y="297" rx="0" ry="0" width="300" height="14" />
    <rect x="0" y="317" rx="0" ry="0" width="300" height="14" />
    <rect x="0" y="358" rx="0" ry="0" width="300" height="47" />
  </ContentLoader>
);

export default ProductCardSkeleton;
