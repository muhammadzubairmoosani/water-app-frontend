import React, { useState } from "react";
import { Layout, Heading } from "../../../common";
import {
  Form,
  Input,
  Button,
  Checkbox,
  TreeSelect,
  Select,
  Row,
  Col,
} from "antd";
import { Link } from "react-router-dom";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import {
  MobileOutlined,
  LockOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";

// const formItemLayout = {
//   labelCol: {
//     xs: { span: 24 },
//     sm: { span: 4 },
//   },
//   wrapperCol: {
//     xs: { span: 24 },
//     sm: { span: 20 },
//   },
// };
// const formItemLayoutWithOutLabel = {
//   wrapperCol: {
//     xs: { span: 24, offset: 0 },
//     sm: { span: 20, offset: 4 },
//   },
// };

const { Option } = Select;

const SupplierRegister = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Layout className="aside_layout">
      <Heading heading="Supplier Registration" />
      <Form
        name="normal_login"
        className="login-form aside_container register"
        onFinish={onFinish}
      >
        <Form.Item
          name="companyName"
          hasFeedback
          rules={[{ required: true, max: 50 }]}
        >
          <Input
            placeholder="Company Name (Required)"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item
          name="ownerName"
          hasFeedback
          rules={[{ required: true, max: 50 }]}
        >
          <Input
            placeholder="Owner/Supplier Name (Required)"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item
          name="mobile"
          hasFeedback
          rules={[{ required: true, min: 10, max: 10 }]}
        >
          <Input
            prefix={<MobileOutlined className="site-form-item-icon" />}
            placeholder="Mobile Number1 (Required)"
            type="number"
            addonBefore={<span>+92</span>}
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item name="mobile2" hasFeedback rules={[{ min: 10, max: 10 }]}>
          <Input
            prefix={<MobileOutlined className="site-form-item-icon" />}
            placeholder="Mobile Number2 (Optional)"
            type="number"
            addonBefore={<span>+92</span>}
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item
          name="password"
          hasFeedback
          rules={[{ required: true, min: 8, max: 30 }]}
          hasFeedback
        >
          <Input.Password
            placeholder="Password (Required)"
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            { required: true, min: 8, max: 30 },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              },
            }),
          ]}
        >
          <Input.Password
            placeholder="Confirm Password (Required)"
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item
          name="Address"
          hasFeedback
          rules={[{ required: true, max: 500 }]}
        >
          <Input
            placeholder="Company Address (Required)"
            prefix={<HomeOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.List name="names">
          {(fields, { add, remove }) => {
            return (
              <div>
                {fields.map((field, index) => (
                  <Form.Item required={false} key={field.key}>
                    <Form.Item {...field} style={{ marginBottom: "0" }}>
                      <Row>
                        <Input.Group>
                          <Col xs={{ span: 24 }} sm={{ span: 15 }}>
                            <Select defaultValue="19 Liter Gallon">
                              <Option value="19 Liter Gallon">
                                19 Liter Gallon
                              </Option>
                              <Option value="1000 Gallon">1000 Gallon</Option>
                              <Option value="2000 Gallon">2000 Gallon</Option>
                              <Option value="3000 Gallon">3000 Gallon</Option>
                            </Select>
                          </Col>
                          <Col xs={{ span: 24 }} sm={{ span: 8 }}>
                            <Input
                              placeholder="Price"
                              className="price_input"
                            />
                          </Col>
                        </Input.Group>
                      </Row>
                    </Form.Item>

                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        style={{ margin: "0 8px" }}
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    ) : null}
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => {
                      add();
                    }}
                    style={{ width: "100%" }}
                  >
                    <PlusOutlined /> Add More Service
                  </Button>
                </Form.Item>
              </div>
            );
          }}
        </Form.List>

        <Checkbox style={{ marginBottom: "12px" }}>
          I have read the <Link to="#">agreement</Link>
        </Checkbox>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
          >
            Register
          </Button>
          Or <Link to="supplier-login">Login now!</Link>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default SupplierRegister;
