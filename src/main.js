import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
// import VueAxios from 'vue-axios';
// import Vue from 'vue'

// import VueRouter from 'vue-router';
// Vue.use(VueRouter);

// Vue.use(axios);

createApp(App).use(router, axios).mount('#app')

// export const axios = ax