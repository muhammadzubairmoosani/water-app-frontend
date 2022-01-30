import React from "react";
import { Divider, Typography } from "antd";
const { Title } = Typography;

export const Heading = ({ heading, align = "left" }) => (
  <Divider orientation={align}>
    <Title strong level={2}>
      {heading}
    </Title>
  </Divider>
);