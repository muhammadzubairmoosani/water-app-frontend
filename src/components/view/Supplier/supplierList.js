import React, { useState, useEffect, useCallback } from "react";
import {
  Layout,
  ProductCard,
  Heading,
  ProductCardSkeleton,
  Notification,
} from "../../common";
import { useHistory } from "react-router-dom";
import { _getSupplierList } from "../../../service/methods";
import { Empty, Button } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

const SupplierList = () => {
  const history = useHistory();
  const [supplierList, setSupplierList] = useState([]);
  const [isfetch, setIsFetch] = useState(true);

  const fetchData = useCallback(() => {
    _getSupplierList(supplierList.length, 9)
      .then(({ data }) => {
        console.log(data.length);
        if (!data.length) return setIsFetch(false);
        setSupplierList((supplierList) => [...supplierList, ...data]);
      })
      .catch(({ message }) => {
        Notification.error({ message: message });
      });
  }, [supplierList.length]);

  useEffect(() => fetchData(), []);

  return (
    <div className="supplier_list_container">
      <Layout>
        <Heading heading="Supplier List" />
        <InfiniteScroll
          className="layout"
          dataLength={supplierList.length}
          next={fetchData}
          hasMore={isfetch}
          loader={
            <div className="skeleton_wrapper">
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
            </div>
          }
        >
          {!supplierList.length && !isfetch ? (
            <>
              <Empty image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg">
                <Button type="primary" onClick={() => history.goBack()}>
                  Go Back
                </Button>
              </Empty>
            </>
          ) : (
            supplierList.map((supplier) => (
              <ProductCard product={supplier} key={supplier._id} />
            ))
          )}
        </InfiniteScroll>
      </Layout>
    </div>
  );
};
export default SupplierList;
