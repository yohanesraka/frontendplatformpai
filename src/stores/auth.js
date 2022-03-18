import { defineStore } from 'pinia';

import { login } from '@/services/auth';
import { setCk, delCk, certDetail } from '@/utils/cookies';

import d from 'dayjs';

const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    userId: '',
    role: '',
    currentUser: '',
  }),
  getters: {
    userInfo: (state) => ({
      userId: state.userId,
      role: state.role,
      currentUser: state.currentUser,
    }),
    isLoggedIn: (state) => !!state.userId,
  },
  actions: {
    async setUserInfo() {
      try {
        const { i, ri, n } = certDetail();
        if (!i && !ri && !n) throw new Error('No user info');
        this.role = ri === 1 ? 'admin' : '';
        this.userId = i;
        this.currentUser = n;
        return 'User Authenticated';
      } catch ({ message }) {
        this.role = '';
        this.userId = '';
        this.currentUser = '';
        throw message;
      }
    },
    async callLogin(payload) {
      try {
        const { data } = await login(payload);
        console.log(data)
        setCk('CERT', data.accessToken, { datetime: d(data.expiresAt) });
        this.setUserInfo();
        return 'Login success!';
      } catch ({ error, message }) {
        throw (error || message) ?? 'Login failed!';
      }
    },
    async callLogout() {
      try {
        const { i, ri, n } = certDetail();
        if (i || ri || n) delCk('CERT');
        this.setUserInfo();
        return 'Logout success!';
      } catch ({ error, message }) {
        throw (error || message) ?? 'Logout failed!';
      }
    },
  },
});

export default useAuthStore;
