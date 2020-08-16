import api from "../../api";

const _getSupplierList = (skip, limit) =>
  api.get(`/supplier-list/${skip}/${limit}`);

const _getSupplierDetail = (id) => api.get(`/supplier-detail/${id}`);

export { _getSupplierList, _getSupplierDetail };
