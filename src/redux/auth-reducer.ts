import { authAPI } from '../api/api'
import { AppThunk } from './redux-store'
import { stopSubmit } from 'redux-form'

//types
export type AuthActionsType =
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
	action: AuthActionsType
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
	id: number | null
	login: string | null
	email: string | null
}) => ({ type: 'AUTH_ACTIONS_TYPES/SET_USER_DATA', payload } as const)
export const setIsAuth = (isAuth: boolean) =>
	({ type: 'AUTH_ACTIONS_TYPES/SET_IS_AUTH', payload: isAuth } as const)

//thunks
export const getAuthUserData = (): AppThunk => async dispatch => {
	try {
		const response = await authAPI.getMe()
		if (response.data.resultCode === 0) {
			dispatch(setAuthUserData(response.data.data))
			dispatch(setIsAuth(true))
		} else {
			dispatch(setIsAuth(false))
		}
	} catch (e) {}

	// return authAPI.getMe().then(response => {
	// 	if (response.data.resultCode === 0) {
	// 		dispatch(setAuthUserData(response.data.data))
	// 		dispatch(setIsAuth(true))
	// 	} else {
	// 		dispatch(setIsAuth(false))
	// 	}
	// })
}
export const login =
	(
		email: string,
		password: string,
		rememberMe?: boolean,
		captcha?: boolean
	): AppThunk =>
	async dispatch => {
		try {
			const response = await authAPI.login(
				email,
				password,
				rememberMe,
				captcha
			)
			if (response.data.resultCode === 0) {
				dispatch(getAuthUserData())
			}
			if (response.data.resultCode === 1) {
				dispatch(
					stopSubmit('login', {
						_error: 'Email or password are wrong',
					})
				)
			}
			if (response.data.resultCode === 10) {
				dispatch(
					stopSubmit('login', {
						_error: 'Captcha error',
					})
				)
			}
		} catch (e) {}
	}

export const logout = (): AppThunk => async dispatch => {
	try {
		const response = await authAPI.logout()
		if (response.data.resultCode === 0) {
			dispatch(setAuthUserData({ id: null, login: null, email: null }))
			dispatch(setIsAuth(false))
		}
	} catch (e) {}
}

export default authReducer
