import React from "react";
import { Descriptions } from "antd";

const GrayCard = ({ title, children }) => (
  <Descriptions title="About Us">
    <Descriptions.Item>{children}</Descriptions.Item>
  </Descriptions>
);
export default GrayCard;
