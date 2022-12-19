import Layout from '@/components/layouts';

export default {
  path: '/project',
  name: 'Project',
  component: Layout,
  redirect: '/project/list',
  meta: { title: '项目管理', icon: 'check-circle' },
  children: [
    {
      path: 'list',
      name: 'Project/List',
      component: () => import('@/pages/project/list/index.vue'),
      meta: { title: '成功页' },
    },
  ],
};
