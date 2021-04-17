import { UserType, BugQueryInterface, ReportType } from './../interface/requestInterface'
import {
  createStore,
  Store,
  useStore as baseUseStore
} from 'vuex'
import {
  InjectionKey
} from 'vue'
import { userLogin } from '../api/login'
import { LoginParam } from '../interface/requestInterface'
import { SET_USER, SET_TOKEN, SET_REPORTS } from './types/type'
import router from '../router'
import { ElNotification } from 'element-plus'
import { queryReports } from '../api/report'

export interface State {
  token: string | null,
  user: UserType | null,
  reports: ReportType[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    user: {
      id: null,
      username: ''
    } || JSON.parse(localStorage.getItem('user') || ''),
    token: '' || localStorage.getItem('token'),
    reports: []
  },
  mutations: {
    SET_USER (state, user) {
      localStorage.setItem('user', JSON.stringify(user))
      state.user = user
    },
    SET_TOKEN (state, token) {
      localStorage.setItem('token', token)
      state.token = token
    },
    SET_REPORTS (state, reports) {
      state.reports = reports
    }
  },
  actions: {
    async login ({ commit }, param: LoginParam) {
      const { code, result, desc } = await userLogin(param)
      if (code === 0) {
        // console.log(result)
        // console.log(desc)
        commit(SET_USER, result.user)
        commit(SET_TOKEN, result.token)
        router.push('/')
      } else {
        ElNotification({
          type: 'error',
          message: desc
        })
      }
    },
    async getReports ({ commit }, params: BugQueryInterface) {
      const { code, result, desc } = await queryReports(params)
      // return new Promise()
      if (code === 0) {
        commit(SET_REPORTS, result)
      } else {
        ElNotification({
          type: 'error',
          message: desc
        })
      }
    }
  }
})

// define your own `useStore` composition function
export function useStore () {
  return baseUseStore(key)
}
