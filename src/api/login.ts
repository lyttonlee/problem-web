import {
  request
} from './request'
import {
  LoginParam,
  LoginResponseType
} from '../interface/requestInterface'

export const userLogin = (param: LoginParam): Promise<LoginResponseType> => {
  return request.post('/api/login', param)
}
