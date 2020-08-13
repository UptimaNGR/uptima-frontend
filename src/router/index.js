import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: () => import(/* webpackChunkName: "contact-us" */ '../views/ContactUs.vue')
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
