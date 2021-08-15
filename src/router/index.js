import Vue from 'vue';
import VueRouter from 'vue-router';
import PageTimeline from '../components/pages/PageTimeline.vue';
import PageUserLogin from '../components/pages/PageUserLogin.vue';
import PageUserRegister from '../components/pages/PageUserRegister.vue';
import PageMiropostDetail from '../components/pages/PageMicropostDetail.vue';
import PageProfile from '../components/pages/PageProfile.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'timeline',
    component: PageTimeline,
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
  {
    path: '/microposts',
    component: PageTimeline,
  },
  {
    path: '/microposts/:id',
    name: 'micropost-detail',
    component: PageMiropostDetail,
  },
  {
    path: '/profile',
    name: 'my-profile',
    component: PageProfile,
  },
  {
    path: '/users/:id',
    name: 'user-profile',
    component: PageProfile,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
