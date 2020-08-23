import React from "react";
import { Skeleton } from "antd";

const ProductCardSkeleton = () => (
  <div className="product_card_skeleton_wrapper">
    <Skeleton.Image className="skeleton_img" />
    <Skeleton.Avatar active shape="circle" className="skeleton_avatar" />
    <Skeleton active />
    <Skeleton.Button active className="skeleton_btn" />
  </div>
);

export default ProductCardSkeleton;
