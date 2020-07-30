import React from "react";
import ContentLoader from "react-content-loader";

const ProductCardSkeleton = ({ className }) => (
  <ContentLoader
    speed={1}
    width={250}
    height={395}
    viewBox="0 0 250 395"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{ margin: "1em" }}
    className={className}
  >
    <rect x="0" y="0" rx="10" ry="10" width="250" height="160" />
    <circle cx="52" cy="155" r="27" />
    <rect x="0" y="205" rx="0" ry="0" width="250" height="22" />
    <rect x="0" y="254" rx="0" ry="0" width="250" height="14" />
    <rect x="0" y="274" rx="0" ry="0" width="250" height="14" />
    <rect x="0" y="294" rx="0" ry="0" width="250" height="14" />
    <rect x="0" y="314" rx="0" ry="0" width="250" height="14" />
    <rect x="0" y="348" rx="0" ry="0" width="250" height="47" />
  </ContentLoader>
);

export default ProductCardSkeleton;
