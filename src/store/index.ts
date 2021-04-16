import {
  createStore
} from 'vuex'
import { userLogin } from '../api/login'
import { LoginParam } from '../interface/requestInterface'
import { SET_USER } from './types/type'

const store = createStore({
  state: {
    user: {},
    token: ''
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user
    }
  },
  actions: {
    async login ({ commit }, param: LoginParam) {
      const { code, result, desc } = await userLogin(param)
      if (code === 0) {
        console.log(result)
        console.log(desc)
        commit(SET_USER, result)
      }
    }
  }
})

export default store
