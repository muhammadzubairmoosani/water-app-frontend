import React from "react";
import { Layout, SupplierCard, Pagination, Heading } from "../../common/index";
import { data } from "../../../util/supplierCardData";
const SupplierList = () => {
  return (
    <div className="supplier_list_container">
      <Layout>
        <Heading heading="Supplier List" />
        {data.map((item) => (
          <div key={item._id}>
            <SupplierCard props={item} />
          </div>
        ))}
        <Pagination props="50" />
      </Layout>
    </div>
  );
};
export default SupplierList;
