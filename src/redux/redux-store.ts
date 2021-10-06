import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import profileReducer, { ProfileActionsType } from './profile-reducer'
import dialogsReducer, { DialogsActionsType } from './dialogs-reducer'
import usersReducer, { UsersActionsType } from './users-reducer'
import authReducer, { AuthActionsType } from './auth-reducer'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer, { AppActionsType } from './app-reducer'

export type RootReducersActionsType =
	| AuthActionsType
	| DialogsActionsType
	| UsersActionsType
	| ProfileActionsType
	| AppActionsType

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootStateType,
	unknown,
	RootReducersActionsType
>

const rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	auth: authReducer,
	app: appReducer,
	form: formReducer,
})

export type RootStateType = ReturnType<typeof rootReducer>
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunkMiddleware))
)
// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
//@ts-ignore
window.__store__ = store

export default store
