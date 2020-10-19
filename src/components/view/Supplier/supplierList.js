import React, { useState, useEffect, useCallback } from "react";
import {
  Layout,
  ProductCard,
  Heading,
  ProductCardSkeleton,
  Notification,
  CommonBtn,
} from "../../common";
import { useHistory } from "react-router-dom";
import { _getSupplierList } from "../../../service/methods";
import { Empty } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

const SupplierList = () => {
  const history = useHistory();
  const [supplierList, setSupplierList] = useState([]);
  const [isfetch, setIsFetch] = useState(true);

  const fetchData = useCallback(() => {
    _getSupplierList(supplierList.length, 9)
      .then(({ data }) => {
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
          className="list"
          dataLength={supplierList.length}
          next={fetchData}
          hasMore={isfetch}
          loader={
            <div className="list">
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
                <CommonBtn block={false} onClick={() => history.goBack()}>
                  Go Back
                </CommonBtn>
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
