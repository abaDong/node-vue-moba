import axios from 'axios'
import Vue from 'vue'
const http = axios.create({
    baseURL: "http://localhost:3000/admin/api"
})

http.interceptors.response.use(res => {
    // Do something with response data

    return res;
}, err => {
    // Do something with response error
    if (err.response.data.message) {
        Vue.prototype.$message({
            type: 'error',
            message: err.response.data.message
        })
    }
    return Promise.reject(err);
});

export default http