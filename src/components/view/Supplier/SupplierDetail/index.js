import React, { useState, useEffect } from "react";
import { Layout, Notification } from "../../../common";
import { _getSupplierDetail } from "../../../../service/methods";
// import { CloudinaryContext, Transformation, Image } from "cloudinary-react";

const SupplierDetail = ({ match }) => {
  const [supplierDetail, setSupplierDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    _getSupplierDetail(match.params.id)
      .then(({ data }) => {
        setSupplierDetail(data);
        setIsLoading(false);
      })
      .catch(({ message }) => {
        setIsLoading(false);
        Notification.error({ message: message });
      });
  }, [match.params.id]);

  return (
    <Layout>
      <h1>Name: {isLoading ? "loading..." : supplierDetail.name}</h1>

      {/* <CloudinaryContext cloudName="pani-wala">
          <Image publicId="my-images/back_ckxp37">
            <Transformation width="400" crop="scale" overlay="cloudinary_icon"/>
          </Image>
        </CloudinaryContext> */}

      {/* <CloudinaryContext cloudName="demo">
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
        </CloudinaryContext> */}
    </Layout>
  );
};

export default SupplierDetail;
