import { applyMiddleware, combineReducers, createStore } from 'redux'
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
	ToggleIsFollowingInProgressAT,
	UnfollowActionType,
	UsersPageType,
} from './users-reducer'
import authReducer from './auth-reducer'
import thunkMiddleware from 'redux-thunk'

export type ActionsType =
	| UpdateNewMessageBodyActionType
	| SendMessageActionType
	| FollowActionType
	| UnfollowActionType
	| SetUsersActionType
	| SetCurrentPageType
	| SetTotalUsersCountType
	| ToggleIsFetchingAT
	| ToggleIsFollowingInProgressAT

const rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	auth: authReducer,
})

export type RootStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
//@ts-ignore
window.store = store

export default store
