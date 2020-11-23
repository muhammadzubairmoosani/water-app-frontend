import React, { useState, useRef } from "react";
import { Form } from "antd";
import { UserOutlined, PhoneOutlined } from "@ant-design/icons";
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
          required={true}
          name="name"
          placeholder="Name"
          icon={<UserOutlined />}
        />
        <TextField
          required={true}
          name="mobile"
          min={11}
          max={11}
          placeholder="03002233445"
          type="number"
          icon={<PhoneOutlined />}
        />
        <TextAreaField required={true} />
        <Form.Item>
          <CommonBtn loading={isLoading}>Send Message</CommonBtn>
        </Form.Item>
      </Form>
    </WallCard>
  );
};
