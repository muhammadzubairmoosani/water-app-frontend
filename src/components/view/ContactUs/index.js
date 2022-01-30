import React, { useState } from "react";
import { Form } from "antd";
import { UserOutlined, PhoneOutlined } from "@ant-design/icons";
import {
  WallCard,
  TextField,
  TextAreaField,
  CommonBtn,
  toast,
} from "../../common";
import { db } from '../../../config'
import { addDoc, collection } from 'firebase/firestore'

export const ContactUs = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState();

  const onSubmit = (values) => {
    setLoading(true)
    const { name, mobile, message } = values;
    const schema = {
      username: name,
      phoneNumber: mobile,
      message
    }

    addDoc(collection(db, "notifications"), schema)
      .then(() => {
        form.resetFields();
        toast.success("Your message has been received.");
        setLoading(false)
      })
      .catch((error) => {
        toast.success(error);
        setLoading(false)
      });

  }

  return (
    <WallCard className="contact_us" heading="Contact Us">
      <Form form={form} onFinish={onSubmit}>
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
