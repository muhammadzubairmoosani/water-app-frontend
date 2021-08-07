import React from "react";
import { Button } from "antd";

export const CommonBtn = ({
  type = "primary",
  htmlType = "submit",
  block = true,
  children,
  className,
  loading,
  onClick,
  icon
}) => (
  <Button
    htmlType={htmlType}
    className={className}
    loading={loading}
    block={block}
    type={type}
    onClick={onClick}
    icon={icon}
  >
    {children}
  </Button>
);
