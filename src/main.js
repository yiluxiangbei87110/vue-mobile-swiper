import Vue from 'vue'
import App from './App.vue'


import Swiper from './vue-swiper/index.js'

Vue.use(Swiper);

new Vue({
  el: '#app',
  render: h => h(App)
})