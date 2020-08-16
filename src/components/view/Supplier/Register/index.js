import React, { useState } from "react";
import { ImageUploader, WallCard } from "../../../common";
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";
import { Form, Input, Button, Checkbox, Select, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import {
  MobileOutlined,
  LockOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { _suplierRegister } from "../../../../service/methods";
const { Option } = Select;

const SupplierRegister = () => {
  const [fileList, setFileList] = useState([]);
  return (
    <WallCard className="supplier_register" heading="Supplier Register">
      <Form
        name="normal_login"
        className="login-form aside_container register"
        onFinish={(values) =>
          _suplierRegister({
            values,
            fileList: fileList.map((item) => item.originFileObj),
          })
        }
      >
        <Form.Item
          name="company_name"
          hasFeedback
          rules={[{ required: true, max: 50 }]}
        >
          <Input
            placeholder="Company Name (Required)"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item
          name="name"
          hasFeedback
          rules={[{ required: true, max: 50 }]}
        >
          <Input
            placeholder="Owner/Supplier Name (Required)"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item
          name="mobile1"
          hasFeedback
          rules={[{ required: true, min: 10, max: 10 }]}
        >
          <Input
            prefix={<MobileOutlined className="site-form-item-icon" />}
            placeholder="Mobile Number-1 (Required)"
            type="number"
            addonBefore={<span>+92</span>}
            className="w_100"
          />
        </Form.Item>

        <Form.Item name="mobile2" hasFeedback rules={[{ min: 10, max: 10 }]}>
          <Input
            prefix={<MobileOutlined className="site-form-item-icon" />}
            placeholder="Mobile Number-2 (Optional)"
            type="number"
            addonBefore={<span>+92</span>}
            className="w_100"
          />
        </Form.Item>

        <Form.Item
          name="password"
          hasFeedback
          rules={[{ required: true, min: 8, max: 30 }]}
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
          name="company_address"
          hasFeedback
          rules={[{ required: true, max: 500 }]}
        >
          <Input
            placeholder="Company Address (Required)"
            prefix={<HomeOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        {/* <CloudinaryContext cloudName="pani-wala">
          <Image publicId="my-images/back_ckxp37">
            <Transformation width="400" crop="scale" overlay="cloudinary_icon"/>
          </Image>
        </CloudinaryContext> */}

        {/* <CloudinaryContext cloudName="demo">
          <Image publicId="sample">
            <Transformation
              overlay="cloudinary_icon"
              gravity="south_east"
              x="5"
              y="5"
              width="50"
              opacity="60"
              effect="brightness:200"
            />

          </Image>
        </CloudinaryContext> */}

        {/* <ImageUploader
          fileList={fileList}
          setFileList={setFileList}
          name="image"
        /> */}

        {/* <Form.List name="services">
          {(fields, { add, remove }) => (
            <div>
              {fields.map((field) => (
                <Form.Item key={field.key}>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "You must select at least one!",
                      },
                    ]}
                    {...field}
                    className="add_service_form_item"
                  >
                    <Row>
                      <Input.Group className="add_service_group">
                        <Col
                          xs={{ span: 24 }}
                          sm={{ span: fields.length > 1 ? 13 : 15 }}
                        >
                          <Select
                            className="add_service_select"
                            defaultValue="19 Liter Gallon"
                          >
                            <Option value="19 Liter Gallon">
                              19 Liter Gallon
                            </Option>
                            <Option value="1000 Gallon">
                              200 Gallons Service
                            </Option>
                            <Option value="2000 Gallon">
                              1,000 Gallons Service
                            </Option>
                            <Option value="3000 Gallon">
                              2000 Gallons Service
                            </Option>
                            <Option value="3000 Gallon">
                              3,000 Gallons Service
                            </Option>
                            <Option value="3000 Gallon">
                              4,000 Gallons Service
                            </Option>
                            <Option value="3000 Gallon">
                              6,000 Gallons Service
                            </Option>
                            <Option value="3000 Gallon">
                              10,000 Gallons Service
                            </Option>
                          </Select>
                        </Col>
                        <Col xs={{ span: 21 }} sm={{ span: 8 }}>
                          <Input placeholder="Price" className="price_input" />
                        </Col>
                        {fields.length > 1 ? (
                          <Col className="minus_icon_col" xs={{ span: 2 }}>
                            <MinusCircleOutlined
                              className="dynamic-delete-button"
                              onClick={() => remove(field.name)}
                            />
                          </Col>
                        ) : null}
                      </Input.Group>
                    </Row>
                  </Form.Item>
                </Form.Item>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} className="w_100">
                  <PlusOutlined /> Add More Service
                </Button>
              </Form.Item>
            </div>
          )}
        </Form.List>
 */}
        <Checkbox className="agreement">
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
    </WallCard>
  );
};

export default SupplierRegister;
