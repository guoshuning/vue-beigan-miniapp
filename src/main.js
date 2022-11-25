import Vue from 'vue'
import App from './App'
import store from './store/'
// import VueQriously from 'vue-qriously'
Vue.config.productionTip = false

Vue.prototype.$store = store
// Vue.use(VueQriously)
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
