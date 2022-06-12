import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

const app = createApp(App)
app.use(router) //安装插件  vue-router

app.mount('#app')