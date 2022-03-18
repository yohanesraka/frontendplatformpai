import { baseApi } from '@/services/api';
import { subApiUrl } from '@/utils/constant';

const login = (req) => baseApi.post(`/login`, req);
const logout = () => baseApi.post(`${subApiUrl.admin}/logout`);

export { login, logout };
