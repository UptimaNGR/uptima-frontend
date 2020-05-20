import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Solutions from '../views/Solutions.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/solutions',
        name: 'Solutions',
        component: Solutions
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
