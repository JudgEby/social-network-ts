import { addPostActionCreator } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'
import { RootStateType } from '../../../redux/redux-store'
import { Dispatch } from 'redux'

type MapDispatchToPropsType = {
	addPost: (text: string) => void
}

const mapStateToProps = (state: RootStateType) => {
	return {
		posts: state.profilePage.posts,
	}
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
	return {
		addPost: (text: string) => {
			dispatch(addPostActionCreator(text))
		},
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
