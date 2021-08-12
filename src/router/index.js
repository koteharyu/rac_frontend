import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import PageUserLogin from '../components/pages/PageUserLogin.vue';
import PageUserRegister from '../components/pages/PageUserRegister.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: PageUserLogin,
  },
  {
    path: '/signup',
    name: 'signup',
    component: PageUserRegister,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
