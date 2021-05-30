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
  SearchField
} from "../../common";

const SupplierList = () => {
  const history = useHistory();
  const [isfetch, setIsFetch] = useState(true);
  const [suppliers, setSuppliers] = useState([]);
  const [searchResult, setSearchResult] = useState([])


  const [{ }, getSuppliers] = useAxios({
    url: `/suppliers/${suppliers.length}/${9}`,
    method: "GET",
  });

  const fetchData = useCallback(() => {
    getSuppliers()
      .then(({ data }) => {
        if (!data.length) return setIsFetch(false);
        setSuppliers((suppliers) => [...suppliers, ...data]);
      })
      .catch(({ message }) => Notification.error({ message }));
  }, [suppliers.length]);

  useEffect(() => fetchData(), []);

  useEffect(() => console.log(searchResult), [searchResult]);

  return (
    <div className="supplier_list_container">
      <Layout>
        <Heading heading="Supplier List" />

        <SearchField url='suppliers' callback={setSearchResult} />
        {/* <SearchField url='suppliers' callback={e => console.log(e)} /> */}

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

          {
            // !searchResult.length ? 'no search result'
            // : 
            searchResult.length ?
              searchResult.map((supplier) => (
                <ProductCard product={supplier} key={supplier._id} />
              ))
              :

              !suppliers.length && !isfetch ? (
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
