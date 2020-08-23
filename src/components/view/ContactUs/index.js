import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, MobileOutlined } from "@ant-design/icons";
import { WallCard } from "../../common";
import { _contactUs } from "../../../service/methods";

const { TextArea } = Input;
const ContactUs = () => {
  const [messageLength, setMessageLength] = useState(0);
  return (
    <WallCard className="contact_us" heading="Contact Us">
      <Form name="nest-messages" onFinish={(values) => _contactUs(values)}>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              min: 3,
              max: 50,
              message: "Name is Required!",
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
              min: 11,
              max: 11,
              message: "Mobile is Required!",
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
            className="text_area"
            rules={[
              {
                required: true,
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
    </WallCard>
  );
};

export default ContactUs;
