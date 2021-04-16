import {
  request
} from './request'
import {
  LoginParam,
  ResponseType
} from '../interface/requestInterface'

export const userLogin = (param: LoginParam): Promise<ResponseType> => {
  return request.post('/api/login', param)
}
