import {createApp} from 'vue'
import {createHead} from '@vueuse/head'
import Vue3PersianDatetimePicker from 'vue3-persian-datetime-picker'
import App from './App.vue'

// App.component('DatePicker', Vue3PersianDatetimePicker)
import router from './router'
import store from './store'

window.axios = require('axios')
window.$ = window.jQuery = require('jquery');
const head = createHead()
createApp(App)
    .use(store)
    .use(router)
    .use(head)
    .use(Vue3PersianDatetimePicker, {
        name: 'CustomDatePicker',
        props: {
            format: 'YYYY-MM-DD HH:mm',
            displayFormat: 'jYYYY-jMM-jDD',
            editable: false,
            inputClass: 'form-control persian_date_picker_input',
            placeholder: 'لطفا تاریخ را انتخاب کنید',
            altFormat: 'YYYY-MM-DD HH:mm',
            color: '#F7941D',
            autoSubmit: false,
            //...
            //... And whatever you want to set as default.
            //...
        }
    })
    .mount('#app')
