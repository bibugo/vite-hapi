import Layout from '@/components/layouts';

export default [
  {
    path: '/notice',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/pages/misc/notice/index.vue'),
      },
    ],
  },
];
