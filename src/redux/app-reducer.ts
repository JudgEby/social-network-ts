import { authAPI } from '../api/api'
import { AppThunk } from './redux-store'
import { stopSubmit } from 'redux-form'
import { getAuthUserData } from './auth-reducer'

//types
export type AppActionsType = ReturnType<typeof initializedSuccess>

export type AuthType = {
	initialized: boolean
}

const initialState: AuthType = {
	initialized: false,
}

const appReducer = (
	state: AuthType = initialState,
	action: AppActionsType
): AuthType => {
	switch (action.type) {
		case 'APP/SET_INITIALIZED_SUCCESS': {
			return { ...state, initialized: true }
		}
		default:
			return state
	}
}

//action creators
export const initializedSuccess = () =>
	({ type: 'APP/SET_INITIALIZED_SUCCESS' } as const)
//thunks
export const initializeApp = (): AppThunk => async dispatch => {
	try {
		await Promise.all([dispatch(getAuthUserData())])
		dispatch(initializedSuccess())
	} catch (e) {}
}

export default appReducer
