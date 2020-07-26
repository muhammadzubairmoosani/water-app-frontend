import React from "react";
import {
  Layout,
  ProductCard,
  Pagination,
  Heading,
  ProductCardSkeleton,
} from "../../common";
import { data } from "../../../util/supplierCardData";
const SupplierList = () => {
  return (
    <div className="supplier_list_container">
      <Layout>
        <Heading heading="Supplier List" />
        {false ? (
          <ProductCardSkeleton />
        ) : (
          <>
            {data.map((item) => (
              <div key={item._id}>
                <ProductCard props={item} />
              </div>
            ))}
          </>
        )}
        <Pagination props="50" />
      </Layout>
    </div>
  );
};
export default SupplierList;
