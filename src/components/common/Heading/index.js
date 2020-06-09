import React from "react";
import { Divider, Typography } from "antd";
const { Title } = Typography;
const Heading = ({ heading, align = "left" }) => {
  return (
    <Divider orientation={align}>
      <Title strong level={2}>
        {heading}
      </Title>
    </Divider>
  );
};
export default Heading;
