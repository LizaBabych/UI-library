import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/mybutton',
    name: 'mybutton',
    component: () => import('../views/MyButtonView.vue'),
  },
  {
    path: '/mygrid',
    name: 'mygrid',
    component: () => import('../views/MyGridView.vue'),
  },
  {
    path: '/mymodal',
    name: 'mymodal',
    component: () => import('../views/MyModalView.vue'),
  },
  {
    path: '/mycarousel',
    name: 'mycarousel',
    component: () => import('../views/MyCarouselView.vue'),
  },
  {
    path: '/mydatatable',
    name: 'mydatatable',
    component: () => import('../views/MyDataTableView.vue'),
  },
];

const router: VueRouter = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
