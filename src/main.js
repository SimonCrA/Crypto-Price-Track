import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import Chart from 'chart.js'
import { VueSpinners } from '@saeris/vue-spinners'

import { dollarFilter, percentFilter } from '@/filter'

import '@/assets/css/tailwind.css'
import VueChartkick from 'vue-chartkick'

Vue.use(VueSpinners)
Vue.use(VueChartkick.use(Chart))
Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
