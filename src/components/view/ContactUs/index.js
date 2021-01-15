import React from "react";
import { Form } from "antd";
import { UserOutlined, PhoneOutlined } from "@ant-design/icons";
import useAxios from "axios-hooks";
import {
  WallCard,
  TextField,
  TextAreaField,
  CommonBtn,
  Notification,
} from "../../common";

export const ContactUs = () => {
  const [form] = Form.useForm();
  const [{ loading }, contachUs] = useAxios(
    { url: "/contact-us", method: "POST" },
    { manual: true }
  );

  return (
    <WallCard className="contact_us" heading="Contact Us">
      <Form
        form={form}
        onFinish={(values) => {
          const { name, mobile, message } = values;
          contachUs({
            data: { name, mobile, message, time_stemp: Date.now() },
          })
            .then(() => {
              Notification.success({
                message: "Your message has been received.",
              });
              form.resetFields();
            })
            .catch(({ message }) => Notification.error({ message: message }));
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
          placeholder="Mobile number"
          type="number"
          icon={<PhoneOutlined />}
        />
        <TextAreaField required={true} />
        <Form.Item>
          <CommonBtn loading={loading}>Send Message</CommonBtn>
        </Form.Item>
      </Form>
    </WallCard>
  );
};
