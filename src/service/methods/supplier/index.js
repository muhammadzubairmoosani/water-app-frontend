import api from "../../api";

const _getSupplierList = () => api.get(`/supplier-list`);

const _getSupplierDetail = (id) => api.get(`/supplier-detail/${id}`);

export { _getSupplierList, _getSupplierDetail };
