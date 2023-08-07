import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from './views/LoginForm.vue';
import AboutData from './views/About.vue';

const routes = [
  { path: '/', name: 'login',component: LoginForm },
  { path: '/about', name: 'about',component: AboutData },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;