import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from '../../redux/dialogs-reducer'
import { compose, Dispatch } from 'redux'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { RootStateType } from '../../redux/redux-store'
import withAuthRedirect from '../../hocs/AuthRedirect'
import React from 'react'

type MapDispatchToPropsType = {
  updateNewMessageBody: (text: string) => void
  sendMessage: () => void
}

const mapStateToProps = (state: RootStateType) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageBody: state.dialogsPage.newMessageBody,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    updateNewMessageBody: (text: string) => {
      dispatch(updateNewMessageBodyActionCreator(text))
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator())
    },
  }
}

export default compose<React.ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)
