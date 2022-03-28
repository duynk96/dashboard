import Cookies from 'js-cookie'

// App
const sidebarStatusKey = 'sidebar_status'
export const getSidebarStatus = () => Cookies.get(sidebarStatusKey)
export const setSidebarStatus = (sidebarStatus: string) => Cookies.set(sidebarStatusKey, sidebarStatus)

// User
const tokenKey = 'access_token'
export const getToken = () => Cookies.get(tokenKey)
export const setToken = (token: string) => Cookies.set(tokenKey, token)
export const removeToken = () => Cookies.remove(tokenKey)

const refreshTokenKey = 'refresh_token'
export const getRefreshToken = () => Cookies.get(refreshTokenKey)
export const setRefreshToken = (refeshToken: string) => Cookies.set(refreshTokenKey, refeshToken)
export const removeRefreshToken = () => Cookies.remove(refreshTokenKey)

const teamKey = 'access_team'
export const getTeam = () => (Cookies.get(teamKey) ? Cookies.get(teamKey) : '{}')
export const setTeam = (team: any) => Cookies.set(teamKey, team)
export const removeTeam = () => Cookies.remove(teamKey)

const permissionKey = 'access_permission'
export const getPermission = () => (Cookies.get(permissionKey) ? Cookies.get(permissionKey) : '{}')
export const setPermission = (permission: any) => Cookies.set(permissionKey, permission)
export const removePermission = () => Cookies.remove(permissionKey)

const username = 'username'
export const getUserName = () => Cookies.get(username)
export const setUserName = (userName: string) => Cookies.set(username, userName)
export const removeUserName = () => Cookies.remove(username)

const idKey = 'user_id'
export const getId = () => Cookies.get(idKey)
export const setId = (Id: string) => Cookies.set(idKey, Id)
export const removeId = () => Cookies.remove(idKey)
