import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, MobileOutlined } from "@ant-design/icons";
import { Layout, Heading } from "../../common";
import { connect } from "react-redux";
import { authAction } from "../../../store/actions/index";
const { TextArea } = Input;

const ContactUs = ({ actionDispatch }) => {
  const [messageLength, setMessageLength] = useState(0);
  const onFinish = (values) => {
    actionDispatch(values);
  };

  return (
    <Layout className="aside_layout">
      <Heading heading="Contact Us" />
      <Form
        className="aside_container"
        name="nest-messages"
        onFinish={onFinish}
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
            placeholder="name"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item
          name="mobile"
          rules={[
            {
              required: true,
              max: 11,
            },
          ]}
        >
          <Input
            prefix={<MobileOutlined className="site-form-item-icon" />}
            placeholder="Mobile"
            type="number"
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
              placeholder="Type your message..."
              autoSize={{ minRows: 3, maxRows: 5 }}
              onChange={(e) => setMessageLength(e.target.value.length)}
            />
          </Form.Item>
          <div className="msgLength">{`${messageLength} / 500 max`}</div>
        </div>
        <Form.Item>
          <Button htmlType="submit" type="primary" block>
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionDispatch: (payload) => dispatch(authAction.contactUs(payload)),
  };
};
export default connect(null, mapDispatchToProps)(ContactUs);
