import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { _getSupplierList } from "../../../service/methods";
import { Empty, Row, Col } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import useAxios from "axios-hooks";
import {
  Layout,
  ProductCard,
  Heading,
  ProductCardSkeleton,
  Notification,
  CommonBtn,
  SearchField,
  Spinner
} from "../../common";
import lodash from 'lodash'

const SupplierList = () => {
  const history = useHistory();
  const [isfetch, setIsFetch] = useState(true);
  const [suppliers, setSuppliers] = useState([]);
  const [key, setKey] = useState(null)
  const [isSearchResultMessage, setIsSearchResultMessage] = useState(false)

  const [{ loading }, getSuppliers] = useAxios({
    url: `/suppliers/${key ? 0 : suppliers.length}/${9}/${key}`,
    method: "GET",
  }, { manual: true });


  const fetchData = useCallback(() => {
    getSuppliers()
      .then(({ data }) => {
        if (!data.length && key) {
          setSuppliers([])
          setIsFetch(false)
          return setIsSearchResultMessage(true)
        };

        if (!data.length) return setIsFetch(false);

        if (data.length) setIsSearchResultMessage(false);

        setSuppliers((suppliers) => key ? data : [...suppliers, ...data]);
      })
      .catch(({ message }) => Notification.error({ message }));
  }, [suppliers.length, key]);

  useEffect(() => {
    fetchData()
  }, [key])

  return (
    <div className="supplier_list_container">
      <Layout>
        <Heading heading="Supplier List" />

        <Row>
          <Col span={8} offset={16}>
            <SearchField callback={setKey} />
          </Col>
        </Row>

        <InfiniteScroll
          className="list"
          dataLength={suppliers.length}
          next={fetchData}
          hasMore={isfetch}
          loader={<div className="list">{lodash.range(6).map(i => <ProductCardSkeleton key={i} />)}</div>}
        >
          {
            loading ?
              <Spinner />
              :
              isSearchResultMessage && key ? 'No search result.'
                :
                !suppliers?.length && !isfetch ? (
                  <Empty image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg">
                    <CommonBtn block={false} onClick={() => history.goBack()}>
                      Go Back
                    </CommonBtn>
                  </Empty>
                ) : (
                  suppliers?.map((supplier) => (
                    <ProductCard product={supplier} key={supplier._id} />
                  ))
                )
          }
        </InfiniteScroll>
      </Layout>
    </div>
  );
};

export default SupplierList;
