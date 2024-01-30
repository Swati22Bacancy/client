import { createApp } from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router';
import axiosInstance from './plugins/axiosInstance';

loadFonts()
const app = createApp(App)
app.use(vuetify)
app.config.globalProperties.$http = axiosInstance;
app.use(router); 
app.mount('#app')
