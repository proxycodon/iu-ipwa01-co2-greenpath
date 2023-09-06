import { createApp } from 'vue';
import router from '../router/routes';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import '@/assets/styles/globalStyles.css';

createApp(App).use(router).mount("#app");
