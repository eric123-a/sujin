import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  proxy: {
    '/api': {
      'target': 'http://127.0.0.1:3307/',
      'changeOrigin': true,
      'pathRewrite': { '^/api': '/api' },
    },
  },
  routes: [
    {
      exact: false, path: '/', component: '@/layouts/BasicLayout',
      routes: [
        { exact: true, path: '/', component: '@/pages/index/index' },
        { exact: true, path: '/login', component: '@/pages/UserPage/login/login' },
        { exact: true, path: '/register', component: '@/pages/UserPage/register/register' },
        { exact: true, path: '/detail', component: '@/pages/detailPage/detail' },
        { exact: true, path: '/article', component: '@/pages/article/article' },
        { exact: true, path: '/home', component: '@/pages/UserPage/home/index' },
      ],
    },
  ],
  fastRefresh: {},
});
