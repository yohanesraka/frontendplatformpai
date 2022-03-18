import { defineStore } from 'pinia';

const useCourseStore = defineStore('coursestore', {
  state: () => ({
    course: [
      {
        id: 1,
        name: 'Bima Setyawan',
        email: 'bimasty@gmail.com',
      },
      {
        id: 2,
        name: 'Rifky Hadian',
        email: 'rifky@gmail.com',
      },
      {
        id: 3,
        name: 'Gedang Hadian',
        email: 'rifky@gmail.com',
      },
    ],
  }),
  getters: {
    getName: (state) => state.course,
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

export default useCourseStore;
