import { createApp } from 'vue'
import router from './router/routes'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)

app.use(router).mount('#app')
