import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/border.css'
import '@/assets/css/reset.css'
import '@/assets/js/common.js'
import '@/assets/js/fastclick.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
