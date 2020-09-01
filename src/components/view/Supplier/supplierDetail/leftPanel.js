import React from "react";
import { GrayCard } from "../../../common";

const LeftPanel = () => (
  <>
    <GrayCard title="Address" className="address_container">
      M.R Kyani Rd, Civil Lines, Karachi, Karachi City, Sindh
    </GrayCard>
    <GrayCard title="Contact">
      +92 315 2396525
      <br />
      +92 347 2396383
    </GrayCard>
    <GrayCard title="Deals In">
      19 liter gallon service
      <br />
      1000 liter water service
    </GrayCard>
  </>
);

export default LeftPanel;
