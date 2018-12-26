import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as api from './api/api'
import axios from 'axios'

axios.defaults.withCredentials=true;

Vue.prototype.$api=api

Vue.use(api);

Vue.prototype.$axios =axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
