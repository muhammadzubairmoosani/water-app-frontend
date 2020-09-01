import React, { useState, useEffect } from "react";
import { _getSupplierDetail } from "../../../../service/methods";
import { useParams } from "react-router-dom";
import { Layout, Notification, Heading, GrayCard } from "../../../common";
import { Row, Col, Avatar, Descriptions } from "antd";

const SupplierDetail = () => {
  const [supplierDetail, setSupplierDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState("");
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
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
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} sm={16} className="gutter-row">
          <div className="gellery_wrapper">
            <img
              src={require("../../../../assets/images/slider1.webp")}
              // src={images && images[selectedImgIndex]}
              width="100%"
              alt="carousel_img"
            />
            <div className="thumbnail_wrapper">
              {(images || [1,2,3]).map((image, index) => (
                <Avatar
                  key={index}
                  onClick={() => setSelectedImgIndex(index)}
                  className={`avatar ${
                    index === selectedImgIndex ? "selected_img" : ""
                  }`}
                  shape="square"
                  size={74}
                  src={require("../../../../assets/images/slider1.webp")}
                  // src={image}
                />
              ))}
            </div>
          </div>
          <GrayCard title="About Us">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </GrayCard>
        </Col>
        <Col xs={24} sm={8} className="border gutter-row">
          hello world
        </Col>
      </Row>
    </Layout>
  );
};

export default SupplierDetail;

{
  /* <h1>Name: {isLoading ? "loading..." : supplierDetail.name}</h1> */
}

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
