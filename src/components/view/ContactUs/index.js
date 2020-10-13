import React, { useState, useRef } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { _contactUs } from "../../../service/methods";
import { WallCard, Notification, TextField } from "../../common";
const { TextArea } = Input;

export const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messageLength, setMessageLength] = useState(0);
  const form = useRef(null);
  return (
    <WallCard className="contact_us" heading="Contact Us">
      <Form
        ref={form}
        // name="nest-messages"
        onFinish={(values) => {
          setIsLoading(true);
          _contactUs(values)
            .then(() => {
              form.current.resetFields();
              Notification.success({
                message: "Thanks for contacting us.",
                description: "Your message has been received.",
              });
              setIsLoading(false);
            })
            .catch((err) => {
              Notification.error({
                message: err.message,
              });
              setIsLoading(false);
            });
        }}
      >
        <TextField
          name="name"
          min={3}
          placeholder="Owner/Supplier Name (Required)"
          icon={<UserOutlined className="site-form-item-icon" />}
        />
        <TextField
          name="mobile"
          min={10}
          max={10}
          placeholder="Mobile Number (Required)"
          type="number"
          addonBefore={<span>+92</span>}
          subClassname="w_100"
        />
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
              placeholder="Type your message..."
              autoSize={{ minRows: 5, maxRows: 8 }}
              onChange={(e) => setMessageLength(e.target.value.length)}
            />
          </Form.Item>
          <div className="msgLength">{`${messageLength} / 500 max`}</div>
        </div>

        <Form.Item>
          <Button htmlType="submit" loading={isLoading} type="primary" block>
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </WallCard>
  );
};
