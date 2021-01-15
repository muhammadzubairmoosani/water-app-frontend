import React from "react";
import { Form, Modal, Row, Col } from "antd";
import { WallCard, CommonBtn, TextField } from "../";
import { LockOutlined } from "@ant-design/icons";

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
    visible={modal}
    footer={null}
    onCancel={() => setModal(!modal)}
    className="code_verification_modal"
    // onOk={reSendCode}
    // confirmLoading={reSendCodeLoading}
    // okText={"Resend code"}
  >
    <WallCard heading="Phone Verification">
      <Form layout="inline" onFinish={(values) => codeVerify(values.code)}>
        <div className="title_container">
          <b>
            Send verification code to your phone (
            <span>
              +92*******
              {mob.substr(mob.length - 3)}
            </span>
            ).
          </b>
        </div>
        <Row className="input_wrapper">
          <Col xs={24} sm={18}>
            <TextField
              style={{ marginRight: "0" }}
              required={true}
              name="code"
              message="Enter a 6-digit combination"
              min={6}
              max={6}
              placeholder="Enter 6-digit code here"
              icon={<LockOutlined />}
            />
          </Col>
          <Col xs={24} sm={6}>
            <CommonBtn loading={loading}>Verify code</CommonBtn>
          </Col>
        </Row>
      </Form>
    </WallCard>
  </Modal>
);

export default CodeVerificationModal;
