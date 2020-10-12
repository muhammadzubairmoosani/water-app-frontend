import React, { useState } from "react";
import { Form, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { _contactUs } from "../../../service/methods";
import { WallCard, Notification, TextField, TextArea } from "../../common";

export const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <WallCard className="contact_us" heading="Contact Us">
      <Form
        name="nest-messages"
        onFinish={(values) => {
          setIsLoading(true);
          _contactUs(values)
            .then(() => {
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
        <TextArea
          name="message"
          className="text_area_wrapper"
          placeholder="Type your message..."
          allowClear
          max={500}
        />
        <Form.Item>
          <Button htmlType="submit" loading={isLoading} type="primary" block>
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </WallCard>
  );
};
