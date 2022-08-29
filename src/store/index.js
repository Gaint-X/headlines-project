import Vue from "vue"
import Vuex from "vuex"
import { loginAPI } from "@/api/user"
import { Toast } from "vant" //this is not a vue,should be import
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
  actions: {
    async login(ctx, info) {
      try {
        const res = await loginAPI(info)

        ctx.commit("changeToken", res.data)
        Toast.success("登录成功")
      } catch {
        Toast.fail("验证码错误！")
      }
    },
  },
  modules: {},
})
