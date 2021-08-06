import { v1 } from 'uuid'
import { ActionsType } from './redux-store'

//constants

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

//types

export type UsersPageType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
}

export type UserType = {
  name: string
  id: string
  photos: {
    small: 'string'
    large: 'string'
  }
  status: string
  followed: boolean
}

export type FollowActionType = {
  type: typeof FOLLOW
  payload: string
}

export type UnfollowActionType = {
  type: typeof UNFOLLOW
  payload: string
}

export type SetUsersActionType = {
  type: typeof SET_USERS
  payload: UserType[]
}

export type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE
  payload: number
}

export type SetTotalUsersCountType = {
  type: typeof SET_TOTAL_USERS_COUNT
  payload: number
}

export type ToggleIsFetchingAT = {
  type: typeof TOGGLE_IS_FETCHING
  payload: boolean
}

const initialState: UsersPageType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
}

const usersReducer = (
  state: UsersPageType = initialState,
  action: ActionsType
): UsersPageType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload ? { ...u, followed: true } : u
        ),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload ? { ...u, followed: false } : u
        ),
      }
    case SET_USERS:
      return {
        ...state,
        users: [...action.payload],
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      }
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.payload }
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.payload }
    default:
      return state
  }
}

//action creators
export const follow = (payload: string): FollowActionType => {
  return { type: FOLLOW, payload: payload }
}
export const unfollow = (payload: string): UnfollowActionType => {
  return { type: UNFOLLOW, payload: payload }
}

export const setUsers = (payload: UserType[]): SetUsersActionType => {
  return { type: SET_USERS, payload: payload }
}

export const setCurrentPage = (payload: number): SetCurrentPageType => {
  return { type: SET_CURRENT_PAGE, payload }
}

export const setTotalUsersCount = (payload: number): SetTotalUsersCountType => {
  return { type: SET_TOTAL_USERS_COUNT, payload }
}

export const toggleIsFetching = (payload: boolean) => {
  return { type: TOGGLE_IS_FETCHING, payload }
}

// export const updateNewPostTextActionCreator = (
//   payload: string
// ): UpdateNewPostTextActionType => {
//   return { type: UPDATE_NEW_POST_TEXT, payload: payload }
// }

export default usersReducer
