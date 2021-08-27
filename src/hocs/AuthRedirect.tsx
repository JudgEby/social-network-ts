import React, { ComponentType } from 'react'
import { useSelector } from 'react-redux'
import { RootStateType } from '../redux/redux-store'
import { Redirect } from 'react-router-dom'

//в compose использовать первой !!!

function withAuthRedirect<T>(Component: ComponentType<T>) {
	return (props: {}) => {
		const isAuth = useSelector((state: RootStateType) => state.auth.isAuth)

		if (!isAuth) {
			return <Redirect to={'/login'} />
		}
		return <Component {...(props as T)} />
	}
}

export default withAuthRedirect
