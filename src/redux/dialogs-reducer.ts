import { v1 } from 'uuid'

export type DialogsPageType = {
	dialogs: DialogType[]
	messages: MessageType[]
}

export type DialogType = {
	id: string
	name: string
}

export type MessageType = {
	id: string
	message: string
}

export type DialogsActionsType = ReturnType<typeof sendMessageActionCreator>

const initialState: DialogsPageType = {
	dialogs: [
		{ id: v1(), name: 'Yan' },
		{ id: v1(), name: 'Los' },
		{ id: v1(), name: 'Nadya' },
		{ id: v1(), name: 'Zhenya' },
		{ id: v1(), name: 'Mama' },
	],
	messages: [
		{ id: v1(), message: 'Hi' },
		{ id: v1(), message: 'London is a capital of Great Britain' },
		{ id: v1(), message: 'Hello! Yo!' },
	],
}

const dialogsReducer = (
	state: DialogsPageType = initialState,
	action: DialogsActionsType
): DialogsPageType => {
	switch (action.type) {
		case 'DIALOGS/SEND_MESSAGE':
			const newMessage = {
				id: v1(),
				message: action.newMessageBody,
			}
			return {
				...state,
				messages: [...state.messages, newMessage],
			}

		default:
			return state
	}
}

//action creators
export const sendMessageActionCreator = (newMessageBody: string) =>
	({ type: 'DIALOGS/SEND_MESSAGE', newMessageBody } as const)

export default dialogsReducer
