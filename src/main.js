import { createApp } from 'vue'
import App from './App.vue'
import config from './config.js'
import router from './router/index.js'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.config.globalProperties.$cdnurl = config.cdnurl
app.mount('#app')