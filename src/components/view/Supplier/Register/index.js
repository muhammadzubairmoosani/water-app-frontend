import React, { useState, useEffect } from "react";
import { ImageUploader, WallCard } from "../../../common";
import { Form, Input, Button, Select, Row, Col, TreeSelect } from "antd";
import { Link } from "react-router-dom";
import {
  LockOutlined,
  UserOutlined,
  HomeOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { _suplierRegister } from "../../../../service/methods";

const { SHOW_PARENT } = TreeSelect;
const { Option } = Select;
const { TextArea } = Input;

const SupplierRegister = () => {
  const [messageLength, setMessageLength] = useState(0);
  const [fileList, setFileList] = useState([]);
  const [services, setServices] = useState([{ key: 0, isListField: true }]);
  const [areaOfService, setAreaOfService] = useState(undefined);


  useEffect(() => console.log(areaOfService), [areaOfService]);

  const treeData = [
    {
      title: "area 1",
      value: "area 1",
    },
    {
      title: "area 2",
      value: "area 2",
    },
    {
      title: "area 3",
      value: "area 3",
    },
    {
      title: "area 4",
      value: "area 4",
    },
  ];

  const servicesTitle = [
    "19 Liter Gallon",
    "200 Gallons Service",
    "1,000 Gallons Service",
    "2000 Gallons Service",
    "3,000 Gallons Service",
    "4,000 Gallons Service",
    "6,000 Gallons Service",
    "10,000 Gallons Service",
  ];

  const tProps = {
    treeData,
    value: areaOfService,
    onChange: setAreaOfService,
    treeCheckable: true,
    allowClear: true,
    // hasFeedback: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: "Area of Working...",
    style: {
      width: "100%",
    },
  };

  const _removeServiceField = (key) => {
    let newServices = services;
    newServices.splice(key, 1);
    console.log(newServices)
    setServices(newServices);
  };


  return (
    <WallCard className="supplier_register" heading="Supplier Register">
      <Form
        name="normal_login"
        className="login-form"
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
          rules={[
            {
              required: true,
              min: 3,
              max: 50,
            },
          ]}
        >
          <Input
            placeholder="Owner/Supplier Name (Required)"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item
          name="mobile1"
          hasFeedback
          rules={[
            {
              required: true,
              min: 10,
              max: 10,
            },
          ]}
        >
          <Input
            placeholder="Mobile Number (Required)"
            type="number"
            allowClear
            addonBefore={<span>+92</span>}
            className="w_100"
          />
        </Form.Item>

        <Form.Item
          name="password"
          hasFeedback
          rules={[
            {
              required: true,
              min: 8,
              max: 30,
            },
          ]}
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
            {
              required: true,
              min: 8,
              max: 30,
            },
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

        <Form.Item
          name="area_of_working"
          rules={[
            {
              required: true,
              message: "You must add at least one area of working!",
            },
          ]}
        >
          <TreeSelect {...tProps} />
        </Form.Item>

        <div className="msg_contain">
          <Form.Item
            name="message"
            className="text_area_wrapper"
            rules={[
              {
                required: true,
                max: 500,
              },
            ]}
          >
            <TextArea
              allowClear
              placeholder="Tell something about your company for growing you business... (Required)"
              autoSize={{ minRows: 5, maxRows: 8 }}
              onChange={(e) => setMessageLength(e.target.value.length)}
            />
          </Form.Item>
          <div className="msgLength">{`${messageLength} / 500 max`}</div>
        </div>

        <Form.List name="services">
          {() => (
            <div>
              {services.map((service) => (
                <Form.Item key={service.key}>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "You must add at least one service!",
                      },
                    ]}
                    {...service}
                    className="add_service_form_item"
                  >
                    <Row>
                      <Input.Group className="add_service_group">
                        <Col
                          xs={{ span: 24 }}
                          sm={{ span: services.length > 1 ? 13 : 15 }}
                        >
                          <Select
                            className="add_service_select"
                            defaultValue="19 Liter Gallon"
                          >
                            {servicesTitle.map((title) => (
                              <Option value={title}>{title}</Option>
                            ))}
                          </Select>
                        </Col>
                        <Col xs={{ span: 21 }} sm={{ span: 8 }}>
                          <Input
                            addonBefore={<span>Rs.</span>}
                            placeholder="Price"
                            className="price_input"
                          />
                        </Col>
                        {services.length > 1 ? (
                          <Col className="minus_icon_col" xs={{ span: 2 }}>
                            <MinusCircleOutlined
                              className="dynamic-delete-button"
                              onClick={() => _removeServiceField(service.key)}
                            />
                          </Col>
                        ) : null}
                      </Input.Group>
                    </Row>
                  </Form.Item>
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() =>
                    setServices([
                      ...services,
                      {
                        key: services.length,
                        isListField: true,
                      },
                    ])
                  }
                  className="w_100"
                >
                  <PlusOutlined /> Add More Service
                </Button>
              </Form.Item>
            </div>
          )}
        </Form.List>

        <ImageUploader
          fileList={fileList}
          setFileList={setFileList}
          name="image"
        />

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
            loading={false}
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
