import './index.css'

import { createApp } from 'vue'
import App from './App.vue'


let app = createApp(App)


app.use(resourcesPlugin)


app.mount('#app')
