import React from "react";
import { WallCard, SupplierCard, CardCarousel } from "../index";
const CardCarouselSegment = ({ heading, subHeading, array, route }) => {
  return (
    <div className="card_carousel_segment">
      <WallCard heading={heading} subHeading={subHeading} route={route}>
        <CardCarousel>
          {array.map((companies) => (
            <div key={companies._id}>
              <SupplierCard props={companies} />
            </div>
          ))}
        </CardCarousel>
      </WallCard>
    </div>
  );
};
export default CardCarouselSegment;
