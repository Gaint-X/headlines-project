import Vue from "vue"
import Vuex from "vuex"
import { loginAPI } from "@/api/user"
import { Toast } from "vant"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tokenObj: {},
  },
  getters: {},
  mutations: {
    changeToken(state, obj) {
      state.tokenObj = obj
    },
  },
  actions: {},
  modules: {},
})
