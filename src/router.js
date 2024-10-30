import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/pages/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/',
    name: '/trips/:id',
    component: TripShow,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
