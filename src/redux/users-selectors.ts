import { RootStateType } from './redux-store'

export const getUsers = (state: RootStateType) => state.usersPage.users
export const getPageSize = (state: RootStateType) => state.usersPage.pageSize
export const getTotalUsersCount = (state: RootStateType) =>
	state.usersPage.totalUsersCount
export const getCurrentPage = (state: RootStateType) =>
	state.usersPage.currentPage
export const getIsFetching = (state: RootStateType) =>
	state.usersPage.isFetching
export const getFollowingInProgress = (state: RootStateType) =>
	state.usersPage.followingInProgress
