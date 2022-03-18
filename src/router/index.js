import { createRouter, createWebHistory } from 'vue-router';
import { certDetail } from '@/utils/cookies';

import routes from './routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  base: import.meta.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const { ri } = certDetail();
  if (to.matched.some(({ meta }) => meta.requireAuth) && ri === '') {
    next({ name: 'Login' });
  } else if (to.matched.some(({ path }) => path.includes('auth')) && ri) {
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router;
