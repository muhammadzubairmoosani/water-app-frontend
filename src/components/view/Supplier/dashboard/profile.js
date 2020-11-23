import React, { useState } from "react";
import { Row, Col, Form } from "antd";
import {
  TextField,
  MultiSelectDropDown,
  TextAreaField,
  ImageUploader,
  DynamicTextField,
} from "../../../common";
import areaList from "../../../../util/areaList.json";

const Profile = () => {
  const [fileList, setFileList] = useState([]);
  return (
    <Form name="profile" onFinish={(values) => console.log(values)}>
      <Row gutter={{ md: 12 }}>
        <Col xs={24} md={12} className="gutter-row">
          <TextField label="Owner/Supplier name" />
        </Col>
        <Col xs={24} md={12} className="gutter-row">
          <TextField label="Company name" />
        </Col>
        <Col xs={24} md={12} className="gutter-row">
          <TextField label="Company address" />
        </Col>
        <Col xs={24} md={12} className="gutter-row">
          <TextField label="Mobile" />
        </Col>
        <Col xs={24} className="gutter-row">
          <MultiSelectDropDown label="Area of working" list={areaList.areas} />
        </Col>
        <Col xs={24} md={12} className="gutter-row">
          <TextAreaField label="Description" />
        </Col>
        <Col xs={24} md={12} className="gutter-row">
          <ImageUploader
            fileList={fileList}
            setFileList={setFileList}
            name="image"
          />
        </Col>
        <Col xs={24} className="gutter-row">
          <DynamicTextField />
        </Col>
      </Row>
    </Form>
  );
};

export default Profile;
