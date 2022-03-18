import { baseApi } from '@/services/api';
import { subApiUrl } from '@/utils/constant';

const list = () => baseApi.get(`${subApiUrl.admin}/package`);
const add = (req) => baseApi.post(`${subApiUrl.admin}/package`, req);
const edit = (req) => baseApi.put(`${subApiUrl.admin}/package`, req);
const del = (req) => baseApi.delete(`${subApiUrl.admin}/package/${req.id}`);

export {
  list, add, edit, del,
};
