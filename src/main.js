import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import axiosInstance from './plugins/axiosInstance';

const app = createApp(App)
app.config.globalProperties.$http = axiosInstance;
app.use(router); 
app.mount('#app')