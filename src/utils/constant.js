const host = import.meta.env.VITE_BASE_API_URL;

const baseApiUrl = `${host}/`;

const subApiUrl = {
  admin: 'dashboard',
  induk: 'induk',
  karyawan: 'karyawan',
  user: 'user',
  distance: 'distance',
};

export {
  host, baseApiUrl, subApiUrl,
};
