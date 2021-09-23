import React from 'react'
import s from './MyPosts.module.css'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import Post from './Post/Post'
import { maxLength, requiredField } from '../../../utils/validators/validators'
import { TextArea } from '../../common/FormControls/FormControls'

type MyPostsPT = {
	posts: { id: string; message: string; likesCount: number }[]
	addPost: (text: string) => void
}

const MyPosts = ({ posts, addPost }: MyPostsPT) => {
	console.log('render')

	const postsElements = posts.map(post => (
		<Post key={post.id} message={post.message} likesCount={post.likesCount} />
	))

	// const onAddPost = () => {
	// 	if (postTextareaValue) {
	// 		updateNewPostText(postTextareaValue.trim()) //убираем пробелы в начале и конце
	// 		addPost()
	// 	}
	// }

	// const onAddPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
	// 	updateNewPostText(event.currentTarget.value)
	// }

	const onSubmit = ({ newPostText }: FormDataType) => {
		if (newPostText) {
			addPost(newPostText.trim())
		}
	}

	return (
		<div>
			<h3>My Posts</h3>
			<div>
				<AddNewPostFormRedux onSubmit={onSubmit} />
			</div>
			<div>
				<div>{postsElements}</div>
			</div>
		</div>
	)
}

type FormDataType = {
	newPostText: string
}

//validation
const maxLength10 = maxLength(10)

const AddNewPostForm = (props: InjectedFormProps<FormDataType>) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field
				component={TextArea}
				name={'newPostText'}
				placeholder={'enter your message'}
				validate={[requiredField, maxLength10]}
			/>
			<button>Add Post</button>
		</form>
	)
}
const AddNewPostFormRedux = reduxForm<FormDataType>({
	form: 'ProfileAddNewPostForm',
})(AddNewPostForm)

export default MyPosts
