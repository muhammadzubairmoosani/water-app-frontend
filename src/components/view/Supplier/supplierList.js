import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { _getSupplierList } from "../../../service/methods";
import { Empty } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import useAxios from "axios-hooks";
import {
  Layout,
  ProductCard,
  Heading,
  ProductCardSkeleton,
  Notification,
  CommonBtn,
} from "../../common";

const SupplierList = () => {
  const history = useHistory();
  const [isfetch, setIsFetch] = useState(true);
  const [suppliers, setSuppliers] = useState([]);

  const [{}, getSuppliers] = useAxios({
    url: `/suppliers/${suppliers.length}/${9}`,
    method: "GET",
  });

  const fetchData = useCallback(() => {
    getSuppliers()
      .then(({ data }) => {
        if (!data.length) return setIsFetch(false);
        setSuppliers((suppliers) => [...suppliers, ...data]);
      })
      .catch((error) => {
        console.log(error);
        Notification.error({ message: error?.response?.data?.message });
      });
  }, [suppliers.length]);

  useEffect(() => fetchData(), []);

  return (
    <div className="supplier_list_container">
      <Layout>
        <Heading heading="Supplier List" />
        <InfiniteScroll
          className="list"
          dataLength={suppliers.length}
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
          {!suppliers.length && !isfetch ? (
            <>
              <Empty image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg">
                <CommonBtn block={false} onClick={() => history.goBack()}>
                  Go Back
                </CommonBtn>
              </Empty>
            </>
          ) : (
            suppliers.map((supplier) => (
              <ProductCard product={supplier} key={supplier._id} />
            ))
          )}
        </InfiniteScroll>
      </Layout>
    </div>
  );
};

export default SupplierList;
