import { createStore } from 'vuex'

interface State {
  isIos: boolean
}

export default createStore({
  state: <State>{
    isIos: false
  },
  mutations: {
    SET_IS_IOS: (state, val: boolean) => {
      state.isIos = val
    }
  },
  getters: {},
  actions: {
    setIsIos({ commit }, val: boolean) {
      commit('SET_IS_IOS', val)
    }
  },
  modules: {}
})
