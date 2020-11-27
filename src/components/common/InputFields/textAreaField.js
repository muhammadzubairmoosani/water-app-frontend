import React, { useState } from "react";
import { Form, Input } from "antd";
const { TextArea } = Input;

export const TextAreaField = ({
  min = 0,
  max = 500,
  name = "message",
  placeholder = "Type your message here...",
  required,
  hasFeedback,
  minRows = 5,
  maxRows = 8,
  message = "This field is required.",
  label,
}) => {
  const [messageLength, setMessageLength] = useState(0);
  return (
    <div className="msg_contain">
      <Form.Item
        name={name}
        className="text_area_wrapper"
        hasFeedback={hasFeedback}
        rules={[{ required, message, min, max }]}
        label={label}
      >
        <TextArea
          className="shadow"
          allowClear
          placeholder={placeholder}
          autoSize={{ minRows, maxRows }}
          onChange={(e) => setMessageLength(e.target.value.length)}
        />
      </Form.Item>
      <div className="msgLength">{`${messageLength} / 500 max`}</div>
    </div>
  );
};
