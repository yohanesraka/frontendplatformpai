import SidebarPlugin from '@/components/SidebarPlugin';

import GlobalComponents from './globalComponents';
import GlobalDirectives from './globalDirectives';

import '@/assets/vendor/fontawesome-free/css/all.min.css';
import '@/assets/sass/argon.scss';

import 'bootstrap/dist/js/bootstrap.min';

export default {
  install(app) {
    app.use(SidebarPlugin);
    app.use(GlobalComponents);
    app.use(GlobalDirectives);
  },
};
