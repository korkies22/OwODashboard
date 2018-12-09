import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    isLogged: true
  },
  getters: {
    isLogged: state => {
      return state.isLogged
    }
  },
  mutations: {

  },
  actions: {

  }
})
