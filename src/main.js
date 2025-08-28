import { createApp } from 'vue'
import { createHead } from '@vueuse/head'

import App from './App.vue'
import router from './router'
import store from './store'
window.axios = require('axios')
window.$ = window.jQuery = require('jquery');
const head = createHead()
createApp(App)
    .use(store)
    .use(router)
    .use(head)
    .mount('#app')
