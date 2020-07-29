import api from "../../api";

const _supplierList = () => api.get(`/supplier-list`);

export { _supplierList };
