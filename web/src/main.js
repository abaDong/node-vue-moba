import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './assets/scss/style.scss'
import './assets/iconfont/iconfont.css'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import Card from './components/Card.vue';
Vue.component('m-card', Card)

import ListCard from './components/ListCard.vue';
Vue.component('m-list-card', ListCard)

import axios from 'axios'
Vue.prototype.$http = axios.create({
    // baseURL: "http://localhost:3000/web/api"
    baseURL: process.env.VUE_APP_API_URL || '/web/api'
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')