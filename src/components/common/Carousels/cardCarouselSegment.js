import React from "react";
import { WallCard, CompanyCard, CardCarousel } from "../index";
const CardCarouselSegment = ({ heading, subHeading, array }) => {
  return (
    <div className="card_carousel_segment">
      <WallCard heading={heading} subHeading={subHeading}>
        <CardCarousel>
          {array.map((companies) => (
            <div key={companies._id}>
              <CompanyCard props={companies} />
            </div>
          ))}
        </CardCarousel>
      </WallCard>
    </div>
  );
};
export default CardCarouselSegment;
