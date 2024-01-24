import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueI18n from 'vue-i18n';
import i18n from './i18n'
// import bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import primevue 
import PrimeVue from 'primevue/config';
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primevue/resources/primevue.min.css";

import ToastService from "primevue/toastservice";


// import pagination
import Paginate from "vuejs-paginate-next";

// otp 
import VOtpInput from "vue3-otp-input";

// google map 
import VueGoogleMaps from '@fawmi/vue-google-maps'

// import fontawesome
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far, fab);
dom.watch();


import '@/assets/scss/style.scss'


// import axios
import axios from 'axios';
axios.defaults.baseURL = 'https://dev.dras-sa.com/api/v1/';
// axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');   
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.lang = 'ar'



createApp(App)
    .use(store)
    .use(router)
    .use(i18n)
    .use(VueI18n)
    .use(FontAwesomeIcon)
    .use(PrimeVue, { ripple: true })
    .use(ToastService)
    .use(Paginate)
    .component('v-otp-input', VOtpInput)
    .use(VueGoogleMaps, {
        load: {
            key: 'AIzaSyBNLoYGrbnQI_GMqHt6m0PSN9yA7Zvq7gA',
            libraries: "places"
    
        },
    })
    .mount('#app')
