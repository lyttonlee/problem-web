import {
  createStore
} from 'vuex'

const store = createStore({
  state: {
    test: 1
  },
  mutations: {
    setTest (state, value: number) {
      state.test = state.test + value
    }
  },
  actions: {}
})

export default store
