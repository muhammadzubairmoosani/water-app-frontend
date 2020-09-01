import React from "react";
import { Descriptions } from "antd";

const GrayCard = ({ title, className, children }) => (
  <Descriptions title={title} className={className}>
    <Descriptions.Item>{children}</Descriptions.Item>
  </Descriptions>
);
export default GrayCard;
