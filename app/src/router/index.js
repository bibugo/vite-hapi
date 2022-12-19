import { createRouter, createWebHistory } from 'vue-router';

import miscRoutes from './modules/misc';
import projectRoutes from './modules/project';
import resultRoutes from './modules/result';

import Layout from '@/components/layouts';

const defaultRoutes = [
  {
    path: '/login',
    meta: { public: true },
    component: () => import('@/pages/login'),
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/pages/home'),
      },
    ],
  },
  { path: '/:pathMatch(.*)*', redirect: '/result/404' },
];

const routes = [...defaultRoutes, ...miscRoutes, { ...resultRoutes }, { ...projectRoutes }];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    };
  },
});

router.beforeEach(async () => {
  // console.log(to);
});

export default router;
