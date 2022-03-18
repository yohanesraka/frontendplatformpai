import DashboardLayout from '@/layout/Pemateri/DashboardLayout.vue';

import { certDetail } from '@/utils/cookies';

const dashboardRoutes = {
  path: '/pemateri',
  component: DashboardLayout,
  beforeEnter: (to, from, next) => {
    const { ri } = certDetail();
    if (to.matched.some(({ meta }) => meta.requiresAuth) && ri === '') {
      next({ name: 'Login' });
    } else {
      next();
    }
  },
  children: [
    {
      path: '',
      name: 'Home',
      component: () => import('@/views/Pemateri/index.vue'),
      // meta: { requiresAuth: true },
    },
    // Discussion
    {
      path: 'discussion',
      name: 'Discussion',
      component: () => import('@/views/Pemateri/Discussion/index.vue'),
      // meta: { requiresAuth: true },
    },
    {
      path: 'discussion/create',
      name: 'Create Discus',
      component: () => import('@/views/Pemateri/Discussion/index.vue'),
      // meta: { requiresAuth: true },
    },
    {
      path: 'discussion/edit',
      name: 'Edit Discussion',
      component: () => import('@/views/Pemateri/Discussion/index.vue'),
      // meta: { requiresAuth: true },
    },
    {
      path: 'discussion/show',
      name: 'Show Discussion',
      component: () => import('@/views/Pemateri/Discussion/index.vue'),
      // meta: { requiresAuth: true },
    },
    // Course
    {
      path: 'course',
      name: 'Course',
      component: () => import('@/views/Pemateri/Course/index.vue'),
      // meta: { requireAuth: true },
    },
    {
      path: 'course/create',
      name: 'Create Course',
      component: () => import('@/views/Pemateri/Course/Create.vue'),
      // meta: { requireAuth: true },
    },
    {
      path: 'course/edit',
      name: 'Edit Course',
      component: () => import('@/views/Pemateri/Course/Edit.vue'),
      // meta: { requireAuth: true },
    },
    {
      path: 'course/:id',
      name: 'Show Course',
      component: () => import('@/views/Pemateri/Course/Show.vue'),
      // meta: { requireAuth: true },
    },
    // examination
    {
      path: 'course/exam',
      name: 'Exam Course',
      component: () => import('@/views/Pemateri/Course/Exam/index.vue'),
      // meta: { requireAuth: true },
    },
    // assessment
    {
      path: 'course/assessment',
      name: 'Assessment Course',
      component: () => import('@/views/Pemateri/Course/Assessment/index.vue'),
      // meta: { requireAuth: true },
    },
  ],
};

export default dashboardRoutes;
