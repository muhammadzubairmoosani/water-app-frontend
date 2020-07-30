import React, { useState, useEffect } from "react";
import { Layout, Notification } from "../../../common";
import { _getSupplierDetail } from "../../../../service/methods";

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
  }, []);

  return (
    <Layout>
      <h1>Name: {isLoading ? "loading..." : supplierDetail.name}</h1>
    </Layout>
  );
};

export default SupplierDetail;
