import React from "react";
import { GrayCard } from "../../../common";
import { Skeleton } from "antd";

const RightPanel = ({ name, mobile1, address, area_of_working, loading }) => (
  <>
    <GrayCard title="Services">
      <Skeleton active loading={loading}>
        <ul>
          <li>19 liter gallon service</li>
          <li>1000 liter water service</li>
        </ul>
      </Skeleton>
    </GrayCard>
    <GrayCard title="Area of Service">
      <Skeleton active loading={loading}>
        <ol>
          {area_of_working && area_of_working.map((area) => <li>{area}</li>)}
        </ol>
      </Skeleton>
    </GrayCard>
    <GrayCard title="Contact detail">
      <Skeleton active loading={loading}>
        {name} <br />
        {mobile1}
      </Skeleton>
    </GrayCard>
    <GrayCard title="Company Location">
      <Skeleton active loading={loading}>
        {address}
      </Skeleton>
    </GrayCard>
  </>
);

export default RightPanel;
