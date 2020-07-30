import React, { useState, useEffect } from "react";
import {
  Layout,
  ProductCard,
  Pagination,
  Heading,
  ProductCardSkeleton,
  Notification,
} from "../../common";
import { _getSupplierList } from "../../../service/methods";

const SupplierList = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    _getSupplierList()
      .then(({ data }) => {
        setList(data);
        setIsLoading(false);
      })
      .catch(({ message }) => {
        setIsLoading(false);
        Notification.error({ message: message });
      });
  }, []);

  return (
    <div className="supplier_list_container">
      <Layout>
        <Heading heading="Supplier List" />
        {isLoading ? (
          <>
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </>
        ) : (
          <>
            {list.map((supplier) => (
              <div key={supplier._id}>
                <ProductCard product={supplier} />
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
