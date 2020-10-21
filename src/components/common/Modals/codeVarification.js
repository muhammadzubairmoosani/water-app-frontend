import React from "react";
import { Form, Input, Button, Modal } from "antd";
import { WallCard, CommonBtn } from "../";

const CodeVerificationModal = ({
  modal,
  setModal,
  codeVerify,
  mob,
  loading,
  reSendCode,
  reSendCodeLoading,
}) => (
  <Modal
    visible={true}
    // onOk={reSendCode}
    // confirmLoading={reSendCodeLoading}
    // okText={"Resend code"}
    footer={null}
    onCancel={() => setModal(!modal)}
    className="code_verification_modal"
  >
    <WallCard heading="Phone Verification">
      <Form layout="inline" onFinish={(values) => codeVerify(values.code)}>
        <Form.Item
          className="form_item"
          label={
            <b>
              Send verification code to your phone (
              <span>
                +92*******
                {mob.substr(mob.length - 3)}
              </span>
              ).
            </b>
          }
        />
        <Form.Item
          name="code"
          rules={[
            {
              required: true,
              max: 6,
              min: 6,
            },
          ]}
        >
          <div className="input_wrapper">
            <Input placeholder="Enter code" />
            <CommonBtn loading={loading}>Verify code</CommonBtn>
          </div>
        </Form.Item>
      </Form>
    </WallCard>
  </Modal>
);

export default CodeVerificationModal;
