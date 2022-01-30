import React from "react";
import { WallCard, ProductCard, CardCarousel, ProductCardSkeleton } from "../";

export const CardCarouselSegment = ({
  heading,
  subHeading,
  array,
  route,
  loading,
}) => (
  <div className="card_carousel_segment">
    <WallCard heading={heading} subHeading={subHeading} route={route}>
      {loading ? (
        <div className="skeleton_wrapper">
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
        </div>
      ) : (
        <CardCarousel>
          {array.map((companies) => (
            <div key={companies._id}>
              <ProductCard product={companies} />
            </div>
          ))}
        </CardCarousel>
      )}
    </WallCard>
  </div>
);
