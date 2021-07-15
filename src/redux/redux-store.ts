import { combineReducers, createStore } from 'redux'
import {
  AddPostActionType,
  ProfilePageType,
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
  SetUsersActionType,
  UnfollowActionType,
  UsersPageType,
} from './users-reducer'

export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  usersPage: UsersPageType
}

export type ActionsType =
  | AddPostActionType
  | UpdateNewPostTextActionType
  | UpdateNewMessageBodyActionType
  | SendMessageActionType
  | FollowActionType
  | UnfollowActionType
  | SetUsersActionType

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
})

const store = createStore(rootReducer)

export default store
