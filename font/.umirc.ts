import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  proxy: {

    '/api': {
      target: 'http://47.114.86.154:30011',
      changeOrigin: true,
      pathRewrite: { '^/api': '/api' },
    },
  },
  routes: [
    {
      exact: false, path: '/', component: '@/layouts/BasicLayout',
      routes: [
        { exact: true, path: '/', component: '@/pages/index/index' },
        { exact: true, path: '/login', component: '@/pages/UserPage/login/login' },
        { exact: true, path: '/register', component: '@/pages/UserPage/register/register' },
      ],
    },
  ],
  fastRefresh: {},
});
