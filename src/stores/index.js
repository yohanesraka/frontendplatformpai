import { defineStore } from 'pinia';

const useSiteMeta = defineStore('siteMeta', {
  state: () => ({
    site: {
      title: 'Argon Dashboard',
      description: '',
      logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%"><text font-family="Arial" font-size="16" font-weight="600" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">Argon Dashboard</text></svg>',
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%"><text font-family="Arial" font-size="36" font-weight="600" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">Argon Dashboard</text></svg>',
      profile: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.24 72 72S295.8 272 256 272c-39.76 0-72-32.24-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z"/></svg>',
    },
  }),
  getters: {
    siteMeta: (state) => state.site,
  },
  actions: {
  },
});

export default useSiteMeta;
