import React from "react";
import { Pagination } from "antd";
const WebPagination = ({ props = 50 }) => (
  <Pagination defaultCurrent={1} total={props} />
);
export default WebPagination;
