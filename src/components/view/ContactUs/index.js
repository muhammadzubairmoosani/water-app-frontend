import React, { useRef } from "react";
import { Form } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { _contactUs } from "../../../service/methods";
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
          <CommonBtn loading={contactUsIsLoading}>Send Message</CommonBtn>
        </Form.Item>
      </Form>
    </WallCard>
  );
};
