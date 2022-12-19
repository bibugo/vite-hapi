import Layout from '@/components/layouts';

export default {
  path: '/result',
  name: 'Result',
  component: Layout,
  redirect: '/result/success',
  meta: { title: '结果页', icon: 'check-circle' },
  children: [
    {
      path: 'success',
      name: 'ResultSuccess',
      component: () => import('@/pages/result/success.vue'),
      meta: { title: '成功页' },
    },
    {
      path: 'fail',
      name: 'ResultFail',
      component: () => import('@/pages/result/fail.vue'),
      meta: { title: '失败页' },
    },
    {
      path: 'network-error',
      name: 'ResultNetworkError',
      component: () => import('@/pages/result/network-error.vue'),
      meta: { title: '网络异常' },
    },
    {
      path: '403',
      name: 'Result403',
      component: () => import('@/pages/result/403.vue'),
      meta: { title: '无权限' },
    },
    {
      path: '404',
      name: 'Result404',
      component: () => import('@/pages/result/404.vue'),
      meta: { title: '访问页面不存在页' },
    },
    {
      path: '500',
      name: 'Result500',
      component: () => import('@/pages/result/500.vue'),
      meta: { title: '服务器出错页' },
    },
    {
      path: 'browser-incompatible',
      name: 'ResultBrowserIncompatible',
      component: () => import('@/pages/result/browser-incompatible.vue'),
      meta: { title: '浏览器不兼容页' },
    },
    {
      path: 'maintenance',
      name: 'ResultMaintenance',
      component: () => import('@/pages/result/maintenance.vue'),
      meta: { title: '系统维护页' },
    },
  ],
};
