import Vue from 'vue'
import Vuex from 'vuex'
import system from './modules/system'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    system
  },
  state: {
    staticUrl: 'https://static-data.eol.cn/upload/logo/'
  },
  mutations: {
    
  },
  actions: {

  },
  getters: {

  }
})
