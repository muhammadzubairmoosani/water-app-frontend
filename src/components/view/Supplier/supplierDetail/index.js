import React, { useState, useEffect } from "react";
import { _getSupplierDetail } from "../../../../service/methods";
import { useParams } from "react-router-dom";
import { Layout, Notification, Heading } from "../../../common";
import { Row, Col } from "antd";
import RightPanel from "./rightPanel";
import LeftPanel from "./leftPanel";

const SupplierDetail = () => {
  const [supplierDetail, setSupplierDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState("");
  const { id } = useParams();

  useEffect(() => {
    _getSupplierDetail(id)
      .then(({ data }) => {
        setSupplierDetail(data);
        setImages(data.images);
        console.log(data);
        setIsLoading(false);
      })
      .catch(({ message }) => {
        setIsLoading(false);
        Notification.error({ message: message });
      });
  }, [id]);

  return (
    <Layout className="supplier_detail">
      <Heading heading="Supplier Detail" />
      <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
        <Col xs={24} md={16} className="gutter-row">
          <LeftPanel />
        </Col>
        <Col xs={24} md={8} className="border gutter-row">
          <RightPanel />
        </Col>
      </Row>
    </Layout>
  );
};

export default SupplierDetail;

// Cloudinary image with water mark code start
// import { CloudinaryContext, Transformation, Image } from "cloudinary-react";

{
  /* <CloudinaryContext cloudName="pani-wala">
          <Image publicId="my-images/back_ckxp37">
            <Transformation width="400" crop="scale" overlay="cloudinary_icon"/>
          </Image>
        </CloudinaryContext> */
}

{
  /* <CloudinaryContext cloudName="demo">
          <Image publicId="sample">
            <Transformation
              overlay="cloudinary_icon"
              gravity="south_east"
              x="5"
              y="5"
              width="50"
              opacity="60"
              effect="brightness:200"
            />

          </Image>
        </CloudinaryContext> */
}
// Cloudinary image with water mark code end
