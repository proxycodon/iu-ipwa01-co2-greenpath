import { createApp } from 'vue';
import DOMPurify from "dompurify";
import router from '../router/routes';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const app = createApp(App);

// Define a global method for sanitizing HTML
app.config.globalProperties.$sanitize = html => DOMPurify.sanitize(html);

app.use(router).mount("#app");
