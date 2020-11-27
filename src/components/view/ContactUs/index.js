import React, { useRef } from "react";
import { Form } from "antd";
import { UserOutlined, PhoneOutlined } from "@ant-design/icons";
import { WallCard, TextField, TextAreaField, CommonBtn } from "../../common";
import { useDispatch, useSelector } from "react-redux";
import { commonEpic } from "../../../store/epics";

export const ContactUs = () => {
  const form = useRef(null);
  const dispatch = useDispatch();
  const { contactUsIsLoading } = useSelector(
    ({ commonReducer }) => commonReducer
  );

  return (
    <WallCard className="contact_us" heading="Contact Us">
      <Form
        ref={form}
        onFinish={(values) => dispatch(commonEpic.contactUs(values, form))}
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
          <CommonBtn loading={contactUsIsLoading}>Send Message</CommonBtn>
        </Form.Item>
      </Form>
    </WallCard>
  );
};
