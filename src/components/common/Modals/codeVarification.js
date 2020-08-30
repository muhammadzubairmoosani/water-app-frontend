import React from "react";
import { Form, Input, Button, Modal } from "antd";
import { WallCard } from "../";

const CodeVarificationModal = ({
  modal,
  setModal,
  reSendCode,
  codeVerify,
  mob,
  loading,
  reSendCodeLoading,
}) => (
  <Modal
    visible={modal}
    onOk={reSendCode}
    confirmLoading={reSendCodeLoading}
    okText={"Resend code"}
    onCancel={() => setModal(!modal)}
    className="code_varification_modal"
  >
    <WallCard heading="Phone Varification">
      <Form layout="inline" onFinish={(values) => codeVerify(values.code)}>
        <Form.Item
          className="form_item"
          label={
            <b>
              Send varification code to your phone (
              <span>
                +92*******
                {mob.substr(mob.length - 3)}
              </span>
              ).
            </b>
          }
        ></Form.Item>
        <Form.Item
          name="code"
          rules={[
            {
              required: true,
              max: 6,
              min: 6,
              message: "Please enter the 6-digit code you got!",
            },
          ]}
        >
          <div className="input_wrapper">
            <Input placeholder="Enter code" />
            <Button type="primary" loading={loading} htmlType="submit">
              Verify code
            </Button>
          </div>
        </Form.Item>
      </Form>
    </WallCard>
  </Modal>
);

export default CodeVarificationModal;
