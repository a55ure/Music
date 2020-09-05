import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/iview.js'
import '@/assets/font/RHRM.css'
import '@/assets/font/A.css'
import 'iview/dist/styles/iview.css'
import './plugins/element.js'
import axios from 'axios'
import Vueaxios from 'vue-axios'

Vue.use(Vueaxios, axios)
Vue.prototype.$axios = axios

axios.defaults.baseURL = 'http://39.98.144.206:3300'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
