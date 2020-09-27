import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './plugins/iview.js'
import './plugins/element.js'
import './plugins/material.js'

import '@/assets/font/RHRM.css'
import '@/assets/font/A.css'
import 'iview/dist/styles/iview.css'
import 'vue-material/dist/vue-material.css'
import '@/assets/material.css'

import axios from 'axios'
import Vueaxios from 'vue-axios'
import VueMaterial from 'vue-material'
import store from './store'

Vue.use(VueMaterial)
Vue.use(Vueaxios, axios)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
