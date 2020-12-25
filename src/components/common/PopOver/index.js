import React from "react";
import { Popover } from "antd";

const PopOver = ({ children, title, content, hover }) =>
  hover ? (
    <Popover placement="bottom" title={title} content={content}>
      {children}
    </Popover>
  ) : (
    <Popover trigger="click" placement="bottom" title={title} content={content}>
      {children}
    </Popover>
  );

export default PopOver;
