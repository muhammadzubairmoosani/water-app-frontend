import React from "react";
import { Form, Input } from "antd";

export const TextField = ({
  min = 0,
  max = 50,
  name,
  placeholder,
  icon,
  required = true,
  hasFeedback = true,
  type = "text",
  addonBefore,
  className,
  subClassname,
  allowClear,
  style,
  fields,
  fieldKey,
  message,
  help,
}) => (
  <Form.Item
    {...fields}
    fieldKey={fieldKey}
    name={name}
    hasFeedback={hasFeedback}
    rules={[{ required, min, max, message }]}
    className={className}
    help={help}
  >
    {type === "password" ? (
      <Input.Password
        className={`shadow ${subClassname}`}
        placeholder={placeholder}
        prefix={icon}
        addonBefore={addonBefore}
        allowClear={allowClear}
        style={style}
      />
    ) : (
      <Input
        placeholder={placeholder}
        prefix={icon}
        type={type}
        style={style}
        addonBefore={addonBefore}
        className={`shadow ${subClassname}`}
        allowClear={allowClear}
      />
    )}
  </Form.Item>
);
