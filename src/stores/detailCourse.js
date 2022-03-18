import { defineStore } from 'pinia';

const useDetailCourse = defineStore('siteMeta', {
  state: () => ({
    detail: [],
  }),
  getters: {
    siteMeta: (state) => state.site,
  },
  actions: {
    callDetailCourse() {
      this.detail = [
        {
          id: 1,
          name: 'Dummy',
        },
      ];
    },
  },
});

export default useDetailCourse;
