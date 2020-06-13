import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { Layout, Heading } from "../../common";
import { connect } from "react-redux";
import { authAction } from "../../../store/actions/index";

const { TextArea } = Input;

const validateMessages = {
  required: "${name} is required!",
  types: {
    email: "${name} is not validate email!",
  },
};

const ContactUs = ({ actionDispatch }) => {
  const [messageLength, setMessageLength] = useState(0);
  const onFinish = (values) => {
    actionDispatch(values);
  };
  return (
    <aside className="contact_us">
      <Layout>
        <Heading heading="Contact Us" />
        <Form
          className="contact_us_container"
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                max: 50,
              },
            ]}
          >
            <Input
              allowClear
              placeholder="Enter your Name"
              prefix={<UserOutlined className="site-form-item-icon" />}
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                max: 100,
              },
            ]}
          >
            <Input
              allowClear
              placeholder="Enter your Email"
              prefix={<MailOutlined className="site-form-item-icon" />}
            />
          </Form.Item>
          <div className="msg_contain">
            <Form.Item
              name="message"
              rules={[
                {
                  required: true,
                  min: 30,
                  max: 500,
                },
              ]}
            >
              <TextArea
                allowClear
                placeholder="Type your Message..."
                autoSize={{ minRows: 3, maxRows: 5 }}
                onChange={(e) => setMessageLength(e.target.value.length)}
              />
            </Form.Item>
            <div className="msgLength">{`${messageLength} / 500 max`}</div>
          </div>
          <Form.Item className="btn_contain">
            <Button htmlType="submit">Send</Button>
          </Form.Item>
        </Form>
      </Layout>
    </aside>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionDispatch: (payload) => dispatch(authAction.contactUs(payload)),
  };
};

export default connect(null, mapDispatchToProps)(ContactUs);
