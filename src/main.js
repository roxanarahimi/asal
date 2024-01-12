import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
window.axios = require('axios')
window.$ = window.jQuery = require('jquery');

createApp(App).use(store).use(router).mount('#app')
