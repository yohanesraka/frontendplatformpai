import { createApp } from 'vue';
import { createPinia } from 'pinia';

import theme from '@/plugins/theme';
import Toast from 'vue-toastification';
import installAxios from './services/api';

import App from './App.vue';
import router from './router';

import mixin from './mixins';

import '@/assets/vendor/toastifications.css';

const options = { containerClassName: 'notification', timeout: 5000 };

const app = createApp(App);

app.mixin(mixin);
app.use(createPinia());
app.use(router);
app.use(theme);
app.use(Toast, options);
app.use(installAxios);

app.mount('#app');
