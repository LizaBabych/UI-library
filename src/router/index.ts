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
    component: () => import('../views/mybutton.vue'),
  },
  {
    path: '/mygrid',
    name: 'mygrid',
    component: () => import('../views/mygrid.vue'),
  },
  {
    path: '/mymodal',
    name: 'mymodal',
    component: () => import('../views/mymodal.vue'),
  },
  {
    path: '/mynavbar',
    name: 'mynavbar',
    component: () => import('../views/mynavbar.vue'),
  },
  {
    path: '/mymodal',
    name: 'mymodal',
    component: () => import('../views/mymodal.vue'),
  },
  {
    path: '/mycarousel',
    name: 'mycarousel',
    component: () => import('../views/mycarousel.vue'),
  },
  {
    path: '/mydatatable',
    name: 'mydatatable',
    component: () => import('../views/mydatatable.vue'),
  },
];

const router: VueRouter = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
