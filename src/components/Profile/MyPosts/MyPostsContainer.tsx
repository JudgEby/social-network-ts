import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'
import { RootStateType } from '../../../redux/redux-store'
import { Dispatch } from 'redux'

type MapDispatchToPropsType = {
  updateNewPostText: (text: string) => void
  addPost: () => void
}

const mapStateToProps = (state: RootStateType) => {
  return {
    posts: state.profilePage.posts,
    postTextareaValue: state.profilePage.postTextareaValue,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    updateNewPostText: (text: string) => {
      dispatch(updateNewPostTextActionCreator(text))
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
