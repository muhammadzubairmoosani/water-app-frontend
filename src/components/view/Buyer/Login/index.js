import React, { useState } from "react";
import { Layout, Heading } from "../../../common";
import { Form, Input, Button, Row, Col } from "antd";
import { MobileOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const BuyerLogin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const useTimeOut = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="login">
      <Layout>
        <Heading heading="Buyer Login" />
        <Form
          name="normal_login"
          className="login-form login_container"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please Enter your Mobile Number!",
                max: 50,
              },
            ]}
          >
            <Input
              prefix={<MobileOutlined className="site-form-item-icon" />}
              placeholder="mobile number"
            />
          </Form.Item>
          <Row gutter={5}>
            <Col span={15}>
              <Form.Item
                name="code"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Pin Code!",
                    max: 100,
                  },
                ]}
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  type="text"
                  placeholder="Pin Code"
                />
              </Form.Item>
            </Col>

            <Col span={9}>
              <Button
                type="primary"
                block
                loading={isLoading}
                onClick={useTimeOut}
              >
                Send Code
              </Button>
            </Col>
          </Row>

          {/* <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item> */}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <Link to="buyer-signin">Register now!</Link>
          </Form.Item>
        </Form>
      </Layout>
    </div>
  );
};
export default BuyerLogin;
