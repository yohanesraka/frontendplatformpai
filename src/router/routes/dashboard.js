import DashboardLayout from '@/layout/Admin/DashboardLayout.vue';

import { certDetail } from '@/utils/cookies';

const dashboardRoutes = {
  path: '/admin',
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
      name: 'Dashboard',
      component: () => import('@/views/Admin/index.vue'),
      // meta: { requiresAuth: true },
    },
    // user student
    {
      path: 'student',
      name: 'Student',
      component: () => import('@/views/Admin/Student/index.vue'),
      // meta: { requiresAuth: true },
    },
    {
      path: 'student/create',
      name: 'Create Student',
      component: () => import('@/views/Admin/Student/Create.vue'),
      // meta: { requiresAuth: true },
    },
    {
      path: 'student/edit',
      name: 'Edit Student',
      component: () => import('@/views/Admin/Student/Edit.vue'),
      // meta: { requiresAuth: true },
    },
    {
      path: 'student/:id',
      name: 'Show Student',
      component: () => import('@/views/Admin/Student/Show.vue'),
      // meta: { requiresAuth: true },
    },
    // Discussion
    {
      path: 'discussion',
      name: 'Discussion_',
      component: () => import('@/views/Admin/Discussion/index.vue'),
      // meta: { requiresAuth: true },
    },
    {
      path: 'discussion/create',
      name: 'Create_Discus',
      component: () => import('@/views/Admin/Discussion/index.vue'),
      // meta: { requiresAuth: true },
    },
    {
      path: 'discussion/edit',
      name: 'Edit_Discussion',
      component: () => import('@/views/Admin/Discussion/index.vue'),
      // meta: { requiresAuth: true },
    },
    {
      path: 'discussion/show',
      name: 'Show_Discussion',
      component: () => import('@/views/Admin/Discussion/index.vue'),
      // meta: { requiresAuth: true },
    },
    // Pemateri
    {
      path: 'pemateri',
      name: 'Pemateri',
      component: () => import('@/views/Admin/Pemateri/index.vue'),
      // meta: { requiresAuth: true },
    },
    {
      path: 'pemateri/create',
      name: 'Create_Pemateri',
      component: () => import('@/views/Admin/Pemateri/Create.vue'),
      // meta: { requiresAuth: true },
    },
    {
      path: 'pemateri/edit',
      name: 'Edit_Pemateri',
      component: () => import('@/views/Admin/Pemateri/Edit.vue'),
      // meta: { requiresAuth: true },
    },
    {
      path: 'pemateri/show',
      name: 'Show_Pemateri',
      component: () => import('@/views/Admin/Pemateri/Show.vue'),
      // meta: { requiresAuth: true },
    },
    // Course
    {
      path: 'course',
      name: 'List_Course',
      component: () => import('@/views/Admin/Course/index.vue'),
      // meta: { requireAuth: true },
    },
    {
      path: 'course/create',
      name: 'Create_Course',
      component: () => import('@/views/Admin/Course/Create.vue'),
      // meta: { requireAuth: true },
    },
    {
      path: 'course/edit',
      name: 'Edit_Course',
      component: () => import('@/views/Admin/Course/Edit.vue'),
      // meta: { requireAuth: true },
    },
    {
      path: 'course/:id',
      name: 'Show_Course',
      component: () => import('@/views/Admin/Course/Show.vue'),
      // meta: { requireAuth: true },
    },
    // examination
    {
      path: 'course/exam',
      name: 'Exam_Course',
      component: () => import('@/views/Admin/Course/Exam/index.vue'),
      // meta: { requireAuth: true },
    },
    // assessment
    {
      path: 'course/assessment',
      name: 'Assessment_Course',
      component: () => import('@/views/Admin/Course/Assessment/index.vue'),
      // meta: { requireAuth: true },
    },
  ],
};

export default dashboardRoutes;
