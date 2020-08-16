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
import { Empty } from "antd";

const SupplierList = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    _getSupplierList(0, 9)
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
        ) : list.length ? (
          <>
            {list.map((supplier) => (
              <div key={supplier._id}>
                <ProductCard product={supplier} />
              </div>
            ))}
          </>
        ) : (
          <Empty image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg" />
          // <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}

        <Pagination props="50" />
      </Layout>
    </div>
  );
};
export default SupplierList;
