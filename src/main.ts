import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Element from 'element-plus'

// css
import 'element-plus/lib/theme-chalk/index.css'
import './style/global/common.less'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(Element)

app.mount('#app')
