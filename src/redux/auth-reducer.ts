import { ActionsType } from './redux-store'

//constants

export enum AUTH_ACTIONS_TYPES {
  SET_USER_DATA = 'AUTH/SET_USER_DATA',
  SET_IS_AUTH = 'AUTH/SET_IS_AUTH',
}

//types
export type AuthType = {
  id: null | number
  login: null | string
  email: null | string
  isAuth: boolean
}

const initialState: AuthType = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
}

const authReducer = (
  state: AuthType = initialState,
  action: ActionsType
): AuthType => {
  switch (action.type) {
    case AUTH_ACTIONS_TYPES.SET_USER_DATA: {
      return { ...state, ...action.payload }
    }
    case AUTH_ACTIONS_TYPES.SET_IS_AUTH: {
      return { ...state, isAuth: action.payload }
    }
    default:
      return state
  }
}

//action creators

export type AuthSetUserDataActionType = {
  type: AUTH_ACTIONS_TYPES.SET_USER_DATA
  payload: {
    id: number
    login: string
    email: string
  }
}

export const setAuthUserData = (payload: {
  id: number
  login: string
  email: string
}): AuthSetUserDataActionType => {
  return { type: AUTH_ACTIONS_TYPES.SET_USER_DATA, payload }
}

export type AuthSetIsAuthActionType = {
  type: AUTH_ACTIONS_TYPES.SET_IS_AUTH
  payload: boolean
}

export const setIsAuth = (isAuth: boolean): AuthSetIsAuthActionType => {
  return { type: AUTH_ACTIONS_TYPES.SET_IS_AUTH, payload: isAuth }
}

export default authReducer
