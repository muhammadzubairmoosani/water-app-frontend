import React, { useState } from "react";
import { Row, Col, Form } from "antd";
import areaList from "../../../../util/areaList.json";
import {
  TextField,
  MultiSelectDropDown,
  TextAreaField,
  ImageUploader,
  DynamicTextField,
  CommonBtn,
} from "../../../common";

const Profile = () => {
  const [fileList, setFileList] = useState([]);
  return (
    <Form
      name="profile"
      className="supplier_profile"
      onFinish={(values) => console.log(values)}
    >
      <Row gutter={{ md: 12 }}>
        <Col xs={24} className="gutter-row">
          <ImageUploader
            fileList={fileList}
            setFileList={setFileList}
            name="image"
          />
        </Col>
        <Col xs={24} md={12} className="gutter-row">
          <TextField name="name" label="Dealer/Supplier name" />
        </Col>
        <Col xs={24} md={12} className="gutter-row">
          <TextField name="company_name" label="Company name" />
        </Col>
        <Col xs={24} md={12} className="gutter-row">
          <TextField name="address" label="Company address" />
        </Col>
        <Col xs={24} md={12} className="gutter-row">
          <TextField name="mobile" label="Mobile 1" />
        </Col>
        <Col xs={24} md={12} className="gutter-row">
          <TextField name="mobile" label="Mobile 2" />
        </Col>
        <Col xs={24} className="gutter-row">
          <MultiSelectDropDown label="Area of working" list={areaList.areas} />
        </Col>
        <Col xs={24} className="gutter-row">
          <TextAreaField label="Description" />
        </Col>
        <Col xs={24} className="gutter-row">
          <DynamicTextField />
        </Col>
        <Col xs={0} md={12} className="gutter-row"></Col>
        <Col xs={24} md={12} className="gutter-row">
          <CommonBtn>Update</CommonBtn>
        </Col>
      </Row>
    </Form>
  );
};

export default Profile;
