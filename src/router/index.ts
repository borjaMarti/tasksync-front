import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/home-view.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // Borja: Lazy loading the route.
      component: () => import('../views/dashboard-view.vue'),
    },
    {
      path: '/tasker',
      name: 'tasker',
      // Borja: Lazy loading the route.
      component: () => import('../views/tasker-view.vue'),
    },
  ],
});

export default router;
