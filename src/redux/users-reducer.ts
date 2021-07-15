import { v1 } from 'uuid'
import { ActionsType } from './redux-store'

//constants
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

//types

export type UsersPageType = {
  users: UserType[]
}

export type UserType = {
  id: string
  photoUrl: string
  fullName: string
  status: string
  location: { city: string; country: string }
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

const initialState: UsersPageType = {
  users: [],
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
        users: [...state.users, ...action.payload],
      }
    default:
      return state
  }
}

//action creators
export const followAC = (payload: string): FollowActionType => {
  return { type: FOLLOW, payload: payload }
}
export const unfollowAC = (payload: string): UnfollowActionType => {
  return { type: UNFOLLOW, payload: payload }
}

export const setUsersAC = (payload: UserType[]): SetUsersActionType => {
  return { type: SET_USERS, payload: payload }
}

// export const updateNewPostTextActionCreator = (
//   payload: string
// ): UpdateNewPostTextActionType => {
//   return { type: UPDATE_NEW_POST_TEXT, payload: payload }
// }

export default usersReducer
