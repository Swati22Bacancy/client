import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from './views/LoginForm.vue';
import AboutData from './views/About.vue';
import UserProfile from './views/Profile.vue';

const routes = [
  { path: '/', name: 'login',component: LoginForm },
  { path: '/about', name: 'about',component: AboutData },
  { path: '/profile', name: 'profile',meta: { requiresAuth: true },component: UserProfile },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !localStorage.getItem('token')) {
    next('/');
  } else {
    next();
  }
});

export default router;