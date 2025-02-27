import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import './style.css'
Vue.config.productionTip = false

import http from './http'
Vue.prototype.$http = http

Vue.mixin({
    computed: {
        uploadURL() {
            return this.$http.defaults.baseURL + '/upload'
        }
    },
    methods: {
        getToken() {
            console.log('object :', localStorage.token);
            return {
                Authorization: `Bearer ${localStorage.token||''}`
            }
        }
    }
})
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')