import { connect } from 'react-redux'
import {
	followUser,
	requestUsers,
	setCurrentPage,
	unfollowUser,
	UserType,
} from '../../redux/users-reducer'
import { RootStateType } from '../../redux/redux-store'
import React from 'react'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { compose } from 'redux'
import {
	getCurrentPage,
	getFollowingInProgress,
	getIsFetching,
	getPageSize,
	getTotalUsersCount,
	getUsers,
} from '../../redux/users-selectors'

type UsersContainerType = {
	users: UserType[]
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
	followingInProgress: string[]
	setCurrentPage: (page: number) => void
	requestUsers: (currentPage: number, pageSize: number) => void
	followUser: (userId: string) => void
	unfollowUser: (userId: string) => void
}

class UsersContainer extends React.Component<UsersContainerType> {
	componentDidMount = () => {
		this.props.requestUsers(this.props.currentPage, this.props.pageSize)
	}

	componentWillUnmount() {
		this.props.setCurrentPage(1)
	}

	onPageClick = (page: number) => {
		this.props.requestUsers(page, this.props.pageSize)
	}

	render = () => {
		return (
			<>
				{this.props.isFetching ? (
					<Preloader />
				) : (
					<Users
						users={this.props.users}
						pageSize={this.props.pageSize}
						totalUsersCount={this.props.totalUsersCount}
						currentPage={this.props.currentPage}
						onPageClick={this.onPageClick}
						followingInProgress={this.props.followingInProgress}
						followUser={this.props.followUser}
						unfollowUser={this.props.unfollowUser}
					/>
				)}
			</>
		)
	}
}

// const mapStateToProps = (state: RootStateType) => {
// 	return {
// 		users: state.usersPage.users,
// 		pageSize: state.usersPage.pageSize,
// 		totalUsersCount: state.usersPage.totalUsersCount,
// 		currentPage: state.usersPage.currentPage,
// 		isFetching: state.usersPage.isFetching,
// 		followingInProgress: state.usersPage.followingInProgress,
// 	}
// }
const mapStateToProps = (state: RootStateType) => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
	}
}

export default compose<React.ComponentType>(
	connect(mapStateToProps, {
		setCurrentPage,
		requestUsers,
		followUser,
		unfollowUser,
	})
)(UsersContainer)
