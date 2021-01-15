import React from "react";
import { Button } from "antd";
export const CommonBtn = ({
  children,
  className,
  loading,
  type = "primary",
  onClick,
  block = true,
  htmlType = "submit",
}) => (
  <Button
    htmlType={htmlType}
    className={className}
    loading={loading}
    block={block}
    type={type}
    onClick={onClick}
  >
    {children}
  </Button>
);
