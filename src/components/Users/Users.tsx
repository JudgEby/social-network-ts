import React from 'react'
import styles from './Users.module.css'
import { UserType } from '../../redux/users-reducer'
import Paginator from '../common/Paginator/Paginator'
import User from './User'

type UsersType = {
	users: UserType[]
	pageSize: number
	totalUsersCount: number
	currentPage: number
	onPageClick: (page: number) => void
	followingInProgress: string[]
	followUser: (userId: string) => void
	unfollowUser: (userId: string) => void
}

const Users = React.memo((props: UsersType) => {
	const {
		users,
		pageSize,
		totalUsersCount,
		currentPage,
		onPageClick,
		followingInProgress,
		followUser,
		unfollowUser,
	} = props

	const allUsers = users.map(u => (
		<User
			key={u.id}
			user={u}
			followingInProgress={followingInProgress}
			followUser={followUser}
			unfollowUser={unfollowUser}
		/>
	))

	return (
		<div>
			<Paginator
				currentPage={currentPage}
				pageSize={pageSize}
				totalItemsCount={totalUsersCount}
				onPageClick={onPageClick}
			/>
			<div>{allUsers}</div>
		</div>
	)
})

export default Users
