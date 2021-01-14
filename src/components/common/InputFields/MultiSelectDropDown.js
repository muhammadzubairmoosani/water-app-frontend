import React, { useState } from "react";
import { Form, TreeSelect } from "antd";
const { SHOW_PARENT } = TreeSelect;

export const MultiSelectDropDown = ({
  list,
  required = true,
  message = "You must add at least one area of working!",
  label,
}) => {
  const [areaOfService, setAreaOfService] = useState(undefined);
  const tProps = {
    treeData: list,
    value: areaOfService,
    onChange: setAreaOfService,
    treeCheckable: true,
    allowClear: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: "Area of Working...",
    style: { width: "100%" },
  };
  return (
    <Form.Item
      label={label}
      name="area_of_working"
      hasFeedback
      rules={[{ required, message }]}
    >
      <TreeSelect className="shadow" {...tProps} />
    </Form.Item>
  );
};
