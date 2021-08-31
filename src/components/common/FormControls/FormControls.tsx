import React from 'react'
import styles from './FormControls.module.css'
import { WrappedFieldProps } from 'redux-form'

type CustomProps = {
	placeholder: string
}

type FormControlType = {
	children: React.ReactNode
	touched: boolean
	error: undefined | string
	warning: undefined | string
}

const FormControl = (props: FormControlType) => {
	const { touched, error, warning } = props

	const errorOrWarningMessage = error || warning
	const hasError = touched && errorOrWarningMessage

	return (
		<div className={`${styles.formControl} ${hasError && styles.error}`}>
			<div>{props.children}</div>
			{hasError && <span>{errorOrWarningMessage}</span>}
		</div>
	)
}

export const TextArea = (props: WrappedFieldProps & CustomProps) => {
	const {
		input,
		meta: { touched, error, warning },
		...restProps
	} = props
	return (
		<FormControl touched={touched} error={error} warning={warning}>
			<textarea {...input} {...restProps} />
		</FormControl>
	)

	// const {
	// 	input,
	// 	meta: { touched, error, warning },
	// 	...restProps
	// } = props
	//
	// const errorOrWarningMessage = error || warning
	// const hasError = touched && errorOrWarningMessage
	//
	// return (
	// 	<div className={`${styles.formControl} ${hasError && styles.error}`}>
	// 		<div>
	// 			<textarea {...input} {...restProps} />
	// 		</div>
	// 		{hasError && <span>{errorOrWarningMessage}</span>}
	// 	</div>
	// )
}

export const Input = (props: WrappedFieldProps & CustomProps) => {
	const {
		input,
		meta: { touched, error, warning },
		...restProps
	} = props
	return (
		<FormControl touched={touched} error={error} warning={warning}>
			<input {...input} {...restProps} />
		</FormControl>
	)
}
