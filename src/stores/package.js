import * as packages from '@/services/package';

const dPackage = {
  namespaced: true,
  state: () => ({
    listPackage: [],
  }),
  mutations: {
    setListPackage(state, payload) {
      const self = state;
      self.listPackage = payload;
    },
  },
  actions: {
    async callListPackage({ commit }) {
      try {
        const { data } = await packages.list();
        commit('setListPackage', data);
      } catch ({ error }) {
        commit('setListPackage', []);
        throw error;
      }
    },
    async callAddPackage(store, request) {
      try {
        await packages.add(request);
      } catch ({ error }) {
        throw error;
      }
    },
    async callEditPackage(store, request) {
      try {
        await packages.edit(request);
      } catch ({ error }) {
        throw error;
      }
    },
    async callDelPackage(store, request) {
      try {
        await packages.del(request);
      } catch ({ error }) {
        throw error;
      }
    },
  },
  getters: {
    listPackage: (state) => state.listPackage,
  },
};

export default dPackage;
