import React, { useState, useEffect } from "react";
import {
  Layout,
  ProductCard,
  Pagination,
  Heading,
  ProductCardSkeleton,
  Notification,
} from "../../common";
import { data } from "../../../util/supplierCardData";
import { _supplierList } from "../../../service/methods";

const SupplierList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    _supplierList()
      .then(({ data }) => setList(data))
      .catch(({ message }) => Notification.error({ message: message }));
  }, []);

  return (
    <div className="supplier_list_container">
      <Layout>
        <Heading heading="Supplier List" />
        {true ? (
          <>
            {data.map((item) => (
              <div key={item._id}>
                <ProductCard props={item} />
              </div>
            ))}
          </>
        ) : (
          <>
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </>
        )}
        <Pagination props="50" />
      </Layout>
    </div>
  );
};
export default SupplierList;
