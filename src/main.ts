import { createApp } from 'vue'

import DashboardLayout from './components/common/DashboardLayout.vue'
import EmptyLayout from './components/common/EmptyLayout.vue'
import './assets/tailwind.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.component('default-layout', DashboardLayout)
app.component('empty-layout', EmptyLayout)
app.use(VueSweetalert2);
app.use(createPinia())
app.use(router).mount('#app')

