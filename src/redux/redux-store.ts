import { combineReducers, createStore } from 'redux'
import {
  AddPostActionType,
  ProfilePageType,
  SetUserProfileType,
  UpdateNewPostTextActionType,
} from './profile-reducer'
import profileReducer from './profile-reducer'
import dialogsReducer, {
  DialogsPageType,
  SendMessageActionType,
  UpdateNewMessageBodyActionType,
} from './dialogs-reducer'
import usersReducer, {
  FollowActionType,
  SetCurrentPageType,
  SetTotalUsersCountType,
  SetUsersActionType,
  ToggleIsFetchingAT,
  UnfollowActionType,
  UsersPageType,
} from './users-reducer'
import authReducer, {
  AuthSetIsAuthActionType,
  AuthSetUserDataActionType,
  AuthType,
} from './auth-reducer'

export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  usersPage: UsersPageType
  auth: AuthType
}

export type ActionsType =
  | AddPostActionType
  | UpdateNewPostTextActionType
  | UpdateNewMessageBodyActionType
  | SendMessageActionType
  | FollowActionType
  | UnfollowActionType
  | SetUsersActionType
  | SetCurrentPageType
  | SetTotalUsersCountType
  | ToggleIsFetchingAT
  | SetUserProfileType
  | AuthSetUserDataActionType
  | AuthSetIsAuthActionType

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
})

const store = createStore(rootReducer)
//@ts-ignore
window.store = store

export default store
