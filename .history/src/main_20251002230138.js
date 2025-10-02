import './index.css'

import { createApp } from 'vue'
import App from './App.vue'


let app = createApp(App)

setConfig('resourceFetcher', frappeRequest)

app.use(resourcesPlugin)


app.mount('#app')
