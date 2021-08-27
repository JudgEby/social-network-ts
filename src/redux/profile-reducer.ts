import { v1 } from 'uuid'
import { Dispatch } from 'redux'
import { profileAPI } from '../api/api'

export type ProfilePageType = {
	posts: PostType[]
	postTextareaValue: string
	userProfile: UserProfileType
	status: string
}

export type PostType = {
	id: string
	message: string
	likesCount: number
}

type ActionsType =
	| ReturnType<typeof setUserStatus>
	| ReturnType<typeof addPostActionCreator>
	| ReturnType<typeof updateNewPostTextActionCreator>
	| ReturnType<typeof setUserProfile>

export type UserProfileType = {
	aboutMe: string
	contacts: {
		facebook: string
		website: string
		vk: string
		twitter: string
		instagram: string
		youtube: string
		github: string
		mainLink: string
	}
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	userId: string
	photos: { small: string; large: string }
}

const initialState: ProfilePageType = {
	posts: [
		{ id: v1(), message: 'Hi! How are you?', likesCount: 15 },
		{ id: v1(), message: 'Hello! All is good!', likesCount: 10 },
	],
	userProfile: {
		aboutMe: '',
		contacts: {
			facebook: '',
			website: '',
			vk: '',
			twitter: '',
			instagram: '',
			youtube: '',
			github: '',
			mainLink: '',
		},
		lookingForAJob: false,
		lookingForAJobDescription: '',
		fullName: '',
		userId: '',
		photos: { small: '', large: '' },
	},
	postTextareaValue: '',
	status: '',
}

const profileReducer = (
	state: ProfilePageType = initialState,
	action: ActionsType
): ProfilePageType => {
	switch (action.type) {
		case 'PROFILE_PAGE_ACTIONS_TYPE/ADD_POST':
			const newPost = {
				id: v1(),
				message: state.postTextareaValue,
				likesCount: 0,
			}
			return {
				...state,
				posts: [...state.posts, newPost],
				postTextareaValue: '',
			}
		case 'PROFILE_PAGE_ACTIONS_TYPE/UPDATE_NEW_POST_TEXT':
			return { ...state, postTextareaValue: action.payload }
		case 'PROFILE_PAGE_ACTIONS_TYPE/SET_USER_PROFILE':
			return {
				...state,
				userProfile: { ...state.userProfile, ...action.payload },
			}
		case 'PROFILE_PAGE_ACTIONS_TYPE/SET_USER_STATUS':
			return {
				...state,
				status: action.status,
			}
		default:
			return state
	}
}

//action creators
export const addPostActionCreator = () =>
	({ type: 'PROFILE_PAGE_ACTIONS_TYPE/ADD_POST' } as const)
export const updateNewPostTextActionCreator = (payload: string) =>
	({
		type: 'PROFILE_PAGE_ACTIONS_TYPE/UPDATE_NEW_POST_TEXT',
		payload,
	} as const)
export const setUserProfile = (payload: UserProfileType) =>
	({
		type: 'PROFILE_PAGE_ACTIONS_TYPE/SET_USER_PROFILE',
		payload,
	} as const)
export const setUserStatus = (status: string) =>
	({ type: 'PROFILE_PAGE_ACTIONS_TYPE/SET_USER_STATUS', status } as const)

//thunks

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
	profileAPI
		.getProfile(userId)
		.then((profile) => dispatch(setUserProfile(profile)))
}

export const getUserStatus = (userId: string) => (dispatch: Dispatch) => {
	profileAPI.getStatus(userId).then((res) => {
		dispatch(setUserStatus(res))
	})
}

export const updateUserStatus = (status: string) => (dispatch: Dispatch) => {
	profileAPI.updateStatus(status).then(() => {
		dispatch(setUserStatus(status))
	})
}

export default profileReducer
