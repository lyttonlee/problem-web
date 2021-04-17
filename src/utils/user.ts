import { UserType } from './../interface/requestInterface';
export const getUserFromStorge = (): UserType => {
  return JSON.parse(localStorage.getItem('user') || '') as unknown as UserType
}
