import React from "react";
import { Descriptions } from "antd";

const GrayCard = ({ title, children, className }) => (
  <Descriptions title={title} className={className}>
    <Descriptions.Item>{children}</Descriptions.Item>
  </Descriptions>
);
export default GrayCard;
