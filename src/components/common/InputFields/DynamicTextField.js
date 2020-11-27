import React, { useState } from "react";
import { Form, Button, Select, Row, Col } from "antd";
import { Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { TextField, CommonBtn } from "../index";

const { Option } = Select;
export const DynamicTextField = ({}) => {
  // const [waterQty, setWaterQty] = useState("");
  const [services, setServices] = useState([
    { name: 0, key: 0, isListField: true, fieldKey: 0 },
  ]);
  return (
    <Form.List name="services">
      {() => (
        <div>
          {services.map((field, key) => (
            // <Space
            //   key={key}
            //   style={{ display: "flex", marginBottom: 8 }}
            //   align="start"
            // >
            <Row gutter={{ md: 12 }}>
              <Col xs={24} md={12}>
                <TextField
                  addonBefore={
                    <Select
                      // onChange={(qty) => setWaterQty(e)}
                      defaultValue="Liter"
                    >
                      <Option value="Liter">Liter</Option>
                      <Option value="Gallon">Gallon</Option>
                    </Select>
                  }
                  fields={services}
                  name={[field.name, "service"]}
                  fieldKey={[field.fieldKey, "service"]}
                  placeholder="19"
                  label="Water quantity"
                  // message="* (Required)"
                  type="number"
                  // style={{ width: 200 }}
                />
              </Col>

              <Col xs={24} md={12}>
                <TextField
                  addonBefore={<span>Rs.</span>}
                  {...services}
                  name={[field.name, "rupees"]}
                  fieldKey={[field.fieldKey, "rupees"]}
                  placeholder="80"
                  type="number"
                  label="Prize"
                  // help="Prize"
                  // message="* (Required)"
                  // style={{ width: 150 }}
                  hasFeedback={false}
                />
              </Col>

              {key > 0 && (
                <MinusCircleOutlined
                  onClick={() => {
                    services.splice(key, 1);
                    setServices([...services]);
                  }}
                />
              )}
              {/* </Space> */}
            </Row>
          ))}
          <Form.Item>
            <CommonBtn
              htmlType="button"
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
            >
              <PlusOutlined /> Add More Services
            </CommonBtn>
          </Form.Item>
        </div>
      )}
    </Form.List>
  );
};
