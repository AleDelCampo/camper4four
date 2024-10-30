import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import TripShow from './components/TripShow.vue';

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
    path: '/trips/:id',
    name: 'TripShow',
    component: TripShow,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
