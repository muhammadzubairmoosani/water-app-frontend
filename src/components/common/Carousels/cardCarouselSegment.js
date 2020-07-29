import React from "react";
import { WallCard, ProductCard, CardCarousel } from "../";
const CardCarouselSegment = ({ heading, subHeading, array, route }) => {
  return (
    <div className="card_carousel_segment">
      <WallCard heading={heading} subHeading={subHeading} route={route}>
        <CardCarousel>
          {array.map((companies) => (
            <div key={companies._id}>
              <ProductCard product={companies} />
            </div>
          ))}
        </CardCarousel>
      </WallCard>
    </div>
  );
};
export default CardCarouselSegment;
