import React, { useState } from "react";
import { Form, Button, Select } from "antd";
import { Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { TextField } from "./index";

const { Option } = Select;
export const DynamicTextField = () => {
  // const [waterQty, setWaterQty] = useState("");
  const [services, setServices] = useState([
    { name: 0, key: 0, isListField: true, fieldKey: 0 },
  ]);
  return (
    <Form.List name="services">
      {() => (
        <div>
          {services.map((field, key) => (
            <Space
              key={key}
              style={{ display: "flex", marginBottom: 8 }}
              align="start"
            >
              <TextField
                addonBefore={
                  <Select
                    // onChange={(qty) => setWaterQty(e)}
                    defaultValue="Liter"
                    style={{ width: 90 }}
                  >
                    <Option value="Liter">Liter</Option>
                    <Option value="Gallon">Gallon</Option>
                  </Select>
                }
                fields={services}
                name={[field.name, "service"]}
                fieldKey={[field.fieldKey, "service"]}
                placeholder="19"
                help="Water Quantity"
                message="* (Required)"
                type="number"
                style={{ width: 200 }}
              />
              <TextField
                addonBefore={<span>Rs.</span>}
                {...services}
                name={[field.name, "rupees"]}
                fieldKey={[field.fieldKey, "rupees"]}
                placeholder="80"
                type="number"
                message="* (Required)"
                style={{ width: 150 }}
                hasFeedback={false}
              />

              {key > 0 && (
                <MinusCircleOutlined
                  onClick={() => {
                    services.splice(key, 1);
                    setServices([...services]);
                  }}
                />
              )}
            </Space>
          ))}
          <Form.Item>
            <Button
              type="dashed"
              onClick={() => {
                setServices([
                  ...services,
                  {
                    name: services.length,
                    key: services.length,
                    isListField: true,
                    fieldKey: services.length,
                  },
                ]);
              }}
              block
            >
              <PlusOutlined /> Add field
            </Button>
          </Form.Item>
        </div>
      )}
    </Form.List>
  );
};
