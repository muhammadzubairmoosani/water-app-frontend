import React, { useState, useEffect } from "react";
import { _getSupplierDetail } from "../../../../service/methods";
import { useParams } from "react-router-dom";
import { Layout, toast, Heading } from "../../../common";
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
        setIsLoading(false);
      })
      .catch(({ message }) => {
        setIsLoading(false);
        toast.error(message);
      });
  }, [id]);

  return (
    <Layout className="supplier_detail">
      <Heading heading="Supplier Detail" />
      <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
        <Col xs={24} md={16} className="gutter-row">
          <LeftPanel
            images={images}
            name={supplierDetail.company_name}
            description={supplierDetail.description}
            loading={isLoading}
          />
        </Col>
        <Col xs={24} md={8} className="border gutter-row">
          <RightPanel {...supplierDetail} loading={isLoading} />
        </Col>
      </Row>
    </Layout>
  );
};

export default SupplierDetail;
