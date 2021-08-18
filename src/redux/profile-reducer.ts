import { v1 } from 'uuid'
import { ActionsType } from './redux-store'
import { Dispatch } from 'redux'
import { usersAPI } from '../api/api'

export type ProfilePageType = {
  posts: PostType[]
  postTextareaValue: string
  userProfile: UserProfileType
}

export type PostType = {
  id: string
  message: string
  likesCount: number
}

export type UserProfileType = {
  aboutMe: string
  contacts: {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
  }
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  userId: string
  photos: { small: string; large: string }
}

const initialState: ProfilePageType = {
  posts: [
    { id: v1(), message: 'Hi! How are you?', likesCount: 15 },
    { id: v1(), message: 'Hello! All is good!', likesCount: 10 },
  ],
  userProfile: {
    aboutMe: '',
    contacts: {
      facebook: '',
      website: '',
      vk: '',
      twitter: '',
      instagram: '',
      youtube: '',
      github: '',
      mainLink: '',
    },
    lookingForAJob: false,
    lookingForAJobDescription: '',
    fullName: '',
    userId: '',
    photos: { small: '', large: '' },
  },
  postTextareaValue: '',
}

export enum PROFILE_PAGE_ACTIONS_TYPE {
  UPDATE_NEW_POST_TEXT = 'PROFILE_PAGE/UPDATE_NEW_POST_TEXT',
  ADD_POST = 'PROFILE_PAGE/ADD_POST',
  SET_USER_PROFILE = 'PROFILE_PAGE/SET_USER_PROFILE',
}

// const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
// const ADD_POST = 'ADD_POST'
// const SET_USER_PROFILE = 'SET_USER_PROFILE'

const profileReducer = (
  state: ProfilePageType = initialState,
  action: ActionsType
): ProfilePageType => {
  switch (action.type) {
    case PROFILE_PAGE_ACTIONS_TYPE.ADD_POST:
      const newPost = {
        id: v1(),
        message: state.postTextareaValue,
        likesCount: 0,
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        postTextareaValue: '',
      }
    case PROFILE_PAGE_ACTIONS_TYPE.UPDATE_NEW_POST_TEXT:
      return { ...state, postTextareaValue: action.payload }
    case PROFILE_PAGE_ACTIONS_TYPE.SET_USER_PROFILE:
      return { ...state, userProfile: { ...action.payload } }
    default:
      return state
  }
}

//action creators

export type AddPostActionType = {
  type: typeof PROFILE_PAGE_ACTIONS_TYPE.ADD_POST
}

export const addPostActionCreator = (): AddPostActionType => {
  return { type: PROFILE_PAGE_ACTIONS_TYPE.ADD_POST }
}

export type UpdateNewPostTextActionType = {
  type: PROFILE_PAGE_ACTIONS_TYPE.UPDATE_NEW_POST_TEXT
  payload: string
}

export const updateNewPostTextActionCreator = (
  payload: string
): UpdateNewPostTextActionType => {
  return {
    type: PROFILE_PAGE_ACTIONS_TYPE.UPDATE_NEW_POST_TEXT,
    payload,
  }
}

export type SetUserProfileType = {
  type: PROFILE_PAGE_ACTIONS_TYPE.SET_USER_PROFILE
  payload: UserProfileType
}

export const setUserProfile = (
  payload: UserProfileType
): SetUserProfileType => {
  return { type: PROFILE_PAGE_ACTIONS_TYPE.SET_USER_PROFILE, payload }
}

export const getUserProfile =
  (userId: string) => (dispatch: Dispatch<ActionsType>) => {
    usersAPI
      .getProfile(userId)
      .then((profile) => dispatch(setUserProfile(profile)))
  }

export default profileReducer
