import React from "react";
import { Form, Button } from "antd";
export const CommonBtn = ({
  children,
  className,
  loading,
  bottomChildren,
  type = "primary",
  onClick,
  block = true,
  htmlType = "submit",
}) => (
  <Form.Item>
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
    {bottomChildren}
  </Form.Item>
);
