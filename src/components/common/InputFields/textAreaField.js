import React, { useState } from "react";
import { Form, Input } from "antd";
const { TextArea } = Input;

const TextAreaField = ({
  min = 0,
  max = 50,
  name,
  placeholder,
  required = true,
  hasFeedback = true,
  className,
  subClassname,
  allowClear,
  minRows = 5,
  maxRows = 8,
}) => {
  const [messageLength, setMessageLength] = useState(0);
  return (
    <div className="msg_contain">
      <Form.Item
        name={name}
        hasFeedback={hasFeedback}
        rules={[{ required, min, max }]}
        className={className}
      >
        <TextArea
          allowClear={allowClear}
          placeholder={placeholder}
          autoSize={{ minRows, maxRows }}
          onChange={(e) => setMessageLength(e.target.value.length)}
          className={subClassname}
        />
        <div className="msgLength">{`${messageLength} / ${max} max`}</div>
      </Form.Item>
    </div>
  );
};

export default TextAreaField;
