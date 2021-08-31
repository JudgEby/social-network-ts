import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { login } from '../../redux/auth-reducer'
import { RootStateType } from '../../redux/redux-store'
import { Input } from '../common/FormControls/FormControls'
import {
	email,
	maxLength,
	requiredField,
} from '../../utils/validators/validators'
import { Redirect } from 'react-router-dom'
import styles from './Login.module.css'

const Login = () => {
	const dispatch = useDispatch()
	const isAuth: boolean = useSelector(
		(state: RootStateType) => state.auth.isAuth
	)

	const onSubmit = ({ email, password, rememberMe }: FormDataType) => {
		dispatch(login(email, password, rememberMe))
	}

	if (isAuth) {
		return <Redirect to={'/profile'} />
	}

	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}

type FormDataType = {
	email: string
	password: string
	rememberMe: boolean
}

const maxLength32 = maxLength(32)

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div
				className={`${styles.emailAndPassWrapper} ${
					props.error && styles.summaryError
				}`}
			>
				<div>
					<label>
						<Field
							component={Input}
							name={'email'}
							placeholder={'email'}
							type={'email'}
							validate={[email, requiredField]}
						/>
						email
					</label>
				</div>
				<div>
					<label>
						<Field
							component={Input}
							name={'password'}
							type={'password'}
							placeholder={'password'}
							validate={[maxLength32, requiredField]}
						/>
						password
					</label>
				</div>
				{props.error && <div style={{ color: 'red' }}>{props.error}</div>}
			</div>
			<div>
				<label>
					<Field component={Input} name={'rememberMe'} type='checkbox' />
					remember me
				</label>
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm<FormDataType>({ form: 'login' })(LoginForm)

export default Login
