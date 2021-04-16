// created by lytton
export interface BugQueryInterface {
  id: number,
  type?: number,
  startTime?: number,
  endTime?: number,
  currentPage?: number,
  pageSize?: number,
  dim?: string
}

export interface LoginParam {
  username: string,
  password: string
}

export interface UserType {
  id: number,
  avatar?: string,
  username: string,
  password?: string,
  nickname?: string,
  reginTimestamp?: number
}

export interface ResponseType {
  code: number,
  desc: string,
  result: Object | any[] | null
}
