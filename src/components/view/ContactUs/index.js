import React, { useState, useRef } from "react";
import { Form } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { _contactUs } from "../../../service/methods";
import {
  WallCard,
  Notification,
  TextField,
  TextAreaField,
  CommonBtn,
} from "../../common";

export const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef(null);
  return (
    <WallCard className="contact_us" heading="Contact Us">
      <Form
        ref={form}
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
        <TextAreaField />
        <Form.Item>
          <CommonBtn loading={isLoading}>Send Message</CommonBtn>
        </Form.Item>
      </Form>
    </WallCard>
  );
};
