// created by lytton
export interface Pagination {
  pageSize: number,
  currentPage: number,
  total?: number
}
export interface BugQueryInterface {
  projectId: number,
  type?: number,
  startTime?: number,
  endTime?: number,
  dim?: string,
  pagination?: Pagination
}

export interface LoginParam {
  username: string,
  password: string
}
export interface UserType {
  id: number | null,
  avatar?: string,
  username: string | null,
  password?: string,
  nickname?: string,
  reginTimestamp?: number
}

export interface ReportType {
  id?: number,
  type: string,
  projectId: number,
  detail?: string,
  message?: string,
  timestamp: number,
  extra?: string,
  pagePath?: string,
  pageName?: string,
  clientHost: string,
  brower: string
}

export interface BaseResponseType {
  code: number,
  desc: string
}

export interface LoginResult {
  user: UserType,
  token: string
}

export interface LoginResponseType extends BaseResponseType {
  result: LoginResult
}

export interface ReportResponseType extends BaseResponseType {
  result: ReportType[]
}
