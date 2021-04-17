import {
  request
} from './request'
import {
  BugQueryInterface,
  ReportResponseType
} from '../interface/requestInterface'

export const queryReports = (params: BugQueryInterface): Promise<ReportResponseType> => {
  return request.get('/api/query/report/bug', {
    params
  })
}
