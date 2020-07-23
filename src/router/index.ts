import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/home',
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

const router = new VueRouter({
  routes,
});

export default router;
