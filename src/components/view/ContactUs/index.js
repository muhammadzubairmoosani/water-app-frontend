import React, { useEffect } from "react";
import { Form } from "antd";
import { UserOutlined, PhoneOutlined } from "@ant-design/icons";
import { WallCard, TextField, TextAreaField, CommonBtn } from "../../common";
import { useDispatch, useSelector } from "react-redux";
import { NotificationMiddleware } from "../../../store/middlewares";

export const ContactUs = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { isLoading, isSuccess } = useSelector(
    (store) => store.notificationReducer
  );

  const onSubmit = (values) => {
    dispatch(NotificationMiddleware.sendNotification(values));
  };

  useEffect(() => {
    isSuccess && form.resetFields();
  }, [form, isSuccess]);

  return (
    <WallCard className="contact_us" heading="Contact Us">
      <Form form={form} onFinish={onSubmit}>
        <TextField
          required={true}
          name="username"
          placeholder="Name"
          icon={<UserOutlined />}
        />
        <TextField
          required={true}
          name="phoneNumber"
          min={11}
          max={11}
          placeholder="Mobile number"
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
