import { Dispatch } from 'redux'
import { authAPI } from '../api/api'

//types
type ActionsType =
	| ReturnType<typeof setAuthUserData>
	| ReturnType<typeof setIsAuth>

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
	isAuth: true,
}

const authReducer = (
	state: AuthType = initialState,
	action: ActionsType
): AuthType => {
	switch (action.type) {
		case 'AUTH_ACTIONS_TYPES/SET_USER_DATA': {
			return { ...state, ...action.payload }
		}
		case 'AUTH_ACTIONS_TYPES/SET_IS_AUTH': {
			return { ...state, isAuth: action.payload }
		}
		default:
			return state
	}
}

//action creators
export const setAuthUserData = (payload: {
	id: number
	login: string
	email: string
}) => ({ type: 'AUTH_ACTIONS_TYPES/SET_USER_DATA', payload } as const)
export const setIsAuth = (isAuth: boolean) =>
	({ type: 'AUTH_ACTIONS_TYPES/SET_IS_AUTH', payload: isAuth } as const)

//thunks
export const getAuthUserData = () => (dispatch: Dispatch<ActionsType>) => {
	authAPI.getMe().then((response) => {
		if (response.data.resultCode === 0) {
			dispatch(setAuthUserData(response.data.data))
			dispatch(setIsAuth(true))
		} else {
			dispatch(setIsAuth(false))
		}
	})
}

export default authReducer
