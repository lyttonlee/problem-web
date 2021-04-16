import {
  request
} from './request'
import {
  BugQueryInterface
} from '../interface/requestInterface'

export const queryReports = (params: BugQueryInterface) => {
  return request.get('/api/query/report/bug', {
    params
  })
}
