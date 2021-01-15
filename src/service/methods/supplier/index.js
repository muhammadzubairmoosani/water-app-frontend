import api from "../../../config/axiosConfig";

const _getSupplierList = (skip, limit) =>
  api.get(`/suppliers/${skip}/${limit}`);

const _getSupplierDetail = (id) => api.get(`/supplier-detail/${id}`);

export { _getSupplierList, _getSupplierDetail };
