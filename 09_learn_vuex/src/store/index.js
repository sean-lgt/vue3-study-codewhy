import { createStore } from "vuex"

const store = createStore({
  state() {
    return {
      rootCounter: 100
    }
  },
  getters: {
    doubleRootCounter(state) {
      return state.rootCounter * 2
    }
  },
  mutations: {
    increment(state) {
      state.rootCounter++
    },
    decrement(state) {
      state.rootCounter--
    }
  },
});

export default store;