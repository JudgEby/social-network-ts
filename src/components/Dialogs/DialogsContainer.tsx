import { sendMessageActionCreator } from '../../redux/dialogs-reducer'
import { compose, Dispatch } from 'redux'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { RootStateType } from '../../redux/redux-store'
import withAuthRedirect from '../../hocs/AuthRedirect'
import React from 'react'

type MapDispatchToPropsType = {
	sendMessage: (text: string) => void
}

const mapStateToProps = (state: RootStateType) => {
	return {
		dialogs: state.dialogsPage.dialogs,
		messages: state.dialogsPage.messages,
	}
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
	return {
		sendMessage: (text: string) => {
			dispatch(sendMessageActionCreator(text))
		},
	}
}

export default compose<React.ComponentType>(
	withAuthRedirect,
	connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)
