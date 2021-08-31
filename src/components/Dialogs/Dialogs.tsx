import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { TextArea } from '../common/FormControls/FormControls'
import { maxLength, requiredField } from '../../utils/validators/validators'

type DialogsPT = {
	updateNewMessageBody: (text: string) => void
	newMessageBody: string
	sendMessage: (text: string) => void
	dialogs: DialogsFromPropsPT[]
	messages: MessagesPT[]
	isAuth: boolean
}

type DialogsFromPropsPT = {
	id: number | string
	name: string
}

type MessagesPT = {
	id: number | string
	message: string
}

const Dialogs = React.memo(({ sendMessage, dialogs, messages }: DialogsPT) => {
	const dialogsElements = dialogs.map((dialog) => (
		<DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
	))

	const messagesElements = messages.map((message) => (
		<Message key={message.id} message={message.message} id={message.id} />
	))

	const onSubmit = (values: FormDataType) => {
		sendMessage(values.newMessageBody)
	}

	const a = 23
	const b = false
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>{dialogsElements}</div>
			<div>
				<div className={s.messages}>{messagesElements}</div>
				<AddMessageFormRedux onSubmit={onSubmit} />
				<div className={s.test}>{`Lox ${b && a + 3}`}</div>
			</div>
		</div>
	)
})

type FormDataType = {
	newMessageBody: string
}
//validation
const maxLength100 = maxLength(100)

const AddMessageForm = (props: InjectedFormProps<FormDataType>) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field
				component={TextArea}
				name={'newMessageBody'}
				placeholder={'enter your message'}
				validate={[requiredField, maxLength100]}
			/>
			<div>
				<button>Send message</button>
			</div>
		</form>
	)
}
const AddMessageFormRedux = reduxForm<FormDataType>({
	form: 'dialogsAddMessageForm',
})(AddMessageForm)

export default Dialogs
