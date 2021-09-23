import { usersAPI } from '../api/api'
import { AppThunk } from './redux-store'

//types
export type UsersPageType = {
	users: UserType[]
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
	followingInProgress: string[]
}

export type UserType = {
	name: string
	id: string
	photos: {
		small: 'string'
		large: 'string'
	}
	status: string
	followed: boolean
}

export type UsersActionsType =
	| ReturnType<typeof follow>
	| ReturnType<typeof unfollow>
	| ReturnType<typeof setUsers>
	| ReturnType<typeof setCurrentPage>
	| ReturnType<typeof setTotalUsersCount>
	| ReturnType<typeof toggleIsFetching>
	| ReturnType<typeof toggleFollowingInProgress>

const initialState: UsersPageType = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [],
}

const usersReducer = (
	state: UsersPageType = initialState,
	action: UsersActionsType
): UsersPageType => {
	switch (action.type) {
		case 'USERS/FOLLOW':
			return {
				...state,
				users: state.users.map(u =>
					u.id === action.payload ? { ...u, followed: true } : u
				),
			}
		case 'USERS/UNFOLLOW':
			return {
				...state,
				users: state.users.map(u =>
					u.id === action.payload ? { ...u, followed: false } : u
				),
			}
		case 'USERS/SET_USERS':
			return {
				...state,
				users: [...action.payload],
			}
		case 'USERS/SET_CURRENT_PAGE':
			return {
				...state,
				currentPage: action.payload,
			}
		case 'USERS/SET_TOTAL_USERS_COUNT':
			return { ...state, totalUsersCount: action.payload }
		case 'USERS/TOGGLE_IS_FETCHING':
			return { ...state, isFetching: action.payload }
		case 'USERS/TOGGLE_IS_FOLLOWING_PROGRESS': {
			return {
				...state,
				followingInProgress: action.payload.isFollowing
					? [...state.followingInProgress, action.payload.userId]
					: state.followingInProgress.filter(
							id => id !== action.payload.userId
					  ),
			}
		}
		default:
			return state
	}
}

//action creators
export const follow = (payload: string) =>
	({ type: 'USERS/FOLLOW', payload: payload } as const)
export const unfollow = (payload: string) =>
	({ type: 'USERS/UNFOLLOW', payload: payload } as const)
export const setUsers = (payload: UserType[]) =>
	({ type: 'USERS/SET_USERS', payload: payload } as const)
export const setCurrentPage = (payload: number) =>
	({ type: 'USERS/SET_CURRENT_PAGE', payload } as const)
export const setTotalUsersCount = (payload: number) =>
	({ type: 'USERS/SET_TOTAL_USERS_COUNT', payload } as const)
export const toggleIsFetching = (payload: boolean) =>
	({ type: 'USERS/TOGGLE_IS_FETCHING', payload } as const)
export const toggleFollowingInProgress = (payload: {
	userId: string
	isFollowing: boolean
}) => ({ type: 'USERS/TOGGLE_IS_FOLLOWING_PROGRESS', payload } as const)

//thunks
export const requestUsers =
	(currentPage: number, pageSize: number): AppThunk =>
	async dispatch => {
		try {
			dispatch(setCurrentPage(currentPage))
			dispatch(toggleIsFetching(true))

			const data = await usersAPI.getUsers(currentPage, pageSize)
			dispatch(setUsers(data.items))
			dispatch(setTotalUsersCount(data.totalCount))
			dispatch(toggleIsFetching(false))
		} catch (e) {}
	}
export const followUser =
	(userId: string): AppThunk =>
	async dispatch => {
		try {
			dispatch(
				toggleFollowingInProgress({ userId: userId, isFollowing: true })
			)
			const resultCode = await usersAPI.follow(userId)
			if (resultCode === 0) {
				dispatch(follow(userId))
			}
			dispatch(
				toggleFollowingInProgress({ userId: userId, isFollowing: false })
			)
		} catch (e) {}
	}
export const unfollowUser =
	(userId: string): AppThunk =>
	async dispatch => {
		try {
			dispatch(
				toggleFollowingInProgress({ userId: userId, isFollowing: true })
			)
			const resultCode = await usersAPI.unfollow(userId)
			if (resultCode === 0) {
				dispatch(unfollow(userId))
			}
			dispatch(
				toggleFollowingInProgress({ userId: userId, isFollowing: false })
			)
		} catch (e) {}
	}

export default usersReducer
